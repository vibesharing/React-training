import React from 'react';
import ReactDOM from 'react-dom';
class LifecycleComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 0
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      value: this.state.value + 1
    });
  }

  componentWillMount() {
    // console.log('mounting');
    this.setState({
      multiplier : 2
    });
  }

  render() {
    // console.log('rendering');
    return (
        <button onClick={this.update}>{this.state.value * this.state.multiplier}</button>
    )
  }

  componentDidMount() {
    // console.log('mounted')
     console.log(ReactDOM.findDOMNode(this));
     this.inc = setInterval(this.update, 500)
  }

  componentWillUnmount() {
    // console.log('bye!')
    clearInterval(this.inc);
  }
}

//================================================================================

class Wrapper extends React.Component {
  constructor(){
    super();
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
  }
  mount() {
    ReactDOM.render(<LifecycleComponent />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){

    return(
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}
module.exports = Wrapper;

// the directive div + ref is used with the .refs.input in the Apps.js on line
