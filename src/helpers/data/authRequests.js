import firebase from 'firebase/app';
import 'firebase/auth';

const authenticate = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(provider);
  // console.log(x.i.additionalUserInfo.username);
};

const logoutUser = () => firebase.auth().signOut();

export default {
  authenticate,
  logoutUser,
};
