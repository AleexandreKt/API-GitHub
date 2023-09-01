import React, { useState } from 'react';
import { MdSearchOff } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

function MainPage() {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearchOff size={42} />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;
