import React, { Component } from 'react'
// import { render } from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer)

class TodoListExample extends Component {
    render () {
        return (
            <Provider store={store}>
                <App></App>
            </Provider>
        )
    }
}

export default TodoListExample
