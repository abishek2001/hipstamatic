import firebase from 'firebase';
const firebaseApp= firebase.initializeApp({
   
        apiKey: "AIzaSyCVAYzKaInRKytt7DWULfUS9z9AJcBhGvY",
        authDomain: "hipstamatic-3fba4.firebaseapp.com",
        projectId: "hipstamatic-3fba4",
        storageBucket: "hipstamatic-3fba4.appspot.com",
        messagingSenderId: "663262314703",
        appId: "1:663262314703:web:11452ccc9eb4829f33b7ba",
        measurementId: "G-65KWYNY9C8"
    
});
const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

export {db,auth,storage};