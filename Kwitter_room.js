var firebaseConfig = 
{
    apiKey: "AIzaSyB1wxK3kgPdP1T-oMVH0e3XK_bpv_Oe6IM",
    authDomain: "whjr-01.firebaseapp.com",
    databaseURL: "https://whjr-01-default-rtdb.firebaseio.com",
    projectId: "whjr-01",
    storageBucket: "whjr-01.appspot.com",
    messagingSenderId: "983880956187",
    appId: "1:983880956187:web:bfa2ca30023ff54ef73bbe"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html" ;
}

function getData() 
{
firebase.database().ref("/").on('value',
function(snapshot) 
{
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{
childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
//End code
});});}
getData();

function logout()
{
    localStorage.removeItem(user_name);
    localStorage.removeItem(room_name);
    window.location = "index.html";
}