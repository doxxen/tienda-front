<template>
    <div>
        <section class="hero" style="margin-top: 11rem;">
            <div class="container">
                
                <div class="hero-content pb-5 text-center">
                <h1 class="hero-heading mb-0">Zona de cliente</h1>
                </div>
            </div>
            </section>
            <!-- customer login-->
            <section>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="block">
                    <div class="block-header">
                        <h6 class="text-uppercase mb-0">Iniciar sesión</h6>
                    </div>
                    <div class="block-body">
                   
                        <p class="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        <hr>
                        <form action="customer-orders.html" method="get">
                        <div class="mb-4">
                            <label class="form-label" for="email1">Correo electrónico</label>
                            <input class="form-control" id="email1" type="text" placeholder="Correo electrónico" autocomplete="off" v-model="email">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="password1">Contraseña</label>
                            <input class="form-control" id="password1" type="password" placeholder="Contraseña" autocomplete="off" v-model="password">
                        </div>

                        <div class=" mb-4" v-if="msm_error_login">
                            <small class="text-danger">{{msm_error_login}}</small>
                        </div>

                        <div class="mb-4 text-center">
                            <button class="btn btn-outline-dark" type="button" v-on:click="login()"><i class="fa fa-sign-in-alt me-2"></i> Ingresar</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="block">
                    <div class="block-header">
                        <h6 class="text-uppercase mb-0">Nueva cuenta</h6>
                    </div>
                    <div class="block-body"> 
                     
                        <p class="text-muted">With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                    
                        <form action="customer-orders.html" method="get">
                        <div class="mb-4">
                            <label class="form-label" for="name">Nombres completos</label>
                            <input class="form-control" id="name" type="text" placeholder="Nombres completos" v-model="cliente.nombres">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="email">Correo electrónico</label>
                            <input class="form-control" id="email" type="text" placeholder="Correo electrónico" v-model="cliente.email">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="password">Contraseña</label>
                            <input class="form-control" id="password" type="password" placeholder="Contraseña" v-model="cliente.password">
                        </div>

                        <div class=" mb-4" v-if="msm_error">
                            <small class="text-danger">{{msm_error}}</small>
                        </div>

                        <div class="mb-4 text-center">
                            <button class="btn btn-outline-dark" type="button" v-on:click="validar_registro()"><i class="far fa-user me-2"></i>Registrar</button>
                        </div>

                        

                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'LoginApp',
    data() {
        return {
            cliente: {},
            msm_error: '',

            email: '',
            password: '',
            msm_error_login: ''
        }
    },

    beforeMount(){
        if(this.$store.state.token){
            this.$router.push({name: 'home'});
        }
    },


    methods: {
        validar_registro(){
            if(!this.cliente.nombres){
                this.msm_error = 'Ingrese los nombres por favor.'
            }else if(!this.cliente.email){
                this.msm_error = 'Ingrese el correo electrónico por favor.'
            }else if(!this.cliente.password){
                this.msm_error = 'Ingrese la contraseña por favor.'
            }else{
                //
                this.msm_error = '';
                axios.post(this.$url+'/registro_cliente_ecommerce',this.cliente,{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((result)=>{
                    if(result.data.message){
                        this.msm_error = result.data.message;
                    }else{
                        this.msm_error = '';
                        console.log(result);
                    }
                   
                })
            }
            console.log(this.cliente);
        },

        login(){
            if(!this.email){
                this.msm_error_login = 'Ingrese un correo electrónico';
            }else if(!this.password){
                this.msm_error_login = 'Ingrese una contraseña';
            }else{
                this.msm_error_login = '';
                let data = {
                    email: this.email,
                    password: this.password
                }
                axios.post(this.$url+'/login_cliente',data,{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((result)=>{
                    console.log(result);

                    if(result.data.message){
                        this.msm_error_login = result.data.message;
                    }else{
                        this.$store.dispatch('saveToken',result.data.token);
                        this.$store.dispatch('saveUser',JSON.stringify(result.data.cliente));
                        this.$router.push({name: 'home'});
                        this.$socket.emit('send_cart',true);
                    }

                }).catch((error)=>{
                    console.log(error);
                });
            }
        }

        
    },
}
</script>