import React from 'react'
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'dva';

import LoginForm from '../../components/LoginForm/LoginForm'


class Login extends React.Component {

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin  = this.handleLogin.bind(this);
    }

    handleChange(key,val){
        this.props.dispatch({
            type: 'LoginData/setInfo',
            payload: {
                [key]:val
            }
        })
    }

    handleLogin(){
        // 如果从其他页面跳到登陆重定向到跳转前页面,否则跳到首页
        var from = this.props.location.state ? this.props.location.state.from : '/'
        this.props.dispatch({
            type: 'LoginData/Login',
            payload:from
        })
    }

    render() {
        return (
            <div>
                <LoginForm login={this.handleLogin} handleChange={this.handleChange}/>
            </div>
        )
    }
}


export default connect(({ LoginData }) => ({
    LoginData,
}))(Login);
