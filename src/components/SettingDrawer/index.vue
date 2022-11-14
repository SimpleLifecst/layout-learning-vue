<template>
  <div class="drawer">
    <el-drawer
        title="管理系统设置中心"
        :visible.sync="isShowSettingDrawer"
        :with-header="true"
        :before-close="handleCloseDrawer"
    >
      <div class="container">
        <div class="item">
          <div class="title">固定标题栏</div>
          <el-switch
              :value="fixedHeader"
              :active-color="variables['switchPrimary']"
              inactive-color="#ccc"
              @click.native="handleIsFixedHeader"
          >
          </el-switch>
        </div>

        <div class="item">
          <div class="title">固定侧边栏LOGO</div>
          <el-switch
              :value="fixedSidebarLogo"
              :active-color="variables['switchPrimary']"
              inactive-color="#ccc"
              @click.native="handleIsFixedSidebarLogo"
          >
          </el-switch>
        </div>

        <div class="item">
          <div class="title">更新/上传头像</div>
          <upload-image>
            <el-button size="small" type="primary">点击上传</el-button>
          </upload-image>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppStore } from "@/store/modules/app";
import UploadImage from "@/components/UploadImage/index.vue";
import variables from "@/styles/variables.scss";

@Component({
  components: { UploadImage }
})
export default class extends Vue {

  get isShowSettingDrawer() {
    return AppStore.isShowSettingDrawer;
  }

  get fixedHeader() {
    return AppStore.fixedHeader;
  }

  get fixedSidebarLogo() {
    return AppStore.fixedSidebarLogo;
  }

  get variables() {
    return variables;
  }

  handleIsFixedHeader() {
    AppStore.Is_Fixed_Header();
  }

  handleIsFixedSidebarLogo() {
    AppStore.Is_Fixed_Sidebar_Logo();
  }

  handleCloseDrawer() {
    AppStore.Is_Show_Setting_Drawer();
  }
}
</script>

<style scoped lang="scss">
  .container {
    padding: 0 20px;

    .item {
      display: flex;
      align-items: center;
      margin: 10px 0;

      .title {
        margin-right: 10px;
        color: #5e5d5d;
        width: 50%;
      }
    }
  }
</style>

<style>
  .el-drawer__header:after{
    content: "";
    position: absolute;
    border-bottom: 1px solid #dcdfe6;
    width: calc(100% - 45px) !important;
    top: 55px;
  }
</style>
