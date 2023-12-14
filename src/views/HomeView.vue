<template>
  <div class="home">
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 dark-overlay split-screen-column align-items-center align-items-lg-end" style="background-image: url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/ian-dooley-347942-unsplash.jpg); background-color: #d2cecb;"> 
            <div class="overlay-content py-6 mt-6 px-lg-5 mt-lg-0 mb-lg-5">
              <h1 class="display-3 mb-4 text-white fw-bold split-screen-heading letter-spacing-1">Gentlemen              </h1>
              <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p> <a class="btn btn-light mx-1 mb-1" href="category.html">View collection      </a><a class="btn btn-outline-light mx-1 mb-1" href="category.html">See more      </a></p>
            </div>
          </div>
          <div class="col-lg-6 split-screen-column align-items-center align-items-lg-end" style="background-image: url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/ian-dooley-347962-unsplash.jpg); background-color: #e5b6b4;"> 
            <div class="py-6 px-lg-5 mb-lg-5">
              <h1 class="display-3 mb-4 text-white fw-bold split-screen-heading letter-spacing-1">Ladies              </h1>
              <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p> <a class="btn btn-light mx-1 mb-1" href="category.html">View collection      </a><a class="btn btn-outline-light mx-1 mb-1" href="category.html">See more                              </a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-6 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5">
            <h2 class="text-uppercase">Nuevos productos</h2>
            <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div class="row" v-if="load_nuevos_productos">
            <div class="col-12 text-center">
              <img src="/assets/media/idea.gif" alt="" style="width: 80px">
            </div>
        </div>
        <div class="row" v-if="!load_nuevos_productos">
          <!-- product-->
          <div class="col-lg-3 col-md-4 col-6" v-for="item in nuevos_productos">
            <router-link :to="{name: 'show-producto',params:{slug: item.slug}}">
              <div class="product">
              <div class="product-image">
                <div class="ribbon ribbon-danger" v-if="item.descuento">Oferta</div>
                <img class="img-fluid" :src="$url+'/obtener_portada_producto/'+item.portada" alt="product"/>
                <div class="product-hover-overlay">
                  <a class="product-hover-overlay-link" href="detail.html"></a>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">{{item.categoria}}</p>
                <h3 class="h6 text-uppercase mb-1">
                  <a class="text-dark" href="detail.html">{{item.titulo}}</a>
                </h3>
                <span class="text-muted">{{convertCurrency(item.precio)}}</span>
              </div>
            </div>
            </router-link>
            
          </div>
          <!-- /product-->
         
        </div>
      </div>
    </section>
    <section class="py-6 bg-gray-100">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5">
            <h2>Colecciòn primavera</h2>
            <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-flex align-items-md-stretch mb-4 mb-md-0">
            <div class="d-flex align-items-center text-white dark-overlay w-100 text-center py-6 py-md-0" style="background: center center url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/nordwood-themes-481980-unsplash-square.jpg) no-repeat; background-size: cover;"><a class="tile-link" href="category.html"> </a>
              <div class="card-img-overlay w-100 overlay-content">
                <h2 class="display-2 fw-bold text-uppercase mb-0">Hombres </h2>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 text-white text-center mb-4 dark-overlay"> <img class="card-img" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/malvestida-magazine-458585-unsplash.jpg" alt="Ladies"><a class="tile-link" href="category.html"> </a>
              <div class="card-img-overlay d-flex align-items-center">
                <div class="text-center w-100 overlay-content">
                  <h2 class="display-4 fw-bold text-uppercase text-center mb-0">Mujeres                                               </h2>
                </div>
              </div>
            </div>
            <div class="card border-0 text-white text-center  dark-overlay"> <img class="card-img" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/heather-schwartz-528936-unsplash.jpg" alt="Accessories"><a class="tile-link" href="category.html"> </a>
              <div class="card-img-overlay d-flex align-items-center">
                <div class="text-center w-100 overlay-content">
                  <h2 class="display-4 fw-bold text-uppercase text-center mb-0">Accesorios                                           </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-6 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5">
            <h2 class="text-uppercase">Productos recomendados</h2>
            <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <!-- Products Slider-->

          <div class="owl-carousel owl-theme product-slider">
            <!-- product-->
            <div class="product-slider-item" v-if="productos_recomendados[0]">
              <div class="product">
                <div class="product-image">
                  <div class="ribbon ribbon-primary">Sale</div>
                  <img  :src="$url+'/obtener_portada_producto/'+productos_recomendados[0].portada" alt="product"/>
                  
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">{{productos_recomendados[0].categoria}}</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">{{productos_recomendados[0].titulo.substr(0,20)}}...</a></h3>
                  <span class="text-muted">{{convertCurrency(productos_recomendados[0].precio)}}</span>
                </div>
              </div>
            </div>
            <div class="product-slider-item" v-if="productos_recomendados[1]">
              <div class="product">
                <div class="product-image">
                  <div class="ribbon ribbon-primary">Sale</div>
                  <img  :src="$url+'/obtener_portada_producto/'+productos_recomendados[1].portada" alt="product"/>
                  
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">{{productos_recomendados[1].categoria}}</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">{{productos_recomendados[1].titulo.substr(0,20)}}...</a></h3>
                  <span class="text-muted">{{convertCurrency(productos_recomendados[1].precio)}}</span>
                </div>
              </div>
            </div>
            <!-- /product-->
           <div class="product-slider-item" v-if="productos_recomendados[2]">
              <div class="product">
                <div class="product-image">
                  <div class="ribbon ribbon-primary">Sale</div>
                  <img  :src="$url+'/obtener_portada_producto/'+productos_recomendados[2].portada" alt="product"/>
                  
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">{{productos_recomendados[2].categoria}}</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">{{productos_recomendados[2].titulo.substr(0,20)}}...</a></h3>
                  <span class="text-muted">{{convertCurrency(productos_recomendados[2].precio)}}</span>
                </div>
              </div>
            </div>
            <div class="product-slider-item" v-if="productos_recomendados[3]">
              <div class="product">
                <div class="product-image">
                  <div class="ribbon ribbon-primary">Sale</div>
                  <img  :src="$url+'/obtener_portada_producto/'+productos_recomendados[3].portada" alt="product"/>
                  
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">{{productos_recomendados[3].categoria}}</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">{{productos_recomendados[3].titulo.substr(0,20)}}...</a></h3>
                  <span class="text-muted">{{convertCurrency(productos_recomendados[3].precio)}}</span>
                </div>
              </div>
            </div>
            <div class="product-slider-item" v-if="productos_recomendados[4]">
              <div class="product">
                <div class="product-image">
                  <div class="ribbon ribbon-primary">Sale</div>
                  <img  :src="$url+'/obtener_portada_producto/'+productos_recomendados[4].portada" alt="product"/>
                  
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">{{productos_recomendados[4].categoria}}</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">{{productos_recomendados[4].titulo.substr(0,20)}}...</a></h3>
                  <span class="text-muted">{{convertCurrency(productos_recomendados[4].precio)}}</span>
                </div>
              </div>
            </div>

            <div class="product-slider-item" v-if="productos_recomendados[5]">
              <div class="product">
                <div class="product-image">
                  <div class="ribbon ribbon-primary">Sale</div>
                  <img  :src="$url+'/obtener_portada_producto/'+productos_recomendados[5].portada" alt="product"/>
                  
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">{{productos_recomendados[5].categoria}}</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">{{productos_recomendados[5].titulo.substr(0,20)}}...</a></h3>
                  <span class="text-muted">{{convertCurrency(productos_recomendados[5].precio)}}</span>
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  </div>
</template>

<style>
.product-image{
  display: block !important;
  overflow: hidden !important;
}

.img-fluid{
  height: auto !important;
  display: block !important;
  vertical-align: middle !important;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';
import currency_formatter from 'currency-formatter';
import { init_carousel } from '../../public/assets/js/theme.d7b4a888';
 
export default {
  name: 'HomeView',
  data() {
    return {
        nuevos_productos : [],
        load_nuevos_productos: true,

        productos_recomendados : [],
        load_productos_recomendados: true,
    }
  },
  methods: {
    init_nuevos_productos(){
      this.load_nuevos_productos = true;
      axios.get(this.$url+'/obtener_nuevos_productos',{
          headers: {
              'Content-Type': 'application/json'
          }
      }).then((result)=>{
        this.nuevos_productos = result.data;
        this.load_nuevos_productos = false;
        console.log(this.nuevos_productos);
      });
    },
    init_productos_recomendados(){
      this.load_nuevos_productos = true;
      axios.get(this.$url+'/obtener_productos_recomendados',{
          headers: {
              'Content-Type': 'application/json'
          }
      }).then((result)=>{
        this.productos_recomendados = result.data;
        this.load_productos_recomendados = false;
        console.log(this.productos_recomendados);
      });
    },
    convertCurrency(number){
        return currency_formatter.format(number, { code: 'USD' });
    }
  },
  components: {
    HelloWorld
  },
  beforeMount() {
    this.init_nuevos_productos();
    this.init_productos_recomendados();
    init_carousel.init();
  },
}
</script>
