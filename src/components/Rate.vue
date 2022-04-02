<template>
    <div>
        <div class="rate" @mouseout="mouseout">
            <span v-for="num in 5" :key="num" @mousemove="mouseOver(num)">☆</span>
            <span class='hollow' :style="fontwidth">        
                <span @mouseover="mouseOver(num)" @click="sendNum(num)" v-for='num in 5' :key="num">★</span>      
            </span>
        </div>
    </div>
</template>
<script setup>
    import {defineProps,computed,ref,defineEmits} from 'vue'
    let props = defineProps({
        modelValue: Number,
    })
    let width = ref(props.value)
    function mouseOver(num) {
        width.value = num
    }
    function mouseout() {
        width.value = props.value
    }
    const fontwidth = computed(()=>{
        return `width:${width.value}em`
    })
    let emits = defineEmits(['update:modelValue'])
    function sendNum(num) {
        emits('update:modelValue',num)
    }
</script>
<style>
.rate{ 
    position:relative; 
    display: inline-block;
}
.rate > span.hollow { 
    position:absolute; 
    display: inline-block; 
    top:0; 
    left:0; 
    width:0; 
    overflow:hidden;
}
</style>