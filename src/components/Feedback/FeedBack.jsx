import React from 'react';

class FeedBack extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <button onClick={this.onClickGood}>Good</button>
          <button onClick={this.onClickNeutral}>Neutral</button>
          <button onClick={this.onClickBad}>Bad</button>
        </div>
        <div>
          <h2>Please leave feedback</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}

export default FeedBack;
