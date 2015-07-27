// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const ExchangePage = React.createClass({
    render: Template
});

const route = React.createElement(Route, {name: 'exchange', key: 'route_exchange', handler: ExchangePage});

export default route;
