<template>
  <div>
    <nav-box></nav-box>
    <Lbt></Lbt>
    <div class="content inner" style="margin-bottom: 40px;">
      <hot-floor></hot-floor>
      <woman-floor></woman-floor>
      <man-floor></man-floor>
      <shoes-floor></shoes-floor>
    </div>
    <!-- <right-nav></right-nav> -->
    
  </div>
</template>
<script>
import NavBox from "@/components/homePage/navBox";
import Lbt from "@/components/homePage/lbt";
import HotFloor from "@/components/homePage/hot";
import WomanFloor from "@/components/homePage/woman";
import ManFloor from "@/components/homePage/man";
import ShoesFloor from "@/components/homePage/shoes";
// import RightNav from '@/components/homePage/rightNav'
export default {
  components: {
    NavBox,
    Lbt,
    HotFloor,
    WomanFloor,
    ManFloor,
    ShoesFloor
    // RightNav
  },
  mounted() {},

  data() {
    return {};
  }
};
</script>
<style scoped>

</style>
