import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from '../src/pages/Home'
import MyInfo from '../src/pages/myInfo'
import Header from '../src/layout/Header'
import './style/cusStyle.css'
import Switch from "react-router/es/Switch";


class App extends Component {
    state = {
        characters: [
            { 'name': 'Alexiel', 'job': 'God Sworn' },
            { 'name': 'Monika', 'job': 'Fucking Damn' },
            { 'name': 'Vira', 'job': 'Holy Shit' }
        ],
        data: [],
        time: new Date()
    };

    // tick () {
    //     this.setState({
    //         time: new Date()
    //     })
    // }

    render() {

        console.log('characters的值', this.state.characters)
        console.log('data的值', this.state.data)
        console.log('App Start Time的值', this.state.time.toLocaleString())

        return (
            <BrowserRouter>
                <div className="App">
                    <Header></Header>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/users" exact component={MyInfo} />
                        {/*<Route path="/users" component={MyInfo} />*/}
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App