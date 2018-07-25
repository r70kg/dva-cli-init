import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import dynamic from 'dva/dynamic';
function RouterConfig({history, app}) {
    // 按需加载
    const Loading = dynamic({
        app,
        component: () => import('./components/Loading/Loading')
    });

    const Login = dynamic({
        app,
        component: () => import('./routes/Login/Login')
    });

    const AuthRouter = dynamic({
        app,
        component: () => import('./components/AuthRouter/AuthRouter')
    });

    const IndexPage = dynamic({
        app,
        models: () => [
            import('./models/indexpage')
        ],
        component: () => import('./routes/IndexPage/IndexPage')
    });

    const Search = dynamic({
        app,
        component: () => import('./routes/Search/Search')
    });

    const SearchRes = dynamic({
        app,
        component: () => import('./routes/SearchRes/SearchRes')
    });

    const Action = dynamic({
        app,
        component: () => import('./routes/Action/Action')
    });

    const Map = dynamic({
        app,
        component: () => import('./components/MapContainer/MapContainer')
    });

    const Center = dynamic({
        app,
        component: () => import('./routes/Center/Center')
    });

    const Setting = dynamic({
        app,
        component: () => import('./routes/Setting/Setting')
    });


    return (
        <div>
            <Loading />
            <Router history={history}>
                <Switch>
                    <Route path='/login' exact component={Login} />
                    <Route path='/' exact component={IndexPage} />
                    <Route path='/map' exact component={Map} />
                    <Route path='/search' exact component={Search} />
                    <Route path='/ac' exact component={Action} />
                    <Route path='/searchRes' exact component={SearchRes} />
                    <AuthRouter path='/center' exact component={Center} />
                    <AuthRouter path='/setting' exact component={Setting} />
                </Switch>
            </Router>
        </div>
    );
}

export default RouterConfig;






