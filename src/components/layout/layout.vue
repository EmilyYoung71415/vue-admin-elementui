<template>
 	<div class="sidemenu">
        <el-menu  class="el-menu-vertical-demo" :default-active="$route.path" router="router">
        <el-menu-item index="/">
            <i class="el-icon-setting"></i>
            <span slot="title">换肤</span>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>功能一</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/sleep">睡觉</el-menu-item>
                <el-menu-item index="/study">上课</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>功能二</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/eat">吃饭</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
         <router-view></router-view>
	</div> 
</template>

<script>

export default {
  components: {
    
  },
  methods:{
    methods: {
       
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	.sidemenu{
       float: left;
       .el-menu-vertical-demo {
            width: 200px;
            min-height: 750px;
        }
    }
</style>