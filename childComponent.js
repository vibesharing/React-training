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


// the directive div + ref is used with the .refs.input in the Apps.js on line
