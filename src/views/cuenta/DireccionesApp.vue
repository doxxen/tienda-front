<template>
    <div  style="background: #f3f3f3;" class="pb-5">
        <!-- Hero Section-->
        <section class="hero" style="margin-top: 8rem !important;">
        <div class="container">
            <!-- Breadcrumbs -->
            <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active">Direcciones        </li>
            </ol>
            <!-- Hero Content-->
            <div class="hero-content pb-5 text-center">
                <h1 class="hero-heading">Direcciones</h1>
            </div>
        </div>
        </section>
        <section>
        <div class="container">
            <div class="row mb-5">
            <div class="col-lg-8 col-xl-9">
                <div class="block">
                    <!-- Invoice Address-->
                    <div class="block-header" style="background: #2983df;">
                    <h6 class="text-uppercase mb-0 text-white">Nueva direcciones                 </h6>
                    </div>
                    <div class="block-body">
                    <div class="row">
                        <div class="form-group col-md-6 mb-3">
                            <label class="form-label" for="fullname_invoice"><b>Nombres</b></label>
                            <input class="form-control" type="text" placeholder="Joe" v-model="direccion.nombres">
                        </div>
                        <div class="form-group col-md-6 mb-3" >
                            <label class="form-label" for="emailaddress_invoice"><b>Apellidos</b></label>
                            <input class="form-control" type="text" placeholder="Black" v-model="direccion.apellidos">
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label class="form-label" for="street_invoice"><b>Documento</b></label>
                            <input class="form-control" type="text" placeholder="123456789" v-model="direccion.documento">
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label class="form-label" for="city_invoice"><b>Telefono</b></label>
                            <input class="form-control" type="text" placeholder="(+51)987456132" v-model="direccion.telefono">
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label class="form-label" for="zip_invoice"><b>País</b></label>
                            <select  class="form-control" v-model="direccion.pais">
                                <option value="" disabled selected>Seleccionar</option>
                                <option :value="item" v-for="item in $paises">{{item}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label class="form-label" for="state_invoice"><b>Region/Ciudad</b></label>
                            <input class="form-control" type="text" placeholder="Lima/Miraflores" v-model="direccion.ciudad">
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label class="form-label" for="phonenumber_invoice"><b>ZIP</b></label>
                            <input class="form-control" type="text" placeholder="1234567" v-model="direccion.zip">
                        </div>
                         <div class="form-group col-md-6 mb-3">
                            <label class="form-label" for="phonenumber_invoice"><b>Dirección</b></label>
                            <input class="form-control" type="text" placeholder="Miraflores #123" v-model="direccion.direccion">
                        </div>
                        
                    </div>
                    <!-- /Invoice Address-->
                    </div>
              
                </div>
                <div class="mb-4 mt-3 text-center mg-5">
                    <button class="btn btn-dark" type="button" v-on:click="crear_direccion()"><i class="far fa-save me-2"></i>Crear dirección</button>
                </div>

                <div class="text-center" v-if="msm_error">
                    <span class="text-danger">{{msm_error}}</span>
                </div>

                <table v-if="direcciones.length >= 1" class="table table-bordered table-striped" style="margin-top: 5rem !important;background: white !important;">
                    <thead class="table-dark">
                        <tr>
                        <th scope="col">Receptor</th>
                        <th scope="col">Localizacion</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="item in direcciones">
                            <th scope="row">
                                <small>{{item.nombres}} {{item.apellidos}}</small> <br>
                                 <small>{{item.telefono}}</small> 
                            </th>
                            <td>
                                <small>{{item.pais}} {{item.ciudad}}</small> <br>
                                 <small>{{item.zip}}</small> 
                            </td>
                            <td>{{item.direccion}}</td>
                            <td>
                                <button class="btn btn-danger btn-sm" v-on:click="eliminar_direccion(item._id)">Eliminar</button>
                            </td>
                        </tr>
                       
                    </tbody>
                    
                </table>


                <div class="card" v-if="direcciones.length == 0">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 text-center">
                                <img src="/assets/media/hogar.png" style="width:60px">
                                <h3>Aun no tienes direcciones</h3>
                                <span class="text-muted">Ingresa tu primer dirección</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Customer Sidebar-->
            <div class="col-xl-3 col-lg-4 mb-5">
                <SidebarCliente />
            </div>
            <!-- /Customer Sidebar-->
            </div>
        </div>
        </section>
        <!-- Footer-->
    </div>
</template>
<script>
import axios from 'axios';
import SidebarCliente from '@/components/SidebarCliente.vue';
export default {
    data() {
        return {
            direccion: {
                pais: ''
            },
            msm_error:'',
            direcciones: []
        }
    },
    components : {
        SidebarCliente
    },
    beforeMount() {
        this.init_direcciones();
    },
    methods: {
        init_direcciones(){
            axios.get(this.$url+'/obtener_direcciones_cliente',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result)=>{
                this.direcciones = result.data;
            });
        },
        eliminar_direccion(id){
            axios.delete(this.$url+'/eliminar_direccion_cliente/'+id,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result)=>{
                this.init_direcciones();
            });
        },
        crear_direccion(){
            if(!this.direccion.nombres){
                this.msm_error = 'Ingrese los nombres por favor';
            }else if(!this.direccion.apellidos){
                this.msm_error = 'Ingrese los apellidos por favor';
            }else if(!this.direccion.documento){
                this.msm_error = 'Ingrese el documento por favor';
            }else if(!this.direccion.telefono){
                this.msm_error = 'Ingrese el telefono por favor';
            }else if(!this.direccion.pais){
                this.msm_error = 'Seleccione el pais por favor';
            }else if(!this.direccion.ciudad){
                this.msm_error = 'Ingrese la ciudad por favor';
            }else if(!this.direccion.zip){
                this.msm_error = 'Ingrese el zip por favor';
            }else if(!this.direccion.direccion){
                this.msm_error = 'Ingrese la direccion por favor';
            }else{
                axios.post(this.$url+'/crear_direccion_cliente',this.direccion,{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.$store.state.token
                    }
                }).then((result)=>{
                    this.msm_error = '';
                    this.direccion = {
                        pais: ''
                    },
                    this.init_direcciones();
                });
            }
           
        }
    },
}
</script>