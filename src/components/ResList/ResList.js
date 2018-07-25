import React from 'react'
import {routerRedux} from 'dva/router'
import {connect} from 'dva'
import {SearchBar, NavBar, Icon} from 'antd-mobile';
import style from './ResList.css';

class ResList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }


    render() {

        return (
            this.props.data.length == 0
                ? <div className={style.noData}>暂无数据</div>
                : <div className={style.resListWrap}>
                    {
                        this.props.data.map((v, idex) => {
                            return (

                                <div key={idex}>
                                    <div className={style.item}>
                                        <div>
                                            <img src={window.imgUrl + v.company_pics} alt=""/>
                                        </div>
                                        <div>
                                            <h2>
                                                {v.company_names.substring(0, 8)}
                                            </h2>
                                            <p>
                                                {v.company_desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        )
    }
}


export default connect(
)(ResList);
