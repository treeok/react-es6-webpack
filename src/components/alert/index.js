// react
import React from 'react';
import $ from 'jquery';
import Template from './template.jsx';

const Alert = React.createClass({
    handleClick() {
        $(this.getDOMNode()).remove();
    },
    render: Template
});

export default Alert;
