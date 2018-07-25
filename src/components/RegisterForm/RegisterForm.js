import React from 'react'
import {Flex, List, InputItem, WingBlank, Button, WhiteSpace} from 'antd-mobile';
import {createForm} from 'rc-form';
import Code from '../Code/Code'
import {connect} from 'dva';
import style from './RegisterForm.css'
import styles from '../../style/global.css'


class RegisterForm extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        const {reg, handleChange,user_mobile} = this.props;
        return (
            <div>
                <List>
                    <WingBlank>
                        <InputItem
                            type="tel"
                            placeholder=""
                            onChange={(v) => {
                                handleChange('user_mobile', v)
                            }}
                        >
                            手机号码
                        </InputItem>
                        <Code user_mobile={user_mobile} type={1} />
                        <InputItem
                            type="password"
                            placeholder=""
                            onChange={(v) => {
                                handleChange('user_password', v)
                            }}
                        >
                            密码
                        </InputItem>

                    </WingBlank>

                </List>
                <Button type="primary" className="btn" onClick={reg}>注册</Button>
            </div>
        )
    }
}


export default connect(
    ({register}) => ({
        user_mobile: register.user_mobile
    })
)(RegisterForm);
