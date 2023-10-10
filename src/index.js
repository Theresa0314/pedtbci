import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC-OyuMqGyYxGmdq6jVwlJawK0YeX1bCPQ",
  authDomain: "pedtb-ci.firebaseapp.com",
  projectId: "pedtb-ci",
  storageBucket: "pedtb-ci.appspot.com",
  messagingSenderId: "579965593563",
  appId: "1:579965593563:web:c9e65a0a13db50b8b4e9fe",
  measurementId: "G-812M331VVC"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'patient')

// realtime collection data
onSnapshot(colRef, (snapshot) => {
  let patient = []
  snapshot.docs.forEach(doc => {
    patient.push({ ...doc.data(), id: doc.id })
  })
  console.log(patient)
})

  // adding docs
const addPatientForm = document.querySelector('.add')
addPatientForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    address: addPatientForm.address.value,
    gender: addPatientForm.gender.value,
    name: addPatientForm.name.value,
  })
  .then(() => {
    addPatientForm.reset()
  })
})
