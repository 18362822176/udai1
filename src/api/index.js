import ajax from './ajax'
// export const goodsList = ()=>ajax('/api/home/hotGoods')
// export const oneGoods = (id)=>ajax('/api/home/oneGoods',{id})
// export const goodsType = (sort,num) =>ajax('/api/home/hotGoods',{sort,num})
// export const userLogin = (userName,userPwd) =>ajax('/api/login/user',{userName,userPwd},'POST')
// export const userPost = (userName,userPwd,regTime) =>ajax('/api/login/addUser',{userName,userPwd,regTime},'POST');
export const goodsList = ()=>ajax('http://localhost:3000/home/hotGoods')
export const oneGoods = (id)=>ajax('http://localhost:3000/home/oneGoods',{id})
export const goodsType = (sort,num) =>ajax('http://localhost:3000/home/hotGoods',{sort,num})
export const userLogin = (userName,userPwd) =>ajax('http://localhost:3000/login/user',{userName,userPwd},'POST')
export const userPost = (userName,userPwd,regTime) =>ajax('http://localhost:3000/login/addUser',{userName,userPwd,regTime},'POST');