import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job: ''
        }

        this.state = this.initialState
    }
    handleChange = event => {
        // console.log('监听input对象', event)
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
        // console.log(this.state)
    }
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)
    }

    render () {
        const {name, job} = this.state

        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange}
                />
                <input
                    type="button"
                    value="Add Character"
                    onClick={this.submitForm}
                />
            </form>
        )
    }
}

export default Form