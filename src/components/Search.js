import React, { Component } from "react";
import styled from "styled-components";
import Suggestions from "./Suggestions";

class Search extends Component {
  state = {
     query: "",
     results: []
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
       if (this.state.query !== undefined) {
         //  if (this.state.query.length % 2 === 0) {

         //  }
          this.getCharacters();
       }
    });
  };
   
   getCharacters = () => {
      fetch("https://swapi.co/api/people/").then(data => data.json()).then(data => this.setState({
         results: data.results
      }))
   }
   render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <input
          className="shadow"
          type="text"
          placeholder="Search for a character..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
          />
          <Suggestions characters={this.state.results} search={this.state.query}/>
      </StyledForm>
    );
  }
}

export default Search;

const StyledForm = styled.form`
  padding: 1em;
  background: #7a8288;
  input {
    padding: 0.8em;
    border-radius: 10px;
  }
  .shadow {
    -moz-box-shadow: inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow: inset 0 0 10px #000000;
  }
`;
