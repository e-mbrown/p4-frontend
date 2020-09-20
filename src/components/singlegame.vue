<template>
    <div id="depth">
        <div class="container" :style="{ backgroundImage: `url(${banner})`}">
            <div class="card">
                <div class="image">
                    <img :src="this.cover" alt="">
                </div>
                <div class="card-content">
                    <div class="content">
                        <p>{{game_info}}</p>
                    </div>
                </div>
                <footer class="card-footer">
                    <a class="card-footer-item" @click="addWish">Add to wishlist</a>
                    <a class="card-footer-item">Owned</a>
                    <a class="card-footer-item">Delete</a>
                </footer>
</div>
        </div>
        
        {{present}}
        {{user}}
    </div>
</template>

<script>
import gameStore from '../stores/GamesStore.js'

export default {
    name: 'Depth',
    props:[
    ],
    data: function() {
        return{
            game: gameStore.data.id,
            present:'',
            banner:'',
            cover:'',
            game_info:"",
            user: gameStore.data.user,
        }
    },
    created: function() {
        this.retrieveGame()
        console.log(this.$URL)
    },
    methods: {
        truncate(data) {
            if (data.length > 100) {
                data = data.substring(0, 300) + "...";
                this.game_info = data
                console.log(data)
            }
            else{
                this.game_info = data
            }
    },
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
                console.log(data)
                this.present = data
                this.banner = data.banner
                this.cover = data.cover
                this.truncate(data.description)
            })
        },
        addWish() {
            this.user.watch_list.push(this.game)
            console.log(this.user.watch_list)
            fetch(`${this.$URL}/auth/many/${this.user.id}/`, {
                method: "PATCH",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // wishlist: this.user.watch_list,
                    wish_list: this.user.watch_list[0]
                })
            })
            .then((response) => console.log(response))
        },
    }
}
</script>

<style>
#depth {
    height: 100vh;
    overflow-x: scroll;

}
.container {
    width: 70vw;
    height: 60vh;
    background-size: cover;
    padding: 20px;

}
.card{
    display: grid;
    grid-template-columns: [a] 1fr [b] 4fr [c] 1.5fr[d];
    position: relative;
    top: 35%;
    width: 100%;
    height: 50vh;
    margin: auto;
    background-color: olive;
    }
.image {
    padding: 8%;
}
.content > p{
    font-size: 16px;
}
</style>