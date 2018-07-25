import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'dva';
import {Redirect, Router, Route, Switch,withRouter} from 'dva/router';
import {ActivityIndicator} from 'antd-mobile';
import IndexPage from '../routes/IndexPage/IndexPage';
import Zx from '../routes/Zx/Zx';
import Action from '../routes/Action/Action';
import Center from '../routes/Center/Center';
import style from './App.css';
import Login from '../routes/Login/Login';
import Register from '../routes/Register/Register';
import Search from '../routes/Search/Search';
import SearchRes from '../routes/SearchRes/SearchRes';
import Layout from '../routes/Layout/Layout'  // 需要登录

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
            <ReactCSSTransitionGroup
                transitionName="transitionWrapper"
                component="div"
                className={style.transitionWrapper}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                <div key={this.props.location.pathname}
                     style={{position:"absolute", width: "100%"}}>
                    <div>
                        <ActivityIndicator toast text="正在加载" animating={loading}/>
                    </div>
                    <Switch>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/" exact component={IndexPage}/>
                        <Route path="/search" exact component={Search}/>
                        <Route path="/searchres" exact component={SearchRes}/>
                        <Layout/>
                    </Switch>
                </div>
            </ReactCSSTransitionGroup>
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