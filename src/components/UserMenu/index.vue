<template>
  <div class="avatar">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <el-avatar shape="square" size="medium" :src="userAvatarImageUrl"/>
        <i class="el-icon-arrow-down el-icon--right"/>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="handleLogout">登出</el-dropdown-item>
        <el-dropdown-item @click.native="handleOpenSetting">设置</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SettingDrawer from '@/components/SettingDrawer/index.vue';
import { AppStore } from "@/store/modules/app";
import { removeToken } from "@/utils/auth";

@Component({
  components: { SettingDrawer }
})
export default class extends Vue {

  get userAvatarImageUrl() {
    return AppStore.userAvatarImageUrl;
  }

  handleOpenSetting() {
    AppStore.Is_Show_Setting_Drawer();
  }

  handleLogout() {
    removeToken();
    this.$router.push('/login')
  }
}
</script>

<style scoped lang="scss">
  .el-dropdown-link {
    cursor: pointer;
  }
</style>
