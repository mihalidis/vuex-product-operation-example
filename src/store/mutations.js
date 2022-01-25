import Vue from "vue";

export const updateTradeResult = (state, payload) => {
    state.purchaseAmount += parseFloat(payload.purchase) * parseInt(payload.count);
    state.salesAmount += parseFloat(payload.sale) * parseInt(payload.count);
    state.balance += parseFloat(state.salesAmount) - parseInt(state.purchaseAmount);

    // The reason we use <put> is to overwrite the existing record without creating a new record each time
    Vue.http.put(`${process.env.VUE_APP_DBURI}tradeInfo.json`, {
        purchaseAmount: state.purchaseAmount,
        salesAmount: state.salesAmount
    }).then((res) => {
        console.log(res);
    });
}
