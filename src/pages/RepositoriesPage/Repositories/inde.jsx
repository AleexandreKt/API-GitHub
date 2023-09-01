import React from 'react';
import PropTypes from 'prop-types';

import Repository from './Repository/inde';

import { Container } from './style';

function Repositories({ repositories, currentLanguege }) {
  const repos = repositories
  .filter(
    (repository) =>
      currentLanguege === undefined || repository.language === currentLanguege
      // ou ele é undefined ou ele é igual === ao meu language
  )
  .map((repository) => (
    <Repository key={repository.id} repository={repository}/> // repositorie com a chave corrente
  ))
  return (
    <Container>{repos}</Container>
  )
}

Repositories.defaultProps = {
  currentLanguege: undefined, // quando ele vier sem nada o valor tem que ser undefined
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired,
  ).isRequired,
  currentLanguege: PropTypes.string,
};

export default Repositories
