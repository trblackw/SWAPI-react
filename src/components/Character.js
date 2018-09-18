import React from "react";

const Character = ({ data, search }) => {
  return (
    <div
      style={{ background: "#ffe300", margin: "1em auto", padding: "1.5em" }}
    >
      {data.map(character => (
        <div
          key={character.created}
          style={{
            background: "#222",
            color: "whitesmoke",
            padding: "1.5em",
            marginBottom: "1.5em",
            textAlign: "center"
          }}
        >
          <h1>{character.name}</h1>
          <ul style={{ listStyle: "none" }}>
            <li>Height: {character.height}</li>
            <li>Mass: {character.mass}</li>
            <li>Hair color: {character.hair_color}</li>
            <li>Skin color: {character.skin_color}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Character;
