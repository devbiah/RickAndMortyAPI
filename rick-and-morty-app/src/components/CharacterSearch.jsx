import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CharacterSearch = ({ onSearch }) => {
  const [name, setName] = useState('');
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const handleSearch = () => {
    onSearch(name);
  };

  return (
    <SearchWrapper style={props}>
      <Input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Digite o nome do personagem"
      />
      <Button onClick={handleSearch}>Buscar</Button>
    </SearchWrapper>
  );
};

const SearchWrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export default CharacterSearch;
