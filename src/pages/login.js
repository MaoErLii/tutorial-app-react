import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div>
                <div className="login-form">
                    <div>
                        <span>用户</span>
                        <input placeholder="邮箱" />
                    </div>
                    <div>
                        <span>密码</span>
                        <input placeholder="密码" />
                    </div>
                    <div>
                        <button>登录</button>
                        <button>注册</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login