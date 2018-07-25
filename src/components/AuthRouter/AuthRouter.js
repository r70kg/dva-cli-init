import React from 'react';
import { Route, withRouter,Redirect } from 'dva/router';
import { getToken } from '../../utils/localstorage';

class AuthRouter extends React.Component {
    state = {
        isLogin:getToken()
    }
    
    // componentDidMount(){
    //     console.log(getToken())
    // }
    componentWillReceiveProps(prevProps) {
        // 默认打开登录遮罩层
        const newPath = prevProps.location.pathname !== this.props.location.pathname;
    }
    render() {
        const { component, ...rest } = this.props;
        const Component = component;
        return (
            <Route {...rest} render={props => (
                this.state.isLogin ? (
                    <Component {...props}/>
                ) : (<Redirect
                    to={{
                        pathname: "/login",
                        state: { from:this.props.location.pathname }
                    }}
                />)
            )}/>
        )
    }
}

export default withRouter(AuthRouter)