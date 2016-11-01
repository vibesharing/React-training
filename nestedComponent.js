import React from 'react';
import ReactDOM from 'react-dom';
class NestedComponent extends React.Component {
  render() {
    return (
        <Button>I love <City /> </Button>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.children}</button>
    )
  }
}

const City = () =>  <span> NEw york </span>


module.exports = NestedComponent;


// the directive div + ref is used with the .refs.input in the Apps.js on line
