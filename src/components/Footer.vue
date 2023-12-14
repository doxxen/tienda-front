<template>
  <footer class="main-footer">
   <!-- Services block-->
   <div class="text-dark-700 py-6">
     <div class="container">
       <div class="row">
         <div class="col-lg-4 service-column">
           <!-- <svg class="svg-icon service-icon">
             <use xlink:href="#delivery-time-1"> </use>
           </svg> -->
           <img class="svg-icon service-icon" src="/assets/media/camion.gif" alt="">
           <div class="service-text">
             <h6 class="text-uppercase">Free shipping &amp; return</h6>
             <p class="text-muted fw-light text-sm mb-0">Free Shipping over $300</p>
           </div>
         </div>
         <div class="col-lg-4 service-column">
           <img class="svg-icon service-icon" src="/assets/media/euro.gif" alt="">
           <div class="service-text">
             <h6 class="text-uppercase">Money back guarantee</h6>
             <p class="text-muted fw-light text-sm mb-0">30 Days Money Back Guarantee</p>
           </div>
         </div>
         <div class="col-lg-4 service-column">
           <img class="svg-icon service-icon" src="/assets/media/tailandes.gif" alt="">
           <div class="service-text">
             <h6 class="text-uppercase">020-800-456-747</h6>
             <p class="text-muted fw-light text-sm mb-0">24/7 Available Support</p>
           </div>
         </div>
       </div>
     </div>
   </div>
   <!-- Main block - menus, subscribe form-->
   <div class="py-6 text-muted" style="    background-color: #2983df !important;"> 
     <div class="container">
       <div class="row">
         <div class="col-lg-4 mb-5 mb-lg-0">
           <div class="fw-bold text-uppercase text-lg text-white mb-3">Sell<span style="color:white">.</span></div>
           <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
           <ul class="list-inline">
             <li class="list-inline-item">
               <a class="text-muted text-primary-hover" href="https://www.flaticon.es/uicons?word=facebook" target="_blank" title="Facebook">
                 <img src="/assets/media/facebook.png" style="width:20px">
               </a>
             </li>
             <li class="list-inline-item">
               <a class="text-muted text-primary-hover" href="https://www.flaticon.es/uicons?word=facebook" target="_blank" title="Twitter">
                 <img src="/assets/media/twitter.png" style="width:20px">
               </a>
             </li>
             <li class="list-inline-item">
               <a class="text-muted text-primary-hover" href="https://www.flaticon.es/uicons?word=facebook" target="_blank" title="Instagram">
                 <img src="/assets/media/instagram.png" style="width:20px">
               </a>
             </li>
           </ul>
         </div>
         <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
           <h6 class="text-uppercase text-white mb-3">Categorías</h6>
           <ul class="list-unstyled">
             <li> <a class="text-white" href="#">For Women</a></li>
             <li> <a class="text-white" href="#">For Men</a></li>
             <li> <a class="text-white" href="#">Stores</a></li>
             <li> <a class="text-white" href="#">Our Blog</a></li>
             <li> <a class="text-white" href="#">Shop</a></li>
           </ul>
         </div>
         <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
           <h6 class="text-uppercase text-white mb-3">Soporte</h6>
           <ul class="list-unstyled">
             <li> <a class="text-white" href="#">Login                    </a></li>
             <li> <a class="text-white" href="#">Register                    </a></li>
             <li> <a class="text-white" href="#">Wishlist                    </a></li>
             <li> <a class="text-white" href="#">Our Products                    </a></li>
             <li> <a class="text-white" href="#">Checkouts                    </a></li>
           </ul>
         </div>
         <div class="col-lg-4">
           <h6 class="text-uppercase text-white mb-3">Boletín informatico</h6>
           <p class="mb-3 text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
           <form action="#" id="newsletter-form">
             <div class="input-group mb-3">
               <input class="form-control bg-transparent border-secondary border-end-0" type="email" placeholder="Your Email Address" aria-label="Your Email Address" style="    border-color: #ffffff !important;color:white !important">
               <div class="input-group-append" >
                 <button class="btn border-start-0" type="submit" style="    border-color: #ffffff !important;">
                   <img src="/assets/media/search.png" style="width: 18px" alt="">
                 </button>
               </div>
             </div>
           </form>
         </div>
       </div>
     </div>
   </div>
   <!-- Copyright section of the footer-->
   <div class="py-4 fw-light text-gray-300" style="background-color: #1e1e1e !important;">
     <div class="container">
       <div class="row align-items-center">
         <div class="col-md-6 text-center text-md-start">
           <p class="mb-md-0">&copy; {{year}} Mi tienda.  Todos los derechos reservados.</p>
         </div>
         <div class="col-md-6">
           <ul class="list-inline mb-0 mt-2 mt-md-0 text-center text-md-end">
             <li class="list-inline-item"><img class="w-2rem" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/visa.svg" alt="..."></li>
             <li class="list-inline-item"><img class="w-2rem" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/mastercard.svg" alt="..."></li>
             <li class="list-inline-item"><img class="w-2rem" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/paypal.svg" alt="..."></li>
             <li class="list-inline-item"><img class="w-2rem" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/western-union.svg" alt="..."></li>
           </ul>
         </div>
       </div>
     </div>
   </div>
 </footer>
</template>

<script>
export default {
name: 'Footer',
data() {
 return {
   year: new Date().getFullYear(),
 }
},
}
</script>
