<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <div class="pull-left bgf">
        <router-link class="title" to="/mySelf/firstPage">U袋欢迎页</router-link>
        <dl class="user-center__nav" v-for="item,index in msg" :key="index">
          <a>
            <router-link tag="dd" @click.native="chooseOne(index)" :class="{active:index === idx}" :to='item.mypath'>{{ item.title }}</router-link>
          </a>
        </dl>
      </div>
      <router-view />
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
        msg:[
            {id:1,title:'收货地址',mypath:'/mySelf/adress'},
            {id:2,title:'资金管理',mypath:''},
            {id:3,title:'积分平台',mypath:''},
            {id:4,title:'个人资料',mypath:''},
            {id:5,title:'我的订单',mypath:''},
        ],
        idx:-1
    };
  },
  methods: {
      chooseOne(i){
          this.idx = i
      }
  },
};
</script>
<style scoped>
.active{background-color: #e0e0e0}
</style>
