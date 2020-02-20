<template>
  <!-- 右侧菜单 -->
  <div class="right-nav">
    <ul class="r-with-gotop">
      <li class="r-toolbar-item">
        <router-link to="/mySelf" class="r-item-hd">
          <i class="iconfont icon-user"></i>
          <div class="r-tip__box">
            <span class="r-tip-text">用户中心</span>
          </div>
        </router-link>
      </li>
      <li class="r-toolbar-item">
        <router-link to="/cartsShop" class="r-item-hd">
          <i class="iconfont icon-cart" :data-badge="cartData.length"></i>
          <div class="r-tip__box">
            <span class="r-tip-text">购物车</span>
          </div>
        </router-link>
      </li>
      <li class="r-toolbar-item">
        <a class="r-item-hd">
          <i class="iconfont icon-aixin"></i>
          <div class="r-tip__box">
            <span class="r-tip-text">我的收藏</span>
          </div>
        </a>
      </li>
      <li class="r-toolbar-item">
        <a class="r-item-hd">
          <i class="iconfont icon-liaotian"></i>
          <div class="r-tip__box">
            <span class="r-tip-text">联系客服</span>
          </div>
        </a>
      </li>
      <li class="r-toolbar-item">
        <a class="r-item-hd">
          <i class="iconfont icon-liuyan"></i>
          <div class="r-tip__box">
            <span class="r-tip-text">留言反馈</span>
          </div>
        </a>
      </li>
      <li class="r-toolbar-item to-top">
        <Back-top :height="28" :bottom="20" :right='5'>
          <div class="top">Top</div>
        </Back-top>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["cartData"])
  }
};
</script>
<style scoped>
.top {
  color: #fff;
  border-radius: 2px;
}
</style>
