import React, { Component } from 'react'

const BiolingVerdict = props => {
    if(props.celsius >= 100) {
        return <p>The water would boil</p>
    } else {
        return <p>The water would not boil</p>
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
        this.state = {temperature: ''};
    }

    handleChange(e){
        this.setState({
            temperature: e.target.value
        })
    }

    render () {
        const temperature = this.state.temperature;
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
                />
            </fieldset>
        )
    }
}

class TempCalclator extends Component {
    render () {
        // const temperature = this.state.temperature;

        // console.log('当前温度是', temperature)
        return (
            <div>
                <TempInput
                    scale="c"
                />
                <TempInput
                    scale="f"
                />
            </div>
        )
    }
}

export default TempCalclator