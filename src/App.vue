<template>
  <div id="app">
    <Sidebar :loggedIn="loggedIn" @logout="logout()"/>
    <!-- Brings in the content from view based on the url! -->
    <router-view @loggedIn="logged($event)" @signed="signUp($event)" />
  </div>
</template>

<script>
// import Header from './components/Header'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',

  components: {
    Sidebar,
  },
  data: function() {
        return{
            game: [],
            URL: "http:/localhost:8000",
            loggedIn: false,
            token:'' ,
            info:{},
        }
    },
    methods: {
      logged: function(event){
        console.log(event)
        this.loggedIn = true
        this.info= event
        this.token = event.token
        this.$router.push("/")
      },
      signUp: function(event){
        console.log(event)
        this.loggedIn = true
        this.info= event
        this.token = event.token
        this.$router.push("/")
      },
      logout: function() {
        this.loggedIn = false;
        this.token = ''
      }
    }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: [a] 1.25fr [b] 4fr [c];
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@media screen and (max-width: 768px) {
    #app{
        display: block;
    }
}
</style>
