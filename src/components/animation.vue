<template>
    <div>
        <button @click="attachclick">触发效果</button>
        <transition name="animas">
            <h1 v-if="animationShow">vue3动画效果</h1>
        </transition>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    let animationShow = ref(true)
    function attachclick() {
        animationShow.value = !animationShow.value
    }
</script>

<style>
    .animas-enter-active,
    .animas-leave-active {
        transition: opacity 1s linear;
        /* animation: move 1s linear infinite; */
    }
    .animas-enter-from,
    .animas-leave-to {
        opacity:0
    }
    /* @keyframes move {
        0% {
            opacity:1
        }
        50% {
            opacity:0.5
        }
        100% {
            opacity:0
        }
    } */
</style>