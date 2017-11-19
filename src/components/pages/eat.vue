<template>
    <div class="eat">
        <h2 :class="classH2">eat</h2>
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
  } 
}
</script>
<style lang="sass">

</style>


