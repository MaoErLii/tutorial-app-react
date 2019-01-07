import React, { Component } from 'react'
import '../layout/header.css'
import { Link } from "react-router-dom/";

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div>
                    <Link to="/">首页</Link>
                </div>
                <div>
                    <Link to="/users">我的</Link>
                </div>
            </div>
        )
    }
}

export default Header