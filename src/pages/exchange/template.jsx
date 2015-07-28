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
                <form onSubmit={this.submitHandler}>
                    <div className="arrow-right" style={{borderBottom: '1px solid #cccccc', padding: '13px 0'}}>
                        <div className="col-xs-4 col-sm-4">
                            账户余额
                        </div>
                        <div className="col-xs-8 col-sm-8">
                            {this.state.account}挣点
                        </div>
                    </div>
                    <div className="component-contain">
                        <div className="col-xs-4 col-sm-4">
                            <label htmlFor="alipay">支付宝</label>
                        </div>
                        <div className="col-xs-8 col-sm-8">
                            <input id="alipay" type="text" value={this.state.alipay}
                                onChange={this.handleChange.bind(this, 'alipay')} />
                        </div>
                    </div>
                    <div className="component-contain" style={{marginTop: '30px'}}>
                        <div className="col-xs-4 col-sm-4">
                            <label htmlFor="withdrawal">提现到支付宝</label>
                        </div>
                        <div className="col-xs-8 col-sm-8">
                            <select id="withdrawal" value={this.state.withdrawal}
                                onChange={this.handleChange.bind(this, 'withdrawal')}>
                                <option value="100">100元</option>
                                <option value="200">200元</option>
                                <option value="300">300元</option>
                                <option value="400">400元</option>
                                <option value="500">500元</option>
                                <option value="600">600元</option>
                                <option value="700">700元</option>
                                <option value="800">800元</option>
                                <option value="900">900元</option>
                                <option value="1000">1000元</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12">
                        <span className="pull-right" style={{fontSize: '0.8em', marginTop: '5px'}}>1个挣点=1分钱</span>
                    </div>
                    <div className="col-xs-12 col-sm-12" style={{marginTop: '30px'}}>
                        <p style={{fontSize: '0.8em', fontWeight: 'bold'}}>友情提示</p>
                        <p style={{color: '#9b9a9e', fontSize: '0.6em'}}>1、剩余挣点大于10000时，可提现金到支付宝，T+1个工作日到账</p>
                        <p style={{color: '#9b9a9e', fontSize: '0.6em'}}>2、挣点或现金兑换T+1个工作日到账，到账时间为工作日当天下午18点之后</p>
                    </div>
                    <div className="col-xs-12 col-sm-12" style={{marginTop: '30px'}}>
                        {this.state.disabled === 'false' ? (
                            <button className="btn btn-block btn-primary btn-lg" disabled="disabled"
                                type="submit">挣点不足
                            </button>
                        ) : (
                            <button className="btn btn-block btn-primary btn-lg"
                                type="submit">确认兑换
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </Chrome>
    );
};

export default render;
