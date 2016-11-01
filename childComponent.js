import React from 'react';
import ReactDOM from 'react-dom';
class ChildComponent extends React.Component {


  render() {
    return (
      <div>
        <input onChange={this.props.update} value={this.props.text} />
        <h1> {this.props.text}</h1>
      </div>
    )
  }
}

module.exports = ChildComponent;
