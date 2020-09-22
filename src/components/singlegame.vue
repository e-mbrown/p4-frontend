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
                    <a class="card-footer-item" @click="addOwn">Owned</a>
                    <a class="card-footer-item">Delete</a>
                </footer>
                
            </div>
        </div>
        <div class="review">
            <h2 class="title">Reviews!</h2>
                <div v-for="review in reviews" :key="review">
                        <div class="cards">
                <div class="card-content">
                    <div class="contents">
                        <h3 class="subtitle is-4">{{review.header}}</h3>
                        <h3 class="subtitle"> by {{review.owner}}</h3>
                        <p>{{review.text}}</p>
                        <div class="block" v-if="!view">
                            <b-field label="Header">
                            <b-input
                                value=""
                                placeholder="Make your title pop!"
                                v-model="header"
                                required>
                            </b-input>
                            </b-field>
                            <b-field label="Message">
                                <b-input
                                    type="textarea"
                                    value=""
                                    placeholder="Your Thoughts"
                                    v-model="text"
                                    required>
                                </b-input>
                            </b-field>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a class="card-footer-item" v-if="view" @click="view=false">Update</a>
                        <a class="card-footer-item" v-if="!view" @click="view=true, upReq(review.id)">Update</a>
                        <a class="card-footer-item" @click="delRe(review.id)">Delete</a>
                    </footer>
                    </div>
                </div>
            </div>
        </div>
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
            header:'',
            text:'',
            reviews:'',
            is_official:false,
            view: true,
            token: gameStore.data.token,

        }
    },
    created: function() {
        this.retrieveGame()
        console.log(gameStore.data.token)
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
                console.log(data.reviews)
                this.reviews = data.reviews
                this.present = data
                this.banner = data.banner
                this.cover = data.cover
                this.truncate(data.description)
            })
        },
        addWish() {
            const newList= this.user.watch_list.map(game => game.id)
            console.log(newList)
            if(newList.includes(this.game)){
            
                console.log('Game is already in wish list')
            }
            else{
                newList.push(this.game)
                fetch(`${this.$URL}/auth/many/${this.user.id}/`, {
                    method: "PATCH",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    options: {
                        mode: 'no-cors'
                    },
                    body: JSON.stringify({
                        // wishlist: this.user.watch_list,
                        watch_list: newList
                    })
                })
                .then((response) => console.log(response))
            }
            this.user.watch_list = newList
        },
        addOwn() {
            const newList= this.user.games.map(game => game.id)
            if(newList.includes(this.game)){
            
                console.log('Game is already owned')
            }
            else{
                newList.push(this.game)
                fetch(`${this.$URL}/auth/many/${this.user.id}/`, {
                    method: "patch",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        // wishlist: this.user.watch_list,
                        games: newList
                    })
                })
                .then((response) => console.log(response))
            }
            this.user.watch_list = newList
        },
        upReq(id){
            console.log(this.token, this.header, this.text)
                fetch(`${this.$URL}/gaming/reviews/${id}/`, {
                method: "put",
                headers: {
                    "Authorization": `JWT ${this.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    header: this.header,
                    text: this.text
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
        },
        delRe(id){
            console.log(this.token)
                fetch(`${this.$URL}/gaming/reviews/${id}/`, {
                method: "delete",
                headers: {
                    "Authorization": `JWT ${this.token}`,
                    "Content-Type": "application/json"
                },
            })
            .then(response => response.json())
        }
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
}
.cards {
    display: block;
    top: 0%;
    padding: 5%;
}
.image {
    padding: 8%;
}
.content > p{
    font-size: 16px;
}
.review {
    margin: 15%;
}
@media screen and (max-width: 768px) {
        #depth{
            /* overflow-x: auto; */
        }
}
</style>