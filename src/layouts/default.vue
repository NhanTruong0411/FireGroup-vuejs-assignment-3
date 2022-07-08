<template>
    <div class="block">
      <div class="block__left">
        <!-- MENU LEFT PAGE -->
        <dashboard></dashboard>
      </div>
      <div class="block__right">
        <!-- MENU TOP PAGE -->
        <div class="menutop">
          <menutop></menutop>
        </div>
        <!-- MAIN CONTENT -->
        <div class="main-content">
          <actionbar></actionbar>
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import dashboard from '../components/dashboard.vue';
import menutop from '../components/nav.vue';
import actionbar from '../components/action.vue';


export default {
  components: {
    dashboard,
    menutop,
    actionbar
  }
};
</script>

<style lang="scss" scoped>
  .block {
    display: flex;
    &__left {
      flex: 0 0 15%;
    }
    &__right {
      flex: 0 0 85%;
      background: #F5F5F5;;
    }
}
</style>