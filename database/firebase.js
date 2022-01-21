import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDUpELLpZGBWOvd6n4w32wOTS6EW5Cvorw",
    authDomain: "reactnativefirebase-ee3c8.firebaseapp.com",
    projectId: "reactnativefirebase-ee3c8",
    storageBucket: "reactnativefirebase-ee3c8.appspot.com",
    messagingSenderId: "107497400478",
    appId: "1:107497400478:web:46c9a95be17b329d36b38f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;