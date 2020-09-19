<template>
    <div class="Login">
        <b-field id="message" label="Username"
            type="is-success">
            <b-input v-model="username" value="" placeholder="Username" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model="password" type="password"
                value="" placeholder="password"
                password-reveal>
            </b-input>
        </b-field>
        <br>
        <button class='button is-primary' @click="handleLogin">Login{{$attrs.URL}}</button>
        <h3></h3>
    </div>
</template>

<script>

export default {
    name:"Login",
    props: [],
    data: function() {
        return {
            username:'',
            password:'',
        }
    },
    methods: {
        handleLogin: function(){
            fetch(`http://localhost:8000/auth/users/login/`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    username: this.username,
                    password: this.password,
                }),
            })
            .then(response => response.json())
            .then((data) => {
                if(data.token) {
                    this.$emit('loggedIn', data)
                }
                else {
                    alert('Your login is incorrect')
                }
            })
        },
        check: function(){
            
        }
    
}
}
</script>
