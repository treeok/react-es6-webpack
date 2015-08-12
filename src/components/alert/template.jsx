// react
import React from 'react';
import $ from 'jquery';
import Gray from '../gray/index.js';

const render = function() {
    let left = (this.state.windowWidth -200) /2 ;
    let top = (this.state.windowHeight -200) /2 + this.state.scrollTop;
    let divStyle = {top: top,left: left};
return (
        <div>
            <div className="alert" style={divStyle} >
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
