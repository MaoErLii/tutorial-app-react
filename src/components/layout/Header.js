import React, {Component} from 'react'
import {Menu} from 'antd'

class Header extends Component {
    render() {
        return (
            <Menu
                mode="horizontal"
            >
                <Menu.Item>
                    首页
                </Menu.Item>
                <Menu.Item>
                    我的
                </Menu.Item>
            </Menu>
        )

    }
}

export default Header