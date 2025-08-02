class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0,
    };
  }

  handleEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1,
    }));
  };

  handleExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Entry Count: {this.state.entryCount}</h1>
        <h1>Exit Count: {this.state.exitCount}</h1>
        <button onClick={this.handleEntry}>Entry</button>
        <button onClick={this.handleExit}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;