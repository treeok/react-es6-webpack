// react
import React from 'react';
import ReactRouter from 'react-router';

const render = function() {
    return (
        /*<div className="navbar navbar-default navbar-fixed-bottom" role="navigation">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><ReactRouter.Link to="home">挣点</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="other">行程</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="other">个人中心</ReactRouter.Link></li>
                    </ul>
                </div>
            </div>
        </div>*/
        <footer className="footer">
            <ul className="footer-ul">
                <li><ReactRouter.Link to="home">挣点</ReactRouter.Link></li>
                <li><ReactRouter.Link to="trip">行程</ReactRouter.Link></li>
                <li><ReactRouter.Link to="personal">个人中心</ReactRouter.Link></li>
            </ul>
        </footer>

    );
};

export default render;
