const gameStore = {
    data:{
        token:'',
        id:1,
        user: '',
    },
    methods: {
        changeId(id){
            console.log(id)
            gameStore.data.id = (id)
        }
    }
}

export default gameStore

