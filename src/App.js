import React, { Component } from "react";
import Game from "./component/game";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
