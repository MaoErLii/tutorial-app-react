import React, { Component } from 'react'
import Table from './components/Table'
import Form from "./components/Form";

class App extends Component {
    state = {
        characters: [
            // { 'name': 'Alexiel', 'job': 'God Sworn' },
            // { 'name': 'Monika', 'job': 'kid Like' },
            // { 'name': 'Vira', 'job': 'Sister Lover' }
        ],
        data: []
    };

    // componentDidMonunt() {
    //     const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
    //
    //     fetch(url)
    //         .then(res => {
    //         console.log(res)
    //         })
    //         .then(res => {
    //             this.setState({
    //                 data: res
    //             })
    //         })
    // }

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

    render() {
        const characters = [
            { 'name': 'Alexiel', 'job': 'God Sworn' },
            { 'name': 'Monika', 'job': 'kid Like' },
            { 'name': 'Vira', 'job': 'Sister Lover' }
        ]

        console.log('props值', characters)
        console.log('state值', this.state.characters)

        const { data } = this.state
        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

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
                </div>
                <div>
                    <ul>{result}</ul>
                </div>
            </div>
        )
    }
}

export default App