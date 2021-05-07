import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyD16qqfMg8C0u_sTXgjAT6v6-HRat4FnEQ',
  authDomain: 'firegram-a2251.firebaseapp.com',
  projectId: 'firegram-a2251',
  storageBucket: 'firegram-a2251.appspot.com',
  messagingSenderId: '289266577212',
  appId: '1:289266577212:web:e8962aeb5e3fc8f410f839',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
