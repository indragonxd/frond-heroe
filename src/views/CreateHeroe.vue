<template>
    <div class="row">
        <div class="col-8 offset-3">
           <div class="card card-body">
          <form  @submit.prevent="crearHeroe" >

            <div class="form-group">
            <input class="form-control" type = "text" name ="name" v-model="heroe.name" placeholder ="Nombre del heroe">
            </div>
            
            <div class="form-group">
            <input class="form-control" type = "description" name ="name" v-model="heroe.biografia" placeholder ="Biografia del heroe ">
            </div>

            <div class="form-group">
            <input class="form-control"  type = "price" name ="name" v-model="heroe.poder" placeholder ="Poder del heroe ">
            </div>

            <div class="form-group">
            <input  class="form-control" type = "imageURL" name ="name" v-model="heroe.fotoUrl" placeholder ="Foto del heroe - URL ">
            </div>

            <div class="form-group">
            <input  class="form-control" type = "imageURL" name ="name" v-model="heroe.casa" placeholder ="Casa del heroe ">
            </div>
            <button class="btn btn-primary btn-block" >Send</button>

            <div class="alert alert-danger" v-if="alert">
                Fallos en el registro!
            </div>

          </form>

       </div>
        </div>
        
    </div>
    
</template>

<script>
import Axios from 'axios';
export default {
    data(){
        return {
            edit:false,
            heroe : {
                nombre : '',
                biografria : '',
                poder : '',
                fotoUrl : '',
                casa : ''
            },
            alert : false,
            mensageAlert : ''
        }
    },
    methods : {
        crearHeroe(){
            Axios.post('Access-Control-Allow-Origin:localhost:3000/heroes/create',this.heroe,{headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },}).then(
                () => {
                    this.mensageAlert = 'Problemas a la hora de crear el Heroe' ;
                },
                () => {
                    this.mensageAlert = 'Se registro exitosamente';
                }

            );
            //this.mensageAlert = (!heroe) ? 'Problemas a la hora de crear el Heroe' : 'Se registro exitosamente';
            this.alert = true;
            this.heroe = {};
        }
    }
}
</script>

<style>

</style>
