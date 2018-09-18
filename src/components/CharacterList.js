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
      console.log(this.state.characters);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          style={{
            margin: "1em auto",
            width: "60%"
          }}
          />
          <Character data={this.state.characters}/>
      </div>
    );
  }
}

export default CharacterList;
