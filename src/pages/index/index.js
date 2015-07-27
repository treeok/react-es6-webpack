// react
import React from 'react';
import $ from 'jquery';
import {DefaultRoute} from 'react-router';
import Template from './template.jsx';

const IndexPage = React.createClass({
    getInitialState() {
        return {
            earns: '0',
            recentMoney: '0',
            getNums: '0',
            exgNums: '5000'
        };
    },
    componentWillMount() {
        $.ajax({
            url: 'points.json',
            dataType: 'json',
            success: function(data) {
                this.setState({earns: data.data.points});
            }.bind(this)
        });
    },
    render: Template
});

const IndexRoute = React.createElement(DefaultRoute, {name: 'home', key: 'route_default', handler: IndexPage});

export default IndexRoute;
