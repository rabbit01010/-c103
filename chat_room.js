//PASTE FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAHzE1fgg2XtGSUjhoNgHCDd-hha8m6B4I",
    authDomain: "kwitter-9f326.firebaseapp.com",
    databaseURL: "https://kwitter-9f326-default-rtdb.firebaseio.com",
    projectId: "kwitter-9f326",
    storageBucket: "kwitter-9f326.appspot.com",
    messagingSenderId: "396018134094",
    appId: "1:396018134094:web:65351c941a78bba51de71f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
