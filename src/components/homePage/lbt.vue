<template>
    <!-- 顶部轮播 -->
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item,index in msg" :key="index">
            <img :src="item.url">
        </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
   data() {
      return {
          msg:[
              {id:1,url:'https://haitao.nos.netease.com/f39d58f8-44af-4b89-9f86-1a3ca9d23564T1912071618_1920_506.jpg?imageView&thumbnail=1920x0&quality=90'},
              {id:1,url:'https://haitao.nosdn2.127.net/0c10df24-5657-4783-8a6f-10b2665825ddT1912071650_1920_506.jpg?imageView&thumbnail=1920x0&quality=90'},
              {id:1,url:'https://haitao.nosdn2.127.net/7145212f-accb-4ea8-b437-c0ae3b709c09T1912061747_1920_506.jpg?imageView&thumbnail=1920x0&quality=90'},
              {id:1,url:'https://haitao.nosdn1.127.net/3e549f6d-797f-4adf-b601-e2f968fc560bT1912091541_1920_506.jpg?imageView&thumbnail=1920x0&quality=90'},
              {id:1,url:'https://haitao.nosdn2.127.net/7c2e7081-4403-486a-ae9d-5a133a739dfaT1912061653_1920_506.jpg?imageView&thumbnail=1920x0&quality=90'},
          ]
      }
   },
}
</script>
<style scoped>
    .el-carousel__item img {
        width:100%;
        height: 100%;
    }
    .el-carousel>>>.el-carousel__container{
        height:450px;
    }
</style>
