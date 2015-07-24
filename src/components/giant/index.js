// react
import React from 'react';
import Template from './template.jsx';

const Giant = React.createClass({
    getInitialState() {
        // init state
        return {
            points: '250000',
            latestEarn: '100'
        };
    },
    render: Template
});

export default Giant;
