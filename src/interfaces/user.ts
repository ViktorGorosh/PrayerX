export interface User {
  name: string;
  isAuthorized: boolean;
  isLoading: boolean;
  isFailed: boolean;
  error: boolean;
}

export interface UserExtended extends User {
  id: number;
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
  password: UserExtended['password'];
}
