<template>
    <div  style="background: #f3f3f3;" class="pb-5">
        <!-- Hero Section-->
        <section class="hero" style="margin-top: 8rem !important;">
        <div class="container">
            <!-- Breadcrumbs -->
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                <li class="breadcrumb-item active">Checkout</li>
            </ol>
            <!-- Hero Content-->
            <div class="hero-content pb-5 text-center">
            <h1 class="hero-heading">Checkout</h1>
            <div class="row">   
                <div class="col-xl-8 offset-xl-2"><p class="lead text-muted">Por favor revisa tu orden.</p></div>
            </div>
            </div>
        </div>
        </section>
        <!-- Checkout-->
        <section>
        <div class="container">
            <div class="row">
            <div class="col-lg-8">

                <div class="block mb-5">
                <div class="block-header" style="background: #2983df !important;">
                    <h6 class="text-uppercase mb-0 text-white">Dirección de entrega                  </h6>
                </div>
                <div class="block-body" style="background: #fff6e8 !important">
                    <div class="row">
                        <div class="mb-4 col-md-6 d-flex align-items-center" v-for="item in direcciones">
                            <input type="radio" name="shippping" id="option0" :value="item._id" v-on:change="selected_direccion($event)">
                            <label class="ms-3" for="option0">
                                <strong class="d-block text-uppercase mb-2">{{item.pais}}, {{item.ciudad}}</strong>
                                <span class="text-muted text-sm">{{item.direccion}}</span> <br>
                                <span class="text-muted text-sm">{{item.nombre}} {{item.apellidos}}, {{item.telefono}}</span>
                            </label>
                        </div>
                   
                    </div>
                </div>

                </div>
            
                <div class="mb-5">
                <div class="cart">
                    <div class="cart-wrapper">
                    <div class="cart-header text-center" style="background: #2983df !important;">
                        <div class="row">
                        <div class="col-6">
                            <span class="text-left text-white">Producto</span>
                        </div>
                        <div class="col-2">
                            <span class="text-white">Precio</span>
                        </div>
                        <div class="col-2">
                            <span class="text-white">Cantidad</span>
                        </div>
                        <div class="col-2">
                            <span class="text-white">Total</span>
                        </div>
                        </div>
                    </div>
                    <div class="cart-body"  style="background: #fff6e8 !important">
                        <!-- Product-->
                        <div class="cart-item" v-for="item in productos">
                        <div class="row d-flex align-items-center text-center">
                            <div class="col-6">
                            <div class="d-flex align-items-center">
                                <a href="detail.html">
                                    <img class="cart-item-img" :src="$url+'/obtener_portada_producto/'+item.producto.portada" alt="...">
                                </a>
                                <div class="cart-title text-start">
                                    <a class="text-uppercase text-dark" href="detail.html">
                                        <strong>{{item.producto.titulo.substr(0,20)}}...</strong>
                                    </a>
                                    <br>
                                    <span class="text-muted text-sm">{{item.producto.str_variedad}}: {{item.variedad.variedad}}</span>
                                </div>
                            </div>
                            </div>
                            <div class="col-2">{{convertCurrency(item.producto.precio)}}</div>
                            <div class="col-2">  {{item.cantidad}}
                            </div>
                            <div class="col-2 text-center">{{convertCurrency(item.producto.precio*item.cantidad)}}</div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
                <div class="mb-5 d-flex justify-content-between flex-column flex-lg-row">
                    <router-link to="/shop" class="btn btn-link text-muted" href="checkout3.html">Regresar a tienda</router-link >
                    <a class="btn btn-dark" href="checkout5.html">Place an order</a>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="block mb-5">
                <div class="block-header"  style="background: #fff6e8 !important">
                    <h6 class="text-uppercase mb-0">Order Summary</h6>
                </div>
                <div class="block-body pt-1"  style="background: #fff6e8 !important">
                    <p class="text-sm">Shipping and additional costs are calculated based on values you have entered.</p>
                    <ul class="order-summary mb-0 list-unstyled">
                    <li class="order-summary-item"><span>Subtotal </span><span>{{convertCurrency(total)}}</span></li>
                    <li class="order-summary-item"><span>Envio</span><span>{{convertCurrency($envio)}}</span></li>
                
                    <li class="order-summary-item border-0"><span>Total</span><strong class="order-summary-total">{{convertCurrency(total+$envio)}}</strong></li>
                    </ul>
                </div>
                </div>

                <div class="block mb-5" >
                <div class="block-header"  style="background: #fff6e8 !important">
                    <h6 class="text-uppercase mb-0">Método de pago</h6>
                </div>
                <div class="block-body pt-1 mb-3"  style="background: #fff6e8 !important">
                    <div class="col-md-12 mb-2">
                    
                        <span class="d-block  mb-2" style="letter-spacing: 0px;font-weight: 600;">Tarjeta de crédito o débito</span>
                        <div class="row">
                            <div class="col-12 mb-2">
                                <img src="/assets/media/payments.png" style="width: 180px">
                            </div>
                            <div class="col-12">
                                <p class="text-muted" style="font-size: 13px">
                                    (Luego de hacer clic en "PAGAR" será redirigido a Mercado Pago  de forma segura para completar su compra).</p>
                            </div>
                        </div>
                    </div>
                    
                
    
                    <div class="col-md-12">
                        <p class="text-sm" style="margin-bottom: 0.4rem;">Deberes e impuestos no están incluidos en paquetes con envio internacional. /Tus datos personales serán utilizados para procesar tu pedido y respaldar tu experiencia en este sitio web.</p>
                        <a > <b> Términos & Privacidad.</b></a>
                    </div>
    
                </div>
                <div class="block-footer">
                    <a  class="btn btn-dark" id="btnBuy" style="cursor: pointer;width: 100%;" v-on:click="crearPreferencia()">PAGAR</a>
                <!--  <button class="btn btn-dark btnBuy" style="cursor: pointer" disabled>Procesando...</button> -->
                
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <!-- Footer-->
    </div>
</template>

<script>
    import axios from 'axios';
    import currency_formatter from 'currency-formatter';

    export default {
        name: 'CheckoutView',
        data() {
            return {
                direcciones: [],
                venta: {},
                productos: [],
                total: 0,
                load_data: true,
                items: []
            }
        },
        beforeMount() {
            this.init_direcciones();
            this.init_carrito();
        },
        methods:{
            convertCurrency(number){
                return currency_formatter.format(number, { code: 'USD' });
            },
            init_direcciones(){
                axios.get(this.$url+'/obtener_direcciones_cliente',{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.$store.state.token
                    }
                }).then((result)=>{
                    console.log(result);
                    this.direcciones = result.data;
                });
            },
            selected_direccion(event){
                this.venta.direccion = event.target.value;
            },
            init_carrito(){
                if(this.$store.state.token != null){
                    this.load_data = true;
                    axios.get(this.$url+'/obtener_carrito_cliente',{
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.state.token
                        }
                    }).then((result)=>{
                        this.total = 0;
                        for(var item of result.data.carrito_general){
                            let subtotal = item.producto.precio * item.cantidad;
                            this.total = this.total+ subtotal;

                            this.items.push({
                                title: item.producto.titulo,
                                quantity: item.cantidad,
                                unit_price: item.producto.precio,
                                currency_id: 'ARS'
                            });
                        }

                        this.items.push({
                            title: 'Envio',
                            quantity: 1,
                            unit_price: this.$envio,
                            currency_id: 'ARS'
                        });

                        this.productos = result.data.carrito_general;
                        this.load_data = false;
                    });
                }
            },
            crearPreferencia(){
                let data = {
                    back_urls: {
                        success: 'http://localhost:8080/verificacion/success/'+this.venta.direccion,
                        pending: 'http://localhost:8080/verificacion/pending',
                        failure: 'http://localhost:8080/verificacion/failure'
                    },
                    items: this.items,
                    auto_return: 'approved'
                }

                console.log(data);

                axios.post('https://api.mercadopago.com/checkout/preferences',data,{
                    headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer TEST-5854722298343640-121219-75ab0f1c396be2c31137f4cd18a14ebf-280741774'
                        }
                }).then((result)=>{
                    console.log(result);
                    window.location.href = result.data.sandbox_init_point;
                })
            }
        }
    }
</script>