import React from 'React'
import Comp from './comp'

let last_id = 1

class InvoiceAddButton extends Comp {

  handleClick(event) {
    let store = this.context.store
    let inv = { id: last_id, amount: 1000, dateCreated: "2016-01-01" }
    last_id++
    store.dispatch({ type: 'INVOICE_CREATE', invoice: inv })
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Append invoice
      </button>
    )
  }

}

export default InvoiceAddButton
