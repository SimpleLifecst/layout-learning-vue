<template>
  <div :class="classObj" class="layout">

    <!-- 设置 -->
    <setting-drawer/>

    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <div :class="{'fixed-header': fixedHeader}">
        <navbar/>
      </div>
      <app-main/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Navbar, AppMain, Sidebar } from '@/layout/index';
import SettingDrawer from '@/components/SettingDrawer/index.vue';
import { AppStore } from "@/store/modules/app";

@Component({
  components: {Navbar, AppMain, Sidebar, SettingDrawer}
})
export default class extends Vue {

  get fixedHeader() {
    return AppStore.fixedHeader
  }

  get classObj() {
    return {
      'open-sidebar': !AppStore.isCollapse,
      'hidden-sidebar': AppStore.isCollapse,
    }
  }
}
</script>

<style lang='scss'>
@import "~@/styles/variables.scss";

.hidden-sidebar {
  .sidebar-container {
    width: $sideBarHiddenWidth !important;
  }

  .main-container {
    margin-left: $sideBarHiddenWidth !important;
    width: calc(100% - #{$sideBarHiddenWidth}) !important;
  }
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.fixed-header + .app-main {
  margin-top: 50px;
}

.hidden-sidebar .fixed-header {
  width: calc(100% -  #{$sideBarHiddenWidth});
}
</style>
