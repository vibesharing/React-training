import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      text: 'this is the initial state of text'
    };
  }

  update(e){
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.update.bind(this)} value={this.state.text} />
        <h1> {this.state.text}</h1>
      </div>
    )
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
