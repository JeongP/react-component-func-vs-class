import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNum={2}></FuncComp>
      <ClassComp num={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  var numState = useState(props.initNum);
  var num = numState[0];
  var setNum = numState[1];

// state 표기방법 1 (축약)
  var [_date, setDate] = useState((new Date()).toString());
// state 표기방법 2
  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];

  

  return(
    <div className="container">
      <h2>Func Component</h2>
      <p> number: {num}</p>
      <p>Date: {_date} </p>
      <input type='button' value='random' onClick={
        function() {
          setNum(Math.random());
        }
      }></input>
      <input type='button' value='date' onClick={
        function() {
          setDate((new Date()).toString());
        }
      }></input>
    </div>
    
  );
}

var classStyle = 'color:red';
var x=3;
class ClassComp extends React.Component {
  state = {
    num: this.props.num,
    date: (new Date()).toString()
  };
  
  componentWillMount(){
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate', classStyle);
    console.log(this.state.num, nextState.num)
    nextState.num = x;
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', classStyle);
  }


  render() {
    console.log('%cclass => render', classStyle);
    return (
      <div className="container">
        <h2>Class Component</h2>
        <p>number: {this.state.num}</p>
        <p>Date: {this.state.date}</p>
        <input type='button' value='random' onClick={
          function() {
            this.setState({
              num: Math.random()
            });
          }.bind(this)
        }></input>
        <input type='button' value='date' onClick={
          function() {
            this.setState({
              date:(new Date()).toString()
            });
          }.bind(this)
        }></input>
      </div>
    );
  }
}

export default App;
