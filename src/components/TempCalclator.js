import React, { Component } from 'react'

const BiolingVerdict = props => {
    console.log(props)
    if (props.scale === 'c') {
        if(props.celsius >= 100) {
            return <p>The water would boil</p>
        } else {
            return <p>The water would not boil</p>
        }
    } else {
        if (tryConvert(props.celsius, toCelsius) >= 100) {
            return <p>The water would boil</p>
        } else {
            return <p>The water would not boil</p>
        }
    }
}

const toCelsius = f => {
    return (f - 32) * 5 /9;
}

const toFahrenheit = c => {
    return (c * 9 / 5) + 32;
}

const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return ''
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TempInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {temperature: ''};
    }

    handleChange(e){
        // this.setState({
        //     temperature: e.target.value
        // })
        this.props.onTemperatureChange(e.target.value)
    }

    render () {
        console.log(this.props)
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale
        console.log('当前温度是', temperature)
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}: </legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
                <BiolingVerdict
                    celsius={temperature}
                    scale={scale}
                />
            </fieldset>
        )
    }
}

class TempCalclator extends Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render () {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        // const temperature = this.state.temperature;
        console.log(this.state)

        // console.log('当前温度是', temperature)
        return (
            <div>
                <TempInput
                    scale="c"
                    temperature = {celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TempInput
                    scale="f"
                    temperature = {fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
            </div>
        )
    }
}

export default TempCalclator