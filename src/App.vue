<script setup></script>
<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          mode="vertical"
          text-color="#000"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template v-slot:title><i class="el-icon-location"></i>我的工作台</template>
            <router-link to="/">
              <el-menu-item index="1-1"> 首页 </el-menu-item>
            </router-link>
          </el-submenu>
          <el-menu-item index="2">
            <router-link to="/about">
              <template v-slot="title">
                <i class="el-icon-menu"></i>
                关于
              </template>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/animation">
              <template v-slot="title">
                <i class="el-icon-document"></i>
                动画
              </template>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<style>
#app,
.el-container {
  height: 100vh;
}
body {
  margin: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 50px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
