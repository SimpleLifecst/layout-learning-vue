<template>
  <div class="logo">
    <transition name="sidebarLogoFade">
      <div v-if="isCollapse" key="hidden" class="logo-hidden">
        <img :src="logoUrl" alt="logo" class="image"/>
      </div>
      <div v-else key="showing" class="logo-show">
        <img :src="logoUrl" class="image">
        <span class="title" >技术论坛</span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppStore } from "@/store/modules/app";
const logo = require('@/assets/avatar.jpg');

@Component({
  components: {}
})
export default class Logo extends Vue {

  logoUrl = logo;

  get isCollapse() {
    return AppStore.isCollapse;
  }

  get classObj() {
    return {
      'logo-hidden': this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.logo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: $logoBg;
  color: #fff;
}

.title {
  font-weight: 600;
  font-family: "新宋体"
}

.image {
  height: 35px;
  border-radius: 3px;
}

.logo-show {
  display: flex;
  align-items: center;
  position: relative;

  span {
    padding: 0 10px;
  }
}



</style>
