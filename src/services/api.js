import axios from 'axios';
import { langColors } from './config';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login) => api.get(`/users/${login}`); // ira executar o metodo .get

export const getRepos = async (login) => api.get(`./users/${login}/repos`);

export default api;

export const getLangsFrom = (repositories) => {
  // 1. recuperar do array a propriedade language
  let stats = repositories
  .map((repository) => repository.language)
  .reduce((data, language) => ({
    ...data,                               // vou pegar o data com oq eu ja denho dentro do array e somar + 1, acumulando
    [language]: (data[language] || 0) + 1, // caro eu nao tenha data[language] ele ira iniciar com 0
  }), []);

  delete stats.null; // deletear tudo que possivelmente seja nullo

  stats = Object.keys(stats)    // vai criar um array com todas as keys / todas as linguagens que coloquei
    .map((languege) => ({
      name: languege,
      count: stats[languege],
      color: langColors[languege.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

    return stats;
}


// dados fixos antes de importar o color
  // // colculo dos filters
  // // array seleteres
  // const languages = [
  //   {name: 'java scrypt', count: 5, color: '#FCC419'},
  //   {name: 'SASS', count: 2, color: '#23DB42'},
  //   {name: 'PHP', count: 1, color: '#FE5895'},
  //   {name: 'CSS', count: 100, color: '#4263Eb'},
  // ];
