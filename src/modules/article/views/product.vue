<template>
   <div class="container">
      <form class="products">
         <div class="products__product products__header">
            <div class="products__product--checkbox">
               <input type="checkbox">
            </div>
            <div class="products__product--product">
               <h3>Product</h3>
            </div>
            <div class="products__product--status">
               <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M12.4535 2.92268C12.4535 2.80597 12.3888 2.76707 12.2918 2.76707C12.2271 2.76707 11.0952 2.72816 11.0952 2.72816C11.0952 2.72816 10.416 1.91122 10.1573 1.6V18.4446L14.2 17.1998C14.2 17.1998 12.4535 3.00048 12.4535 2.92268ZM9.21936 1.6C9.18702 1.40549 9.05765 1.09428 8.99297 0.899765C8.66955 0.121723 8.15208 -0.3062 7.56993 -0.3062C7.53759 -0.3062 7.53759 -0.3062 7.53759 -0.3062C7.50525 -0.3062 7.44056 -0.267298 7.44056 -0.267298C7.40822 -0.3062 7.37588 -0.3062 7.37588 -0.345103C7.11715 -0.695222 6.79373 -0.85083 6.37329 -0.85083C5.59709 -0.811928 4.82088 -0.150592 4.20639 1.05537C3.75361 1.91122 3.43019 2.96158 3.33316 3.77852C2.4276 4.12864 1.8131 4.36205 1.8131 4.36205C1.36032 4.55656 1.32798 4.55656 1.29564 5.06229C1.26329 5.45131 0.0666504 16.4217 0.0666504 16.4217L9.83385 18.4446V1.40549C9.80151 1.40549 9.73682 1.40549 9.70448 1.44439C9.67214 1.44439 9.51043 1.4833 9.21936 1.6ZM7.44056 2.26134C6.9231 2.45585 6.34094 2.68926 5.79114 2.88377C5.95284 2.14463 6.24392 1.40549 6.63202 0.938667C6.76139 0.744157 6.95544 0.549646 7.18183 0.43294C7.40822 0.977569 7.44056 1.75561 7.44056 2.26134ZM6.37329 -0.189494H6.40563C6.535 -0.189494 6.72905 -0.11169 6.85841 -0.0727878C6.63202 0.0828207 6.43797 0.277331 6.24392 0.510744C5.72645 1.13318 5.37069 2.14463 5.20898 3.07828C4.7562 3.27279 4.27107 3.4284 3.85063 3.58401C4.14171 2.10573 5.17664 -0.150592 6.37329 -0.189494ZM4.88557 8.36897C4.91791 9.38043 7.11715 9.57494 7.24651 11.948C7.34354 13.7764 6.43797 15.0601 5.11196 15.1379C3.52721 15.2546 2.68633 14.1654 2.68633 14.1654L3.00975 12.4537C3.00975 12.4537 3.88297 13.2317 4.56215 13.1539C5.01493 13.1539 5.20898 12.6871 5.17664 12.3759C5.11196 11.0532 3.33316 11.131 3.2038 8.99141C3.10677 7.20191 4.10937 5.37351 6.27626 5.179C7.11715 5.1401 7.53759 5.37351 7.53759 5.37351L7.05246 7.62983C7.05246 7.62983 6.50265 7.31861 5.82348 7.35752C4.88557 7.43532 4.85323 8.17446 4.88557 8.36897ZM7.95803 2.06683C7.95803 1.6 7.89335 0.938667 7.73164 0.394038C8.31379 0.510744 8.60487 1.32769 8.73423 1.79451C8.50784 1.87232 8.24911 1.98902 7.95803 2.06683Z"
                     fill="#95BF47" />
               </svg>
               <h3>Status</h3>
            </div>
            <div class="products__product--qty">
               <h3>Quantity</h3>
            </div>
            <div class="products__product--option">
               <h3>Options</h3>
            </div>
            <div class="products__product--profile">
               <h3>Profile</h3>
            </div>
            <div class="products__product--shipping">
               <h3>Shipping</h3>
            </div>
            <div class="products__product--action">
               <h3>Actions</h3>
            </div>
            <div class="products__product--more"></div>
         </div>
         <!-- <div class="products__product"></div> -->
      </form>
   </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '../../../styles/scss/main.scss';

.products {
   background: #FFFFFF;
   border: 1px solid #E5E8EF;
   border-radius: 3px;

   &__header {
      h3 {
         font-weight: 600;
         font-size: 14px;
         line-height: 20px;
         color: #828282;
      }
   }

   &__product {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 31px 0;


      &--checkbox {
         flex: 0 0 4.5%;
         display: flex;
         justify-content: center;
         align-items: center;

         input {
            width: 16px;
            height: 16px;
         }
      }

      &--product {
         flex: 0 0 28%;
      }

      &--status {
         flex: 0 0 8%;
         display: flex;
         justify-content: center;
         align-items: center;
      }

      &--qty {
         flex: 0 0 13%;
      }

      &--option {
         flex: 0 0 8%;
      }

      &--profile {
         flex: 0 0 13%;
      }

      &--shipping {
         flex: 0 0 10%;
      }

      &--action {
         flex: 0 0 10%;
      }

      &--more {
         flex: 0 0 5%;
      }

   }
}
</style>