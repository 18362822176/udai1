<template>
  <div>
    <div class="tabs_container">
      <form
        class="tabs_form"
        action="index.html"
        method="post"
        id="register_form"
        @submit.prevent="sendPost"
      >
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
            </div>
            <input
              class="form-control phone"
              name="userName"
              id="register_phone"
              required
              placeholder="请输入用户名"
              maxlength="11"
              autocomplete="off"
              type="text"
              ref="tel"
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
              name="userPwd"
              id="register_pwd"
              placeholder="请输入密码"
              autocomplete="off"
              type="password"
              ref="pwd"
              required
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
              name="userPwd"
              id="register_pwd"
              placeholder="再次确认密码"
              autocomplete="off"
              type="password"
              ref="pwd2"
              required
            />
          </div>
        </div>
        <div class="checkbox">
          <label>
            <input checked id="register_checkbox" type="checkbox" ref="checkbox" />
            <i></i> 同意
            <a href="temp_article/udai_article3.html">U袋网用户协议</a>
          </label>
        </div>
        <!-- 错误信息 -->
        <!-- <div class="form-group">
          <div class="error_msg" id="register_error"></div>
        </div>-->
        <input
          class="btn btn-large btn-primary btn-lg btn-block submit"
          id="register_submit"
          type="submit"
          value="注册"
        />
      </form>
    </div>
  </div>
</template>                  
<script>
import { userPost } from "../api";
export default {
  data() {
    return {
      userName: "",
      userPwd: "",
      difinePwd: "",
      checkbox: true
    };
  },
  methods: {
    //注册
    async sendPost() {
      this.userName = this.$refs.tel.value;
      this.userPwd = this.$refs.pwd.value;
      this.difinePwd = this.$refs.pwd2.value;
      this.checkbox = this.$refs.checkbox.checked;
      console.log(this.checkbox);
      if (this.userPwd != this.difinePwd) {
        this.$message({
          showClose: true,
          message: "请再次确认密码！",
          type: "warning"
        });
      } else if (!this.checkbox) {
        this.$message({
          showClose: true,
          message: "请勾选同意U袋网用户协议",
          type: "warning"
        });
      } else {
        let regTime = this.$time.dateFormart("yyyy-MM-dd hh:mm:ss", new Date());
        //console.log(this.userName,this.userPwd,regTime)
        let postData = await userPost(this.userName, this.userPwd, regTime);
        if (postData.errorNo === 0) {
          this.$message({
            showClose: true,
            message: "注册成功",
            type: "success"
          });
          this.$router.push({path:'/login'})
        } else {
          this.$message({
            message: "注册失败",
            type: "error"
          });
        }
      }
    }
  }
};
</script>
<style scoped>
.height {
  height: 20px;
}
</style>
