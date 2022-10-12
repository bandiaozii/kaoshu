<template>
<div>
  <button @click="rew">考点消失 </button>
  <button @click="kaishi" @touchstart="gotouchstart" @touchmove="gotouchmove" @touchend="gotouchend">点击重现 </button>

</div>
</template>

<script>
export default {
  name: "beiti",
  methods: {
    kaishi() {
      var ss =   document.getElementsByTagName("code");
      for(var i=0; i<ss.length; i++){
        ss[i].addEventListener("click",function(e){
          e.target.style.color = "#4f6d8e"
        })
      }
    },
    rew() {
      var ss = document.getElementsByTagName("code");
      for (var i = 0; i < ss.length; i++) {
        ss[i].style.color = "#eeeeee"}
    },
    gotouchstart() {
      window.isClick = true;
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(function () {

        var select = window.getSelection();
        if(!select) return;
        var range = select.getRangeAt(0);
        var a = document.createElement("code");

        range.surroundContents(a);

        window.isClick = false
      }, 5000)
    },
    gotouchend() {
      if (window.isClick) {
        console.log("点击");
      }
    },
    gotouchmove() {
      console.log("手指移动了");
      window.isClick = false
    },
    beforeDestroy() {
      clearTimeout(this.timeOut)
    },
  }
}
</script>

<style scoped>

</style>




