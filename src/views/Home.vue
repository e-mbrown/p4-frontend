<template>
  <div class="home">
    <Content v-bind:banner_head="b_head" v-bind:banner_text="b_text"></Content>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Content from '@/components/Api_content.vue'


export default {
  name: 'Home',
  components: {
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
</style>
