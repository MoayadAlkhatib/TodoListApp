import { auth , db } from '../server/firebaseinit.js';

let errmessages =[];
let err = document.querySelector('#error');

document.querySelector('#reg').addEventListener('click', ()=>{
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let confirm = document.querySelector('#confirm').value;
    let user = {
        'name': name,
        'email': email
    };
    //console.log(user);
    if(name == ''){
        errmessages.push('The name must be filled');
        err.innerText = errmessages.join(','); 
        err.style.display = "block";
        errmessages = []; 
    }else if(confirm !== password){
        errmessages.push('The password does not match');
        err.innerText = errmessages.join(','); 
        err.style.display = "block";
        errmessages = [];
    }else{
    adduser(email,password);
    }
})

function adduser(email, password){
    auth.createUserWithEmailAndPassword(email, password).then(cred=>{
        return db.collection('users').doc(cred.user.uid).set({
            'name':  document.querySelector('#name').value,
            'email': document.querySelector('#email').value,
            'todos':[]
        });
      }).then(()=>{
        location.assign('/user/dashboard');
      }).catch(error =>{
        errmessages.push(error.message);
        err.innerText = errmessages.join(','); 
        err.style.display = "block";
        errmessages = [];
    })}
