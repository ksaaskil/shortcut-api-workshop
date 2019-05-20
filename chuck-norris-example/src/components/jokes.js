import * as api from "../api";
import * as React from "react";
import { Heading, Paragraph } from "grommet";

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
    this.updateJokes = this.updateJokes.bind(this);
  }
  componentDidMount() {
    this.updateJokes();
    // setInterval(() => this.updateJokes(), 10000);
  }

  updateJokes() {
    api.getRandomJokes(this.props.amount).then(newJokes => {
      // const newJokes = [...this.state.jokes, ...fetchedJokes];
      this.setState({ jokes: newJokes });
    });
  }

  render() {
    return (
      <div className="card">
        <Heading level="3">Your daily Chuck dose</Heading>
        {this.state.jokes.map((joke, i) => (
          <Paragraph key={`joke_${i}`}>
            {i + 1}: {joke}
          </Paragraph>
        ))}
      </div>
    );
  }
}

export default Jokes;
