import React from 'React'

class Invoice extends React.Component {
  render() {
    return (
      <div>
        <h5>Invoice</h5>
        <p>Amount: {this.props.amount}</p>
        <p>Date created: {this.props.dateCreated}</p>
      </div>
    )
  }
}

export default Invoice
