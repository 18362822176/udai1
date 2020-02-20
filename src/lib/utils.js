//设置本地存储
let local={
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key)) || {}
    }
}
//格式化时间
let time = {
   dateFormart(fmt, date) {
        // 1.处理年
        // 1.1找到yyyy
        // +在正则表达式中表示匹配1个或多个连续的指定字符
        // let reg = /y+/;
        let yearStr = fmt.match(/y+/);
        if(yearStr){
            yearStr = yearStr[0];
            // 1.2获取到当前的年
            let yearNum = date.getFullYear() + ""; // 2019
            yearNum = yearNum.substr(4 - yearStr.length)
            // 1.3利用当前的年替换掉yyyy
            fmt = fmt.replace(yearStr, yearNum);
        }
        // 2.处理其他的时间
        let obj = {
            "M+" : date.getMonth() + 1,
            "d+" : date.getDate(),
            "h+" : date.getHours(),
            "m+" : date.getMinutes(),
            "s+" : date.getSeconds()
        };
        // 2.1遍历取出所有的时间
        for(let key in obj){
            // let reg = new RegExp("M+");
            let reg = new RegExp(`${key}`);
            // 取出格式化字符串中对应的格式字符 MM dd hh mm ss
            let fmtStr = fmt.match(reg);
            if(fmtStr){
                fmtStr = fmtStr[0];
                // 单独处理一位或者两位的时间
                if(fmtStr.length === 1){
                    // 一位
                    fmt = fmt.replace(fmtStr, obj[key]);
                }else{
                    // 两位
                    let numStr = "00" + obj[key];
                    //"00" + 4 = "004"
                    //"00" + 23 = "0023"
                    numStr = numStr.substr((obj[key] + "").length);
                    fmt = fmt.replace(fmtStr, numStr);
                }
            }
        }
        // 3.将格式化之后的字符串返回
        return fmt;
    },
    
    /**************************************时间格式化处理************************************/
    dateFmt(fmt,date){
        let obj = {
            "M+" : date.getMonth()+1,                 //月份
            "d+" : date.getDate(),                    //日
            "h+" : date.getHours(),                   //小时
            "m+" : date.getMinutes(),                 //分
            "s+" : date.getSeconds(),                 //秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(let key in obj)
            if(new RegExp(`${key}`).test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (obj[key]) : (("00"+ obj[key]).substr((""+ obj[key]).length)));
        return fmt;
    }
    
}



export default {
    install:function(vm){
        vm.prototype.$local=local,
        vm.prototype.$time = time
    }
}