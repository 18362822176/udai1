<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <div class="user-content__box clearfix bgf">
        <div class="title">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>购物车</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <form class="shopcart-form__box">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th width="50" colspan="2">图片</th>
                <!-- <th>图片</th> -->
                <th>商品信息</th>
                <th width="100">单价</th>
                <th>数量</th>
                <th width="100">现价</th>
                <th width="100">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-show="cartData.length == 0">
                  <td colspan="7">您的购物车啥也没有... <router-link to="/" style="color:#ff6700">速速添加商品</router-link></td>
              </tr>
              <tr v-for="item,index in cartData">
                <td scope="row">
                  <label class="checked-label">
                    <input
                      type="checkbox"
                      class="checkOne"
                      v-model="item.checked"
                      @click="checkOne(item)"
                    />
                    <i></i>
                  </label>
                </td>
                <td>
                  <div class="img">
                    <img :src="item.url" alt class="cover" />
                  </div>
                </td>
                <td>
                  <div style="text-align:left;vertical-align: bottom;">{{ item.title }}</div>
                  <div style="text-align:left;vertical-align: bottom; padding-top:10px">
                    <span style="margin-right:10px;">颜色:{{item.color}}</span>
                    尺寸:{{item.size}}
                    <span></span>
                  </div>
                </td>
                <td>¥{{ item.cellPrice }}</td>
                <td>
                  <div class="cart-num__box">
                    <input type="button" class="sub" value="-" @click="update(false,item)" />
                    <input type="text" class="val" :value="item.count" maxlength="2" />
                    <input type="button" class="add" value="+" @click="update(true,item)" />
                  </div>
                </td>
                <td>¥{{ parseInt(item.cellPrice * item.count) }}</td>
                <td>
                  <a @click="delShop(index)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="user-form-group tags-box shopcart-submit pull-right">
            <!-- <router-link> -->
          <p @click="submitOrder" class="btn">提交订单</p>
            <!-- </router-link> -->
          </div>
          <div class="checkbox shopcart-total">
            <label>
              <input type="checkbox" class="check-all" v-model="allChecked" @click="allCheck" />
              <i></i>全选
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>删除</a>
            <div class="pull-right">
              已选商品
              <span>{{ totalNum }}</span> 件
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;合计（不含运费）
              <b class="cr">
                &yen;
                <span class="fz24">{{ totalPrice }}</span>
              </b>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      allChecked: false,
      data: {}
    };
  },
  created() {
    this.cartData.forEach(item => {
      if (item.checked == undefined) {
        Vue.set(item, "checked", false);
        // console.log(this.cartData)
      }
    });
  },

  computed: {
    ...mapState(["cartData"]),
    ...mapGetters(["totalNum", "totalPrice"])
  },
  methods: {
    //删除
    delShop(index) {
      // this.cartData.splice(index, 1);
      this.$store.dispatch("delGods", index);
    },
    //修改
    update(isAdd, item) {
      this.$store.dispatch("updateNumGoods", { isAdd, item });
    },
    //全选
    allCheck() {
      this.allChecked = !this.allChecked;
      //console.log(this.allChecked);
      this.cartData.forEach(item => {
        item.checked = this.allChecked;
        this.$store.dispatch("changeChecked", item.checked);
      });
    },
    //单选
    checkOne(item) {
      item.checked = !item.checked;
      this.allChecked = this.cartData.every(item => item.checked == true);
      this.$store.dispatch("changeChecked", item.checked);
    },
    //确认订单
    submitOrder() {
      if (this.cartData.length <= 0) {
        alert("您的购物车还没有商品！");
        return;
      } else {
        let goods = this.cartData.filter(item => {
          return item.checked == true;
        });
        this.data.goods = goods;
        this.data.totalNum = this.totalNum;
        this.data.totalPrice = this.totalPrice;
        localStorage.setItem("orderGoods", JSON.stringify(this.data));
        this.$router.push({path:'/order'})
      }
    }
  }
};
</script>
<style scoped>
.title {
  height: 50px;
}
.el-breadcrumb {
  line-height: 50px;
}
.img {
  width: 60px;
  height: 60px;
}
th,
td {
  text-align: center;
}
label .checked {
  bottom: 8px;
}
.table > tbody > tr > td {
  vertical-align: middle;
}
td .img {
  margin: 0 auto;
}
</style>
