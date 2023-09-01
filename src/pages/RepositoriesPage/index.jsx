import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Profile from './Profile/index';
import Filter from './Filter/index'
import Repositories from './Repositories/inde';

import { Loading, Container, Sidebar, Main } from './styles';

import { getUser, getRepos, getLangsFrom } from '../../services/api';

function RepositoriesPage() {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLangueges] = useState();
  const [currentLanguege, setCurrentlanguege] = useState('');
  const [loading, setLoading] = useState(true); // vai estar true no momento em que o componente for montado

  // executar algo no momento em que o componente esta sendo montado
  // eceuta de modo assíncrono no momento da aplicação = mais responsival
  useEffect(() => {
    const loadData = async () => {
      const [userResonse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login)
      ]);
      // setar a resposta que esta no user
      setUser(userResonse.data);
      setRepositories(repositoriesResponse.data)
      setLangueges(getLangsFrom(repositoriesResponse.data)) // ele interrompe a execução do segundo return

      // setar como false quando eu terminar meu carregamento
      setLoading(false);
    };
      loadData();
  }, []);

  const onFilterClick = (languege) => { // função externa para o onclick, recebe o lenguege e seta o corrente
    setCurrentlanguege(languege);
  };

  if (loading) { // quando o loading mudar de valor o proximo return sera rendelizado
    return <Loading>Carregando...</Loading>
  }

  return (
    <Container>
    <Sidebar>
      <Profile user={user}/>
      <Filter
        languages={languages}
        currentLanguege={currentLanguege}
        onClick={onFilterClick}
      />
    </Sidebar>
    <Main>
      <Repositories
      repositories={repositories} // trazendo o currentLanguege para o repositories  assim ele pode receber o valor da linguagem corrent
      currentLanguege={currentLanguege}
      />
    </Main>
  </Container>
  )
};

export default RepositoriesPage;
