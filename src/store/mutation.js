import { GOODSLIST, GOODSTYPE, USERINFO, GOODSMAN, GOODSWOMAN, GOODSSHOES, ADDCART,ADDNUM,SUBNUM,CHECKONE,DELGOODS} from './mutation-type'
import Vue from "vue";
export default {

    [GOODSLIST](state, { goods }) {
        state.goodslist = goods
    },

    [USERINFO](state, { userinfo }) {
        state.userinfo = userinfo
    },

    [GOODSTYPE](state, { goods }) {
        state.goodstypelist = goods
    },

    [GOODSMAN](state, { goods }) {
        state.goodsmanlist = goods
    },

    [GOODSWOMAN](state, { goods }) {
        state.goodswomanlist = goods
    },

    [GOODSSHOES](state, { goods }) {
        state.goodsshoeslist = goods
    },

    [ADDCART](state, { onegoods }) {
        let flag = true;
        state.cartData.forEach(item => {
            if (item.id == onegoods.id && item.color == onegoods.color && item.size == onegoods.size) {
                alert('您已添加过该商品，请去购物车查看！')
                return flag = false
            }        
        });
        if(flag){
            //Vue.set(onegoods,'count',onegoods.count);
            alert('添加商品成功，请去购物车查看！')
            state.cartData.push(onegoods);
        }
    },

    [ADDNUM](state,{item}){
        if(item.count){
            item.count++
        }
    },

    [SUBNUM](state,{item}){
        if(item.count){
            item.count--;
            if(item.count<1){
                item.count = 1  
            }
        }
    },

    [CHECKONE](state,{item}){
        state.cartData.forEach(value=>{
            if(item.id == value.id){
                value.checked = item.checked
            }
        })
    },

    [DELGOODS](state,{index}){
        state.cartData.splice(index,1)
    }
}