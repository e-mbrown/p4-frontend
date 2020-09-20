<template>
    <div id="personal">
        <h3 class='subtitle'>Games you're watching</h3>
        <div id='wishlist'>
            <div class="games" v-for="game in watchList" :key="game">
                <a :id="game.id">
                    <img :src="game.cover" :alt="game.name">
                </a>
            </div>
        </div>
            <h3 class="subtitle"> Games you own</h3>
         <div id='owned'>
            <div class="games" v-for="game in watchList" :key="game">
                <a :id="game.id" @click="isCardModalActive = true">
                    <img :src="game.cover" :alt="game.name">
                </a>
            </div>
         </div>
        <div class="review is-fluid" v-if="clicked">
            <b-field label="Header" :label-position="labelPosition">
                <b-input v-model="header" value=""></b-input>
            </b-field>

            <b-field label="Message"
                :label-position="labelPosition">
                <b-input maxlength="500" type="textarea"></b-input>
            </b-field>
        </div>
    </div>
</template>

<script>
import gameStore from '../stores/GamesStore.js'


export default {
    name:'Personal',
    props:[],
    data: function(){
        return{
            isCardModalActive: false,
            owned: gameStore.data.user.games,
            watchList: gameStore.data.user.watch_list,
            
        }
    },
    created: function(){
        console.log(gameStore.data.user)
    },
    methods: {
    }
}
</script>

<style >
    #personal{
         height: 100vh;
    overflow-x: scroll;
    }
    #wishlist, #owned{
        display: flex;
        width: 70vw;
        margin:auto;
        justify-content: space-between;
    }
    img {
        width: 200px;
        height: 300px;
        margin: auto;
    }
</style>