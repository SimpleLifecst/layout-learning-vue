<template>
  <div class="breadcrumb">
    <div>
      <i class="collapse-icon" :class="{ 'el-icon-s-fold': !isCollapse, 'el-icon-s-unfold': isCollapse }" @click="handleCollapse"/>
    </div>
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item,index) in breadcrumbGroup" :key="item.path">
          <span v-if="breadcrumbGroup.length - 1 == index">{{ item.meta.title }}</span>
          <a @click.prevent="handleLink(item)" v-else>{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { AppStore } from "@/store/modules/app";

@Component({
  components: {}
})
export default class extends Vue {

  breadcrumbGroup: Array<any> = [];

  @Watch('$route')
  $routeHandler() {
    this.getBreadcrumb()
  }

  created() {
    this.getBreadcrumb()
  }

  getBreadcrumb() {
    let matched = this.$route.matched.filter(item => item.path)
    const first = matched[0]

    if (!this.isFirst(first)) {
      matched = [{ path: '/dashboard', meta: { title: '仪表仪' }}].concat(matched)
    }

    this.breadcrumbGroup = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
  }

  isFirst(route) {
    const name = route && route.name;
    if(!name) {
      return false;
    }
    return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
  }

  handleCollapse() {
    AppStore.Is_Collapse_Sidebar();
  }

  handleLink(item) {
    const { redirect, path } = item;
    const currentRoutePath = this.$route.path;
    if (currentRoutePath === path || currentRoutePath === redirect) {
      return;
    }

    if(redirect) {
      return this.$router.push(redirect)
    }

    this.$router.push(path)
  }

  get isCollapse() {
    return AppStore.isCollapse;
  }

}
</script>

<style scoped lang="scss">
  .breadcrumb {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .collapse-icon {
    font-size: 25px;
    margin-right: 10px;
    cursor: pointer;
  }
</style>
