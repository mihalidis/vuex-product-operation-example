export const updateTradeResult = (state, payload) => {
    if(payload.count) {
        state.purchaseAmount += parseFloat(payload.purchaseAmount) * parseInt(payload.count);
        state.salesAmount += parseFloat(payload.salesAmount) * parseInt(payload.count);
    } else {
        state.purchaseAmount += parseFloat(payload.purchaseAmount);
        state.salesAmount += parseFloat(payload.salesAmount);
    }
    state.balance += parseFloat(state.salesAmount) - parseInt(state.purchaseAmount);
}
