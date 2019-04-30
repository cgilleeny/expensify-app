import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').push(expenses[0]);

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.`);
// }, (e) => {
//   console.log('data fetching failed: ' + e)
// });

// setTimeout(() => {
//   database.ref('job/company').set('Amazon');
// }, 3500);



// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Python'
// });





// database.ref('expenses').on('value', (snapshot) => {
//   const expensesArray = [];
//   snapshot.forEach((childSnapshot) => {
//     expensesArray.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   })
//   console.log(expensesArray);
// })

