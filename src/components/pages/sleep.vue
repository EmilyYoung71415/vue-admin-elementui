<template>
  <div class="eat">
      <h2 :class="classH2">Sleep</h2>
      <!--
          动态绑定class  class后缀由localstorage而来
      -->
  </div>
</template>

<script>

export default {
  data(){
      return {
        classH2:'custome-20a0ff'//默认class
      }
  },
  mounted(){
      let curcolor  = localStorage.getItem("themeValue");
      this.classH2 = 'custome-' + curcolor;
  },
  components: {
    
  },
  methods:{
    methods: {
       
    }
  }
}
</script>

