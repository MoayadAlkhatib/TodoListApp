import {auth, db } from '../server/firebaseinit.js';

auth.onAuthStateChanged(async(user) =>{
    if(user){
        //console.log(user.uid)
        const users = db.collection('users').doc(user.uid);
        const doc = await users.get();
        if (!doc.exists) {
          console.log('No such document!');
        } else {
            console.log(doc.data().name)
            document.querySelector('#name').innerText= doc.data().name;
        }
        
    }else{
        document.querySelector('#name').innerText= 'you have to be logged in to get access'
    }
})