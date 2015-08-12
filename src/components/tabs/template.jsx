// react
import React from 'react/addons';

const render = function() {
    let cx = React.addons.classSet;
    return (
        <div className="tabs">
            <ul className="nav nav-tabs" role="tablist">
              {this.props.items.map((item, i) => {
                  let classes = cx({
                      'active': item.selected
                  });
                  return (
                      <li role="presentation" onClick={this.handleClick.bind(this, i)} className={classes}>
                          <a aria-controls={item.id} role="tab" data-toggle="tab" href={'#' + item.id}>{item.title}</a>
                      </li>
                  );
              })}
            </ul>
            <div className="tab-content">
              {this.props.items.map((item, i) => {
                  let classes = cx({
                      'tab-pane': true,
                      'active': item.selected
                  });
                  return (
                      <div role="tabpanel" className={classes} id={item.id}>
                           ............
                      </div>
                  );
              })}
            </div>
        </div>
    );
};

export default render;
