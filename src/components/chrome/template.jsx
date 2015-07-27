// react
import React from 'react';
import Navigation from '../navigation';

const render = function() {
    return (
        <div>
            <div className="container">
                {this.props.children}
            </div>
            <Navigation />
        </div>
    );
};

export default render;
