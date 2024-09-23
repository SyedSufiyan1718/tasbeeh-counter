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

var userData = {};
var allahHuAkbar = 0;
var duroodShareef = 0;
var subhanallah = 0;
var alhumdulillah = 0;
var astagfirullah = 0;
var activeTasbeeh;
console.log("activeTasbeeh is ", activeTasbeeh);
var userDetail = document.getElementById("userDetail");

function signup() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var signUpEmail = document.getElementById("email").value;
  var signUpPassword = document.getElementById("password").value;

  if (!signUpEmail || !signUpPassword || !firstName || !lastName) {
    alert("Please Check Your Form");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      db.collection("user")
        .add({
          firstName: firstName,
          lastName: lastName,
          email: signUpEmail,
          uid: user.uid,
        })
        .then((res) => {
          console.log("res is ", res.id);
          firstName = "";
          lastName = "";
          signUpEmail = "";
          signUpPassword = "";
          // login();
        })
        .catch((err) => {
          console.log("error is ", err);
        });
      alert("you are signup");
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("There is an error please try again");
      // ..
    });
}

function login() {
  var loginEmail = document.getElementById("email-name").value;
  var loginPassword = document.getElementById("password-name").value;

  var login = document.getElementById("login");
  var signup = document.getElementById("signupBtn");
  var logout = document.getElementById("logout");

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
      localStorage.setItem("firebase-uid", user.uid);
      getMyData(user.uid);
      alert("you are login");
      login.classList.add("d-none");
      signup.classList.add("d-none");
      logout.classList.remove("d-none");

      getMyData(uid).then(() => {
        userDetail.innerHTML =
          "Welcome " + userData.firstName + " " + userData.lastName; // Ab yeh sahi tarah se kaam karega
      });
      if (user.uid) {
        db.collection("allahHuAkbar")
          .where("uid", "==", user.uid)
          .get()
          .then((data) => {
            data.forEach((element) => {
              allahHuAkbarCount.innerHTML =
                element.data().count + " " + "Times";
            });
          })
          .catch((e) => {
          });
        db.collection("duroodShareef")
          .where("uid", "==", user.uid)
          .get()
          .then((data) => {
            data.forEach((element) => {
              duroodShareefCount.innerHTML =
                element.data().count + " " + "Times";
            });
          })
          .catch((e) => {
          });
        db.collection("subhanallah")
          .where("uid", "==", user.uid)
          .get()
          .then((data) => {
            data.forEach((element) => {
              subhanallahCount.innerHTML = element.data().count + " " + "Times";
            });
          })
          .catch((e) => {
          });
        db.collection("alhumdulillah")
          .where("uid", "==", user.uid)
          .get()
          .then((data) => {
            data.forEach((element) => {
              alhumdulillahCount.innerHTML =
                element.data().count + " " + "Times";
            });
          })
          .catch((e) => {
          });
        db.collection("astagfirullah")
          .where("uid", "==", user.uid)
          .get()
          .then((data) => {
            data.forEach((element) => {
              astagfirullahCount.innerHTML =
                element.data().count + " " + "Times";
            });
          })
          .catch((e) => {
          });
      }
      console.log("user", user.uid);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("There is an error please try again");
    });
}
var allahHuAkbarCount = document.getElementById("allahHuAkbarCount");
var duroodShareefCount = document.getElementById("duroodShareefCount");
var subhanallahCount = document.getElementById("subhanallahCount");
var alhumdulillahCount = document.getElementById("alhumdulillahCount");
var astagfirullahCount = document.getElementById("astagfirullahCount");
var uid = localStorage.getItem("firebase-uid");
if (uid) {
  db.collection("allahHuAkbar")
    .where("uid", "==", uid)
    .get()
    .then((data) => {
      data.forEach((element) => {
        allahHuAkbarCount.innerHTML = element.data().count + " " + "Times";
      });
    })
    .catch((e) => {
      console.log("error is ", e);
    });
  db.collection("duroodShareef")
    .where("uid", "==", uid)
    .get()
    .then((data) => {
      data.forEach((element) => {
        duroodShareefCount.innerHTML = element.data().count + " " + "Times";
      });
    })
    .catch((e) => {
      console.log("error is ", e);
    });
  db.collection("subhanallah")
    .where("uid", "==", uid)
    .get()
    .then((data) => {
      data.forEach((element) => {
        subhanallahCount.innerHTML = element.data().count + " " + "Times";
      });
    })
    .catch((e) => {
      console.log("error is ", e);
    });
  db.collection("alhumdulillah")
    .where("uid", "==", uid)
    .get()
    .then((data) => {
      data.forEach((element) => {
        alhumdulillahCount.innerHTML = element.data().count + " " + "Times";
      });
    })
    .catch((e) => {
      console.log("error is ", e);
    });
  db.collection("astagfirullah")
    .where("uid", "==", uid)
    .get()
    .then((data) => {
      data.forEach((element) => {
        astagfirullahCount.innerHTML = element.data().count + " " + "Times";
      });
    })
    .catch((e) => {
      console.log("error is ", e);
    });
}

function getMyData(uid) {
  return db
    .collection("user")
    .where("uid", "==", uid)
    .get()
    .then((res) => {
      res.forEach((element) => {
        userData = element.data();
        console.log("element is ", element.data());
      });
    })
    .catch((err) => []);
}

function onReload() {
  var login = document.getElementById("login");
  var signup = document.getElementById("signupBtn");
  var logout = document.getElementById("logout");

  var uid = localStorage.getItem("firebase-uid");
  if (uid) {
    getMyData(uid).then(() => {
      userDetail.innerHTML =
        "Welcome " + userData.firstName + " " + userData.lastName; // Ab yeh sahi tarah se kaam karega
    });
    login.classList.add("d-none");
    signup.classList.add("d-none");
    logout.classList.remove("d-none");
    console.log("Uid", uid);
  }
}

var dashboardSec = document.getElementById("dashboardSec");
var counterSec = document.getElementById("counterSec");
var signupSec = document.getElementById("signupSec");

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
  var uid = localStorage.getItem("firebase-uid");
  db.collection(activeTasbeeh)
    .where("uid", "==", uid)
    .get()
    .then((data) => {
      data.forEach((element) => {
        tasbeehCount.innerHTML = element.data().count;
      });
    })
    .catch((e) => {
    });
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
  var uid = localStorage.getItem("firebase-uid");
  if (uid) {
    var allTasbeehat = {
      allahHuAkbar,
      duroodShareef,
      subhanallah,
      alhumdulillah,
      astagfirullah,
    };

    var countToSave = allTasbeehat[activeTasbeeh];

    db.collection(activeTasbeeh)
      .where("uid", "==", uid)
      .get()
      .then((res) => {
        if (!res.empty) {
          // Document found, update it
          res.forEach((doc) => {
            db.collection(activeTasbeeh).doc(doc.id).update({
              count: countToSave,
            });
          });
          // alert("Count updated successfully");
        } else {
          // Document not found, create new
          return db.collection(activeTasbeeh).add({
            count: countToSave,
            uid: uid,
          });
        }
      })
      .then(() => {
        if (uid) {
          db.collection("allahHuAkbar")
            .where("uid", "==", uid)
            .get()
            .then((data) => {
              data.forEach((element) => {
                allahHuAkbarCount.innerHTML =
                  element.data().count + " " + "Times";
              });
            })
            .catch((e) => {
            });
          db.collection("duroodShareef")
            .where("uid", "==", uid)
            .get()
            .then((data) => {
              data.forEach((element) => {
                duroodShareefCount.innerHTML =
                  element.data().count + " " + "Times";
              });
            })
            .catch((e) => {
            });
          db.collection("subhanallah")
            .where("uid", "==", uid)
            .get()
            .then((data) => {
              data.forEach((element) => {
                subhanallahCount.innerHTML =
                  element.data().count + " " + "Times";
              });
            })
            .catch((e) => {
            });
          db.collection("alhumdulillah")
            .where("uid", "==", uid)
            .get()
            .then((data) => {
              data.forEach((element) => {
                alhumdulillahCount.innerHTML =
                  element.data().count + " " + "Times";
              });
            })
            .catch((e) => {
            });
          db.collection("astagfirullah")
            .where("uid", "==", uid)
            .get()
            .then((data) => {
              data.forEach((element) => {
                astagfirullahCount.innerHTML =
                  element.data().count + " " + "Times";
              });
            })
            .catch((e) => {
            });
        }
      })
      .catch((err) => {
      });
  } else {
    alert("You are not logged in. Please login to save your count.");
  }
}

function logout() {
  localStorage.removeItem("firebase-uid");
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      alert("youu are not logout");
    });
}

var tasbeeh_sec = document.getElementById('tasbeeh_sec');
var login_signup_sec = document.getElementById('login_signup_sec');
var more_btn = document.getElementById("more_btn");
var media = window.matchMedia("(max-width: 730px)");

if (media.matches) {
  tasbeeh_sec.classList.add("d-none");
  login_signup_sec.classList.add('d-none');
  more_btn.classList.remove("d-none");
} else {
  tasbeeh_sec.classList.remove("d-none");
  login_signup_sec.classList.remove('d-none');
  more_btn.classList.add('d-none');
}

media.addEventListener("change", function (e) {
  if (e.matches) {
    tasbeeh_sec.classList.add("d-none");
    login_signup_sec.classList.add('d-none');
    more_btn.classList.remove("d-none");
  } else {
    tasbeeh_sec.classList.remove("d-none");
    login_signup_sec.classList.remove('d-none');
    more_btn.classList.add('d-none');
  }
});

function more() {
  tasbeeh_sec.classList.toggle("d-none");
  login_signup_sec.classList.toggle('d-none');
}

onReload();
