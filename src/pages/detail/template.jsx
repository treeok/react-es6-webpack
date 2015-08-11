// react
import React from 'react';
import Chrome from '../../components/chrome/index.js';
import Tabs from '../../components/tabs/index.js';

let items = [{id: 'home', title: 'home', selected: true}, {id: 'detail', title: 'detail', selected: false}];

const render = function() {
    return (
        <Chrome>
            <Tabs items={items} />
        </Chrome>
    );
};

export default render;
