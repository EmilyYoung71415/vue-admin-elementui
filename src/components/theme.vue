<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header">
        <span style="line-height: 36px;">偏好设置</span>
      </div>
      <div class="mulColor">
        <el-radio-group v-model="moreTheme" @change="changeTheme">
          <el-radio label="20a0ff">默认-20a0ff</el-radio>
          <el-radio label="fa4f52">红色-fa4f52</el-radio>
          <el-radio label="0000ff">蓝色-0000ff</el-radio>
          <el-radio label="008000">绿色-008000</el-radio>
          <el-radio label="00a597">绿色-00a597</el-radio>
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
export default {
  data() {
    return {
      moreTheme: "20a0ff",
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
    let themeClassName = "";
    let localTheme = localStorage.getItem("themeValue");
    themeClassName = localTheme ? localTheme : "20a0ff";
    this.changeClass(document.body, "custom-" + themeClassName);
    this.moreTheme = themeClassName;
  },
  methods:{
      changeClass(element, className) {
        if (!element || !className) return;
        element.className = className;
      },
      changeTheme(themeValue) {
        this.changeClass(document.body, "custom-" + themeValue);
        this.moreTheme = themeValue;
        localStorage.setItem("themeValue", themeValue);
      }
  }
}
</script>
<style scoped>
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

