// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

let userId = '123';
const PersonalPage = React.createClass({
    render: Template
});

const route = React.createElement(Route, {
    name: 'personal', params: {userId: userId},
    key: 'route_personal', handler: PersonalPage
});

export default route;
