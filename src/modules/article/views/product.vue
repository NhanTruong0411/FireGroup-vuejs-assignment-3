<template>
   <div class="container">
      <actionbar></actionbar>
      <form class="products">
         <!-- FORM PRODUCT HEADING -->
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

         <!-- FORM PRODUCT 1 -->
         <div class="products__product">
            <div class="products__product--checkbox">
               <input type="checkbox">
            </div>
            <div class="products__product--product">
               <div class="products__product--product-image">
                  <img src="../../../assets/images/product/product_1.png" alt="product">
               </div>
               <div class="products__product--product-content">
                  <h3>
                     Imwete Anti Blue Light Computer...<br>
                     <small>Shopify ID: 343972834378</small>
                  </h3>
               </div>
            </div>
            <div class="products__product--status active-ul-li">
               <ul>
                  <li>Active</li>
               </ul>
            </div>
            <div class="products__product--qty">
               <h5>2816 <small>in stock for</small></h5>
               <h5>3 <small>variants</small></h5>
            </div>

            <div class="products__product--option ">
               <small>2</small>
            </div>
            <div class="products__product--profile">
               <button class="btn">
                  <h3>Global selling</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--shipping">
               <button class="btn">
                  <h3>Shipping 1</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--action">
               <button class="btn btn-action">
                  <h3>Push to Etsy</h3>
               </button>
            </div>
            <div class="products__product--more">
               <svg width="40" height="40" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.682007" width="31" height="31" rx="3.5" stroke="#E5E8EF" />
                  <path
                     d="M16 14.6195C15.2617 14.6195 14.6875 15.2211 14.6875 15.932C14.6875 16.6703 15.2617 17.2445 16 17.2445C16.7109 17.2445 17.3125 16.6703 17.3125 15.932C17.3125 15.2211 16.7109 14.6195 16 14.6195ZM14.6875 11.7758C14.6875 12.514 15.2617 13.0883 16 13.0883C16.7109 13.0883 17.3125 12.514 17.3125 11.7758C17.3125 11.0648 16.7109 10.4633 16 10.4633C15.2617 10.4633 14.6875 11.0648 14.6875 11.7758ZM14.6875 20.0883C14.6875 20.8265 15.2617 21.4008 16 21.4008C16.7109 21.4008 17.3125 20.8265 17.3125 20.0883C17.3125 19.3773 16.7109 18.7758 16 18.7758C15.2617 18.7758 14.6875 19.3773 14.6875 20.0883Z"
                     fill="#828282" />
               </svg>
            </div>
         </div>

         <!-- FORM PRODUCT 2 -->
         <div class="products__product">
            <div class="products__product--checkbox">
               <input type="checkbox">
            </div>
            <div class="products__product--product">
               <div class="products__product--product-image">
                  <img src="../../../assets/images/product/product_2.png" alt="product">
               </div>
               <div class="products__product--product-content">
                  <h3>
                     Imwete Anti Blue Light Computer...<br>
                     <small>Shopify ID: 343972834378</small>
                  </h3>
               </div>
            </div>
            <div class="products__product--status active-ul-li">
               <ul>
                  <li>Active</li>
               </ul>
            </div>
            <div class="products__product--qty">
               <h5>2816 <small>in stock for</small></h5>
               <h5>3 <small>variants</small></h5>
            </div>

            <div class="products__product--option ">
               <small class="red-underline">3</small>
            </div>
            <div class="products__product--profile">
               <button class="btn">
                  <h3>Global selling</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--shipping">
               <button class="btn">
                  <h3>Shipping 1</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--action">
               <button class="btn btn-action">
                  <h3>Push to Etsy</h3>
               </button>
            </div>
            <div class="products__product--more">
               <svg width="40" height="40" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.682007" width="31" height="31" rx="3.5" stroke="#E5E8EF" />
                  <path
                     d="M16 14.6195C15.2617 14.6195 14.6875 15.2211 14.6875 15.932C14.6875 16.6703 15.2617 17.2445 16 17.2445C16.7109 17.2445 17.3125 16.6703 17.3125 15.932C17.3125 15.2211 16.7109 14.6195 16 14.6195ZM14.6875 11.7758C14.6875 12.514 15.2617 13.0883 16 13.0883C16.7109 13.0883 17.3125 12.514 17.3125 11.7758C17.3125 11.0648 16.7109 10.4633 16 10.4633C15.2617 10.4633 14.6875 11.0648 14.6875 11.7758ZM14.6875 20.0883C14.6875 20.8265 15.2617 21.4008 16 21.4008C16.7109 21.4008 17.3125 20.8265 17.3125 20.0883C17.3125 19.3773 16.7109 18.7758 16 18.7758C15.2617 18.7758 14.6875 19.3773 14.6875 20.0883Z"
                     fill="#828282" />
               </svg>
            </div>
         </div>

         <!-- FORM PRODUCT 3 -->
         <div class="products__product">
            <div class="products__product--checkbox">
               <input type="checkbox">
            </div>
            <div class="products__product--product">
               <div class="products__product--product-image">
                  <img src="../../../assets/images/product/product_3.png" alt="product">
               </div>
               <div class="products__product--product-content">
                  <h3>
                     Imwete Anti Blue Light Computer...<br>
                     <small>Shopify ID: 343972834378</small>
                  </h3>
               </div>
            </div>
            <div class="products__product--status active-ul-li">
               <ul>
                  <li>Active</li>
               </ul>
            </div>
            <div class="products__product--qty">
               <h5>2816 <small>in stock for</small></h5>
               <h5>3 <small>variants</small></h5>
            </div>

            <div class="products__product--option ">
               <small class="red-underline">3</small>
            </div>
            <div class="products__product--profile">
               <button class="btn">
                  <h3>Global selling</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--shipping">
               <button class="btn">
                  <h3>Shipping 1</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--action">
               <button class="btn btn-action">
                  <h3>Push to Etsy</h3>
               </button>
            </div>
            <div class="products__product--more">
               <svg width="40" height="40" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.682007" width="31" height="31" rx="3.5" stroke="#E5E8EF" />
                  <path
                     d="M16 14.6195C15.2617 14.6195 14.6875 15.2211 14.6875 15.932C14.6875 16.6703 15.2617 17.2445 16 17.2445C16.7109 17.2445 17.3125 16.6703 17.3125 15.932C17.3125 15.2211 16.7109 14.6195 16 14.6195ZM14.6875 11.7758C14.6875 12.514 15.2617 13.0883 16 13.0883C16.7109 13.0883 17.3125 12.514 17.3125 11.7758C17.3125 11.0648 16.7109 10.4633 16 10.4633C15.2617 10.4633 14.6875 11.0648 14.6875 11.7758ZM14.6875 20.0883C14.6875 20.8265 15.2617 21.4008 16 21.4008C16.7109 21.4008 17.3125 20.8265 17.3125 20.0883C17.3125 19.3773 16.7109 18.7758 16 18.7758C15.2617 18.7758 14.6875 19.3773 14.6875 20.0883Z"
                     fill="#828282" />
               </svg>
            </div>
         </div>

         <!-- FORM PRODUCT 4 -->
         <div class="products__product">
            <div class="products__product--checkbox">
               <input type="checkbox">
            </div>
            <div class="products__product--product">
               <div class="products__product--product-image">
                  <img src="../../../assets/images/product/product_4.png" alt="product">
               </div>
               <div class="products__product--product-content">
                  <h3>
                     Imwete Anti Blue Light Computer...<br>
                     <small>Shopify ID: 343972834378</small>
                  </h3>
               </div>
            </div>
            <div class="products__product--status active-ul-li">
               <ul>
                  <li>Active</li>
               </ul>
            </div>
            <div class="products__product--qty">
               <h5>2816 <small>in stock for</small></h5>
               <h5>3 <small>variants</small></h5>
            </div>

            <div class="products__product--option ">
               <small class="red-underline">3</small>
            </div>
            <div class="products__product--profile">
               <button class="btn">
                  <h3>Global selling</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--shipping">
               <button class="btn">
                  <h3>Shipping 1</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--action">
               <button class="btn btn-action">
                  <h3>Push to Etsy</h3>
               </button>
            </div>
            <div class="products__product--more">
               <svg width="40" height="40" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.682007" width="31" height="31" rx="3.5" stroke="#E5E8EF" />
                  <path
                     d="M16 14.6195C15.2617 14.6195 14.6875 15.2211 14.6875 15.932C14.6875 16.6703 15.2617 17.2445 16 17.2445C16.7109 17.2445 17.3125 16.6703 17.3125 15.932C17.3125 15.2211 16.7109 14.6195 16 14.6195ZM14.6875 11.7758C14.6875 12.514 15.2617 13.0883 16 13.0883C16.7109 13.0883 17.3125 12.514 17.3125 11.7758C17.3125 11.0648 16.7109 10.4633 16 10.4633C15.2617 10.4633 14.6875 11.0648 14.6875 11.7758ZM14.6875 20.0883C14.6875 20.8265 15.2617 21.4008 16 21.4008C16.7109 21.4008 17.3125 20.8265 17.3125 20.0883C17.3125 19.3773 16.7109 18.7758 16 18.7758C15.2617 18.7758 14.6875 19.3773 14.6875 20.0883Z"
                     fill="#828282" />
               </svg>
            </div>
         </div>

         <!-- FORM PRODUCT 5 -->
         <div class="products__product">
            <div class="products__product--checkbox">
               <input type="checkbox">
            </div>
            <div class="products__product--product">
               <div class="products__product--product-image">
                  <img src="../../../assets/images/product/product_5.png" alt="product">
               </div>
               <div class="products__product--product-content">
                  <h3>
                     Imwete Anti Blue Light Computer...<br>
                     <small>Shopify ID: 343972834378</small>
                  </h3>
               </div>
            </div>
            <div class="products__product--status active-ul-li">
               <ul>
                  <li>Active</li>
               </ul>
            </div>
            <div class="products__product--qty">
               <h5>2816 <small>in stock for</small></h5>
               <h5>3 <small>variants</small></h5>
            </div>

            <div class="products__product--option ">
               <small>2</small>
            </div>
            <div class="products__product--profile">
               <button class="btn">
                  <h3>Global selling</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--shipping">
               <button class="btn">
                  <h3>Shipping 1</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--action">
               <button class="btn btn-action">
                  <h3>Push to Etsy</h3>
               </button>
            </div>
            <div class="products__product--more">
               <svg width="40" height="40" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.682007" width="31" height="31" rx="3.5" stroke="#E5E8EF" />
                  <path
                     d="M16 14.6195C15.2617 14.6195 14.6875 15.2211 14.6875 15.932C14.6875 16.6703 15.2617 17.2445 16 17.2445C16.7109 17.2445 17.3125 16.6703 17.3125 15.932C17.3125 15.2211 16.7109 14.6195 16 14.6195ZM14.6875 11.7758C14.6875 12.514 15.2617 13.0883 16 13.0883C16.7109 13.0883 17.3125 12.514 17.3125 11.7758C17.3125 11.0648 16.7109 10.4633 16 10.4633C15.2617 10.4633 14.6875 11.0648 14.6875 11.7758ZM14.6875 20.0883C14.6875 20.8265 15.2617 21.4008 16 21.4008C16.7109 21.4008 17.3125 20.8265 17.3125 20.0883C17.3125 19.3773 16.7109 18.7758 16 18.7758C15.2617 18.7758 14.6875 19.3773 14.6875 20.0883Z"
                     fill="#828282" />
               </svg>
            </div>
         </div>

         <!-- FORM PRODUCT 6 -->
         <div class="products__product">
            <div class="products__product--checkbox">
               <input type="checkbox">
            </div>
            <div class="products__product--product">
               <div class="products__product--product-image">
                  <img src="../../../assets/images/product/product_6.png" alt="product">
               </div>
               <div class="products__product--product-content">
                  <h3>
                     Imwete Anti Blue Light Computer...<br>
                     <small>Shopify ID: 343972834378</small>
                  </h3>
               </div>
            </div>
            <div class="products__product--status draft-ul-li">
               <ul>
                  <li>Draft</li>
               </ul>
            </div>
            <div class="products__product--qty">
               <h5>2816 <small>in stock for</small></h5>
               <h5>3 <small>variants</small></h5>
            </div>

            <div class="products__product--option ">
               <small>2</small>
            </div>
            <div class="products__product--profile">
               <button class="btn">
                  <h3>Global selling</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--shipping">
               <button class="btn">
                  <h3>Shipping 1</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--action">
               <button class="btn btn-action">
                  <h3>Push to Etsy</h3>
               </button>
            </div>
            <div class="products__product--more">
               <svg width="40" height="40" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.682007" width="31" height="31" rx="3.5" stroke="#E5E8EF" />
                  <path
                     d="M16 14.6195C15.2617 14.6195 14.6875 15.2211 14.6875 15.932C14.6875 16.6703 15.2617 17.2445 16 17.2445C16.7109 17.2445 17.3125 16.6703 17.3125 15.932C17.3125 15.2211 16.7109 14.6195 16 14.6195ZM14.6875 11.7758C14.6875 12.514 15.2617 13.0883 16 13.0883C16.7109 13.0883 17.3125 12.514 17.3125 11.7758C17.3125 11.0648 16.7109 10.4633 16 10.4633C15.2617 10.4633 14.6875 11.0648 14.6875 11.7758ZM14.6875 20.0883C14.6875 20.8265 15.2617 21.4008 16 21.4008C16.7109 21.4008 17.3125 20.8265 17.3125 20.0883C17.3125 19.3773 16.7109 18.7758 16 18.7758C15.2617 18.7758 14.6875 19.3773 14.6875 20.0883Z"
                     fill="#828282" />
               </svg>
            </div>
         </div>

         <!-- FORM PRODUCT 7 -->
         <div class="products__product">
            <div class="products__product--checkbox">
               <input type="checkbox">
            </div>
            <div class="products__product--product">
               <div class="products__product--product-image">
                  <img src="../../../assets/images/product/product_7.png" alt="product">
               </div>
               <div class="products__product--product-content">
                  <h3>
                     Imwete Anti Blue Light Computer...<br>
                     <small>Shopify ID: 343972834378</small>
                  </h3>
               </div>
            </div>
            <div class="products__product--status draft-ul-li">
               <ul>
                  <li>Draft</li>
               </ul>
            </div>
            <div class="products__product--qty">
               <h5>2816 <small>in stock for</small></h5>
               <h5>3 <small>variants</small></h5>
            </div>

            <div class="products__product--option ">
               <small>2</small>
            </div>
            <div class="products__product--profile">
               <button class="btn">
                  <h3>Global selling</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--shipping">
               <button class="btn">
                  <h3>Shipping 1</h3>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0.726562 0.181824C0.304688 0.181824 0.09375 0.697449 0.398438 1.00214L3.39844 4.00214C3.58594 4.18964 3.89062 4.18964 4.07812 4.00214L7.07812 1.00214C7.38281 0.697449 7.17188 0.181824 6.75 0.181824H0.726562Z"
                        fill="#4F4F4F" />
                  </svg>
               </button>
            </div>
            <div class="products__product--action">
               <button class="btn btn-action">
                  <h3>Push to Etsy</h3>
               </button>
            </div>
            <div class="products__product--more">
               <svg width="40" height="40" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.682007" width="31" height="31" rx="3.5" stroke="#E5E8EF" />
                  <path
                     d="M16 14.6195C15.2617 14.6195 14.6875 15.2211 14.6875 15.932C14.6875 16.6703 15.2617 17.2445 16 17.2445C16.7109 17.2445 17.3125 16.6703 17.3125 15.932C17.3125 15.2211 16.7109 14.6195 16 14.6195ZM14.6875 11.7758C14.6875 12.514 15.2617 13.0883 16 13.0883C16.7109 13.0883 17.3125 12.514 17.3125 11.7758C17.3125 11.0648 16.7109 10.4633 16 10.4633C15.2617 10.4633 14.6875 11.0648 14.6875 11.7758ZM14.6875 20.0883C14.6875 20.8265 15.2617 21.4008 16 21.4008C16.7109 21.4008 17.3125 20.8265 17.3125 20.0883C17.3125 19.3773 16.7109 18.7758 16 18.7758C15.2617 18.7758 14.6875 19.3773 14.6875 20.0883Z"
                     fill="#828282" />
               </svg>
            </div>
         </div>

      </form>
   </div>
</template>

<script>
import actionbar from '../../../components/action.vue';
export default {
   components: {
      actionbar
   }
};
</script>

<style lang="scss" scoped>
@import '../../../styles/scss/main.scss';

.products {
   background: #FFFFFF;
   border: 1px solid #E5E8EF;
   border-radius: 3px;
   margin-bottom: 30px;
   height: 70vh;
   overflow-y: auto;

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
      gap: 10px;
      justify-content: center;
      align-items: center;
      padding: 31px 0;
      border-bottom: 1px solid #E5E8EF;

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
         flex: 1;
         display: flex;
         gap: 10px;
         align-content: center;

         &-image {
            width: 40px;
            height: 40px;
         }

         &-content {
            h3 {
               line-height: 18px;
            }

            small {
               font-weight: 400;
               font-size: 12px;
               line-height: 15px;
               color: #828282;
            }
         }

      }

      &--status {
         flex: 0 0 10%;
         display: flex;
         gap: 6px;
         justify-content: center;
         align-items: center;
      }

      &--qty {
         flex: 0 0 13%;

         h5 {
            line-height: 18px;
            color: #252627;

            small {
               color: #828282
            }
         }
      }

      &--option {
         flex: 0 0 7%;

         small {
            color: #828282;
         }

         .red-underline {
            position: relative;
            color: #F2545D;
         }

         .red-underline::before {
            content: "";
            position: absolute;
            bottom: 1px;
            left: 0;
            width: 100%;
            border-bottom: 1px solid #F2545D;
         }
      }

      &--profile {
         flex: 0 0 11%;
      }

      &--shipping {
         flex: 0 0 10%;
      }

      &--action {
         flex: 0 0 10%;
      }

      &--more {
         flex: 0 0 5%;
         display: flex;
         align-items: center;

         svg {
            cursor: pointer;
         }
      }

      button {
         display: flex;
         gap: 10px;
         padding: 8px 7px 7px 9px;
         border-radius: 4px;
      }
   }

   &__product:hover {
      cursor: pointer;
      background: #F7F8FA;
   }

   &__product:first-child:hover {
      cursor: context-menu;
      background: none;
   }

   &__product:last-child {
      border-bottom: none
   }
}
</style>