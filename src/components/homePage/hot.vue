<template>
  <section class="scroll-floor floor-1 clearfix">
    <div class="pull-left">
      <div class="floor-title">
        <i class="iconfont icon-tuijian fz16"></i> 爆款推荐
        <a href class="more">
          <i class="iconfont icon-more"></i>
        </a>
      </div>
      <div class="con-box">
        <a class="left-img hot-img" href>
          <img src="../../assets/images/floor_1.jpg" alt class="cover" />
        </a>
        <div class="right-box hot-box">
          <router-link class="floor-item" v-for="item,index in goodstypelist" :key="index" :to="'/goodsShow/'+item.id">
            <div class="item-img hot-img">
              <img :src="item.url" class="cover" />
            </div>
            <div class="price clearfix">
              <span class="pull-left cr fz16">￥{{ item.price }}</span>
              <span class="pull-right c6">进货价</span>
            </div>
            <div class="name ep" :title="item.title">{{ item.title }}</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="pull-right">
      <div class="floor-title">
        <i class="iconfont icon-horn fz16"></i> 平台公告
        <a href="udai_notice.html" class="more">
          <i class="iconfont icon-more"></i>
        </a>
      </div>
      <div class="con-box">
        <div class="notice-box bgf5">
          <ul class="infinite-list">
            <li v-for="i in news" class="infinite-list-item">{{ i }}</li>
          </ul>
        </div>
        <div class="buts-box bgf5">
          <div class="but-div">
            <a href>
              <i class="but-icon"></i>
              <p>物流查询</p>
            </a>
          </div>
          <div class="but-div">
            <a href="item_sale_page.html">
              <i class="but-icon"></i>
              <p>热卖专区</p>
            </a>
          </div>
          <div class="but-div">
            <a href="item_sale_page.html">
              <i class="but-icon"></i>
              <p>满减专区</p>
            </a>
          </div>
          <div class="but-div">
            <a href="item_sale_page.html">
              <i class="but-icon"></i>
              <p>折扣专区</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapState,mapActions} from "vuex";

export default {
  data() {
    return {
      msg: [
        {
          id: 1,
          title: "LMTNZD冬季韩版加厚中长款棉衣男士青年潮牌韩版宽松连帽大衣外套",
          url:
            "//img.alicdn.com/bao/uploaded/i2/672500506/TB228YecMfN8KJjSZFIXXc0UFXa_!!672500506.jpg_200x200q90.jpg_.webp",
          price: 239,
          cellPrice: 235,
          sales: 20,
          stock: 31,
          style: "青春流行"
        },
        {
          id: 2,
          title: "LMTNZD冬季棉衣男士2019新款棉服棉袄宽松韩版潮牌加厚面包服外套",
          url:
            "//img.alicdn.com/bao/uploaded/i2/672500506/TB2n0IrmGmgSKJjSsplXXaICpXa_!!672500506.jpg_200x200q90.jpg_.webp",
          price: 269,
          cellPrice: 265,
          sales: 111,
          stock: 3896,
          style: "青春流行"
        },
        {
          id: 3,
          title: "LMTNZD牛仔裤男士秋冬款直筒韩版九分修身小脚宽松加绒潮牌长裤子",
          url:
            "//img.alicdn.com/bao/uploaded/i2/672500506/TB2u4XheyqAXuNjy1XdXXaYcVXa_!!672500506.jpg_200x200q90.jpg_.webp",
          price: 159,
          cellPrice: 139,
          sales: 8696,
          stock: 87289,
          style: "青春流行"
        },
        {
          id: 4,
          title: "秋冬季日系复古短款刺绣连帽棉衣男宽松棉服百搭加厚保暖棉袄外套",
          url:
            "//img.alicdn.com/bao/uploaded/i1/489956616/TB2oPY8Xzgy_uJjSZSyXXbqvVXa_!!489956616.jpg_200x200q90.jpg_.webp",
          price: 399,
          cellPrice: 268,
          sales: 412,
          stock: 1164,
          style: "青春流行"
        },
        {
          id: 5,
          title: "LMTNZD黑色牛仔裤子男士秋冬季修身小脚裤韩版潮宽松束脚裤哈伦裤",
          url:
            "//img.alicdn.com/bao/uploaded/i4/672500506/TB2Pb.vbkT85uJjSZFhXXcPEVXa_!!672500506.jpg_200x200q90.jpg_.webp",
          price: 147,
          cellPrice: 145,
          sales: 3435,
          stock: 13807,
          style: "青春流行"
        },
        {
          id: 6,
          title: "LMTNZD冬季韩版百搭连帽棉衣男士日系宽松休闲韩版加厚棉服外套潮",
          url:
            "//img.alicdn.com/bao/uploaded/i2/672500506/TB2NSXQmfxNTKJjy0FjXXX6yVXa_!!672500506.jpg_200x200q90.jpg_.webp",
          price: 247,
          cellPrice: 227,
          sales: 5,
          stock: 2029,
          style: "青春流行"
        }
      ],
      news: [
        "【公告】U袋网平台已上线，您还在等什么呢？是吧~",
        "【资讯】P站服务器爆炸啦。国内86%地区IP被限制~",
        "【公告】六趣公司9月底将彻底关闭66RPG论坛~",
        "【资讯】Project1站将接盘66RPG，新域名rpg.blue",
        "【新闻】央行决定对普惠金融实施定向降准政策 最高下调1.5个百分点",
        // "【新闻】那些年看的剧里十大虐心情节，谁戳中了你的泪点？",
        // "【新闻】惨遭魔改？派拉蒙将拍真人版《你的名字。》",
        // "【新闻】外媒称中国限制日本跟团游?旅行社:仍正常发团",
        // "【新闻】广电总局：电台电视台应在重要法定节日播放国歌",
        // '【新闻】高校性教育课成"爆款" 老师都讲哪些"大尺度"内容?',
        // "【新闻】vivo X20全面屏手机首销火爆 陈赫欧豪现身助力",
        // "【新闻】“拒绝妻子手术”现场医生：病人丈夫被冤枉了",
        // "【新闻】游客们注意了！国庆你要避开十大坑",
        // "【新闻】他卖了1.5万双假货，现在面临10年牢狱！",
        // "【新闻】10月1日起国家再次提高部分优抚对象抚恤补助标准 烈属抚恤每年23130元"
      ]
    };
  },
 mounted() {
    this.getGoodsType({sort:'爆款推荐',num:6})
  },
  methods:{
    ...mapActions(['getGoodsType']),
  },
  computed: {
	  ...mapState(['goodstypelist'])
  }
};
</script>
<style scoped>
</style>
