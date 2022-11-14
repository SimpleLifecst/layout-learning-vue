import request from "@/utils/request";
import { Api, UserInfo } from "./login"

export class RequestApi implements Api{
  async login(userinfo: UserInfo): Promise<any> {
    return (await request({
      url: "/user/login",
      method: "POST",
      data: userinfo
    })).data
  }

  async getUserInfo(): Promise<any> {
    return (await request({
      url: "/get-info",
      method: "GET",
    }))
  }
}
