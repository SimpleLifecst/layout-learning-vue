<template>
  <div class="sidebar">
    <logo v-if="fixedSidebarLogo"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
          :default-active="currentActivePath"
          :collapse="isCollapse"
          :background-color="variables['menuBg']"
          :active-text-color="variables['menuActiveText']"
          :text-color="variables['menuText']"
          router
      >
        <sidebar-item v-for="(route, index) in routes" :item="route" :key="index" :base-path="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import variables from '@/styles/variables.scss';
import { AppStore } from "@/store/modules/app";
import { routes } from "@/router/index";
import { getCurrentActivePath } from "@/utils";
import SidebarItem from "./SidebarItem.vue";
import Logo from "./Logo.vue";

@Component({
  components: { SidebarItem, Logo }
})
export default class extends Vue {

  private currentActivePath: string = this.activePath || "/dashboard";

  @Watch('$route')
  handleRoute() {
    this.currentActivePath = this.$route.path;
  }

  get isCollapse() {
    return AppStore.isCollapse;
  }

  get fixedSidebarLogo() {
    return AppStore.fixedSidebarLogo;
  }

  get variables() {
    return variables;
  }

  get routes() {
    return routes.filter(item => {
      return !item?.meta?.hidden
    })
  }

  get activePath() {
    return getCurrentActivePath()
  }
}
</script>

<style lang="scss">

</style>
