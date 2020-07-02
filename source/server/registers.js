import * as firebase from "firebase/app";
import "firebase/auth";

//TODO Replace all keys using .env
var firebaseConfig = {
  apiKey: "AIzaSyBRxOftrKyt7RPLtc8nAkR4OnLv-M_0jfI",
  authDomain: "todo-list-b7acd.firebaseapp.com",
  databaseURL: "https://todo-list-b7acd.firebaseio.com",
  projectId: "todo-list-b7acd"
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