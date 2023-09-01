https://api.github.com/users/AleexandreKt



nao sera mais preciso destes dados fixos pqja temos o setRepositories que pega os dados diretamente da API

  const repositories = [
    {
      id: '1',
      name: 'Repo 1',
      description: 'Descrição',
      html_url: "https://avatars.githubusercontent.com/u/134510772?v=4",
      language: 'JavaScrypt'
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Descrição',
      html_url: "https://avatars.githubusercontent.com/u/134510772?v=4",
      language: 'CSS'
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Descrição',
      html_url: "https://avatars.githubusercontent.com/u/134510772?v=4",
      language: 'HTML'
    },
    {
      id: '4',
      name: 'Repo 4',
      description: 'Descrição',
      html_url: "https://avatars.githubusercontent.com/u/134510772?v=4",
      language: 'SASS'
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: "https://avatars.githubusercontent.com/u/134510772?v=4",
      language: 'Bootstrap'
    },
    {
      id: '6',
      name: 'Repo 6',
      description: 'Descrição',
      html_url: "https://avatars.githubusercontent.com/u/134510772?v=4",
      language: 'Python'
    },
  ];



nao sera mais preciso pelo fato de termos o setUser que usa os dados da API tmb para preencher no usuario

    aplicacão ira funcionar com os dados reais
  const user = {
    login: "AleexandreKt",
    name: "Alexandre Konrath",
    avatar_url: "https://avatars.githubusercontent.com/u/134510772?v=4",
    followers: 0,
    following: 0,
    company: null,
    blog: '',
    location: "Santa Catarina - SC",
  }
