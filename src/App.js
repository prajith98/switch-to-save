import './App.css';

import React, { Component } from 'react'
var converter = require('number-to-words');

 class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = { 
      result: "Total: ",
      n1: 0,
      n2: 0,
      num1: "",
      num2: "",
      total: 0
    }
  }

  handleNum1Change = e => {
    if(e.target.value!==""){
      this.setState({ n1: Number(e.target.value.replace(/,/g, '')) });
      const formatNumber = parseInt(e.target.value.replace(/,/g, '')).toLocaleString('en-IN');
      this.setState({ num1: formatNumber });
    }
    else{
      this.setState({n1: 0,num1:""})
    }
  };
  handleNum2Change = e => {
    if(e.target.value!==""){
      this.setState({ n2: Number(e.target.value.replace(/,/g, '')) });
      const formatNumber = parseInt(e.target.value.replace(/,/g, '')).toLocaleString('en-IN');
      this.setState({ num2: formatNumber });
    }
    else{
      this.setState({n2: 0,num2:""})
    }
  };

  addAction =(e)=> {
    let x = this.state.n1 + this.state.n2
    this.setState({result: "Total: "+x.toLocaleString('en-IN') })
    this.setState({total:x})
  }
  resetAction =(e)=> {
    this.setState({ 
      result: "Total: ",
      n1: 0,
      n2: 0,
      num1: "",
      num2: "",
      total:0
    })
  }
  render() {
    return (
      <div className="App"> 
        <br></br>
        <input type="text" onChange={this.handleNum1Change} value={this.state.num1} name="num1" />
        <h5>{converter.toWords(this.state.n1)}</h5>
        <h1>+</h1>
        <input type="text" onChange={this.handleNum2Change} value={this.state.num2} name="num2" />
        <h5>{converter.toWords(this.state.n2)}</h5>
        <br/><br/>
        <button className="Calc" onClick={this.addAction}>Calculate</button>
        <button className="Res" onClick={this.resetAction}>Reset</button>
        <br/><br/>
        <input className="total" type="text" value={this.state.result} readOnly/>
        <h5>{converter.toWords(this.state.total)}</h5>
      </div>
    )
  }
}

export default App

