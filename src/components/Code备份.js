import React from 'react';
import {Flex, List, InputItem, WingBlank, Button, WhiteSpace} from 'antd-mobile';
import { connect } from 'dva';
import code from "../models/code";



class Code extends React.Component {

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.sendHandle = this.sendHandle.bind(this)
    }

    handleChange(key,val){
        this.props.dispatch({
            type: 'code/codeInfo',
            payload: {
                [key]:val
            }
        })
    }

    // 倒计时
    // sendEmail(_, {call, put, select}) {
    //     let state = yield select(state=>state)
    //     yield call()
    //     if(state.seconds == -1){
    //         clearInterval(siv);
    //     }
    //
    //     let siv = setInterval(() => {
    //         yield put({type:'changeText'})
    //     }, 1000)
    // }

    sendHandle(){
        
        this.props.dispatch({
            type:'code/sendEmail'
        })
    }


    render() {
        return (
                <Flex align="center">
                    <Flex.Item>
                        <InputItem
                            type="tel"
                            placeholder="186 1234 1234"
                            onChange={(v) => {
                                this.handleChange('code', v)
                            }}
                        >
                            验证码
                        </InputItem>
                    </Flex.Item>
                    <Flex.Item>
                        <Button type="primary"
                                size="small"
                                onClick={this.sendHandle}
                        >
                            {code.state.seconds==-1 ? "发送" : code.state.dlgTipTxt}
                        </Button>
                        <WhiteSpace/>
                    </Flex.Item>
                </Flex>
        )
    }
}


export default connect( ({code})=>({
    code:code
}))(Code);
