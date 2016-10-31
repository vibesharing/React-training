import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

  constructor() {
    super();
  }
  render() {
    return <div>{this.props.text}</div>
  };
}

//PropsTypes
App.propTypes = {
  text: React.PropTypes.string.isRequired
}


//defaultProps
App.defaultProps = {
  text: 'this is the default text'
}

export default App;

ReactDOM.render(<App text="this is the props text"/>, document.getElementById('app'))
