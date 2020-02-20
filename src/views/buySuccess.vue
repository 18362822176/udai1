<template>
  <div class="modify-success__box text-center">
    <div class="icon b-r50">
      <i class="iconfont icon-checked cf fz24"></i>
    </div>
    <div class="text c6">购买成功！</div>
    <router-link to="/" class="btn">
      <span id="sec">5</span> 秒后跳转至主页面，如果浏览器未跳转请点击这里
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    //关闭窗口倒计时
      var time = $("#sec").text();
        var close = window.setInterval(() => {
        time--;
        $("#sec").text(time)
        if (time < 0) {
          clearInterval(close)
          this.$router.push({ path: "/" });
        }
      }, 1000);
  }
};
</script>
<style scoped>
.modify-success__box {
  height: 440px;
}
</style>
