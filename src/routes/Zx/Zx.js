import React from 'react'
import Footer from '../../components/Footer/Footer'
import { connect } from 'dva';
import ZxList from '../../components/ZxList/ZxList'
import { Toast,Button,ActivityIndicator} from 'antd-mobile'


@connect(({zx,loading }) => ({
    zxList:zx.zxList,
    loading
}))

class Zx extends React.Component {

    constructor(props){
        super(props)
    }
    componentWillMount(){

    }

    componentDidMount() {
        this.props.dispatch({
            type: 'zx/getApiNewsoneList',
            payload: {
                page:1
            },
        });
    }

    // 移除组件 恢复App中全局loading
    componentWillUnmount(){
        this.props.dispatch({
            type: 'app/isLoading',
            payload: {
                isLoading:true
            }
        })
    }
    // 下拉刷新时候 设置App loading为false  待封装成方法简化
    handle=()=>{
        this.props.dispatch({
            type: 'app/isLoading',
            payload: {
                isLoading:false
            }
        })
        this.props.dispatch({
            type: 'zx/getApiNewsoneList',
            payload: {
                page:1
            },
        });
    }


    render() {
        const isShow = this.props.loading.models.zx
        return (
            <div>
                <ZxList data={this.props.zxList}/>
                <Footer/>
            </div>
        )
    }
}

Zx.propTypes = {

};

export default Zx;
