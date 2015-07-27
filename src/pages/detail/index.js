// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

let userId;
const DetailPage = React.createClass({
    getUserId() {
        userId = '123';
    },
    render: Template
});

const route = React.createElement(Route, {
    name: 'detail', path: '/detail/:' + userId, key: 'route_detail', handler: DetailPage
});

export default route;
