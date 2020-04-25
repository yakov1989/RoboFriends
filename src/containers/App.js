import React from "react";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";

class App extends React.Component {
  state = {
    robots: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => {
        this.setState({
          robots: users,
        });
      });
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .trim()
        .includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc ">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
