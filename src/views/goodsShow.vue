<template>
  <div>
    <nav-box></nav-box>
    <div class="content inner">
      <section class="item-show__div item-show__head clearfix">
        <div class="pull-left">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ goods.sort }}</el-breadcrumb-item>
            <el-breadcrumb-item>商品详情</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="item-pic__box" id="magnifier">
            <div class="small-box">
              <img class="cover" :src="goods.url" alt="重回汉唐 旧忆 原创设计日常汉服女款绣花长褙子吊带改良宋裤春夏" />
              <span class="hover"></span>
            </div>
            <div class="thumbnail-box">
              <a class="btn-prev el-icon-arrow-right"></a>
              <div class="thumb-list">
                <ul class="wrapper clearfix">
                  <li class="item" v-for="item in pic" @click="changePic(item)">
                    <img class="cover" :src="item" alt="商品预览图" />
                  </li>
                </ul>
              </div>
              <a class="btn-next el-icon-arrow-left"></a>
            </div>
          </div>
          <div class="item-info__box">
            <div class="item-title">
              <p class="name ep2" style="font-weight:700;font-size:18px;">{{ goods.title }}</p>
              <div class="sale cr">优惠活动：该商品享受8折优惠</div>
            </div>
            <div class="item-price bgf5">
              <div class="price-box clearfix">
                <div class="price-panel pull-left">
                  售价：
                  <span class="price">
                    &yen;{{ goods.cellPrice }}
                    <s class="fz16 c9">&yen;{{ goods.price }}</s>
                  </span>
                </div>
              </div>
              <div class="c6">
                普通会员限购 2 件，想要
                <u class="cr">
                  <a href>购买更多</a>
                </u>？
              </div>
            </div>
            <ul class="item-ind-panel clearfix">
              <li class="item-ind-item">
                <span class="ind-label c9">累计销量</span>
                <span class="ind-count cr">{{ goods.sales }}</span>
              </li>
              <li class="item-ind-item">
                <a href>
                  <span class="ind-label c9">累计评论</span>
                  <span class="ind-count cr">1314</span>
                </a>
              </li>
              <li class="item-ind-item">
                <a href>
                  <span class="ind-label c9">赠送积分</span>
                  <span class="ind-count cg">666</span>
                </a>
              </li>
            </ul>
            <div class="item-key">
              <div class="item-sku">
                <dl class="item-prop clearfix">
                  <dt class="item-metatit">颜色：</dt>
                  <dd>
                    <ul data-property="颜色" class="clearfix chooseColor">
                      <li v-for="item,index in color">
                        <a href="javascript:;"  role="button" :data-value="item" aria-disabled="true">
                          {{ item }}
                        </a>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl class="item-prop clearfix">
                  <dt class="item-metatit">尺码：</dt>
                  <dd>
                    <ul data-property="尺码" class="clearfix chooseSize">
                      <li v-for="item in size">
                        <a href="javascript:;" role="button" :data-value="item" aria-disabled="true">
                          {{ item }}
                        </a>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div class="item-amount clearfix bgf5">
                <div class="item-metatit">数量：</div>
                <div class="amount-box">
                  <div class="amount-widget">
                    <input
                      class="amount-input"
                      v-model="count"
                      maxlength="8"
                      title="请输入购买量"
                      type="text"
                    />
                    <div class="amount-btn">
                      <a class="amount-but add" @click="addNum"></a>
                      <a class="amount-but sub" @click="subNum"></a>
                    </div>
                  </div>
                  <div class="item-stock">
                    <span style="margin-left: 10px;">
                      库存
                      <b id="Stock">{{ goods.stock }}</b> 件
                    </span>
                  </div>
                </div>
              </div>
              <div class="item-action clearfix bgf5">
                <a
                  @click="buy"
                  rel="nofollow"
                  data-addfastbuy="true"
                  title="点击此按钮，到下一步确认购买信息。"
                  role="button"
                  class="item-action__buy"
                >立即购买</a>
                <a
                  @click="addCart"
                  rel="nofollow"
                  data-addfastbuy="true"
                  role="button"
                  class="item-action__basket"
                >
                  <i class="iconfont icon-shopcart"></i> 加入购物车
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="pull-right picked-div">
          <div class="lace-title">
            <span class="c6">爆款推荐</span>
          </div>
          <div class="swiper-container picked-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="picked-item" v-for="item in 3">
                  <img src="../assets/images/temp/S-001-1_s.jpg" alt class="cover" />
                  <div class="look_price">¥134.99</div>
                </a>
              </div>
            </div>
          </div>
          <div class="picked-button-prev"></div>
          <div class="picked-button-next"></div>
        </div>
      </section>
      <section class="item-show__div item-show__body posr clearfix">
        <div class="item-nav-tabs">
          <ul class="nav-tabs nav-pills clearfix" role="tablist" id="item-tabs">
            <li role="presentation" class="active">
              <a
                href="#detail"
                role="tab"
                data-toggle="tab"
                aria-controls="detail"
                aria-expanded="true"
              >商品详情</a>
            </li>
            <li role="presentation">
              <a href="#evaluate" role="tab" data-toggle="tab" aria-controls="evaluate">
                累计评价
                <span class="badge">1314</span>
              </a>
            </li>
            <li role="presentation">
              <a href="#service" role="tab" data-toggle="tab" aria-controls="service">售后服务</a>
            </li>
          </ul>
        </div>
        <div class="pull-left">
          <div class="tab-content">
            <div
              role="tabpanel"
              class="tab-pane fade in active"
              id="detail"
              aria-labelledby="detail-tab"
            >
              <div class="item-detail__info clearfix">
                <div class="record">商品编号：D-8812</div>
                <div class="record">上架时间：2017-06-24</div>
                <div class="record">基础风格：{{ goods.style }}</div>
                <div class="record">商品库存：{{ goods.stock }}件</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { oneGoods } from "../api";
import NavBox from "@/components/navBox";
import '../js/jquery-1.12.4.js'
export default {
  components: {
    NavBox
  },
  data() {
    return {
      count: 1,
      goods: {},
      pic: [],
      id: this.$route.params.id,
      color:['白色','黑色','粉色'],
      size:['S','M','L','XL'],
      data:{}
    };
  },
  updated() {
    $('.item-prop a').click(function(){
      $(this).addClass('on').parent().siblings().find('a').removeClass('on')
    })
  },
  mounted() {
    this.getOneGoods();
  },
  methods: {
    //获取对应的商品信息
    async getOneGoods() {
      let oneList = await oneGoods(this.id);
      this.goods = oneList.data;
      for (var key in this.goods) {
        if (/^img/.test(key)) {
          this.pic.push(this.goods[key]);
        }
      }
    },
    //判断是否登录状态
    isLogin() {
      let user = this.$local.fetch("use12");
      if (user.userTel == null) {
        alert("请登录");
        this.$router.push({ path: "/login" });
        return false;
      }
      return true;
    },
    //添加购物车
    addCart() {
      let flag = this.isLogin();
      if (flag) {
        Vue.set(this.goods, "count", this.count);
        if($('.chooseColor li a').hasClass('on') && $('.chooseSize li a').hasClass('on')){
          let newGoods = {
            id:this.goods.id,
            cellPrice:this.goods.cellPrice,
            price:this.goods.price,
            sales:this.goods.sales,
            sort:this.goods.sort,
            stock:this.goods.stock,
            style:this.goods.style,
            title:this.goods.title,
            url:this.goods.url,
            count:this.count,
            color:$('.chooseColor li a.on').data('value'),
            size:$('.chooseSize li a.on').data('value')
          }
          this.$store.dispatch("addGoods", newGoods);
        }else{
          alert('请选择商品规格！')
          return
        }
      }
    },
    buy() {
      let flag = this.isLogin();
      if (flag) {
        if($('.chooseColor li a').hasClass('on') && $('.chooseSize li a').hasClass('on')){
          Vue.set(this.goods,'color',$('.chooseColor li a.on').data('value'))
          Vue.set(this.goods,'size',$('.chooseSize li a.on').data('value'))
          Vue.set(this.goods,'count',this.count)
          let newGoods = [];
          newGoods.push(this.goods)
          this.data.goods = newGoods;
          this.data.totalNum = this.count;
          this.data.totalPrice = parseInt(this.count * this.goods.cellPrice);
          localStorage.setItem("orderGoods", JSON.stringify(this.data));
          this.$router.push({path:'/order'})
        }else{
          alert('请选择商品规格！')
          return
        }
      }
    },
    //增加数量
    addNum() {
      this.count++;
    },
    //减少数量
    subNum() {
      this.count--;
      if (this.count <= 1) {
        this.count = 1;
      }
    },
    //选项卡图片切换
    changePic(pic) {
      this.goods.url = pic;
    },
    
  }
};
</script>
<style scoped>
.el-breadcrumb {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
</style>
