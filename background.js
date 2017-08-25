const clickButton = () => {
  console.log("firebase object", firebase);

  var config = {
    apiKey: "AIzaSyABe5Ge-PSeZzfZU2EhllUI-w3fMb1nci8",
    authDomain: "webext-firefox.firebaseapp.com",
    databaseURL: "https://webext-firefox.firebaseio.com",
    projectId: "webext-firefox",
    storageBucket: "",
    messagingSenderId: "909758240321"
  };
  firebase.initializeApp(config);

  const user = {
    id: "no.email@example.com",
    password: "test-password"
  };

  firebase.auth().signInWithEmailAndPassword(
    user.id,
    user.password
  ).then(
    user => {
      console.log("user", user);
    },
    error => {
      console.log("error", error);
    }
  );
};

chrome.browserAction.onClicked.addListener(clickButton);
