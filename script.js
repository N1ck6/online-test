const firebaseConfig = {
    apiKey: apiKey1,
    appId: appId1,
    authDomain: authDomain1,
    databaseURL: databaseURL1,
    messagingSenderId: messagingSenderId1,
    projectId: projectId1,
    storageBucket: storageBucket1};

console.log("Firebase Config Loaded:", firebaseConfig);

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("room") || "default-room";

let currentUserId = "anonymous";
let currentUserName = "Anonymous";
let currentUserPhoto = "";
if (window.Telegram.WebApp) {
  const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
  if (initDataUnsafe && initDataUnsafe.user) {
    currentUserId = initDataUnsafe.user.id;
    currentUserName = initDataUnsafe.user.first_name;
    currentUserPhoto = initDataUnsafe.user.photo_url;
  }
}

document.getElementById("onePlayer").addEventListener("click", () => {
  document.getElementById("mainMenu").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
  document.getElementById("playerNick").innerText = currentUserName;
  document.getElementById("playerPhoto").src = currentUserPhoto;
});

document.getElementById("twoPlayer").addEventListener("click", () => {
  document.getElementById("twoPlayerMenu").classList.remove("hidden");
  document.getElementById("playerName").innerText = currentUserName;
});

document.getElementById("closeMenu").addEventListener("click", () => {
  document.getElementById("twoPlayerMenu").classList.add("hidden");
});

document.getElementById("sendInvite").addEventListener("click", () => {
  const enemyNick = document.getElementById("enemyName").value;
  if (!enemyNick) return;
  db.ref("invitations/" + enemyNick).set({
    sender: currentUserName,
    senderPhoto: currentUserPhoto,
  });
});

db.ref("invitations/" + currentUserName).on("value", (snapshot) => {
  const data = snapshot.val();
  if (!data) return;
  document.getElementById("twoPlayerMenu").classList.remove("hidden");
  document.getElementById("playerName").innerText = data.sender;
  document.getElementById("enemyName").value = currentUserName;
  const joinButton = document.createElement("button");
  joinButton.innerText = "Присоединиться";
  joinButton.addEventListener("click", () => {
    document.getElementById("mainMenu").classList.add("hidden");
    document.getElementById("twoPlayerMenu").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
    document.getElementById("playerNick").innerText = data.sender;
    document.getElementById("enemyNick").innerText = currentUserName;
    document.getElementById("playerPhoto").src = data.senderPhoto;
    document.getElementById("enemyPhoto").src = currentUserPhoto;
  });
  document.getElementById("twoPlayerMenu").appendChild(joinButton);
});
