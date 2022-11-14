<template>
  <div class="app-main">
    <transition duration="300" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {}
})
export default class extends Vue {
}
</script>

<style lang="scss">
.app-main {
  overflow: hidden;
}
</style>
