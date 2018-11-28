import React, {Component} from 'react'
import {Menu} from 'antd'

class Sider extends Component {
    render() {
        return(
            <Menu
                mode="vertical"
                style={{width: 256}}
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

export default Sider

