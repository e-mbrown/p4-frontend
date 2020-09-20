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
        <br>
        <br>
        <br>
        <!-- <div class="review is-fluid">
        <b-field label="Header" :label-position="labelPosition">
            <b-input v-model="header" value=""></b-input>
        </b-field>

        <b-field label="Email"
            :label-position="labelPosition"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            :label-position="labelPosition"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            :label-position="labelPosition"
            type="is-warning">
            <b-input value="123" type="password" maxlength="30"></b-input>
            <template slot="message">
                <div>Password is too short</div>
                <div>Password must have at least 8 characters</div>
            </template>
        </b-field>

        <b-field label="Subject"
            :label-position="labelPosition">
            <b-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
        </b-field>

        <b-field label="Message"
            :label-position="labelPosition">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field>
    </div> -->
    {{game}}
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
            is_official:false,

        }
    },
    created: function() {
        this.retrieveGame()
        console.log(gameStore.data.user)
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
            const newList= this.user.watch_list.map(game => game.id)
            newList.push(this.game)
            console.log(newList)
            fetch(`${this.$URL}/auth/many/${this.user.id}/`, {
                method: "patch",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // wishlist: this.user.watch_list,
                    watch_list: newList
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
.review {

}
</style>