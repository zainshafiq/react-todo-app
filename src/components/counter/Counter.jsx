import React, { Component } from 'react'
import './Counter.css'

//Counter Class Component
class Counter extends Component {

    //Define the initial state in a constructor
    //state => counter 0
    constructor() {
        super(); //Error 1
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
    }


    render() {
        return (
            <div className="counter">
                This is a Counter
                <br />
                <button onClick={this.increment}>+1</button> {/* If its Javascript, you will need a curly braces */}
                <br />
                <span class="count">{this.state.counter}</span>  
            </div>
        )
    }

    //Function (No need extend Component)
    increment() { //Update state - counter++
        console.log('increment');
        //this.state.counter++; // Bad Practice
        this.setState({
            counter: this.state.counter + 1
        });
    }   
}

export default Counter
