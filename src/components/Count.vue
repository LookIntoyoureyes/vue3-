<template>
    <h1 @click="addCount">
        {{count}}
        {{dobule}}
    </h1>
</template>

<script setup>
    import {computed} from 'vue'
    import { useStore } from '../store/gindex';
    let store = useStore()
    let count = computed(()=>store.state.count)
    let dobule = computed(()=>store.getters.dobule)
    function addCount() {
        store.dispatch('asyncAdd',5)
    }
</script>