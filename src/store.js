let init = false

const mainStore = (state = [], action) => {
  // console.log("invoice:", action.invoice)
  switch (action.type) {
    case "INVOICE_CREATE":
      state.push(action.invoice)
      return state
    case "INVOICE_UPDATE":
      return state
    default:
      if (init)
        console.log(`action: ${action.type} - no state change`)
      init = true
      return state
  }
}

export default mainStore
