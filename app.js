const firebaseConfig = {
  apiKey: "AIzaSyCE2UeLfs3BFoyFVjiYzTwvdMsC2UQMVfc",
  authDomain: "tasbeeh-counter-64da3.firebaseapp.com",
  projectId: "tasbeeh-counter-64da3",
  storageBucket: "tasbeeh-counter-64da3.appspot.com",
  messagingSenderId: "135367026823",
  appId: "1:135367026823:web:f4d85e10d9de26a5eff022",
  measurementId: "G-GV4K8M08MP",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function signup() {
  var signUpEmail = document.getElementById("email").value;
  var signUpPassword = document.getElementById("password").value;

  if (!signUpEmail || !signUpPassword) {
    alert("Email aur password zaroori hain!");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      alert("you are signup");
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("error is", errorMessage);
      // ..
    });
}

function login() {
  var loginEmail = document.getElementById("email-name").value;
  var loginPassword = document.getElementById("password-name").value;
  console.log(loginEmail, loginPassword);

  if (!loginEmail || !loginPassword) {
    alert("Please enter email and password");
    return;
  }

  firebase
  .auth()
  .signInWithEmailAndPassword(loginEmail, loginPassword)
  .then((userCredential) => {
    // Login
    var user = userCredential.user;
    localStorage.setItem('firebase-uid',user.uid);
    alert("you are login")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("error is ",errorMessage)
  })
}


var dashboardSec = document.getElementById("dashboardSec");
var counterSec = document.getElementById("counterSec");
var signupSec = document.getElementById("signupSec");

var allahHuAkbar = 0;
var duroodShareef = 0;
var subhanallah = 0;
var alhumdulillah = 0;
var astagfirullah = 0;
var activeTasbeeh;

var tasbeehHeading = document.getElementById("tasbeehHeading");
var tasbeehCount = document.getElementById("tasbeehCount");

function dashboard() {
  counterSec.classList.add("d-none");
  signupSec.classList.add("d-none");
  dashboardSec.classList.remove("d-none");
}
function signUpBtn() {
  dashboardSec.classList.add("d-none");
  counterSec.classList.add("d-none");
  signupSec.classList.remove("d-none");
}

function showTasbeeh(tasbeeh) {
  var allTasbeehat = {
    allahHuAkbar,
    duroodShareef,
    subhanallah,
    alhumdulillah,
    astagfirullah,
  };

  dashboardSec.classList.add("d-none");
  signupSec.classList.add("d-none");
  counterSec.classList.remove("d-none");

  activeTasbeeh = tasbeeh;
  tasbeehCount.innerHTML = allTasbeehat[tasbeeh];

  if (tasbeeh === "allahHuAkbar") {
    tasbeehHeading.innerHTML = "اللّٰهُ أَكْبَر";
  } else if (tasbeeh === "duroodShareef") {
    tasbeehHeading.innerHTML = " درود شریف";
  } else if (tasbeeh === "subhanallah") {
    tasbeehHeading.innerHTML = "سُبْحَانَ اللَّه";
  } else if (tasbeeh === "alhumdulillah") {
    tasbeehHeading.innerHTML = "ٱلْحَمْدُ لِلَّٰهِ";
  } else if (tasbeeh === "astagfirullah") {
    tasbeehHeading.innerHTML = "أَسْتَغْفِرُ اللهَ";
  }
}

function count(type) {
  if (type === "plus") {
    if (activeTasbeeh === "allahHuAkbar") {
      allahHuAkbar++;
      tasbeehCount.innerHTML = allahHuAkbar;
    }
    if (activeTasbeeh === "duroodShareef") {
      duroodShareef++;
      tasbeehCount.innerHTML = duroodShareef;
    }
    if (activeTasbeeh === "subhanallah") {
      subhanallah++;
      tasbeehCount.innerHTML = subhanallah;
    }
    if (activeTasbeeh === "alhumdulillah") {
      alhumdulillah++;
      tasbeehCount.innerHTML = alhumdulillah;
    }
    if (activeTasbeeh === "astagfirullah") {
      astagfirullah++;
      tasbeehCount.innerHTML = astagfirullah;
    }
  } else {
    if (Number(tasbeehCount.innerHTML) > 0) {
      if (activeTasbeeh === "allahHuAkbar") {
        allahHuAkbar--;
        tasbeehCount.innerHTML = allahHuAkbar;
      }
      if (activeTasbeeh === "duroodShareef") {
        duroodShareef--;
        tasbeehCount.innerHTML = duroodShareef;
      }
      if (activeTasbeeh === "subhanallah") {
        subhanallah--;
        tasbeehCount.innerHTML = subhanallah;
      }
      if (activeTasbeeh === "alhumdulillah") {
        alhumdulillah--;
        tasbeehCount.innerHTML = alhumdulillah;
      }
      if (activeTasbeeh === "astagfirullah") {
        astagfirullah--;
        tasbeehCount.innerHTML = astagfirullah;
      }
    }
  }
}

function handleSave() {
  var allTasbeehat = {
    allahHuAkbar,
    duroodShareef,
    subhanallah,
    alhumdulillah,
    astagfirullah,
  };

  db.collection('tasbeehCount').doc(userId).set
}