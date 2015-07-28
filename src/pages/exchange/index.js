// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const ExchangePage = React.createClass({
    getInitialState() {
        return {
            account: '50000',
            alipay: '4124124@qq.com',
            withdrawal: '100',
            disabled: 'true',
            btnTxt: '确认兑换'
        };
    },
    handleChange(name, event) {
        this.setState({disabled: 'true'});
        let newState = {};
        newState[name] = event.target.value;
        this.setState(newState);
    },
    submitHandler(event) {
        event.preventDefault();
        if (this.state.withdrawal * 100 <= this.state.account) {
            this.setState({disabled: 'true'});
        }else {
            this.setState({disabled: 'false'});
        }
    },
    render: Template
});

const route = React.createElement(Route, {name: 'exchange', key: 'route_exchange', handler: ExchangePage});

export default route;
