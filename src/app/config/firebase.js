import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHga533QfyPqzUmGPN0Rc8cylHBuZcusk",
    authDomain: "revents-206506.firebaseapp.com",
    databaseURL: "https://revents-206506.firebaseio.com",
    projectId: "revents-206506",
    storageBucket: "revents-206506.appspot.com",
    messagingSenderId: "387568789402"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots:true
}
firestore.settings(settings);
export default firebase;