import React from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from './childComponent'
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
      text: e.target.value
    });
  }

  render() {
    return (
      <div>
        <ChildComponent text={this.state.text} update={this.update} />
        <ChildComponent text={this.state.text} update={this.update} />

        <ChildComponent text={this.state.text} update={this.update} />

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
