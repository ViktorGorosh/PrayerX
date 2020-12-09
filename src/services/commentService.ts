import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {
  Comment,
  CommentAddInfo,
  AddCommentResponseData,
  CommentUpdateInfo,
  DeleteCommentResponseData,
} from '../interfaces/comment';

const COMMENT_API_ENDPOINT = 'http://trello-purrweb.herokuapp.com/comments';

export async function getCommentsService(): Promise<Comment[]> {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.get(COMMENT_API_ENDPOINT, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return response.data;
}

export async function getCommentByIdService(
  id: Comment['id'],
): Promise<Comment> {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.get(COMMENT_API_ENDPOINT + `/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return response.data;
}

export async function addCommentService(
  comment: CommentAddInfo,
): Promise<AddCommentResponseData> {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.post(COMMENT_API_ENDPOINT, comment, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteCommentService(
  id: Comment['id'],
): Promise<DeleteCommentResponseData> {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.delete(COMMENT_API_ENDPOINT + `/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateCommentService(
  changes: CommentUpdateInfo,
): Promise<Comment> {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.put(
    COMMENT_API_ENDPOINT + `/${changes.id}`,
    changes,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    },
  );
  return response.data;
}
