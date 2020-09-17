<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Content></Content>
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
  }
}
</script>
<style>
  .home{
        display: grid;
        grid-template-columns: [a] 1.5fr [b] 4fr [c];
    }
</style>
