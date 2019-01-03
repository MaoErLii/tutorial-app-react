import React, {Component} from 'react'
import {Menu} from 'antd'

class CusHeader extends Component {
    render() {
        return (
            <Menu
                mode="horizontal"
                theme="light"
                style={{lineHeight: '64px'}}
            >
                <Menu.Item>
                    首页
                </Menu.Item>
                    {/*<Menu.Item>*/}
                        {/*我的*/}
                    {/*</Menu.Item>*/}
            </Menu>
        )

    }
}

export default CusHeader