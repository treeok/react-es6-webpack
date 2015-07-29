// react
import React from 'react';
import $ from 'jquery';

let height = $(document).height(),
    width = $(document).width(),
    divStyle = {height: height, width: width};

const render = function() {
    return (
         <div className="gray" style={divStyle}>
         </div>
    );
};

export default render;
