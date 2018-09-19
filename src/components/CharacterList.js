import React, { Component } from "react";
import Character from "./Character";

class CharacterList extends Component {
  state = {
    characters: []
  };

  async componentDidMount() {
    try {
      const charactersRes = await fetch("https://swapi.co/api/people/");
      const characters = await charactersRes.json();
      this.setState({
        characters: characters.results
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Character data={this.state.characters} />
      </div>
    );
  }
}

export default CharacterList;
