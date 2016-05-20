import { createStore } from 'Redux'
import React from 'React'
import { render } from 'ReactDOM'
import { Provider } from 'ReactRedux'


const c = console
const d = document


// store & controller (redux)

let init = false

const invoices = (state = [], action) => {
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

const store = createStore(invoices)
window.store = store



// views (react)


// components

const InvoiceAddButton = React.createClass({
  handleClick(event) {
    let inv = { amount: 1000, dateCreated: "2016-01-01" }
    store.dispatch({ type: 'INVOICE_CREATE', invoice: inv })
  },
  render() {
    return (
      <button onClick={this.handleClick}>
        Append invoice
      </button>
    )
  }
})


const Invoice = React.createClass({
  render() {
    return (
      <div>
        <h5>Invoice</h5>
        <p>Amount: {this.props.amount}</p>
        <p>Date created: {this.props.dateCreated}</p>
      </div>
    )
  }

})


const InvoiceList = React.createClass({
  contextTypes: {
    store: React.PropTypes.object
  },

  invoiceList(invoices) {
    let rows = []
    invoices.forEach((inv, _) => {
      rows.push(<Invoice amount={inv.amount} dateCreated={inv.dateCreated} />)
    })
    return rows;
  },

  render() {
    let invoices = this.context.store.getState()
    console.log(invoices)
    return (
      <div id="antani">
        Inoice count: {invoices.length}
        <div>{this.invoiceList(invoices)}</div>
      </div>
    )
  }
})

const mainRender = () => {
  render(
    <div>
      <h1>Hello Rollup+React+Redux!</h1>
      <Provider store={store}>
        <InvoiceList />
      </Provider>
      <InvoiceAddButton />
    </div>,
    d.querySelector('.container')
  )
}

// main render

mainRender()

store.subscribe(() =>
  mainRender()
)
