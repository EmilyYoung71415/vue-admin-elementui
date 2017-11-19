<template>
  <div id="app">
    <v-sidemenu></v-sidemenu>
    <router-view/>
  </div>
</template>

<script>
import "@/assets/css/theme/0000ff/index.css"; // 换肤版本0000ff css
import "@/assets/css/theme/008000/index.css"; // 换肤版本008000 css
import "@/assets/css/theme/fa4f52/index.css"; // 换肤版本fa4f52 css
import "@/assets/css/theme/20a0ff/index.css"; // 换肤版本20a0ff css
import "@/assets/css/theme/00a597/index.css"; // 换肤版本00a597 css
import '@/assets/common.scss';
import layout from '@/components/layout/layout'
export default {
  name: 'app',
  components:{
    'v-sidemenu':layout
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
}
</style>
