// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const DetailPage = React.createClass({
    render: Template
});

const route = React.createElement(Route, {
    name: 'detail', key: 'route_detail', handler: DetailPage
});

export default route;
