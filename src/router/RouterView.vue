<template>
    <div>
        <component :is="comp"></component>
    </div>
</template>

<script setup>
import { useRouter } from './gouter';
import { computed } from 'vue';
const router = useRouter()
console.log(router)
const comp = computed(()=>{
    const route = router.routes.find(route=>{
        return route.path == router.current.value
    })
    return route ? route.component : null
})
</script>