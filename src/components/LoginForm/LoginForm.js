import React from 'react'
import {List, InputItem, WingBlank, Button, WhiteSpace} from 'antd-mobile';
import {createForm} from 'rc-form';
import styles from '../../style/global.css'


const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {
        const { login,handleChange } = this.props;
        return (
            <div>
                <List>
                    <WingBlank>
                        <InputItem
                            type="tel"
                            placeholder="186 1234 1234"
                            onChange={(v)=>{
                                handleChange('user_mobile',v)
                            }}
                        >
                            手机号码
                        </InputItem>
                        <WhiteSpace/>
                        <InputItem
                            type="password"
                            placeholder="****"
                            onChange={(v)=>{
                                handleChange('user_password',v)
                            }}
                        >
                            密码
                        </InputItem>
                    </WingBlank>
                </List>
                <Button type="primary" onClick={login}>登陆</Button>
            </div>
        )
    }
}


export default LoginForm;
