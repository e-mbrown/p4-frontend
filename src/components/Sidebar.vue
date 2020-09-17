<template>
<div id="sidebar" class='level-center section'>
        <div class = 'level-center text'>
            <h1 class="title">Recreation</h1>
            <i class="fa fa-paper-plane-o subtitle is-3" aria-hidden="true"></i>
        </div>
        <button id="first" class="level-item button">Store</button>
        <button id="second" class="button">Personal</button>
        <button id="third" class="button">Signin</button>
        <button id="third" class="button">Register</button>

</div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        
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