// react
import React from 'react';
import Chrome from '../../components/chrome/index.js';

let title = '挣点兑换';


const render = function() {
    return (
        <Chrome>
            <div className="row">
                <p className="title">{title}</p>
            </div>
            <div className="row">
                <div className="arrow-right">
                    <div className="col-xs-4 col-sm-4">账户余额：</div>
                    <div className="col-xs-8 col-sm-8"></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-right">
                    <div className="col-xs-4 col-sm-4">支付宝：</div>
                    <div className="col-xs-8 col-sm-8"></div>
                </div>
            </div>

        </Chrome>
    );
};

export default render;
