const gameStore = {
    data:{
        id:'',
    },
    methods: {
        changeId(id){
            console.log(id)
            gameStore.data.id = (id)
        }
    }
}

export default gameStore