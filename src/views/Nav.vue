<template>
  <div>
    <v-navigation-drawer fixed>
      <v-toolbar flat class="primary">
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Vue - Nest</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        
        <v-list-tile v-for="item in items" :key="item.title" >
          <router-link :to="item.path">
          <v-list-tile-content>
            
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            
          </v-list-tile-content>
          </router-link>
        </v-list-tile>
        
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data(){
      return {
          items : [
              {
                  title :'Heroes',
                  path : '/'
              },
              {
                  
                  title : 'Crear Heroe',
                  path : '/create'
              }
          ]

      }
  }
};
</script>

<style>
</style>
