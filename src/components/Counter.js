import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions';

class Counter extends Component {
    incrementIfOdd = event => {
        event.preventDefault();
        this.props.incrementIfOdd(this.props.count);
    };

    incrementAsync = event => {
        event.preventDefault();
        let count = setInterval(() => this.props.incrementAsync(this.props.count), 1000);
    };

    increment = event => {
      event.preventDefault();
      this.props.increment(this.props.count);
    };

    decrement = event => {
      event.preventDefault();
      this.props.decrement(this.props.count);
    };

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
            <p>
                Clicked: {this.props.count} times
                <button onClick={this.increment}>
                    +
                </button>
                <button onClick={this.decrement}>
                    -
                </button>
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        );
    }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement, incrementIfOdd, incrementAsync })(Counter);
