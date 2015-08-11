// react
import React from 'react';
import Template from './template.jsx';

const Tabs = React.createClass({
    handleClick(i){
       alert(i);
    },
    render: Template
});

export default Tabs;
