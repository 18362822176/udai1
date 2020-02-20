<template>
  <div class="pull-right">
    <div class="user-center__info bgf">
      <div class="pull-left clearfix">
        <div class="port b-r50 pull-left">
          <img src="../../assets/images/icons/default_avt.png" alt="用户名" class="cover b-r50" />
          <a class="edit">
            <i class="iconfont icon-edit"></i>
          </a>
        </div>
        <p class="name text-nowrap">您好，{{ userName }}！</p>
        <p class="money text-nowrap">余额：¥88.0</p>
        <p class="level text-nowrap">
          身份：普通会员
          <a>提升</a>
        </p>
      </div>
      <div class="pull-right user-nav">
        <a class="user-nav__but">
          <i class="iconfont icon-rmb fz40 cr"></i>
          <div class="c6">
            待支付
            <span class="cr">1</span>
          </div>
        </a>
        <a class="user-nav__but">
          <i class="iconfont icon-eval fz40 cr"></i>
          <div class="c6">
            待评价
            <span class="c3">0</span>
          </div>
        </a>
        <a class="user-nav__but">
          <i class="iconfont icon-star fz40 cr"></i>
          <div class="c6">
            收藏
            <span class="c3">0</span>
          </div>
        </a>
        <a class="user-nav__but">
          <i class="iconfont icon-quan fz40 cr"></i>
          <div class="c6">
            优惠券
            <span class="cr">2</span>
          </div>
        </a>
        <a class="user-nav__but">
          <i class="iconfont icon-jifen fz40 cr"></i>
          <div class="c6">
            积分
            <span class="cr">200</span>
          </div>
        </a>
        <a class="user-nav__but">
          <i class="iconfont icon-xiaoxi fz40 cr"></i>
          <div class="c6">
            消息
            <span class="cr">2</span>
          </div>
        </a>
      </div>
    </div>
    <div class="order-list__div bgf">
      <div class="user-title">
        我的订单
        <span class="c6">（显示最新三条）</span>
        <a href class="pull-right">查看所有订单></a>
      </div>
      <div class="order-panel">
        <ul class="nav user-nav__title" role="tablist">
          <li role="presentation" class="nav-item active">
            <a href="#all" aria-controls="all" role="tab" data-toggle="tab">所有订单</a>
          </li>
          <li role="presentation" class="nav-item">
            <a href="#pay" aria-controls="pay" role="tab" data-toggle="tab">
              待付款
              <span class="cr">0</span>
            </a>
          </li>
          <li role="presentation" class="nav-item">
            <a href="#emit" aria-controls="emit" role="tab" data-toggle="tab">
              待发货
              <span class="cr">0</span>
            </a>
          </li>
          <li role="presentation" class="nav-item">
            <a href="#take" aria-controls="take" role="tab" data-toggle="tab">
              待收货
              <span class="cr">0</span>
            </a>
          </li>
          <li role="presentation" class="nav-item">
            <a href="#eval" aria-controls="eval" role="tab" data-toggle="tab">
              待评价
              <span class="cr">0</span>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane fade in active" id="all">
            <table class="table text-center">
              <tr>
                <th width="380">商品信息</th>
                <th width="85">单价</th>
                <th width="85">数量</th>
                <th width="120">实付款</th>
                <th width="120">交易状态</th>
                <th width="120">交易操作</th>
              </tr>
              <tr class="order-item" v-for="item in goodsData.goods">
                <td>
                  <label>
                    <div class="num">
                      <!-- <input type="checkbox"> -->
                      2017-03-30 订单号: 2669901385864042
                    </div>
                    <div class="card">
                      <div class="img">
                        <img :src="item.url" class="cover" />
                      </div>
                      <div class="name ep2">{{ item.title }}</div>
                      <div class="format">颜色：{{ item.color }} 尺码：{{ item.size }}</div>
                      <!-- <div class="favour">使用优惠券：优惠¥2.00</div> -->
                    </div>
                  </label>
                </td>
                <td>${{ item.cellPrice }}</td>
                <td>{{ item.count }}</td>
                <td>
                  ${{ parseInt(item.cellPrice * item.count) }}
                  <br />
                  <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                </td>
                <td class="state">
                  <a class="but c6">等待收货</a>
                  <a class="but cr">查看物流</a>
                  <a href class="but c9">订单详情</a>
                </td>
                <td class="order">
                  <a class="but but-primary">确认收货</a>
                  <!-- <a href="" class="but but-link">评价</a> -->
                  <a href class="but c3">退款/退货</a>
                </td>
              </tr>
            </table>
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
      userName: "",
      goodsData: ""
    };
  },
   created() {
      let user = this.$local.fetch('use12');
      this.userName = user.userTel;
      this.goodsData = JSON.parse(localStorage.getItem('orderGoods'));
  },
};
</script>
<style scoped>
</style>
