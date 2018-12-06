import { createStore } from 'redux'
import todoApp from './reducer'
// import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from "./action";

const store = createStore(todoApp)

export default store