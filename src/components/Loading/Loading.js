import React from 'react';
import {connect} from 'dva';
import {ActivityIndicator} from 'antd-mobile';

class Loading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        // 获取轮播图等列表
        this.props.dispatch({
            type: 'indexpage/getIndexListInfo'
        })
    }

    render() {
        let {loading} = this.props
        return (
            <div>
                <ActivityIndicator toast text="正在加载" animating={loading}/>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.loading.global
        // && state.app.isLoading
    }
};
export default connect(mapStateToProps)(Loading);