<template>
   <div class="container">
      <div class="action">
         <div class="action__search">
            <div class="input-group">
               <input class="input" type="text" placeholder="Search product">
               <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M13.8906 13.5742L10.582 10.2656C10.5 10.2109 10.418 10.1562 10.3359 10.1562H9.98047C10.8281 9.17188 11.375 7.85938 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7.10938 12.125 8.39453 11.6055 9.40625 10.7578V11.1133C9.40625 11.1953 9.43359 11.2773 9.48828 11.3594L12.7969 14.668C12.9336 14.8047 13.1523 14.8047 13.2617 14.668L13.8906 14.0391C14.0273 13.9297 14.0273 13.7109 13.8906 13.5742ZM5.6875 10.8125C3.25391 10.8125 1.3125 8.87109 1.3125 6.4375C1.3125 4.03125 3.25391 2.0625 5.6875 2.0625C8.09375 2.0625 10.0625 4.03125 10.0625 6.4375C10.0625 8.87109 8.09375 10.8125 5.6875 10.8125Z"
                     fill="#4F4F4F" />
               </svg>
            </div>
         </div>

         <div class="action__sort-group">
            <!-- Status -->
            <button class="btn btn-sort">
               <h3>Status</h3>
               <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M0.726562 0C0.304688 0 0.09375 0.515625 0.398438 0.820312L3.39844 3.82031C3.58594 4.00781 3.89062 4.00781 4.07812 3.82031L7.07812 0.820312C7.38281 0.515625 7.17188 0 6.75 0H0.726562Z"
                     fill="#4F4F4F" />
               </svg>
            </button>

            <!-- Quantity -->
            <button class="btn btn-sort">
               <h3>Quantity</h3>
               <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M0.726562 0C0.304688 0 0.09375 0.515625 0.398438 0.820312L3.39844 3.82031C3.58594 4.00781 3.89062 4.00781 4.07812 3.82031L7.07812 0.820312C7.38281 0.515625 7.17188 0 6.75 0H0.726562Z"
                     fill="#4F4F4F" />
               </svg>
            </button>

            <!-- Shipping -->
            <button class="btn btn-sort">
               <h3>Shipping</h3>
               <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M0.726562 0C0.304688 0 0.09375 0.515625 0.398438 0.820312L3.39844 3.82031C3.58594 4.00781 3.89062 4.00781 4.07812 3.82031L7.07812 0.820312C7.38281 0.515625 7.17188 0 6.75 0H0.726562Z"
                     fill="#4F4F4F" />
               </svg>
            </button>

            <!-- Profile -->
            <button class="btn btn-sort">
               <h3>Profile</h3>
               <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M0.726562 0C0.304688 0 0.09375 0.515625 0.398438 0.820312L3.39844 3.82031C3.58594 4.00781 3.89062 4.00781 4.07812 3.82031L7.07812 0.820312C7.38281 0.515625 7.17188 0 6.75 0H0.726562Z"
                     fill="#4F4F4F" />
               </svg>
            </button>

            <!-- Ready to push -->
            <button class="btn btn-sort">
               <h3>Ready to push</h3>
               <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M0.726562 0C0.304688 0 0.09375 0.515625 0.398438 0.820312L3.39844 3.82031C3.58594 4.00781 3.89062 4.00781 4.07812 3.82031L7.07812 0.820312C7.38281 0.515625 7.17188 0 6.75 0H0.726562Z"
                     fill="#4F4F4F" />
               </svg>
            </button>
         </div>

         <div class="action__sort-single">
            <button class="btn btn-sort">
               <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M3.50781 0.367188C3.4375 0.320312 3.32031 0.273438 3.25 0.273438C3.15625 0.273438 3.03906 0.320312 2.96875 0.367188L1.09375 2.61719C0.859375 2.85156 1.02344 3.25 1.375 3.25H2.5V10.375C2.5 10.5859 2.66406 10.75 2.875 10.75H3.625C3.8125 10.75 4 10.5859 4 10.375V3.25H5.125C5.45312 3.25 5.61719 2.85156 5.38281 2.61719L3.50781 0.367188ZM12.3438 0.25H7.65625C7.28125 0.25 7 0.554688 7 0.90625V4.84375C7 5.21875 7.28125 5.5 7.65625 5.5H12.3438C12.6953 5.5 13 5.21875 13 4.84375V0.90625C13 0.554688 12.6953 0.25 12.3438 0.25ZM11.0312 7H7.46875C7.1875 7 7 7.21094 7 7.46875V10.2812C7 10.5625 7.1875 10.75 7.46875 10.75H11.0312C11.2891 10.75 11.5 10.5625 11.5 10.2812V7.46875C11.5 7.21094 11.2891 7 11.0312 7Z"
                     fill="#4F4F4F" />
               </svg>
               <h3>Sort</h3>
            </button>
         </div>
      </div>

      <div class="content">

      </div>

   </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '../../../styles/scss/main.scss';

.action {
   display: flex;
   gap: 15px;

   &__search {
      flex: 0 0 40%;
   }

   &__sort-group {
      flex: 0 0 40%;
      display: flex;

      button {
         display: flex;
         gap: 5px;
         height: 40px;
         padding: 12px 13px;
      }

      button:first-child {
         border-radius: 4px 0px 0px 4px;
      }

      button:last-child {
         border-radius: 0px 4px 4px 0px;
         white-space: nowrap;
      }

      button:not(:last-child) {
         border-right: 0;
      }
   }

   &__sort-single {
      button {
         display: flex;
         gap: 5px;
         padding: 12px 15px;
         border-radius: 4px;
      }
   }

}
</style>