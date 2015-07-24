// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const TripPage = React.createClass({
    render: Template
});

const route = React.createElement(Route, {name: 'trip', key: 'route_trip', handler: TripPage});

export default route;
