<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <div id="v-content" v-bind:style="{minHeight: Height+'px'}">
      <router-view v-on:public_header="public_header" v-on:public_footer="public_footer"></router-view>
    </div>
    <app-footer v-if="footer_show"></app-footer>
  </div>
</template>
<script>
import Header from './components/public/Header'
import Footer from './components/public/Footer'
 
export default {
  name: 'App',
  data(){
      return {
        header_show:true,
        footer_show:true,
        Height: 0,
        headerHeight: 62,
        footerHeight: 62
      }
  },
  components: {
    'app-header':Header,
    'app-footer':Footer,
  },
  methods:{
      //是否显示头部
      public_header:function (bool) {
        this.header_show = bool;
      },
      //是否显示底部
      public_footer:function (bool) {
          this.footer_show = bool;
      }
  },
  mounted(){
    //动态设置内容高度 让footer始终居底   header+footer的高度是100
    this.Height = document.documentElement.clientHeight - this.headerHeight - this.footerHeight;  
　　//监听浏览器窗口变化　
    window.onresize = ()=> {this.Height}
  }
}
</script>
 
<style>
body {
  margin: 0;
}
</style>