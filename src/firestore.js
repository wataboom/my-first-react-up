import { firebaseApp } from './firebase';

export const firestoreStudentLogs = () =>{
  const db = firebaseApp.firestore()
  db.collection('logs').doc()
}

export const firestoreStudentId = () =>{
  const db = firebaseApp.firestore()
  const studentId = db.collection('students')
  db.collection('students').doc(studentId)
}