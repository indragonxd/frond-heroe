<template>
    <div class="row">
        <div class="col-8 offset-3">
           <div class="card card-body">
            
          <form  @submit.prevent="buttonSend" >

            <div class="form-group">
            <input class="form-control" type = "text" name ="name" v-model="heroe.nombre" placeholder ="Nombre del heroe">
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

            <div :class="aviso" v-if="alert">
                {{mensageAlert}}
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
            editar:false,
            heroe : {
                nombre : '',
                biografia : '',
                poder : '',
                fotoUrl : '',
                casa : ''
            },
            alert : false,
            mensageAlert : '',
            aviso : ''
        }
    },
    methods : {
        crearHeroe(){
            //probar con el asyn y await
            console.log(this.heroe);
            Axios.post('http://localhost:3000/heroes/create',this.heroe).then(()=> {
                this.mensageAlert ='Se registro exitosamente';
                this.aviso = 'alert alert-success';
            }, ()=> {
                this.mensageAlert = 'Problemas a la hora de crear el Heroe';
                this.aviso = 'alert alert-danger';
            } );
            this.alert = true;
            this.heroe = {};
            //this.$router.push({name:'home'});
        },
        editarHeroe(){
            console.log('me ejecute');
            Axios.put('http://localhost:3000/heroes/update?heroeId='+this.heroe['_id'],this.heroe).then(
                ()=>{
                    console.log('entre');
                }
            );
            this.$router.push({name:'home'});
        },
        buttonSend(){
            return this.editar?this.editarHeroe():this.crearHeroe();
        }
    },
    mounted(){
        
        if(this.$route.params.heroe){
            console.log('editar true');
            this.editar=true;
            this.heroe =this.$route.params.heroe;
            //console.log(this.$route.params);
        }
        
    }
}
</script>

<style>

</style>
