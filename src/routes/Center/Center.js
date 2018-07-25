import React from 'react'
import {connect} from 'dva'
import {Link} from 'dva/router'
import {List, Badge, NavBar, Icon} from 'antd-mobile';
import Footer from '../../components/Footer/Footer'
import style from './Center.css'
import {setToken, getToken} from '../../utils/localstorage'

// 公用userinfo model

let navArr = [
    {
        title: "在线客服",
        link: "/setting"
    },
    {
        title: "我的地址",
        link: "/setting"
    },
    {
        title: "我的收藏",
        link: "/setting"
    },
    {
        title: "练习我们",
        link: "/setting"
    },
    {
        title: "我的钱包",
        link: "/setting"
    },
    {
        title: "银行卡管理",
        link: "/setting"
    },
    {
        title: "设置",
        link: "/setting"
    }
]

class Center extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'userInfo/updateUserInfo',
            payload: {
                token: getToken()
            }
        })
    }

    render() {
        return (

            <div>
                <NavBar
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        "消息"
                    ]}
                >个人中心</NavBar>
                <div className={style.user_pics}>
                    <span>
                        <img src={window.imgUrl + this.props.user_pics} alt=""/>
                    </span>
                    <p>{this.props.user_username ? this.props.user_username : "登录"}</p>
                </div>
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
                </div>
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
