import {ADDTODO} from './action'

const inititalState = {
  todo: ["hassen", "num1", "etc"]
}

const todoReducer = (state = inititalState, action) => {
  switch(action.type) {
    case ADDTODO: return {
      ...state,
      text: state.todo
    }
    default: return state
  }
}

export default todoReducer