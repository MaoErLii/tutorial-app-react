import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, INCREMENT, DECREMENT} from "./action";

// const initialState = {
//     visibilityFilter: VisibilityFilters.SHOW_ALL,
//     todos: []
// }

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter

        default:
            return state
    }
}

function todos (state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]

        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if(index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })

        default:
            return state
    }
}

const initialState = {
    count: 0
}

function counter(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            count: state.count + 1
        }
    }
    if (action.type === DECREMENT) {
        return {
            count: state.count - 1
        }
    }
    return state
}

// function todoApp(state = {}, action) {
//     // if(typeof state === 'undefined') {
//     //     return initialState
//     // }
//
//     // switch (action.type) {
//     //     case SET_VISIBILITY_FILTER:
//     //         return Object.assign({}, state, {
//     //             visibilityFilter: action.filter
//     //         })
//     //
//     //     case ADD_TODO:
//     //         return Object.assign({}, state, {
//     //             todos: [
//     //                 ...state.todos,
//     //                 {
//     //                     text: action.text,
//     //                     completed: false
//     //                 }
//     //             ]
//     //         })
//     //
//     //     case TOGGLE_TODO:
//     //             return Object.assign({}, state, {
//     //                 todos: state.todos.map((todo, index) => {
//     //                     if(index === action.index) {
//     //                         return Object.assign({}, todo, {
//     //                             completed: !todo.completed
//     //                         })
//     //                     }
//     //                     return todo
//     //                 })
//     //             })
//     //
//     //     default: break
//     // }
//
//     // return state
//
//     // switch (action.type) {
//     //     case SET_VISIBILITY_FILTER:
//     //         return Object.assign({}, state, {
//     //             visibilityFilter: action.filter
//     //         })
//     //
//     //     case ADD_TODO:
//     //         return Object.assign({}, state, {
//     //             todos: todos(state.todos, action)
//     //         })
//     //
//     //     case TOGGLE_TODO:
//     //         return Object.assign({}, state, {
//     //             todos: todos(state.todos, action)
//     //         })
//     //
//     //     default:
//     //         return state
//     // }
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }

const todoApp = combineReducers({
    visibilityFilter,
    todos,
    counter
})

export default todoApp