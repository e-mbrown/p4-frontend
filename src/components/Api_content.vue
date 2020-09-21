<template>
    <div id="games">
        <div id="banner"><h2>
            {{banner_head}}
            {{banner_text}}
        </h2>
        </div>
        <div id="content-contain">
            <div class='sorter'>
                <h2 class="subtitle">Sort</h2>
                <ul>
                    <li>Release Date</li>
                    <li>Alphabetical - A to Z</li>
                </ul>
            </div>
            <div class='products'>
               <div class='display' v-for="game in games" :key="game">
                    <router-link to="/game">
                        <img role="link" @click="changeId(game.id)" :src="game.cover" :alt="game.name">
                    </router-link>
                </div>
            
            </div>
        </div>
    </div>
</template>
<script>
    import gameStore from '../stores/GamesStore.js'
export default {
    name: 'Content',
    props: ["token","banner_head", "banner_text",],
    data: function() {
        return{
            games:'',
        }
    },
    created: function() {
            this.getGames()   
    },
    methods: {
        getGames: function() {
            fetch(`${this.$URL}/gaming/games/`, {
                method: "get",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) =>{
                this.games = data
                console.log(this.games)
            })
        },
        changeId: function(id) {
            console.log(id)
            gameStore.methods.changeId(id)
        }
    }
}
</script>
<style>
    #games{
        width: 95%;
        margin: 15px auto;
        height: 100vh;
        overflow-x: scroll;
    }
    #banner{
        width: 100%;
        background-color: black;
        height: 25%;
        text-align: left;
        padding: 10px;
    }
    #content-contain{
        display: grid;
        grid-template-columns: [a] 1fr [b] 3fr [c];
        padding: 10px;
        text-align: left;
    }
    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .display {
        flex: 0 49%;
    }



</style>