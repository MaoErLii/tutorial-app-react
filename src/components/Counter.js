import React, { Component } from 'react'
import { increment, decrement } from "../store/action";
// import store from '../store/store'
import { connect } from 'react-redux'
// import store from '../store/store'
import './cusCounterStyle.css'

function mapStateToProps(state) {
    console.log(state)
    return {
        count: state.count
    }
}


class Counter extends Component {

    // state = {
    //     count:0
    // }

    cusIncrement = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.props.dispatch(increment())
        // store.subscribe(() => {
        //     console.log(store.getState())
        // })
    }

    cusDecrement = () => {
        this.props.dispatch(decrement())
        // store.subscribe(() => {
        //     console.log(store.getState())
        // })
    }

    render () {
        // console.log('加减', store.getState().counter.count)
        console.log(this)
        // console.log(mapStateToProps)

        return (
            <div className="cus-counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.cusDecrement}>-</button>
                    {/*<span>{this.state.count}</span>*/}
                    <span></span>
                    <button onClick={this.cusIncrement}>+</button>
                </div>
                <div>Current： {this.props.counter}</div>
            </div>
        )
    }
}

Counter = connect(mapStateToProps)(Counter)

export default Counter