import React from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router'
import {SearchBar,Carousel, WingBlank,Flex,Grid,ListView,Button,NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
import style from './IndexPage.css';
import Footer from '../../components/Footer/Footer'



class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageId:1
        }
        this.goSearch = this.goSearch.bind(this)
    }

    componentDidMount() {
        // 获取轮播图等列表
        this.props.dispatch({
            type: 'indexpage/getIndexListInfo'
        })

        this.props.dispatch({
            type: 'indexpage/getRecommendListInfo',
            payload:{
                page:this.state.pageId,
                token:''
            }
        })

    }

    // 跳转搜索页
    goSearch(){
        this.props.dispatch(routerRedux.push('/search'))
    }



    render() {
        let {indexpage} = this.props
        return (
            <div className={style.normal}>
                <SearchBar
                    placeholder="Search"
                    maxLength={8}
                    className={style.search}
                    showCancelButton={true}
                    cancelText="搜索"
                    onFocus={this.goSearch}
                />
                <WhiteSpace />
                <Carousel
                    autoplay
                    dots={true}
                    infinite={true}
                >
                    {indexpage.banerList.map(v => (
                        <a
                            key={v.bannid}
                            href={v.bann_content}
                            style={{display: 'inline-block', width: '100%',}}
                        >
                            <img
                                src={window.imgUrl + v.bann_pics}
                                alt=""
                                style={{width: '100%', verticalAlign: 'top'}}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({imgHeight: 'auto'});
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <Grid data={indexpage.categoryList}
                      hasLine={false}
                      columnNum={4}
                      square={false}
                      renderItem={dataItem => (
                          <div style={{ padding: '0' }}>
                              <img src={window.imgUrl+dataItem.type_pic} style={{ width: '40px', height: '40px' }} alt="" />
                              <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                  <span>{dataItem.type_name}</span>
                              </div>
                          </div>
                      )}
                />
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    测试测试测试测试测试测
                </NoticeBar>


                {/*列表*/}
                <div>
                    <Grid data={indexpage.companyList}
                          hasLine={false}
                          columnNum={3}
                          square={true}
                          renderItem={dataItem => (
                              <div style={{ padding: '0' }}>
                                  <img src={window.imgUrl+dataItem.company_pics} style={{ }} alt="" />
                              </div>
                          )}
                    />
                </div>
                {/*推荐列表*/}
                <div>

                </div>
                <Footer/>
            </div>
        );
    }

}


export default connect(({indexpage}) => (
        {
            indexpage
        }
    )
)(IndexPage);
