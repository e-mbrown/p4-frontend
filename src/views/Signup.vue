<template>
    <div class="Signup">
        <b-field label="FirstName"
            type="is-success">
            <b-input v-model="firstName" value="" placeholder="First name" maxlength="30"></b-input>
        </b-field>

        <b-field label="LastName"
            type="is-success">
            <b-input v-model="lastName" value="" placeholder="Last name" maxlength="30"></b-input>
        </b-field>

        <b-field label="Username"
            type="is-success">
            <b-input v-model="username" value="" placeholder="Username" maxlength="30"></b-input>
        </b-field>
        
        <b-field label="Email"
            type="is-success">
            <b-input v-model="email" value="" placeholder="Username" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model="password" type="password"
                value="" placeholder="password"
                password-reveal>
            </b-input>
        </b-field>
        <br>
        <button class='button is-primary' @click="handleSign">Signup!</button>
        <h3></h3>
    </div>
</template>

<script>

export default {
    name:"Signup",
    props: [],
    data: function() {
        return {
            username:'',
            password:'',
            email:'',
            firstName: '',
            lastName: '',
        }
    },
    methods: {
        collect: function(id) {
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
            })
        
        },
        handleSign: function(){
            fetch(`${this.$URL}/auth/users/register/`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    first_name: this.firstName,
                    last_name: this.lastName,
                    username: this.username,
                    password: this.password,
                    email: this.email
                }),
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                if(data.username) {
                    this.collect(data.id)
                    this.$emit('signed', data)
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