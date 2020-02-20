<template>
  <div class="pull-right">
    <div class="user-content__box clearfix bgf">
      <div class="title">收货地址</div>
      <form action class="user-addr__form form-horizontal" role="form">
        <div class="form-group">
          <label for="name" class="col-sm-2 control-label">收货人姓名：</label>
          <div class="col-sm-6">
            <input type="hidden" v-model="num" />
            <input class="form-control" id="name" placeholder="请输入姓名" type="text" ref="name" />
          </div>
        </div>
        <div class="form-group">
          <label for="details" class="col-sm-2 control-label">收货地址：</label>
          <div class="col-sm-10">
            <div class="block" style="margin-bottom:20px;">
              <el-cascader
                v-model="citys"
                :options="options"
                :separator="' '"
              ></el-cascader>
            </div>
            <input
              class="form-control"
              id="details"
              placeholder="建议您如实填写详细收货地址，例如街道名称，门牌号码等信息"
              maxlength="30"
              type="text"
              ref="detailAddress"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="mobile" class="col-sm-2 control-label">手机号码：</label>
          <div class="col-sm-6">
            <input class="form-control" id="mobile" placeholder="请输入手机号码" type="text" ref="tel" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-6">
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="checked" />
                <i></i> 设为默认收货地址
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-6">
            <input type="button" class="but" @click="addAddress" value="保存" />
          </div>
        </div>
      </form>
      <div class="table-thead addr-thead">
        <div class="tdf1">收货人</div>
        <div class="tdf2">所在地</div>
        <div class="tdf3">
          <div class="tdt-a_l">详细地址</div>
        </div>
        <!-- <div class="tdf1">邮编</div> -->
        <div class="tdf1">电话/手机</div>
        <div class="tdf1">操作</div>
        <div class="tdf1"></div>
      </div>
      <div class="addr-list">
        <div class="addr-item" v-for="item,index in address" :key="index">
          <div class="tdf1">{{ item.name }}</div>
          <div class="tdf2 tdt-a_l">{{ item.address }}</div>
          <div class="tdf3 tdt-a_l">{{ item.detailAddress }}</div>
          <!-- <div class="tdf1">350111</div> -->
          <div class="tdf1">{{ item.tel }}</div>
          <div class="tdf1 order">
            <a @click="changeAddress(item,index)">修改</a>
            <a @click="delAddress(index)">删除</a>
          </div>
          <div class="tdf1" v-if="item.checked == true">
            <a class="default active">默认地址</a>
          </div>
          <div class="tdf1" v-else>   
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import options from "../../js/country-data.js";
export default {
  data() {
    return {
      selectedOptions: [], //存放默认值
      options: options, //存放城市数据
      checked: false,
      citys: "",
      address: Array,
      num: 0,
      idx: 0
    };
  },
  created() {
    this.address = JSON.parse(localStorage.getItem("address")) || []
  },
  methods: {
    //添加地址
    addAddress() {
      // var address = JSON.parse(localStorage.getItem("address")) || [];
      for (var i = 0; i < this.address.length; i++) {
          if (this.checked == true) {
            this.address[i].checked = false;
          }
        }
        this.$local.save("address", this.address);
      if (this.num === 0) {
        this.address.push({
          'name': this.$refs.name.value,
          'address': this.citys.join(""),
          'detailAddress': this.$refs.detailAddress.value,
          'tel': this.$refs.tel.value,
          'checked': this.checked
        });
        this.$local.save("address", this.address);
        alert("保存成功");
      } else {
        this.address[this.idx] = {
          'name': this.$refs.name.value,
          'address': this.citys.join(""),
          'detailAddress': this.$refs.detailAddress.value,
          'tel': this.$refs.tel.value,
          'checked': this.checked
        };
        this.$local.save("address", this.address);
        alert('修改成功')
      }
      window.location.reload();
    },
    //删除地址
    delAddress(i) {
      let address = this.$local.fetch("address");
      address.splice(i, 1);
      this.$local.save("address", address);
      alert("删除成功");
      window.location.reload();
    },
    //修改地址
    changeAddress(item, index) {
      // console.log(item)
      this.idx = index;
      this.num = 1;
      console.log(this.idx);
      console.log(this.num);
      $("#name").val(item.name);
      $("#details").val(item.detailAddress);
      $("#mobile").val(item.tel);
    }
  }
};
</script>
<style scoped>
.el-cascader {
  width: 250px;
}
</style>
