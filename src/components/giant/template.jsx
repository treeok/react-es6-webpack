// react
import React from 'react';
import ReactRouter from 'react-router';

const render = function() {
    return (
        <div className="row">
            <div className="giant-screen">
                <div className="giant-title">{this.props.data.title}</div>
                <div className="giant-content">{this.props.earns}</div>
                <div className="giant-link">最新收益+{this.props.money}
                    <ReactRouter.Link to={this.props.data.link}>
                        <img src={require('./arrow-right.png')} />
                    </ReactRouter.Link>
                </div>
            </div>
        </div>
    );
};

export default render;
