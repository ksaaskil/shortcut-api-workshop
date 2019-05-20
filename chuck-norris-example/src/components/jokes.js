import * as api from "../api";
import * as React from "react";

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
    this.updateJokes = this.updateJokes.bind(this);
  }
  componentDidMount() {
    this.updateJokes();
    setInterval(() => this.updateJokes(), 10000);
  }
  
  updateJokes() {
    api.getRandomJokes(this.props.amount).then(newJokes => {
      // const newJokes = [...this.state.jokes, ...fetchedJokes];
      this.setState({ jokes: newJokes })
    });
  }

  render() {
    return (<div className="card">
			<h1>Chuck Norris jokes</h1>
      { this.state.jokes.map((joke, i) => (
          <div key={`joke_${i}`}>{i + 1}: { joke }</div>
       )) }
    </div>)
  }

};

export default Jokes;
