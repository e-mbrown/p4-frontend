<template>
    <div id="personal">

        <h3 id="a" class='subtitle'>Games you're watching</h3>
        <div id='wishlist'>
            <div class="games" v-for="game in watchList" :key="game">
                <a :id="game.id">
                    <img :src="game.cover" :alt="game.name">
                </a>
            </div>
        </div>

            <h3 id="b" class="subtitle"> Games you own</h3>
        <div id='owned'>
            <div class="games" v-for="game in owned" :key="game">
                <a :id="game.id" @click="isComponentModalActive = true, c_id = game.id">
                    <img :src="game.cover" :alt="game.name">
                </a>
            </div>
        </div>

        <h3 id="c" class="subtitle">Your Reviews</h3>
        <div class="reviews"  :v-if="revLen > 0">
            <div>
                <p class="text">You haven't written a review yet! Play a game you own and tell the world your opinion!</p>
            </div>
        </div>

        <div class="reviews"  :v-if="revLen >= 1">
            <div v-for="item in reviews" :key="item">
                <h3>{{item.header}}</h3>
            </div>
        </div>

       <section>
        <b-modal 
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal>
        <form action="">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                <p class="modal-card-title">Leave a Review!</p>
                <button
                    type="button"
                    class="delete"
                    @click="isComponentModalActive=false"/>
                </header>
            <section class="modal-card-body">
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
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="isComponentModalActive=false">Close</button>
                <button class="button is-primary" v-on:click="submit(), isComponentModalActive=false">Submit</button>
            </footer>
            </div>
        </form>
      </b-modal>
    </section>
    </div>
</template>

<script>
import gameStore from '../stores/GamesStore.js'


export default {
    name:'Personal',
    props:[""],
    data: function(){
        return{
            isComponentModalActive: false,
            owned: gameStore.data.user.games,
            watchList: gameStore.data.user.watch_list,
            user_id: gameStore.data.user.id,
            header:'',
            text:'',
            reviews: gameStore.data.user.reviews,
            revLen: 0,
            token: gameStore.data.token,
            c_id:"",
        }
    },
    created: function(){
        this.collectR(gameStore.data.user.id)
    },
    methods: {
        collectR: function(id) {
            fetch(`${this.$URL}/auth/many/${id}/`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then((response) => response.json())
            .then((data) => {
                    console.log(data)
                    gameStore.data.user = data
                    this.revLen = gameStore.data.user.reviews.length()
            })   
        },
        submit(){
            console.log(this.c_id)
            fetch(`${this.$URL}/gaming/reviews/`, {
                method: "post",
                headers: {
                    "Authorization": `JWT ${this.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    game: this.c_id,
                    header: this.header,
                    text: this.text
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            this.collectR(this.user_id)
        },
    }
}
</script>

<style>
  body{
        background-color: #15434D;
    }
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
    .text, #a, #b, #c{
    color:#B39C8E;
    }
</style>