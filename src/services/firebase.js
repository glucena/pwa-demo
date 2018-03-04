import firebase from 'firebase'

var config = {
  apiKey: 'AIzaS...',
  authDomain: 'pwa-demo-...',
  databaseURL: 'https://pwa-demo-...',
  storageBucket: 'pwa-demo-...',
  messagingSenderId: '1024...'
}
firebase.initializeApp(config)

const database = firebase.database()
const storage = firebase.storage()

export {
  database,
  storage
}
