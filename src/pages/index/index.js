// react
import React from 'react';
import {DefaultRoute} from 'react-router';
import Template from './template.jsx';

const IndexPage = React.createClass({
    getInitialState() {
        // init state
        return {
            points: '0',
            latestEarn: '0'
        };
    },
    url: 'points.json',
    componentDidMount() {
        $.ajax({
            url: this.url,
            dataType: 'json',
            success: function(data) {
                this.setState({points: data.points});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)});
    },
    link: 'detail',
    title: '累积收益（点）',
    render: Template
});

const IndexRoute = React.createElement(DefaultRoute, {name: 'home', key: 'route_default', handler: IndexPage});

export default IndexRoute;
