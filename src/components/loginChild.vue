<template>
  <form class="tabs_form" @submit.prevent="sendLogin" id="login_form">
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-addon">
          <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
        </div>
        <input
          class="form-control phone"
          name="phone"
          id="login_phone"
          required
          placeholder="请输入用户名"
          ref="tel"
          maxlength="11"
          autocomplete="off"
          type="text"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-addon">
          <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
        </div>
        <input
          class="form-control password"
          name="password"
          id="login_pwd"
          placeholder="请输入密码"
          ref="pwd"
          autocomplete="off"
          type="password"
        />
      </div>
    </div>
    <div class="checkbox">
      <a href="javascript:;" id="resetpwd">忘记密码？</a>
    </div>
    <input
      class="btn btn-large btn-primary btn-lg btn-block submit"
      id="login_submit"
      type="submit"
      value="登录"
      required
    />
    <br />
    <div class="height">
      <p class="text-center">
        没有账号？
        <a href="javascript:;" id="register">免费注册</a>
      </p>
    </div>
  </form>
</template>
<script>
import { userLogin } from "../api";
export default {
  data() {
    return {
      idx: 0,
      userName: "",
      userPwd: ""
    };
  },
  methods: {
    handle(index) {
      this.idx = index;
    },
    //登录匹配用户名和密码
    async sendLogin() {
      this.userName = this.$refs.tel.value;
      this.userPwd = this.$refs.pwd.value;
      let loginData = await userLogin(this.userName, this.userPwd);
      //console.log(loginData)
      if (loginData.errorNo === 0) {
        alert(loginData.message);
        //保存在vuex
        let loginTime = this.$time.dateFormart(
          "yyyy-MM-dd hh:mm:ss",
          new Date()
        );
        //修改登录时间
        this.$axios.get(
          `http://localhost:3000/login/getTime?loginTime=${loginTime}&userName=${this.userName}`
          // `/api/login/getTime?loginTime=${loginTime}&userName=${this.userName}`
        );
        this.$store.dispatch("recordUser", loginData.data);
        this.$local.save("use12", { userTel: this.userName });
        // 后台验证
        this.$router.push({ path: "/" });
      } else {
        alert(loginData.message);
      }
    }
  }
};
</script>
<style scoped>
</style>
