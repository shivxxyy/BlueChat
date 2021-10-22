import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAxNA4Dnqa4OtzdzV2VzZ8kipnOu4Vk544",
    authDomain: "bluechat-react-proj.firebaseapp.com",
    projectId: "bluechat-react-proj",
    storageBucket: "bluechat-react-proj.appspot.com",
    messagingSenderId: "544344399770",
    appId: "1:544344399770:web:af7a421cb34fd84a9ee423"
  }).auth()