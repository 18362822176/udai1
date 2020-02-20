<template>
    <!-- 首页导航栏 -->
	<div class="top-nav bg3">
		<div class="nav-box inner">
			<div class="all-cat">
				<div class="title"><i class="iconfont icon-menu"></i> 全部分类</div>
			</div>
			<ul class="nva-list">
				<router-link v-for='item,index in msg' tag="li" :key="index" :to="item.path">{{ item.name }}</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
   data() {
      return {
		  msg:[
				{id:1,name:'首页',path:'/'},
				{id:2,name:'企业简介',path:''},
				{id:3,name:'新手上路',path:''},
				{id:4,name:'U袋学堂',path:''},
				{id:5,name:'企业账号',path:''},
				{id:6,name:'诚信合约',path:''},
				{id:7,name:'实时下架',path:''},

		  ]
      }
   },
}
</script>
<style scoped>
li{
	cursor: pointer;
}
</style>
