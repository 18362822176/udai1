<template>
  <div class="tab-header">
    <div class="inner">
      <div class="pull-left">
        <div class="pull-left">
          嗨，欢迎来到
          <span class="cr">U袋网</span>
        </div>
        <router-link to="/">首页</router-link>
        <a href="#">网店代销</a>
        <a href="#">帮助中心</a>
      </div>
      <div class="pull-right">
        <span class="cr" v-if="!isShow">
          <router-link to="/login">登录</router-link>
          <router-link to="/login/postChild">注册</router-link>
        </span>
        <b v-else>
          <span>欢迎您：{{ userName }}</span>
          <span class="u-txt" @click="loginOut">退出</span>
        </b>
        <a @click="isLogin">我的U袋</a>
        <a href="#">我的订单</a>
        <a href="#">积分平台</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      userName: "",
      isShow: false
    };
  },
  created() {
    let user = this.$local.fetch("use12");
    if (user.userTel != null) {
      this.userName = user.userTel;
      this.isShow = true;
      //console.log('1',this.isShow)
    } else {
      this.isShow = false;
      //console.log('2',this.isShow)
    }
  },
  methods: {
    loginOut() {
      let flag = window.confirm("确认退出吗");
      if (flag) {
        this.$local.save("use12", null);
        window.location.reload();
      }
    },
    isLogin() {
      let user = this.$local.fetch("use12");
      if (user.userTel == null) {
        alert("请登录");
        this.$router.push({ path: "/login" });
        return false;
	  }
	  this.$router.push({path:'/mySelf'})
	  return true;
    }
  },
  // watch:{
  // 	$route(value){
  // 		 let user = this.$local.fetch("use12");
  // 		 console.log(user);
  // 		 if(user.userTel != null){
  // 			 this.isShow=true;
  // 			 this.userName=user.userTel;
  // 		 }else{
  // 			 this.isShow=false;
  // 		 }
  // 	 }
  // },
  computed: {
    ...mapState(["cartData"])
  }
};
</script>
<style scoped>
.u-txt {
  cursor: pointer;
}
</style>
