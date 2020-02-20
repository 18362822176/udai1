<template>
  <div>
    <div class="public-head-layout container">
      <a class="logo" href="#">
        <img src="../assets/images/icons/logo.jpg" alt="U袋网" class="cover" />
      </a>
    </div>
    <div class="bg">
      <div class="login-layout container">
        <div class="form-box">
          <div class="tabs-nav">
            <div class="link">
              <router-link v-for="(item,index) in msg" tag="span" :to="item.mypath" :key="index" active-class='active'>{{ item.title }}</router-link>
            </div>
          </div>
          <div class="tabs_container">
            <div>
              <router-view/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg:[
        {id:1,title:'用户登录',mypath:'/login/loginChild'},
        {id:2,title:'用户注册',mypath:'/login/postChild'},
      ],
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.height{
    height:20px;
}
.checkbox {
  text-align: right;
}
.link {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.active {
  border-bottom: 5px solid #ff6700;
}
.link span {
  display: inline-block;
  width: 150px;
  height: 60px;
  /*   */
  color: #666;
  font-size: 26px;
  text-align: center;
  line-height: 60px;
  font-weight: bolder;
  text-decoration: none;
}
.bg {
  width: 100%;
  background: url(../assets/images/login_bg.jpg) no-repeat center center;
}
.public-head-layout {
  height: 120px;
  position: relative;
}
.logo {
  width: 200px;
  height: 100px;
  display: block;
  position: absolute;
  bottom: 0;
  left: 50px;
}
.login-layout {
  height: 450px;
  position: relative;
}
.form-box {
  width: 340px;
  min-height: 340px;
  padding: 25px 20px;
  position: absolute;
  right: 100px;
  top: 20px;
  background-color: #fff;
  border-radius: 5px;
  -webkit-box-shadow: 0 15px 35px -25px #b31e22;
  -moz-box-shadow: 0 15px 35px -25px #b31e22;
  box-shadow: 0 15px 35px -25px #b31e22;
}
.tabs-nav h2 {
  font-size: 18px;
  margin-top: 0;
  padding: 10px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
}
.success-box {
  width: 100%;
  height: 160px;
  position: relative;
}
.success-msg {
  height: 96px;
  text-align: center;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.success-icon {
  width: 64px;
  height: 64px;
  display: inline-block;
  background-image: url(../assets/images/icons/success.png);
}
.success-text {
  text-align: center;
  font-size: 16px;
  line-height: 32px;
  height: 32px;
  margin-bottom: 0;
}
.buts-title {
  color: #999;
  font-size: 16px;
  margin-bottom: 10px;
}
.footer-login {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 200px;
  border-top: 1px solid #e0e0e0;
}
.links {
  margin-top: 10px;
  display: -webkit-flex;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.links li {
  color: #333;
  min-width: 80px;
  text-align: center;
  margin: 10px 20px 0;
}
.copyright {
  color: #666;
  text-align: center;
  line-height: 2em;
}
</style>
