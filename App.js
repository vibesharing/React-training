import React from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from './childComponent';
import NestedComponent from './nestedComponent';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      text: 'this is the initial state of text'
    };
    this.update = this.update.bind(this);
  }

  update(e){
    this.setState({
      text: this.state.text,
      red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>

        <ChildComponent ref="red" update={this.update} />
        {this.state.red}
        <ChildComponent ref="green" update={this.update} />
        {this.state.green}
        <ChildComponent ref="blue" update={this.update} />
        {this.state.blue}

        <NestedComponent />
      </div>
    );
};
}

//PropsTypes
// App.propTypes = {
//   text: React.PropTypes.string.isRequired
// }


//defaultProps
// App.defaultProps = {
//   text: 'this is the default text'
// }

export default App;

ReactDOM.render(<App text="this is the props text"/>, document.getElementById('app'))
