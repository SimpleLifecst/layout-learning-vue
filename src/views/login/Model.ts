import { UserInfo } from "./login";
import { RequestApi } from "./RequestApi";
import { Message } from "element-ui";
import router from "@/router";

export class Model {
  private _userInfo = <UserInfo>{ username: "admin", password: "admin123" };
  private _requestApi = new RequestApi();

  private _rules = {
    username: [
      { required: true, message: "请输入用户账号", trigger: "blur" },
      { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" },
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" },
    ],
  };

  get requestApi(): RequestApi {
    return this._requestApi;
  }

  get userInfo() {
    return this._userInfo;
  }

  set userInfo(form: UserInfo) {
    this._userInfo = form;
  }

  get rules() {
    return this._rules;
  }

  async submit() {
    // const { status, message, token } = await this.requestApi.login(this.userInfo);

    // if(status === 200) {
    //   window.sessionStorage.setItem("token", `Bearer ${token}`);
    //   Message.success(message);
    //   await router.push("/");
    //   return;
    // }

    // Message.error(message);

    window.sessionStorage.setItem("token", `Bearer test`);
    router.push("/");
  }
}
