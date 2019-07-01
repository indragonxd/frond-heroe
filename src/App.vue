<template>
  <v-app>
    <v-content>
      <v-container>
        <Nav/>
      </v-container>

      <div class="contaier">
        <router-view></router-view>
      </div>
      </v-content>
    
  </v-app>
    
    
</template>

<script>
import Nav from "./views/Nav";

export default {
  name: "App",
  components: {
    Nav
  },
  data() {
    return {
      //
    };
  }
};
</script>
