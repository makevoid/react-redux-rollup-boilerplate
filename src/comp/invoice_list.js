import React from 'React'
import Comp from './comp'

import Invoice from './invoice'


class InvoiceList extends Comp {

  invoiceList(invoices) {
    let rows = []
    invoices.forEach((inv, _) => {
      rows.push(<Invoice key={inv.id} amount={inv.amount} dateCreated={inv.dateCreated} />)
    })
    return rows;
  }

  render() {
    let invoices = this.context.store.getState()
    return (
      <div>
        Inoice count: {invoices.length}
        <div>{this.invoiceList(invoices)}</div>
      </div>
    )
  }

}

export default InvoiceList
