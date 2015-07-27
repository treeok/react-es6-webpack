// react
import React from 'react';
import ReactRouter, {Route, RouteHandler} from 'react-router';
// user routes
import routes from './routes.js';

const App = React.createClass({
    render() {
        return <RouteHandler/>;
    }
});

const appInstance = (
    <Route name="app" path="/" handler={App}>
        {routes}
    </Route>
);

const Bootstrapper = {
    start() {
        ReactRouter.run(appInstance, ReactRouter.HistoryLocation, (Handler) => {
            React.render(<Handler />, document.getElementById('mainContainer'));
            //Root 是 React Router 路由匹配后决定渲染的最高层级的组件，告诉 RouterHandle 应该渲染的内容是什么。
        });
    }
};

export default Bootstrapper;


