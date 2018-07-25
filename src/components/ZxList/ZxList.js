import React from 'react';
import PropTypes from 'prop-types';
import {Tabs, List, WhiteSpace} from 'antd-mobile';


import style from './Zx.css'

const tabs = [
    { title: '1 Tab' },
    { title: '2 Tab' },
    { title: '3 Tab' },
];

const ZxList = ({data}) => {
    return (
        <div style={{ height: 200 }}>
            <WhiteSpace />
            <Tabs tabs={tabs}
                  swipeable={false}
                  initalPage={'t2'}
                  tabBarPosition="left"
                  tabDirection="vertical"
            >
                <div style={{  backgroundColor: '#fff' }}>
                    <p>Content of first tab</p>
                    <p>Content of first tab</p>
                    <p>Content of first tab</p>
                    <p>Content of first tab</p>
                    <p>Content of first tab</p>
                    <p>Content of first tab</p>
                    <p>Content of first tab</p>
                    <p>Content of first tab</p>
                    <p>Content of first tab</p>
                    <p>Content of first tab</p>
                    <p>Content of first tab</p>
                    <p>Content of first tab</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    Content of second tab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    Content of third tab
                </div>
            </Tabs>
            <WhiteSpace />
        </div>
    )
}

ZxList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default ZxList