<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <div class="user-content__box clearfix bgf">
        <div class="title">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品订单</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-link to="/mySelf/adress" class="shop-title" tag="div">更改收货地址</router-link>
        <form action class="shopcart-form__box">
          <div class="addr-radio">
            <div class="radio-line radio-box active">
              <label class="radio-label ep" title="">
                {{address.address}}{{address.detailAddress}}（{{address.name}}收）{{address.tel}}
              </label>
            </div>
          </div>
          <!-- <div class="add_addr"><router-link to="">添加新地址</router-link></div> -->
          <!-- <div class="shop-title">确认订单</div> -->
          <div class="shop-order__detail">
            <table class="table">
              <thead>
                <tr>
                  <th width="120"></th>
                  <th width="300">商品信息</th>
                  <th width="150">单价</th>
                  <th width="200">数量</th>
                  <th width="200">运费</th>
                  <th width="80">总价</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in goodsData.goods">
                  <td scope="row">
                    <a href="#">
                      <div class="img">
                        <img :src="item.url" alt class="cover" />
                      </div>
                    </a>
                  </td>
                  <td>
                    {{ item.title }}
                    <div class="type c9">颜色分类：{{ item.color }} 尺码：{{ item.size }}</div>
                  </td>
                  <td>¥{{ item.cellPrice }}</td>
                  <td>{{ item.count }}</td>
                  <td>¥0.0</td>
                  <td>¥{{ parseInt(item.cellPrice * item.count) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="shop-cart__info clearfix">
            <div class="pull-left text-left">
              <div class="info-line text-nowrap">
                购买时间：
                <span class="c6">{{ this.time }}</span>
              </div>
              <div class="info-line text-nowrap">
                交易类型：
                <span class="c6">担保交易</span>
              </div>
              <div class="info-line text-nowrap">
                交易号：
                <span class="c6">1001001830267490496</span>
              </div>
            </div>
            <div class="pull-right text-right">
              <div class="info-line">
                优惠活动：
                <span class="c6">无</span>
              </div>
              <div class="info-line">
                运费：
                <span class="c6">¥0.00</span>
              </div>
              <div class="info-line">
                <span class="favour-value">已优惠 ¥0.0</span>合计：
                <b class="fz18 cr">¥{{ goodsData.totalPrice }}</b>
              </div>
              <div class="info-line fz12 c9">
                （可获
                <span class="c6">20</span> 积分）
              </div>
            </div>
          </div>
          <!-- <div class="shop-title">确认订单</div> -->
          <div class="pay-mode__box">
            <div class="radio-line radio-box">
              <label class="radio-label ep">
                <input name="pay-mode" value="1" autocomplete="off" type="radio" checked/>
                <i class="iconfont icon-radio"></i>
                <span class="fz16">余额支付</span>
                <span class="fz14">（可用余额：¥88.0）</span>
              </label>
              <div class="pay-value">
                支付
                <b class="fz16 cr">18.00</b>元
              </div>
            </div>
            <div class="radio-line radio-box">
              <label class="radio-label ep">
                <input name="pay-mode" value="2" autocomplete="off" type="radio" />
                <i class="iconfont icon-radio"></i>
                <img src="../assets/images/icons/alipay.png" alt="支付宝支付" />
              </label>
            </div>
            <div class="radio-line radio-box">
              <label class="radio-label ep">
                <input name="pay-mode" value="3" autocomplete="off" type="radio" />
                <i class="iconfont icon-radio"></i>
                <img src="../assets/images/icons/paywechat.png" alt="微信支付" />
              </label>
            </div>
          </div>
          <div class="user-form-group shopcart-submit">
            <router-link to="/buySuccess"><button class="btn">确认订单</button></router-link>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsData:'',
      time:'',
      address:''
    };
  },
  created() {
    this.goodsData = JSON.parse(localStorage.getItem('orderGoods'));
    console.log(this.goodsData)
    this.time = this.$time.dateFormart('yyyy年MM月dd日hh:mm:ss',new Date());
    let obj = this.$local.fetch('address');
    for(var i = 0;i<obj.length;i++){
      if(obj[i].checked == true){
        this.address = obj[i]
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
.img{
    width:80px;
    height:80px;
}
.table>tbody>tr>td{
    vertical-align: middle
}
.table-bordered > thead > tr > th {
  border-bottom-width: 0;
}
.table-bordered>thead>tr>th{
  border:0;
  background: #7FFFD4;
}
</style>
