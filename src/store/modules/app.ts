import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import { isUseDefaultValue } from "@/utils";

import store from '../index';

export interface IAppState {
  _isCollapse: boolean;
  _fixedHeader: boolean;
  _isShowSettingDrawer: boolean;
  _userAvatarImageUrl: string;
}

@Module({ name: 'app', dynamic: true, store })
export default class App extends VuexModule implements IAppState {

  _isCollapse: boolean = isUseDefaultValue('_isCollapse', true);

  _fixedHeader: boolean = isUseDefaultValue('_fixedHeader');

  _fixedSidebarLogo: boolean = isUseDefaultValue('_fixedSidebarLogo');

  _isShowSettingDrawer: boolean = isUseDefaultValue('_isShowSettingDrawer');

  _userAvatarImageUrl: string = "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80";

  get isCollapse(): boolean {
    return this._isCollapse;
  }

  get fixedHeader(): boolean {
    return this._fixedHeader;
  }

  get fixedSidebarLogo(): boolean {
    return this._fixedSidebarLogo;
  }

  get isShowSettingDrawer(): boolean {
    return this._isShowSettingDrawer;
  }

  get userAvatarImageUrl() {
    return this._userAvatarImageUrl;
  }

  @Mutation
  Is_Collapse_Sidebar() {
    this._isCollapse = !this._isCollapse;
    window.sessionStorage.setItem('_isCollapse',JSON.stringify(this._isCollapse))
  }

  @Mutation
  Is_Fixed_Header() {
    this._fixedHeader = !this._fixedHeader;
    window.sessionStorage.setItem('_fixedHeader',JSON.stringify(this._fixedHeader))
  }

  @Mutation
  Is_Fixed_Sidebar_Logo() {
    this._fixedSidebarLogo = !this._fixedSidebarLogo;
    window.sessionStorage.setItem('_fixedSidebarLogo',JSON.stringify(this._fixedSidebarLogo))
  }

  @Mutation
  Is_Show_Setting_Drawer() {
    this._isShowSettingDrawer = !this._isShowSettingDrawer;
    window.sessionStorage.setItem('_isShowSettingDrawer',JSON.stringify(this._isShowSettingDrawer))
  }

  @Mutation
  Update_Avatar_ImageUrl(imageUrl: string) {
    this._userAvatarImageUrl = imageUrl;
  }
}

export const AppStore = getModule(App)
