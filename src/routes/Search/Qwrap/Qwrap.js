import React from 'react'
import {connect} from 'dva'
import {SearchBar,NavBar,Icon} from 'antd-mobile';
import style from './Qwrap.css';


class Qwrap extends React.Component {

    constructor(props){
        super(props)
    }

    render() {

        return (
            <div className={style.Qwrap}>
                <h2>
                    {this.props.bt}
                </h2>
                <ul>
                    {
                        this.props.data.map((v,idex)=>{
                            return (
                                <li key={idex} onClick={this.props.clickHandle}>
                                    {v.keyword_name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default connect()(Qwrap);
