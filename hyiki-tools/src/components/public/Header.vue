<template>
    <div class="header">
        <div class="line"></div>
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
        <el-menu-item index="1">
            <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">热门工具</template>
            <el-menu-item index="2-1">
                <router-link to="/map">地图</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>联系站长</el-menu-item>
        <el-menu-item index="4">
            <a href="http://212.64.41.81/parse?address=%E5%B9%BF%E4%B8%9C%E5%B9%BF%E5%B7%9E%E6%B5%B7%E7%8F%A0%E5%B9%BF%E4%B8%9C%E8%B4%A2%E7%BB%8F%E5%A4%A7%E5%AD%A6,%E7%8E%8B%E6%B5%A9%E8%BD%A918520548170" target="_blank">测试</a>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>