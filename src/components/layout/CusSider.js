import React, {Component} from 'react'
import {Menu} from 'antd'

class CusSider extends Component {
    render() {
        return(
            <Menu
            >
                <Menu.Item>
                    侧边栏一
                </Menu.Item>
                <Menu.Item>
                    侧边栏二
                </Menu.Item>
            </Menu>
        )
    }
}

export default CusSider

