<template>
    <div class="page">
        <Sidebar></Sidebar>
        <Depth></Depth>
        
        
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Depth from '@/components/singlegame.vue'

export default {
    name: 'Gamepage',
    components: {
        Sidebar,
        Depth

    }
}
</script>

<style>
    .page{
        display: grid;
        grid-template-columns: [a] 1.5fr [b] 4fr [c];
    }
</style>