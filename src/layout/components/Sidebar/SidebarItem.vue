<template>
  <div>
    <el-menu-item :index="resolvePath" v-if="hasOneShowingChild">
      <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"/>
    </el-menu-item>
    <el-submenu v-else :index="resolveBasePath" popper-append-to-body :class="{'submenu-title-noDropdown':!isNest && isCollapse}">
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"/>
      </template>
      <sidebar-item
          v-for="child in item.children"
          :is-nest="true"
          :item="child"
          :key="child.path"
          :base-path="resolveBasePath"/>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { AppStore } from "@/store/modules/app";
import Item from "./Item.vue"
const path = require('path');

@Component({
  name: "sidebarItem",
  components: { Item }
})
export default class sidebarItem extends Vue {

  private itemRoute = null;

  @Prop() item: any

  @Prop() basePath: string | undefined

  @Prop({type: Boolean, default: false}) isNest: boolean | undefined

  created() {
    this.resetItemRoute();
  }

  get isCollapse() {
    return AppStore.isCollapse
  }

  get hasOneShowingChild() {
    return !this.item?.children || this.item.children.length <= 1
  }

  get resolvePath() {
    return path.resolve(this.basePath, this.itemRoute.path)
  }

  get resolveBasePath() {
    return path.resolve(this.basePath, this.item.path)
  }

  resetItemRoute() {
    return this.item.children ? this.itemRoute = this.item.children[0] : this.itemRoute = this.item
  }
}
</script>

<style lang="scss">

</style>
