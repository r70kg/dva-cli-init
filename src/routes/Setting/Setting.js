import React from 'react'
import {connect} from 'dva'
import {Link} from 'dva/router'
import {List, Badge, NavBar, Icon, WhiteSpace, Button} from 'antd-mobile';
import Footer from '../../components/Footer/Footer'
import style from '../Setting/Setting.css'
import {setToken, getToken} from '../../utils/localstorage'

let navArr = [
    {
        title: "关于我们",
        link: "/setting"
    },
    {
        title: "修改密码",
        link: "/setting"
    },
    {
        title: "意见反馈",
        link: "/setting"
    },
    {
        title: "用户帮助",
        link: "/setting"
    }
]

class Center extends React.Component {

    constructor(props) {
        super(props)
        this.logOut = this.logOut.bind(this)
    }

    componentDidMount() {
        // this.props.dispatch({
        //     type:'userInfo/updateUserInfo',
        //     payload:{
        //         token:getToken()
        //     }
        // })
    }

    logOut(){
        this.props.dispatch({
            type:"LoginData/Logout"
        })
    }
    render() {
        return (

            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left"/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >设置</NavBar>
                <WhiteSpace/>
                <div>
                    <List>
                        {
                            navArr.map((v, idex) => {
                                return (
                                    <Link to={v.link} key={idex}>
                                        <List.Item
                                            arrow="horizontal"
                                        >
                                            <Badge>
                        <span style={{
                            width: '26px',
                            height: '26px',
                            background: '#ddd',
                            display: 'inline-block'
                        }}/>
                                            </Badge>
                                            <span style={{marginLeft: 12}}>{v.title}</span>

                                        </List.Item>
                                    </Link>

                                )
                            })
                        }
                    </List>
                    <WhiteSpace/>
                    <List>
                        <List.Item extra={1.0}>
                            <Badge>
                                <span style={{
                                    width: '26px',
                                    height: '26px',
                                    background: '#ddd',
                                    display: 'inline-block'
                                }}/>
                            </Badge>
                            <span style={{marginLeft: 12}}>送</span>
                        </List.Item>
                        <List.Item extra="5M">
                            <Badge>
                                <span style={{
                                    width: '26px',
                                    height: '26px',
                                    background: '#ddd',
                                    display: 'inline-block'
                                }}/>
                            </Badge>
                            <span style={{marginLeft: 12}}>送</span>
                        </List.Item>
                    </List>
                </div>
                <div>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                </div>
                <Button onClick={this.logOut}>退出登录</Button>
                <Footer/>
            </div>
        );
    }
}


export default connect(
    ({userInfo}) => ({
        user_pics: userInfo.user_pics,
        user_username: userInfo.user_username
    })
)(Center);
