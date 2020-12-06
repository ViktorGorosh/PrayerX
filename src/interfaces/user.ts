export interface User {
  name: string;
  id: number;
  isAuthorized: boolean;
  isLoading: boolean;
  isFailed: boolean;
  error: boolean;
}

export interface UserExtended extends User {
  email: string;
  password: string;
}

export interface LoginInfo {
  email: UserExtended['email'];
  password: UserExtended['password'];
}

export interface RegisterInfo {
  name: User['name'];
  email: UserExtended['email'];
  password: UserExtended['password'];}
