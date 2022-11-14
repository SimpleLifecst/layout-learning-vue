export interface UserInfo {
  username: string,
  password: string
}

export interface Api {
  login: (userinfo: UserInfo) => Promise<any>;
  getUserInfo: () => Promise<any>;
}
