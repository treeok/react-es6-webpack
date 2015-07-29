// react
import React from 'react';
import $ from 'jquery';
import Gray from '../gray/index.js';

let width = $(document).width(),
    height = $(document).height(),
    scrollHeight = $(document).scrollTop(),
    top = (height - 200) / 2 + scrollHeight,
    left = (width - 200) / 2,
    divStyle = {left: left, top: top};

const render = function() {
    return (
        <div>
            <div className="alert" style={divStyle}>
                <div className="alert-header">
                    <span>提示:</span>
                    <span className="pull-right glyphicon glyphicon-remove alert-close"
                        onClick={this.handleClick}>
                    </span>
                </div>
                <div className="alert-content">
                    {this.props.children}
                </div>
                <div className="alert-bottom">
                    <button className="btn btn-primary" onClick={this.handleClick}>确定</button>
                </div>
            </div>
            <Gray />
        </div>
    );
};

export default render;
