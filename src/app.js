import { createStore } from 'Redux'
import React from 'React'
import { render } from 'ReactDOM'
import { Provider } from 'ReactRedux'
import mainStore from './store'

const c = console
const d = document

const store = createStore(mainStore)
window.store = store


import InvoiceList      from './comp/invoice_list'
import InvoiceAddButton from './comp/invoice_add_button'


class RootComponent extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello Rollup+React+Redux!</h1>
        <Provider store={store}>
          <div>
            <InvoiceList />
            <InvoiceAddButton />
          </div>
        </Provider>
      </div>
    )
  }
}


const mainRender = () => {
  render(
    <RootComponent />,
    d.querySelector('.container')
  )
}

// main render

mainRender()

store.subscribe(() =>
  mainRender()
)
