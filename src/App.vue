<template>
  <div id="app">
    <my-header v-if="this.$route.meta.isShowHeader"></my-header>
    <my-search v-if="this.$route.meta.isShowSearch"></my-search>
    <!-- <nav-box v-if="this.$route.meta.isShowNavBox"></nav-box> -->
    <right-nav v-if="this.$route.meta.isShowRightNav"></right-nav>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
import MySearch from '@/components/search'
// import NavBox from '@/components/navBox'
import RightNav from '@/components/rightNav'
import MyHeader from '@/components/myHeader'
import MyFooter from '@/components/myFooter'
export default {
  components:{
    MyHeader,
    MySearch,
    RightNav,
    // NavBox,
    MyFooter
  }
}
</script>

<style>
.swiper-container-horizontal>.swiper-pagination .swiper-pagination-bullet{
    margin:0 2px;
}
</style>
