import React from 'react'

import PropTypes from 'prop-types'

import { Container, Selector, Cleanner } from './style';

function Filter({languages, currentLanguege, onClick}) {
  // langs vai exec. a func map e cada elemento do lengs vai ser armazenado no lang
  /* para diferenciar dos outros usa o key */
  const selectors = languages.map(({name, count, color}) => (
    <Selector
    key={name.toLowerCase()}
    color={color}
    className={currentLanguege === name ? 'selected' : ''} // se for name, recebe a class selected
    onClick={() => onClick && onClick(name)}// caso onClick esteja nullo, ele nao chama o onClick(name)
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
    {selectors}                     {/* vai indefinir a propriedade current, fazendo assim funcionar o btn de limpar */}
    <Cleanner onClick={() => onClick && onClick(undefined)}>Limpar</Cleanner>
    </Container>
  );
};

Filter.defaultProps = { // ja que eles sao estao .isRequired no primeiro escalao, tem q fazer isso
  currentLanguege: null,
  onClick: null,
}

Filter.propTypes = {
  languages: PropTypes.arrayOf( // array de objeto
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
    color: PropTypes.string,
  }).isRequired
  ).isRequired,
  currentLanguege: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter
