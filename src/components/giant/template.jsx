// react
import React from 'react';
import ReactRouter from 'react-router';

const render = function() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="giant-screen">
                        <div className="giant-title">{this.props.title}</div>
                        <div className="giant-content"></div>
                        <div className="giant-link">最新收益+
                            <ReactRouter.Link to={this.props.link}>
                                <img src={require('./arrow-right.png')} />
                            </ReactRouter.Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default render;
