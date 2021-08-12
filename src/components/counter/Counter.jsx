import React, { Component } from 'react'
import './Counter.css'

//Counter Class Component
class Counter extends Component {
    render() {
        return (
            <div className="counter">
                This is a Counter
                <br />
                <button onClick={this.increment}>+1</button> {/* If its Javascript, you will need a curly braces */}
                <br />
                <span class="count">0</span>  
            </div>
        )
    }

    //Function inside a class (used to be outside)
    increment() {
        console.log('increment');
    }   
}



export default Counter