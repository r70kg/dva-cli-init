import React from 'react';
import {connect} from 'dva';
import {Redirect, Router, Route, Switch,withRouter} from 'dva/router';
import {ActivityIndicator} from 'antd-mobile';
import IndexPage from '../../routes/IndexPage/IndexPage';
import Action from '../../routes/Action/Action';
import Login from '../../routes/Login/Login';
import Register from '../../routes/Register/Register';
import Search from '../../routes/Search/Search';
import SearchRes from '../../routes/SearchRes/SearchRes';
import Center from '../../routes/Center/Center';
import Layout from '../../routes/Layout/Layout'  // 需要登录
import AuthRouter from '../AuthRouter/AuthRouter'

import MapContainer from '../../components/MapContainer/MapContainer' //  测试地图

const TIMER = 800;
let timeoutId = null;

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }


    componentWillMount() {
        document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        document.body.addEventListener('touchmove', (ev) => {
            ev.preventDefault();
        });
    }

    render() {
        const {loading} = this.props;
        const {show} = this.state;
        return (
                <div>
                    <div>
                        <ActivityIndicator toast text="正在加载" animating={loading}/>
                    </div>
                    <Switch>
                        <Route path="/ac" exact component={Action}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/" exact component={IndexPage}/>
                        <Route path="/search" exact component={Search}/>
                        <Route path="/searchres" exact component={SearchRes}/>
                        <Route path="/map" exact component={MapContainer}/>
                        <Route path="/center" exact component={Center}/>
                        <AuthRouter component={Layout}/>
                    </Switch>
                </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.loading.global
        && state.app.isLoading
    }
};

export default connect(mapStateToProps)(withRouter(App));