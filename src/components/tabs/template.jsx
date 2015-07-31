// react
import React from 'react';

const Item = React.createClass({
    render() {
        return (
            <li key={this.props.key}>
                <a href={'#' + this.props.data.href}>{this.props.data.title}</a>
            </li>
        );
    }
});

const render = function() {
    return (
        <div className="tabs">
            <ul className="tabs-header clearfix">
             {this.props.items.map((item, i) => {
                 return (
                     <Item key={i} data={item} />
                 );
             })}
            </ul>
            <div className="tabs-content"></div>
        </div>
    );
};

export default render;
