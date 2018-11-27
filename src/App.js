import React, { Component } from 'react'
import Table from './components/Table'
import Form from "./components/Form";
import GhibliList from './components/GhibliList'

class App extends Component {
    state = {
        characters: [
            { 'name': 'Alexiel', 'job': 'God Sworn' },
            { 'name': 'Monika', 'job': 'kid Like' },
            { 'name': 'Vira', 'job': 'Sister Lover' }
        ],
        data: []
    };

    removeCharacter = index => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }
    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]})
    }

    componentDidMount() {
        const url ="https://ghibliapi.herokuapp.com/films"
        fetch (url, {
            method: 'GET'
        })
        .then((res) => res.text()).then(res => {
            console.log()
            this.setState({
                data: JSON.parse(res)
            })
        })
    }

    render() {
        const characters = [
            { 'name': 'Alexiel', 'job': 'God Sworn' },
            { 'name': 'Monika', 'job': 'kid Like' },
            { 'name': 'Vira', 'job': 'Sister Lover' }
        ]

        console.log('props值', characters)
        console.log('state值', this.state.characters)
        console.log('data的值', this.state.data)


        return (
            <div className="App">
                <h1>Hello World</h1>
                <div className="container">
                    <Table
                        // characterData={characters}
                        characterData={this.state.characters}
                        removeCharacter={this.removeCharacter}
                    />
                    <Form
                        handleSubmit={this.handleSubmit}
                    />
                    <img src="https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png" alt="" />
                    <GhibliList
                        filmData = {this.state.data}
                    />
                </div>
            </div>
        )
    }
}

export default App