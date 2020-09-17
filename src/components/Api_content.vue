<template>
    <div id="games">
        {{message}}
    </div>
</template>
<script>
    
export default {
    name: 'Content',
    props: {

    },
    data: function() {
        return{
            message: "Hello",
            game: [],
            URL: "localhost:8000"
        }
    },
    created: function() {
        this.getGames()   
    },
    methods: {
        getGames: function() {
            fetch(`${URL}/gaming/games`)
        }
    }
}
</script>
<style>

</style>