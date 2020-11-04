import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp></FuncComp>
      <ClassComp num='3'></ClassComp>
    </div>
  );
}

function FuncComp() {
  return(
    <div className="container">
      <h2>Func Component</h2>
    </div>
    
  );
}

class ClassComp extends React.Component {
  state = {
    num: this.props.num
  }
  render() {
    return (
      <div className="container">
        <h2>Class Component</h2>
        <p>number: {this.state.num}</p>
        <input type='button' value='random' onClick={
          function() {
            this.setState({
              num: Math.random()
            });
          }.bind(this)
        }></input>
      </div>
    );
  }
}

export default App;
