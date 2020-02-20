<template>
  <section class="scroll-floor floor-2">
    <div class="floor-title">
      <i class="iconfont icon-skirt fz16"></i> 女装
      <div class="case-list fz0 pull-right">
        <a href="item_category.html">高端女装</a>
        <a href="item_category.html">时尚女装</a>
        <a href="item_category.html">上装</a>
        <a href="item_category.html">下装</a>
        <a href="item_category.html">裙装</a>
        <a href="item_category.html">内衣</a>
      </div>
    </div>
    <div class="con-box">
      <a class="left-img hot-img" href>
        <img src="../../assets/images/floor_2.jpg" alt class="cover" />
      </a>
      <div class="right-box">
        <router-link class="floor-item" v-for="item,index in goodswomanlist" :to="'/goodsShow/'+item.id" :key="index">
          <div class="item-img hot-img">
            <img :src="item.url" alt class="cover" />
          </div>
          <div class="price clearfix">
            <span class="pull-left cr fz16">￥{{ item.price }}</span>
            <span class="pull-right c6">进货价</span>
          </div>
          <div class="name ep" :title="item.title">{{ item.title }}</div>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
    };
  },
 mounted() {
    this.getGoodsWoman({ sort: "女装", num: 8 });
  },
  methods: {
    ...mapActions(["getGoodsWoman"])
  },
  computed: {
    ...mapState(["goodswomanlist"])
  }
};
</script>
<style scoped>
</style>
