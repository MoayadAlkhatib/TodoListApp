import addUser from '../server/registers.js';

document.querySelector('#reg').addEventListener('click', ()=>{
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let confirm = document.querySelector('#confirm').value;
    let user = {
        'name': name,
        'email': email,
        'password': password,
        'confirmed password': confirm
    };
    //console.log(user);
    addUser(email, password);
})

//functions for validation