import React from 'react';
import ReactDOM from 'react-dom';
class ChildComponent extends React.Component {


  render() {
    return (
        <div>
          <input onChange={this.props.update} ref="input" type="range" min="0"  max="100" />
        </div>
    )
  }
}

module.exports = ChildComponent;
