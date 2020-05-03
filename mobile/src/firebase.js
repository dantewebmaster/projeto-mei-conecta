import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfpIgpBD7qi94Lxpx8kj8g-X342UGvopA",
  authDomain: "parceria-facil.firebaseapp.com",
  databaseURL: "https://parceria-facil.firebaseio.com",
  projectId: "parceria-facil",
  storageBucket: "parceria-facil.appspot.com",
  messagingSenderId: "906766762202",
  appId: "1:906766762202:web:c6f23ff3543eb30013e5e3",
  measurementId: "G-ZC84SB5G1Y"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const storage = firebase.storage().ref();
