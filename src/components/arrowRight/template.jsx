// react
import React from 'react';
import ReactRouter from 'react-router';

const render = function() {
    return this.props.data.link ? (
        <div className="row">
            <div className="arrow-right" style={this.props.data.style}>
                <img src={require('./arrow-img.png')} />
                <span className="arrow-title">{this.props.data.title}</span>
                <ReactRouter.Link to={this.props.data.link}>
                    <span className="arrow-content">{this.props.num} {this.props.data.role}</span>
                    <img src={require('./arrow-right.png')} />
                </ReactRouter.Link>
            </div>
        </div>
    ) : (
        <div className="row">
            <div className="arrow-right" style={this.props.data.style}>
                <img src={require('./arrow-img.png')} />
                <span className="arrow-title">{this.props.data.title}</span>
                <span className="arrow-content">{this.props.num} {this.props.data.role}</span>
                <img src={require('./arrow-right.png')} />
            </div>
        </div>
    );
};

export default render;
