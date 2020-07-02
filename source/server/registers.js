import * as firebase from "firebase/app";
import "firebase/auth";
import dotenv from 'dotenv'
dotenv.config( { path: '../../.env' });
//console.log(process.env.API_KEY);

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATA_BASE_URL,
  projectId: process.env.PROJECT_ID
};

firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();

function addUser(email, password){
  auth.createUserWithEmailAndPassword(email, password)
  .then(cred => {
    console.log(cred);
  })
}
export default addUser;