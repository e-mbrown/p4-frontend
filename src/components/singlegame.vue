<template>
    <div id="depth">
        {{present}}
    </div>
</template>

<script>
import gameStore from '../stores/GamesStore.js'

export default {
    name: 'Depth',
    props:[],
    data: function() {
        return{
            game: gameStore.data.id,
            present:'',
        }
    },
    created: function() {
        this.retrieveGame()
    },
    methods: {
        retrieveGame() {
            console.log(this.game)
            fetch(`${this.$URL}/gaming/games/${this.game}/`, {
                method: "get",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) =>{
                this.present = data
            })

        }
    }
}
</script>

<style>

</style>