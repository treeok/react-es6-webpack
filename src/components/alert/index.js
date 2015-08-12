// react
import React from 'react';
import $ from 'jquery';
import Template from './template.jsx';

const Alert = React.createClass({
    getInitialState() {
        return {windowWidth: window.innerWidth, windowHeight: window.innerHeight ,scrollTop: document.body.scrollTop};
    },
    handleResize() {
        this.setState({windowWidth: window.innerWidth,windowHeight: window.innerHeight ,scrollTop: document.body.scrollTop});
    },
    componentDidMount() {
        window.addEventListener('resize' ,this.handleResize);
    },
    componentWillMount() {
        window.removeEventListener('resize' ,this.handleResize);
    },
    handleClick() {
        $(this.getDOMNode()).remove();
    },
    render: Template
});

export default Alert;
