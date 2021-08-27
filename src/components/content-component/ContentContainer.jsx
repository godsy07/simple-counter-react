import React, { Component } from "react";
import "./content.styles.css";

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (operation) => {
    if (operation === "inc") {
      this.setState({ counter: this.state.counter + 1 });
    } else if (operation === "dec") {
      if (this.state.counter === 0) {
        alert("Cannot decrement the value if zero");
        return;
      }
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div className='content'>
        <button
          className='custom-button'
          onClick={() => this.handleClick("inc")}
        >
          ++
        </button>
        {this.state.counter === 0 ? (
          <h2>Zero</h2>
        ) : (
          <h2>{this.state.counter}</h2>
        )}
        <button
          className='custom-button'
          onClick={() => this.handleClick("dec")}
        >
          --
        </button>
      </div>
    );
  }
}

export default ContentContainer;
