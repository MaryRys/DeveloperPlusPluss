import axios from 'axios';
// import apiKeys from '../../../db/apiKeys';

const getUser = user => new Promise((resolve, reject) => {
  axios.get(`api.github.com/users/${user}`)
    .then((result) => {
      if (result.data[0] === '') {
        resolve('user info not available');
      } else {
        const apiData = result.data;
        resolve(apiData);
      }
    })
    .catch((error) => {
      reject(error);
    });
});

export default getUser;
