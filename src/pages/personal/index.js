// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const PersonalPage = React.createClass({
    render: Template
});

const route = React.createElement(Route, {name: 'personal', key: 'route_personal', handler: PersonalPage});

export default route;
