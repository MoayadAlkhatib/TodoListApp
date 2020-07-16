import {auth, db } from '../server/firebaseinit.js';

auth.onAuthStateChanged(async(user) =>{
    if(user){
        //console.log(user.uid)
        const users = db.collection('users').doc(user.uid);
        const doc = await users.get();
        if (!doc.exists) {
          console.log('No such document!');
        } else {
         document.querySelector('#name').innerText=
          `name: ${doc.data().name}
           email: ${doc.data().email}`;
        }
        
    }else{
        document.querySelector('#name').innerText= 'you have to be logged in to get access'
    }
})