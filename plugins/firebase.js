import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCj2YBPsVY0iQsxc_eKZCFxhdckZEMpg4k',
  authDomain: 'portfolio-3236a.firebaseapp.com',
  databaseURL: 'https://portfolio-3236a.firebaseio.com',
  projectId: 'portfolio-3236a',
  storageBucket: 'portfolio-3236a.appspot.com',
  messagingSenderId: '505597378741',
  appId: '1:505597378741:web:860aa8dcb726d6449abefc',
  measurementId: 'G-FXPMTJTK6T'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const db = firebase.firestore()
