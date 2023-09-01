import React from 'react'
import PropTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link } from './style';

import { langColors } from '../../../../services/config';

function Repository({ repository }) {
  const color = langColors[repository.language && repository.language.toLowerCase()]

  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target='_blank'>ver</Link>
      </Footer>
    </Container>
  )
}

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
}

export default Repository
