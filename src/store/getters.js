export default {
    totalNum(state) {
        var preTotal = 0;
        for (var i = 0; i < state.cartData.length; i++) {
            if (state.cartData[i].checked == true) {
                preTotal += state.cartData[i].count
            }
        }
        return preTotal
    },
    totalPrice(state) {
        var preTotal = 0;
        for (var i = 0; i < state.cartData.length; i++) {
            if (state.cartData[i].checked == true) {
                preTotal += state.cartData[i].count * state.cartData[i].cellPrice
            }
        }
        return preTotal
    }
}