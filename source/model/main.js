import auth from '../server/firebaseinit.js';

let errmessages =[];
let err = document.querySelector('#error');

document.querySelector("#reg-btn").addEventListener('click',()=>{
   location.assign('/user/register');
})

document.querySelector('#login-btn').addEventListener('click', ()=>{
   let email = document.querySelector('#email').value;
   let password = document.querySelector('#password').value;

   auth.signInWithEmailAndPassword(email, password).then(cred=>{
      console.log(cred)
      location.assign('/user/dashboard')})
      .catch(error =>{
         errmessages.push(error.message);
         err.innerText = errmessages.join(','); 
         err.style.display = "block";
         errmessages = [];
     })
})