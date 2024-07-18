importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDY8X6T7u70gvoszdxmlpAD3_nYHsRNcjE",
  authDomain: "d-fresh-727f4.firebaseapp.com",
  projectId: "d-fresh-727f4",
  storageBucket: "d-fresh-727f4.appspot.com",
  messagingSenderId: "12876889618",
  appId: "1:12876889618:web:9356fe429f99076bb422cb",
  measurementId: "G-G3N6TX6QL7"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});