import React from 'react'
import { createForm } from 'rc-form';
import { connect } from 'dva';

import RegisterForm from '../../components/RegisterForm/RegisterForm'


class Login extends React.Component {

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleReg  = this.handleReg.bind(this);
    }

    handleChange(key,val){
        this.props.dispatch({
            type: 'register/setInfo',
            payload: {
                [key]:val
            }
        })
    }

    handleReg(){
        this.props.dispatch({
            type: 'register/register'
        })
    }

    render() {
        return (
            <div>
                <RegisterForm reg={this.handleReg} handleChange={this.handleChange}/>
            </div>
        )
    }
}


export default connect(({ LoginData }) => ({
    LoginData,
}))(Login);
