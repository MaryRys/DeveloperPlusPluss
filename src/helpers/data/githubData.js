import axios from 'axios';
import apiKeys from '../apiKeys';

// eslint-disable-next-line prefer-destructuring
const clientId = apiKeys.githubKeys.clientId;
// eslint-disable-next-line prefer-destructuring
const clientSecret = apiKeys.githubKeys.clientSecret;

const getUser = githubUsername => new Promise((resolve, reject) => {
  axios.get(`http://api.github.com/users/${githubUsername}?client_id=${clientId}&client_secret=${clientSecret}`)
    .then((result) => {
      if (result.data === '') {
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

console.log(getUser);

export default getUser;
