import React, {Component} from 'react'

class Time extends Component {
    constructor(props) {
        super(props)

        this.state = {
            localDate: new Date().toLocaleString()
        }
    }

    tick() {
        this.setState({
            localDate: new Date().toLocaleString()
        })
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        const timeData = this.props.timeData.toLocaleString()
        // console.log('localTime', this.state.localDate)
        return (
            <div>
                <h3>App Start Time: {timeData}</h3>
                <h3>Local Time: {this.state.localDate}</h3>
            </div>
        )
    }
}

export default Time