import React from 'react'
import {routerRedux} from 'dva/router'
import {connect} from 'dva'
import {SearchBar,NavBar,Icon} from 'antd-mobile';
import Footer from '../../components/Footer/Footer'
import Qwrap from './Qwrap/Qwrap'
import style from './search.css';

class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            _key:""
        }

        this.clickHandle = this.clickHandle.bind(this)
        this.changHandle = this.changHandle.bind(this)
    }

    componentDidMount(){
        this.props.dispatch({
            type:'search/getCompanyKeywordsListInfo'
        })
    }

    changHandle(v){
        this.setState({
            _key:v
        })
    }

    clickHandle(e){
        var _qKey="";
        if(e.target){
             _qKey = e.target.innerHTML
        }else{
            _qKey = this.state._key; // 获取搜索关键字
        }
        this.setState({
            _key:_qKey
        })

        this.props.dispatch({
            type:'search/getApiCompanyListInfo',
            payload:{
                payload:{
                    token:"",
                    typeoneid:"",
                    q:_qKey,
                    page:1,
                    lng:"116.46",
                    lat:"39.92"
                },
                isGo:true
            }
        })
    }

    render() {

        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={(e)=>{
                        this.props.dispatch(routerRedux.go(-1))
                    }}
                >
                    <div className={style.search}>
                        <SearchBar
                            // value={this.state._key}
                            placeholder="输入关键字"
                            showCancelButton={true}
                            cancelText="搜索"
                            onCancel={this.clickHandle}
                            onChange={this.changHandle}
                        />
                    </div>
                </NavBar>

                <div className={style.bt}>
                    <Qwrap bt="热门搜索" data={this.props.HotKeyList} clickHandle={this.clickHandle}/>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default connect(
    ({search})=>({
        HotKeyList:search.HotKeyList
    })
)(Search);
