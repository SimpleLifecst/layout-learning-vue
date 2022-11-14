<template>
  <div class="navbar">
    <breadcrumb/>
    <user-menu/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Breadcrumb from '@/components/Breadcrumb/index.vue';
import UserMenu from '@/components/UserMenu/index.vue';

@Component({
  components: { Breadcrumb, UserMenu }
})
export default class extends Vue {



}
</script>

<style scoped>
  .navbar {
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
  }
</style>
