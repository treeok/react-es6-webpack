// react
import React from 'react';
import {DefaultRoute} from 'react-router';
import Template from './template.jsx';

//let data = {title: '累积收益（点）', points: '250000', latestEarn: '100', link: 'detail'};

const IndexPage = React.createClass({
    getInitialState() {
        // init state
        return {
            points: '0',
            latestEarn: '0'
        };
    },
    link: 'detail',
    title: '累积收益（点）',
    render: Template
});

const IndexRoute = React.createElement(DefaultRoute, {name: 'home', key: 'route_default', handler: IndexPage});

export default IndexRoute;
