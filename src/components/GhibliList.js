import React, {Component} from 'react'
import './ghibliStyle.css'

const Card = props => {
    if (props.filmData !== undefined) {
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
    } else {
        return (
            <div>hello</div>
        )
    }
}

class GhibliList extends Component {
    render () {
        const {filmData} = this.props
        console.log('GhibliList', filmData)
        return (
            <div>
                <Card
                    filmData={filmData}
                >
                </Card>
            </div>
        )
    }
}

export default GhibliList



