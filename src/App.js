import React, { Component } from 'react'
import Table from './components/Table'
import Form from "./components/Form";
import GhibliList from './components/GhibliList'
import Time from './components/Time'
import TempCalclator from './components/TempCalclator'
import WarningComponent from './components/WarningBanner'
import CusHeader from './components/layout/CusHeader'
import CusSider from './components/layout/CusSider'
import {Layout} from 'antd'
import AppRouter from './router/AppRouter'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import todoApp from './store/reducer'
import store from './store/store'
import './style/cusStyle.css'
// import TodoListExample from './TodoListExample/index'
// import {addTodo} from "./store/action";

const { Footer, Sider, Content } = Layout
//
// const initialState = {
//     count: 0
// }

// function reducer(state = initialState, action) {
//     if (action.type === 'INCREMENT') {
//         return {
//             count: state.count + 1
//         }
//     }
//     if (action.type === 'DECREMENT') {
//         return {
//             count: state.count - 1
//         }
//     }
//     return state
// }

// const store = createStore(todoApp)

class App extends Component {
    state = {
        characters: [
            { 'name': 'Alexiel', 'job': 'God Sworn' },
            { 'name': 'Monika', 'job': 'kid Like' },
            { 'name': 'Vira', 'job': 'Sister Lover' }
        ],
        data: [],
        time: new Date()
    };

    // tick () {
    //     this.setState({
    //         time: new Date()
    //     })
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
        console.log('App submit', character)
        // 将Form组件传来的对象添加到this.state.characters数组中
        this.setState({characters: [...this.state.characters, character]})
    }

    componentDidMount() {
        const url ="https://ghibliapi.herokuapp.com/films"
        fetch (url, {
            method: 'GET'
        })
        .then((res) => res.text()).then(res => {
            // console.log()
            this.setState({
                data: JSON.parse(res)
            })
        })
        // this.timerID = setInterval(
        //     () => {
        //         this.tick()
        //     }, 1000
        // )
    }

    // tick () {
    //     this.setState({
    //         time: new Date()
    //     })
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timerID)
    // }

    render() {
        // const characters = [
        //     { 'name': 'Alexiel', 'job': 'God Sworn' },
        //     { 'name': 'Monika', 'job': 'kid Like' },
        //     { 'name': 'Vira', 'job': 'Sister Lover' }
        // ]
        const characters = this.state.characters
        // console.log('props值', characters)
        // console.log('state值', this.state.characters)
        console.log('data的值', this.state.data)
        console.log('App Start Time的值', this.state.time.toLocaleString())

        return (
            <div className="App">
                <Layout>
                    <div className="header">
                        <CusHeader/>
                    </div>
                    <Layout>
                        <Sider  className="side-bar" theme="light">
                            <CusSider/>
                        </Sider>
                        <Content className="content">
                            <h1>Hello World</h1>
                            {/*<TodoListExample/>*/}
                            <Time
                                timeData = {this.state.time}
                            >
                            </Time>

                            <Provider store={store}>
                                <Counter/>
                            </Provider>

                            <AppRouter/>
                            <WarningComponent/>
                            <TempCalclator/>
                            <div className="container">
                                <Table
                                    // characterData={characters}
                                    characterData={characters}
                                    removeCharacter={this.removeCharacter}
                                />
                                <Form
                                    handleSubmit={this.handleSubmit}
                                />
                                { this.state.data.length > 0 &&
                                <GhibliList
                                    filmData = {this.state.data}
                                />
                                }
                            </div>
                        </Content>
                    </Layout>
                    <Footer className="footer">Footer</Footer>
                </Layout>
            </div>
        )
    }
}

export default App