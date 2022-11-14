<template>
  <div class="index">
    <h1>树结构</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class index extends Vue {
}
</script>

<style scoped lang="scss">

</style>
