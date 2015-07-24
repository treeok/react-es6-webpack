// react
import React from 'react';
import Chrome from '../../components/chrome/index.js';
import Giant from '../../components/giant/index.js';

let title = '挣点';

const render = function() {
    return (
        <Chrome>
            <p className="title">{title}</p>
            <Giant title={this.title} link={this.link} points={this.state.points} latestearn={this.state.latestEarn} />
        </Chrome>
    );
};

export default render;
