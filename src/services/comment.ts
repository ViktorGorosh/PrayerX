import axios from 'axios';
import {CARD_API_ENDPOINT} from './card';
import {
  AddCommentResponseData,
  Comment,
  CommentAddInfo,
  CommentUpdateInfo,
  DeleteCommentResponseData,
} from '../interfaces/comment';

const COMMENT_API_ENDPOINT = '/comments';

export async function getCommentsService(): Promise<Comment[]> {
  const response = await axios.get(COMMENT_API_ENDPOINT);
  return response.data;
}

export async function getCommentByIdService(
  id: Comment['id'],
): Promise<Comment> {
  const response = await axios.get(`${COMMENT_API_ENDPOINT}/${id}`);
  return response.data;
}

export async function addCommentService({
  cardId,
  created,
  body,
}: CommentAddInfo): Promise<AddCommentResponseData> {
  const response = await axios.post(
    `${CARD_API_ENDPOINT}/${cardId}${COMMENT_API_ENDPOINT}`,
    {
      body,
      created,
    },
  );
  return response.data;
}

export async function deleteCommentService(
  id: Comment['id'],
): Promise<DeleteCommentResponseData> {
  const response = await axios.delete(`${COMMENT_API_ENDPOINT}/${id}`);
  return response.data;
}

export async function updateCommentService(
  changes: CommentUpdateInfo,
): Promise<Comment> {
  const response = await axios.put(
    `${COMMENT_API_ENDPOINT}/${changes.id}`,
    changes,
  );
  return response.data;
}
