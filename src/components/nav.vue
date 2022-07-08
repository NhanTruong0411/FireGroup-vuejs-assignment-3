<template>
   <div class="secondary-dasboard">
      <div class="secondary-dasboard__show">
         <!-- BARS -->
         <div class="secondary-dasboard__show--bars">
            <img src="../assets/images/dashboard/bars.png" alt="bars">
         </div>
         <!-- INFO -->
         <div class="secondary-dasboard__show--user-info">
            <div class="left">
               <img src="../assets/images/dashboard/brand-avatar.png" alt="brand avatar">
               <h3>Lotusprayer</h3>
               <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.6"
                     d="M8.77734 0.433594L8.64062 0.296875C8.54297 0.199219 8.40625 0.199219 8.30859 0.296875L4.5 4.10547L0.671875 0.296875C0.574219 0.199219 0.4375 0.199219 0.339844 0.296875L0.203125 0.433594C0.105469 0.53125 0.105469 0.667969 0.203125 0.765625L4.32422 4.88672C4.42188 4.98438 4.55859 4.98438 4.65625 4.88672L8.77734 0.765625C8.875 0.667969 8.875 0.53125 8.77734 0.433594Z"
                     fill="#828282" />
               </svg>
            </div>
            <div class="right">
               <img src="../assets/images/dashboard/user-avatar.png" alt="user avatar">
            </div>

         </div>
      </div>

      <div class="container">
         <div class="secondary-dasboard__action">
            <div class="secondary-dasboard__action--h4">
               <h4>Store</h4>
            </div>
            <div class="secondary-dasboard__action--add">
               <button class="btn btn-primary">
                  <svg width="11" height="15" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M10.7812 5.09375H6.40625V0.71875C6.40625 0.609375 6.29688 0.5 6.1875 0.5H5.3125C5.17578 0.5 5.09375 0.609375 5.09375 0.71875V5.09375H0.71875C0.582031 5.09375 0.5 5.20312 0.5 5.3125V6.1875C0.5 6.32422 0.582031 6.40625 0.71875 6.40625H5.09375V10.7812C5.09375 10.918 5.17578 11 5.3125 11H6.1875C6.29688 11 6.40625 10.918 6.40625 10.7812V6.40625H10.7812C10.8906 6.40625 11 6.32422 11 6.1875V5.3125C11 5.20312 10.8906 5.09375 10.7812 5.09375Z"
                        fill="white" />
                  </svg>
                  <h3>Add new store</h3>
               </button>
            </div>
         </div>
      </div>
   </div>

</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '../styles/scss/main.scss';

.secondary-dasboard {


   &__show {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #F3F3F3;
      background: #ffffff;

      &--bars {
         display: flex;
         justify-content: center;
         align-items: center;
         cursor: pointer;

         img {
            padding-left: 20px;
         }
      }

      &--user-info {
         display: flex;
         cursor: pointer;

         .left {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            padding: 6px 18px 8px 13px;
            border-left: 1px solid #F3F3F3;
            border-right: 1px solid #F3F3F3;
            cursor: pointer;
         }

         .right {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 9px 17px;
         }
      }
   }

   &__action {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &--h4 {
         h4 {
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            color: #252627;
         }
      }

      &--add {
         button {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            padding: 12px 15px;
         }
      }
   }
}
</style>