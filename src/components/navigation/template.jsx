// react
import React from 'react';
import {Link} from 'react-router';

const render = function() {
    return (
        <footer className="footer">
            <ul className="footer-ul">
                <li><Link to="home">挣点</Link></li>
                <li><Link to="trip">行程</Link></li>
                <li><Link to="personal">个人中心</Link></li>
            </ul>
        </footer>

    );
};

export default render;
