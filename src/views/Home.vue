<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Content v-bind:banner_head="b_head" v-bind:banner_text="b_text"></Content>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Sidebar from '@/components/Sidebar.vue'
import Content from '@/components/Api_content.vue'


export default {
  name: 'Home',
  components: {
    Sidebar,
    Content
  },
    data: function() {
        return{
            message: "Hello",
            b_head:"Browse all Games",
            b_text:"",
            
        }
    },
}  
</script>
<style>
  .home{
        display: grid;
        grid-template-columns: [a] 1.5fr [b] 4fr [c];
    }
</style>
