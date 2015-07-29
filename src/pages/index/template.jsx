// react
import React from 'react';
import Chrome from '../../components/chrome/index.js';
import Giant from '../../components/giant/index.js';
import ArrowRight from '../../components/arrowRight/index.js';
import Alert from '../../components/alert/index.js';

let title = '挣点';
let alertStyle = {height: '60px', lineHeight: '60px', textAlign: 'center'};
const earnsData = {link: 'detail', title: '累积收益（点）'},
    getearn = {
        title: '领取挣点', role: '个奖励待领取', style: {marginTop: '20px', borderBottom: '1px solid #e3e3e3'}
    },
    exgearn = {link: 'exchange', title: '兑换挣点', role: '个挣点可兑换'},
    earnshop = {title: '挣点商城', style: {marginTop: '50px'}};

const render = function() {
    return (
        <div>
            <Chrome>
                <div className="row"><p className="title">{title}</p></div>
                <Giant data={earnsData} earns={this.state.earns} money={this.state.recentMoney} />
                <ArrowRight data={getearn} num={this.state.getNums} />
                <ArrowRight data={exgearn} num={this.state.exgNums} />
                <ArrowRight data={earnshop} />
            </Chrome>
            <Alert><p style={alertStyle}>哈哈</p></Alert>
        </div>
    );
};

export default render;
