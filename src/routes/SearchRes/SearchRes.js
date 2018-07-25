import React from 'react'
import {routerRedux} from 'dva/router'
import {connect} from 'dva'
import {SearchBar,NavBar,Icon} from 'antd-mobile';
import ResList from '../../components/ResList/ResList'
import Footer from '../../components/Footer/Footer'
import style from './SearchRes.css'

class SearchRes extends React.Component {

    constructor(props){
        super(props)
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
                isGo:false
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
                        this.props.dispatch(routerRedux.push('/'))
                    }}
                >
                    <div className={style.search}>
                        <SearchBar
                            value={this.state._key}
                            placeholder="输入关键字"
                            showCancelButton={true}
                            cancelText="搜索"
                            onCancel={this.clickHandle}
                            onChange={this.changHandle}
                        />
                    </div>
                </NavBar>
                <div>
                    <ResList data={this.props.searchRes}/>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default connect(
    ({search})=>({
        searchRes:search.searchRes
    })
)(SearchRes);
