import {GOODSLIST,GOODSTYPE,USERINFO,GOODSMAN,GOODSWOMAN,GOODSSHOES,ADDCART,ADDNUM,SUBNUM,CHECKONE,DELGOODS} from './mutation-type'
import {goodsList,goodsType} from '../api'
//异步操作
export default{
    async getGoodsList({commit}){
        //goods 访问后台的数据
        const goodsData = await goodsList();
        //console.log(goodsData)
        if(goodsData.errorNo === 0){
            const goods = goodsData.data;
            //console.log(goods)
            commit(GOODSLIST,{goods})
        }  
    },
    //用户登录
    recordUser({commit},userinfo){
        commit(USERINFO,{userinfo})
    },
    //主页数据
    async getGoodsType({commit},data){
        let goodsData = await goodsType(data.sort,data.num);
        //console.log('goodsData:',goodsData)
        if(goodsData.errorNo === 0){
            let goods = goodsData.data;
            //console.log('goods:',goods)
            commit(GOODSTYPE,{goods})
        }
    },
    async getGoodsMan({commit},data){
        let goodsData = await goodsType(data.sort,data.num);
        //console.log('goodsData:',goodsData)
        if(goodsData.errorNo === 0){
            let goods = goodsData.data;
            //console.log('goods:',goods)
            commit(GOODSMAN,{goods})
        }
    },
    async getGoodsWoman({commit},data){
        let goodsData = await goodsType(data.sort,data.num);
        //console.log('goodsData:',goodsData)
        if(goodsData.errorNo === 0){
            let goods = goodsData.data;
            //console.log('goods:',goods)
            commit(GOODSWOMAN,{goods})
        }
    },
    async getGoodsShoes({commit},data){
        let goodsData = await goodsType(data.sort,data.num);
        //console.log('goodsData:',goodsData)
        if(goodsData.errorNo === 0){
            let goods = goodsData.data;
            //console.log('goods:',goods)
            commit(GOODSSHOES,{goods})
        }
    },
    //添加购物车
    addGoods({commit},onegoods){
        commit(ADDCART,{onegoods})
    },
    //修改商品数量
    updateNumGoods({commit},{isAdd,item}){
        if(isAdd){
            commit(ADDNUM,{item})
        }else{
            commit(SUBNUM,{item})
        }
        
    },
    //改变checked属性
    changeChecked({commit},item){
        commit(CHECKONE,{item})
    },
    //删除商品
    delGods({commit},index){
        commit(DELGOODS,{index})
    }
}