import { createStore } from 'Redux'
import React from 'React';
import { render } from 'ReactDOM';


const c = console
const d = document

// store & controller (redux)

let init = false

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCR":
      return state + 1;
    case "INCR":
      return state - 1;
    default:
      if (init)
        console.log(`action: ${action.type} - no state change`)
      init = true
      return state;
  }
}

const store = createStore(counter)
window.store = store

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'INCR' })


// views (react)

render(
  <h1>Hallo Welt</h1>,
  d.querySelector('.container')
)
