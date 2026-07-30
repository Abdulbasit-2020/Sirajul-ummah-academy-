import { db } from "./firebase.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
updateProfile
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// REGISTER
const registerForm = document.getElementById("registerForm");

if (registerForm) {

registerForm.addEventListener("submit", async (e)=>{

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try{

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

await updateProfile(userCredential.user,{
displayName:name
});
  await setDoc(doc(db,"users",userCredential.user.uid),{

name:name,

email:email,

coins:0,

role:"student",

createdAt:new Date()

});

alert("Account created successfully!");

window.location="dashboard.html";

}catch(error){

alert(error.message);

}

});

}

// LOGIN
const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=document.getElementById("loginEmail").value;
const password=document.getElementById("loginPassword").value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

window.location="dashboard.html";

}catch(error){

alert(error.message);

}

});

}
