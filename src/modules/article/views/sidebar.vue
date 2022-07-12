<template>
   <div class="my-dashboard">
      <div class="layout">
         <h1>Dashboard Page</h1>
         <h2>hello, {{user.name}}</h2>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   computed: {
      ...mapGetters({
         user: 'auth/getUser',
      })

   }
};
</script>

<style lang="scss" scoped>
.my-dashboard {
   .layout {
      width: 100%;
      height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 100px;
      h1 {
         font-size: 100px;
         font-weight: 700;
      }
      h2 {
         font-size: 80px;
         font-weight: 500;
      }
   }
}
</style>