<template>
  <div id="app">
    <!-- Brings in the content from view based on the url! -->
    <router-view @loggedIn="logged($event)" @signed="signUp($event)" />
  </div>
</template>

<script>
// import Header from './components/Header'
// import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    // Header,
    // Footer
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
</style>
