// 需要登录的组件

import React from 'react'
import {connect} from 'dva'
import {Redirect, Router, Route, Switch} from 'dva/router';

import Setting from '../Setting/Setting';



class  Layout extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Route path="/setting" exact component={Setting}/>
            </div>
        )
    }
}

export default connect(({userInfo})=>({
    isAuth:userInfo
}))(Layout);
