<template>
<div id="sidebar" class='level-center section'>
        <div class = 'level-center text'>
            <h1 class="title">Recreation</h1>
            <i class="fa fa-paper-plane-o subtitle is-3" aria-hidden="true"></i>
        </div>
        <b-button tag="router-link" id="first" class="level-item button" to="/">Store</b-button>
        <b-button tag="router-link" id="second" class="button" to="">Personal</b-button>
        <b-button tag="router-link" id="third" class="button" to="/login" v-if="!loggedIn">Signin</b-button>
        <b-button id="third" class="button" v-if="loggedIn" @click="logout">Logout</b-button>
        <b-button tag="router-link" id="third" class="button" to="/register" v-if="!loggedIn">Register</b-button>
        
</div>
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
        grid-template-rows: [aa] 2fr [ab] 1fr [ac] 1fr [ad] 1fr [ae];
        background-color: #64958F;
        min-height: 100vh;
        font-size: 24;
    }
    .text{
         grid-row: aa/ab;
    }
    
    .title{
        font-family: 'Lobster', cursive;
        color: #ffbb91;
    }
    .subtitle{
        color:#ffbb91;
    }
    .button{
        background-color: #56c399;
    }
    #first{
        grid-row: ac/ad;
    }
    #second{
        grid-row: ad/ae;
    }
</style>