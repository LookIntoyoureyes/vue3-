<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />

    <button v-if="active < all" @click="clear">清理</button>
    <div v-if="todos.length">
      <transition-group name="ulGroup" tag="ul">
        <li v-for="(todo, i) in todos" :key="todo.title">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
          <span class="remove-btn" @click="removeTodo($event, i)">❌</span>
        </li>
      </transition-group>
    </div>
    <div v-else>暂无数据</div>
    <div>
      <span @click="allTodo">全选</span>
      <input type="checkbox" v-model="allDone" @click="allTodo" />
      <span>{{ active }} / {{ all }}</span>
    </div>
    <transition name="infoShow">
      <div class="info" v-if="showInfo">
        <div class="info-imation">哥，你啥也没输入</div>
      </div>
    </transition>
    <span class="dustbin"> 🗑 </span>
    <div class="animate-wrap">
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="animate" v-show="animate.show">📋</div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
let title = ref("");
let showInfo = ref(false);
let todos = reactive([
  { title: "吃饭", done: false },
  { title: "睡觉", done: false },
  { title: "学习vue3", done: false },
]);
const active = computed(() => todos.filter((todo) => todo.done).length);
const all = computed(() => todos.length);
const allDone = computed(() => active.value === all.value);
function addTodo() {
  if (title.value) {
    todos.push({
      title: title.value,
      done: false,
    });
    title.value = "";
  } else {
    showInfo.value = true;
    setTimeout(() => {
      showInfo.value = false;
    }, 1000);
  }
}
function clear() {
  todos = [];
}
function allTodo() {
  if (allDone.value) {
    todos.map((todo) => (todo.done = false));
  } else {
    todos.map((todo) => (todo.done = true));
  }
}
function removeTodo(e, i) {
  animate.el = e.target;
  animate.show = true;
  todos.splice(i, 1);
}
let animate = reactive({ show: false, el: null });

function beforeEnter(el) {
  let dom = animate.el;
  let rect = dom.getBoundingClientRect();
  let x = window.innerWidth - rect.left - 60;
  let y = rect.top - 10;
  el.style.transform = `translate(-${x}px, ${y}px)`;
}
function enter(el, done) {
  document.body.offsetHeight;
  el.style.transform = `translate(0,0)`;
  el.addEventListener("transitionend", done);
}
function afterEnter(el) {
  animate.show = false;
  el.style.display = "none";
}
</script>

<style scoped lang="scss">
.animate-wrap .animate {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 100;
  transition: all 0.5s linear;
}
.info {
  position: fixed;
  top: 20px;
  width: 200px;
}
.info-imation {
  padding: 20px;
  color: white;
  background: #d88986;
}
.infoShow-enter-from {
  transform: translateY(-60px);
}
.infoShow-leave-active {
  transition: opacity 0.3s ease;
}
.infoShow-enter-active {
  transition: opacity 0.3s ease;
}
.infoShow-leave-to {
  transform: translateY(-60px);
}
.ulGroup-move {
  transition: transform 0.8 ease;
}
.ulGroup-enter-active,
.ulGroup-leave-active {
  transition: all 1s ease;
}
.ulGroup-enter-from,
.ulGroup-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.dustbin {
  position: fixed;
  right: 10px;
  top: 10px;
}
li {
  list-style: none;
}
</style>
