<template>
    <div>
        这是首页
    </div>
    <!-- <Rate :value="score" @updateNum="updateNum"></Rate> -->
    <Rate v-model="score"></Rate>
</template>

<script setup>
    // import Todolist from '../components/Todolist.vue';
    import Rate from '../components/Rate.vue';
    import {ref} from 'vue'
    let score = ref(2.5)
    // function updateNum(date) {
    //     score.value = date
    // }
</script>