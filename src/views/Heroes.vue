<template>
<div>
  <div class="row"  v-for="(item,index) in heroes" :key="index">
    <div class="col-6 offset-3">
      <v-card class="mt-4">
        <v-img :src="item.fotoUrl" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.nombre}}</h3>
            <div>{{ item.biografia }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Ver mas</v-btn>
          <v-btn flat color="red" class="ml-auto" @click="eliminarHeroe(item['_id'])">Eliminar</v-btn>
          <router-link :to="{name:'update',params:{heroe:item}}"><v-btn flat color="yellow" >Editar</v-btn></router-link>
        </v-card-actions>
      </v-card>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Heroes",
  data() {
    return {
      heroes: []
    };
  },
  methods: {
    async getHeroes() {
      let valores = await axios.get("http://localhost:3000/heroes/");
      this.heroes = valores.data.heroes;

      console.log(valores.data.heroes);
      console.log(this.heroes);
    },
    eliminarHeroe(id){
      axios.delete('http://localhost:3000/heroes/delete?heroeId='+id).then(
        ()=> {
          console.log('entre');
          
        }
      );
      this.$router.push({name:'home'});
    }
  },
  mounted() {
    this.getHeroes();
  }
};
</script>

<style>
</style>
