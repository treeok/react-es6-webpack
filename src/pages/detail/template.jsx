// react
import React from 'react';
import Chrome from '../../components/chrome/index.js';
import Tabs from '../../components/tabs/index.js';

let items = [{href: 'home', title: 'home'}, {href: 'detail', title: 'detail'}];

const render = function() {
    return (
        <Chrome>
            <Tabs items={items} />
        </Chrome>
    );
};

export default render;
