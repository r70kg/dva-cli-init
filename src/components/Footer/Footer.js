import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import { withRouter } from 'dva/router';
import {TabBar} from 'antd-mobile';

export let navList = [
    {
        path: '/',
        text: '首页',
        title: '首页',
        hide: false
    },
    {
        path: '/ac',
        text: '测试',
        title: '测试',
        hide: true
    },
    {
        path: '/map',
        text: '地图',
        title: '地图',
        hide: true
    },
    {
        path: '/center',
        text: '我的',
        title: '我的',
        hide: true
    }
];


const Footer = ({location,history}) => {

    return (
        <div style={{
            position: 'fixed',
            width: '100%',
            bottom: 0,
            display: 'block'
        }}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
                {
                    navList.map(v => (
                        <TabBar.Item
                            title={v.title}
                            key="Life"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selected={
                                location.pathname === v.path
                            }
                            onPress={() => {
                                if(location.pathname !== v.path){
                                    history.push(v.path)
                                }
                            }}
                        >
                        </TabBar.Item>
                    ))
                }
            </TabBar>
        </div>
    )
}

export default withRouter(connect()(Footer));

