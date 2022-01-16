export const getSaleInformation = (state) => {
  return {
    purchaseAmount: state.purchaseAmount,
    salesAmount: state.salesAmount,
    balance: state.balance
  }
}
