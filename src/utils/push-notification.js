import * as firebase from 'firebase'

export const initializeFirebase = () => {
  const config = {
    messagingSenderId: ''
  }
  firebase.initializeFirebase( config )
}