import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const CharacterList = ({ characters }) => {
  return (
    <CharacterListWrapper>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </CharacterListWrapper>
  );
};

const CharacterCard = ({ character }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
    </animated.div>
  );
};

const CharacterListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export default CharacterList;
