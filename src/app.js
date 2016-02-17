import { createStore } from 'Redux'
import React from 'React'
import { render } from 'ReactDOM'
import { Provider } from 'ReactRedux'


const c = console
const d = document


// store & controller (redux)

let init = false

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCR":
      return state + 1
    case "INCR":
      return state - 1
    default:
      if (init)
        console.log(`action: ${action.type} - no state change`)
      init = true
      return state
  }
}

const store = createStore(counter)
window.store = store



// views (react)


// components

const CounterButton = React.createClass({
  handleClick(event) {
    store.dispatch({ type: 'INCR' })
  },
  render() {
    return (
      <button onClick={this.handleClick}>
        Incr
      </button>
    )
  }
})

const Counter = React.createClass({
  contextTypes: {
    store: React.PropTypes.object
  },

  render() {
    return (
      <div>
        Counter:
        <h4>{this.context.store.getState()}</h4>
      </div>
    )
  }
})

const mainRender = () => {
  render(
    <div>
      <h1>Hello Rollup+React+Redux!</h1>
      <Provider store={store}>
        <Counter />
      </Provider>
      <CounterButton />
    </div>,
    d.querySelector('.container')
  )
}

// main render

mainRender()

store.subscribe(() =>
  mainRender()
)
