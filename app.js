import { Redux } from 'redux'

const c = console

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCR":
      return state + 1;
    case "INCR":
      return state - 1;
    default:
      return state;
  }
}

const { createStore } = Redux
const store = createStore(counter)

c.log(store.getState())
