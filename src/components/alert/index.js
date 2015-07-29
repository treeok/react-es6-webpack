// react
import React from 'react';
//import $ from 'jquery';
import Template from './template.jsx';

const Alert = React.createClass({
    handleClick() {
       alert(111);
    },
    render: Template
});

export default Alert;
