<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header">
        <span style="line-height: 36px;">偏好设置</span>
      </div>
      <div class="mulColor">
        <el-radio-group v-model="themecolor" >
          <el-radio label="20a0ff">默认-20a0ff</el-radio>
          <el-radio label="fa4f52">橙色-fa4f52</el-radio>
          <el-radio label="0000ff">紫色-0000ff</el-radio>
          <el-radio label="008000">草绿-008000</el-radio>
          <el-radio label="00a597">蓝绿-00a597</el-radio>
        </el-radio-group>
      </div>
    </el-card>
    <div class="block">
      <span class="demonstration">Button: </span>
      <span class="wrapper">
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="info">信息按钮</el-button>
       </span>
    </div>

    <div class="block">
      <el-tag class='tag-item' v-for="tag in tags" :type="tag.type" :key='tag.type'>
        {{tag.name}}
      </el-tag>
    </div>

    <div class="block">
      <el-alert class='alert-item' title="成功提示的文案" type="success">
      </el-alert>
      <el-alert class='alert-item' title="消息提示的文案" type="info">
      </el-alert>
      <el-alert class='alert-item' title="警告提示的文案" type="warning">
      </el-alert>
      <el-alert class='alert-item' title="错误提示的文案" type="error">
      </el-alert>
    </div>
  </div>
</template>

<script>
import { toggleClass } from '@/utils/index'
export default {
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'gray' },
        { name: '标签三', type: 'primary' },
        { name: '标签四', type: 'success' },
        { name: '标签五', type: 'warning' },
        { name: '标签六', type: 'danger' }
      ]
    }
  },
  mounted(){
    toggleClass(document.body, "custom-" + this.themecolor);
  },
  computed:{
    themecolor:{
      get(){
        return this.$store.state.themecolor;
      },
      set(val){
        this.$store.commit('setThemeColor',val);
      }
    }
  },
  watch:{
    themecolor:{
      handler(){
        toggleClass(document.body, "custom-" + this.themecolor);
      }
    }
  }
}
</script>
<style scoped>
  .app-container{
    float: right;
    width: 80%
  }
  .box-card{
    width: 400px;
    margin: 20px auto;
  }
  .block{
    padding: 30px 24px;
  }
  .alert-item{
    margin-bottom: 10px;
  }
  .tag-item{
    margin-right: 15px;
  }
  .link-title{
    margin-left:35px;
  }
  .mulColor{
    margin-top: 15px;
    padding-bottom:5px;
  }
</style>

