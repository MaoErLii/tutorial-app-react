import React, {Component} from 'react'
import './ghibliStyle.css'

const Card = props => {
    const film = props.filmData.map((item, index) => {
        return (
            <div key={index}  className="card">
                <h1>{item.title}</h1>
                <p>{item.description.substr(0, 300)}...</p>
            </div>
        )
    })
    return (
        <div className="ghibili-container">{film}</div>
    )
}

class GhibliList extends Component {
    render () {
        const {filmData} = this.props
        console.log('GhibliList', filmData)
        return (
            <div>
                <img className="totoro-img" src="https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png" alt="" />
                <Card
                    filmData={filmData}
                >
                </Card>
            </div>
        )
    }
}

export default GhibliList



