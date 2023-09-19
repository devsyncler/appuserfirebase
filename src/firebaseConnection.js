import firebase from 'firebase/app'
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCTb4Q2arkKHL_aH5KO_IKTI6QYONgixLA",
    authDomain: "meuapp-4627c.firebaseapp.com",
    databaseURL: "https://meuapp-4627c-default-rtdb.firebaseio.com",
    projectId: "meuapp-4627c",
    storageBucket: "meuapp-4627c.appspot.com",
    messagingSenderId: "487711218559",
    appId: "1:487711218559:web:46688692220c4d5245984a",
    measurementId: "G-1VK5KTPMJ7"
  };
  
  
  // Initialize Firebase
  if(!firebase.apps.length){
      
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;