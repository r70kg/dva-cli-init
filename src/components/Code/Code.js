import React from 'react';
import {Flex, List, InputItem, WingBlank, Button, WhiteSpace} from 'antd-mobile';
import { connect } from 'dva';
import style from './Code.css'



class Code extends React.Component {

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.sendHandle = this.sendHandle.bind(this)
        this.state={
            dlgTipTxt: '发送',
            seconds: 59,
            disabled:false
        }
    }

    handleChange(key,val){
        this.props.dispatch({
            type: 'code/codeInfo',
            payload: {
                [key]:val
            }
        })
    }

    sendEmail = () => {
        let siv = setInterval(() => {
            console.log(this.state.seconds)

            this.setState({
                seconds: this.state.seconds-1,
                dlgTipTxt: `(${this.state.seconds}s)`,
                disabled:true
            }, () => {
                if (this.state.seconds == -1) {
                    clearInterval(siv);
                    this.setState({
                        dlgTipTxt: '发送',
                        seconds: 59,
                        disabled:false
                    })
                }
            });
        }, 1000)
    }
    // 倒计时组件
    sendHandle(){
        this.props.dispatch({
            type:"code/sendMsg",
            payload:{
                func:this.sendEmail,
                param:{
                    user_mobile:this.props.user_mobile,
                    type:this.props.type
                }
            }
        })
    }

    callBack(){
        // alert(9)
    }
    render() {

        return (
            <Flex align="center">
                    <InputItem
                        type="tel"
                        placeholder=""
                        onChange={(v) => {
                            this.handleChange('code', v)
                        }}
                    >
                        验证码
                    </InputItem>
                    <Button
                            className={style.btn}
                            disabled={this.state.disabled}
                            type="primary"
                            size="small"
                            onClick={this.sendHandle}
                    >
                        {this.state.dlgTipTxt}
                    </Button>
            </Flex>
        )
    }
}


export default connect(({code})=>({
    code:code
}))(Code);
