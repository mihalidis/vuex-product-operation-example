import Vue from 'vue';

export const setSaleInfo = ({ commit, state }, payload) => {
    commit("updateTradeResult", payload);

    // The reason we use <put> is to overwrite the existing record without creating a new record each time
    Vue.http.put(`${process.env.VUE_APP_DBURI}tradeInfo.json`, {
        purchaseAmount: state.purchaseAmount,
        salesAmount: state.salesAmount
    }).then((res) => {
        console.log(res);
    });
}
export const getSaleInfo = ({commit}) => {
    Vue.http.get(`${process.env.VUE_APP_DBURI}tradeInfo.json`).then((res)=>{
        commit("updateTradeResult", res.body);
    });
}
