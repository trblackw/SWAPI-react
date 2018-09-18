import React, { Component } from "react";
import Character from "./Character";

class CharacterList extends Component {
  state = {
     characters: [],
     search: ''
  };
   
   handleChange = (e) => {
      this.setState({
         search: e.target.value
      });
   }

   handleClick = () => {
      console.log(this.state.search)
   }

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
        <input
             type="text"
             onChange={this.handleChange}
             placeholder="Search for a character"
             value={this.state.search}
          style={{
            margin: "1em auto",
             width: "60%",
          }}
          />
          <button style={{
             background: '#222', color: 'whitesmoke', padding:
          '.5em', border: '1px solid #ffe300'}} onClick={this.handleClick}>Go!</button>
          <Character data={this.state.characters} search={this.state.search}/>
      </div>
    );
  }
}

export default CharacterList;
