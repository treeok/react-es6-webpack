// react
import React from 'react';
import Navigation from '../navigation';

const render = function() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {this.props.children}
                </div>
            </div>
            <Navigation />
        </div>
    );
};

export default render;
