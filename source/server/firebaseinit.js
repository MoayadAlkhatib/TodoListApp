import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
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
let db = firebase.firestore();

export  {auth, db};