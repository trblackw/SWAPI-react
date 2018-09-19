import React from "react";
import styled from "styled-components";


const Suggestions = ({ characters, search }) => {
   console.log(characters);
   const options = characters
    .filter(character => new RegExp(search, "i").test(character.name))
    .map(character => <li key={character.created}>{character.name}</li>);

   return <StyledUl>{options}</StyledUl>;
};
export default Suggestions;

const StyledUl = styled.ul`
   list-style: none;
   background: whitesmoke;
   color: black;
   padding: .6em;
`

