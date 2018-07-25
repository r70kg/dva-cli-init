import React from 'react';
import {connect} from 'dva';
import {Carousel, WingBlank,Flex,Grid } from 'antd-mobile';
import styles from './IndexPage.css';




let arrIco = [
    {
        ico:"./img/cooperate.png",
        text:"测"
    },
    {
        ico:"exhibition",
        text:"测"
    },
    {
        ico:"finance",
        text:"测"
    },
    {
        ico:"interview",
        text:"测"
    },
    {
        ico:"think",
        text:"测"
    }
]

const data = Array.from(arrIco).map((v) => ({
    icon:`./img/${v.ico}.png`,
}));



class IndexPage extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.dispatch({
            type: 'indexpage/getUserInfo'
        })
    }



    render() {
        let {indexpage} = this.props
        return (
            <div className={styles.normal}>
                <img src="./img/interview.png" alt="" style={{width:"20px"}}/>
                    <Carousel
                        autoplay
                        dots={true}
                        infinite={true}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {indexpage.bannList.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{display: 'inline-block', width: '100%',}}
                            >
                                <img
                                    src={window.imgUrl + val.bann_pics}
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
                <Grid data={data}
                      columnNum={3}
                      renderItem={dataItem => (
                          <div style={{ padding: '12.5px' }}>
                              <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                              <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                  <span>I am title..</span>
                              </div>
                          </div>
                      )}
                />

                <img src="./img/interview.png" alt=""/>
                <img src="./img/interview.png" alt=""/>
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
