import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.VUE_APP_APIKEY,
//   authDomain: process.env.VUE_APP_AUTHDOMAIN,
//   projectId: process.env.VUE_APP_PROJECTID,
//   storageBucket: process.env.VUE_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
//   appId: process.env.VUE_APP_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCu5tD74o7AKsUsLDmLqptBELf20-IkMak",
  authDomain: "invoice-app-d6e30.firebaseapp.com",
  projectId: "invoice-app-d6e30",
  storageBucket: "invoice-app-d6e30.appspot.com",
  messagingSenderId: "845912529845",
  appId: "1:845912529845:web:03cd61d0225333708997fc"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

createApp(App).use(store).use(router).mount('#app')
