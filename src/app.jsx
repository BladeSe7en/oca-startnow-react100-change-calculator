import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountReceived: null,
      amountDue: null,
      changeDue: null,
      twenties: null,
      tens: null,
      fives: null,
      ones: null,
      quarters: null,
      dimes: null,
      nickels: null,
      pennies: null
    }
    this.calculate = this.calculate.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) { //this manages the change of input and name, sets new state
    this.setState({ [event.target.name]: +event.target.value });
  }


  calculate() {
    
    console.log('test calculate')
    var amountDue = this.state.amountDue;
    var amountReceived = this.state.amountReceived;
    var changeDue = (amountReceived - amountDue).toFixed(2);
    var twenties = null;
    var fives = null;
    var tens = null;
    var ones = null;
    var quarters = null;
    var dimes = null;
    var nickels = null;
    var pennies = null;

    if (amountReceived == amountDue) {
      this.setState({ changeDue: 0 })
    } else {

      if (amountReceived < amountDue) {
        //"alert alert-danger"
      } else {
        console.log(changeDue)
        if (changeDue >= 20) {
          twenties = Math.floor(changeDue / 20);
          changeDue -= twenties * 20;
        } else {
          twenties = 0;
        }
        if (changeDue >= 10) {
          tens = Math.floor(changeDue / 10);;
          changeDue -= tens * 10;
        } else {
          tens = 0;
        }
        if (changeDue >= 5) {
          fives = Math.floor(changeDue / 5);
          changeDue -= fives * 5;
        } else {
          fives = 0;
        }

        if (changeDue >= 1) {
          ones = Math.floor(changeDue);
          changeDue -= ones;
        } else {
          ones = 0;
        }
      }
    }
    console.log(changeDue);
    console.log(ones);

    changeDue = (100 * changeDue);

    if (changeDue >= 25) {

      quarters = Math.floor(changeDue / 25);
      changeDue %= 25;
    } else {
      quarters = 0;
    }

    console.log(changeDue);
    console.log(quarters);

    if (changeDue >= 10) {
      dimes = Math.floor(changeDue / 10);
      changeDue %= 10;
    } else {
      dimes = 0;
    }

    console.log(changeDue);
    console.log(dimes);

    if (changeDue >= 5) {
      nickels = Math.floor(changeDue / 5);
      changeDue %= 5;
    } else {
      nickels = 0;
    }

    console.log(changeDue);
    console.log(nickels);

    pennies = Math.round(changeDue);
    console.log(changeDue);
    console.log(pennies);

    this.setState({
      amountReceived: amountReceived,
      amountDue: amountDue,
      changeDue: changeDue,
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
      originalChangeDue: (amountReceived - amountDue).toFixed(2)
    });
    
  }

  render() {
    return (
      <div>
        <h1>Change Calculator</h1>

        {/* this field includes both input field and change due field */}
        <div className="container">
          <div className="row overlay"> 
            <div className="col-4">
              {/* this is my input field */}
              <div className="row">
                <div className="col col-4">
                  <label htmlFor="amount-due">Total Amount Due:</label>
                  <input id="amount-due" name= "amountDue" placeholder="Total Sale: $"  defaultValue={this.state.amountDue} onChange={this.handleOnChange}/>
                </div>
                <div className="col col-4">
                  <label>Total Amount Received:</label>
                  <input id="amount-received" name= "amountReceived" placeholder="$"
                    defaultValue={this.state.amountDue - this.state.amountReceived} onChange={this.handleOnChange}/>
                </div>

                <div className="col col-4">
                  <label>Total Change Due: </label>
    <p name="total-change-due" className="form-control changedue" name= "totalChangeDue">{this.state.originalChangeDue} </p>
                 
                </div>
                <div className="col col-12">
                  <button id="calculateChange" name="calculateChange" className="button btn" onClick={this.calculate}> Calculate Change</button>
                </div>
              </div>
            </div>
            <div className="col-8">
              {/* this is my change due field */}
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    {/* this square is for twenties */}
                    <label htmlFor="twenties-due">Total $20's Due: </label>
                    <p name="twenties" type="number" className="form-control change" placeholder="0" >{this.state.twenties}</p>
                  </div>
                  <div className="col-sm">
                    {/* this square is for tens */}
                    <label htmlFor="tens">Total $10's Due: </label>
                    <p name="tens" type="number" className="form-control change" placeholder="0" >{this.state.tens}  </p>
                  </div>
                  <div className="col-sm">
                    {/* this square is for fives */}
                    <label htmlFor="fives">Total $5's Due: </label>
                    <p name="fives" type="number" className="form-control change" placeholder="0" >{this.state.fives}  </p>
                  </div>
                  <div className="col-sm">
                    {/* this squares is for ones */}
                    <label htmlFor="ones">Total $1's Due: </label>
                    <p name="ones" type="number" className="form-control change" placeholder="0" >{this.state.ones}  </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm">
                    {/* this square is for quarters */}
                    <label htmlFor="quarters">Total Quarters Due: </label>
                    <p name="quarters" type="number" className="form-control change" placeholder="0" >{this.state.quarters}  </p>
                  </div>
                  <div className="col-sm">
                    {/* tihs square is for dimes */}
                    <label htmlFor="dimes">Total Dimes Due: </label>
                    <p name="dimes" type="number" className="form-control change" placeholder="0" >{this.state.dimes}  </p>
                  </div>
                  <div className="col-sm">
                    {/* this square is for nickels */}
                    <label htmlFor="amount">Total Nickels Due: </label>
                    <p name="nickels" type="number" className="form-control change" placeholder="0" >{this.state.nickels}  </p>
                  </div>
                  <div className="col-sm">
                    {/* this square is for pennies */}
                    <label htmlFor="amount">Total Pennies Due: </label>
                    <p name="pennies" type="number" className="form-control change" placeholder="0" >{this.state.pennies} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-body">A Basic Panel</div>
        </div>


      </div>
    )
  }
}

export default App;


function stringify(list) {
  console.log('this is list: ', list);
if (list = null)
{ return null
} else {
return
list.JSON.sringify
}
}