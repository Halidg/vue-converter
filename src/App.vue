<template>
  <v-app>
    <v-container>
      <router-view></router-view> 
    </v-container>  
  </v-app>  
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

#app {
	background: linear-gradient(-45deg, #d19c8c, #b9aab0, #728891, #b8ccc7);
	background-size: 400% 400%;
	
}

h1, h2, h3 {
  font-family: 'Indie Flower';
}

.bg--light {
  background: #fcfcfc;
}

.exchange {
  max-width: 50px;
}

</style>