<template>
<b-navbar id="sidebar" class='navbar'>
        <template slot="brand" class = 'level-center text navbar-brand'>
            <h1 class="title" id="title">Recreation</h1>
            <i id ="fa" class="fa fa-paper-plane-o subtitle is-3" aria-hidden="true"></i>
        </template>
        
        <template slot="start" id="drop" class="navbar-menu ">
            <div id="innerg" class="navbar-start ">
            <b-navbar-item tag="router-link" id="first" class="navbar-item text " to="/">Store</b-navbar-item>
            <b-navbar-item tag="router-link" id="second" class="navbar-item text" to="/personal">Personal</b-navbar-item>
            <b-navbar-item tag="router-link" id="third" class="navbar-item text" to="/login" v-if="!loggedIn">Signin</b-navbar-item>
            <b-navbar-item id="fourth" class="navbar-item text" v-if="loggedIn" @click="logout">Logout</b-navbar-item>
            <b-navbar-item tag="router-link" id="fifth" class="navbar-item text" to="/register" v-if="!loggedIn">Register</b-navbar-item>
            </div>
        </template>
        <div id="navbar-end"></div>
</b-navbar>
</template>

<script>
export default {
    name: 'Sidebar',
    props: ["loggedIn"],
    methods: {
        logout: function(){
            this.$emit("logout")
        }
    }
}
</script>

<style>

    #sidebar{
        display: grid;
        grid-template-rows: [aa] 1fr [ab] 4fr [ac] ;
        background-color: #64958F;
        min-height: 100vh;
        font-size: 24;
        padding: 20px;
    }
    #fa{
        position: relative;
        top: 20px;
        left: 20px;
        color:#eea171;

    }
    #innerg{
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: [b-navbar-item] 1fr [b];
        width: 60%;
    }
     .navbar-item{
        display: block;
    }
    #first, #second, #third, #fourth, #fifth {
        font-family: 'Montserrat Alternates', sans-serif;
    }
    #title{
        font-family: 'Lobster', cursive;
        color: #fcba91;
    }
    @media screen and (max-width: 768px) {
        #sidebar{
            grid-template-columns: [aa] 3fr [ab] .5fr [ac];
            grid-template-rows: [a]1fr[b];
            min-height:0;
            padding: 1%;
        }
        #first, #second, .text{
        grid-column: 1;
        }
        .navbar-burger {
            grid-column: ae/af;
        }
        #innerg{
            grid-template-rows: repeat(4, 1fr);
        grid-template-columns: [b-navbar-item] 1fr [b];
        }
    }
</style>