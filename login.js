function login() {
   let db = { 0: ['sanjai.g1407@gmail.com', '14072000'], 1: ['Manoj', 'password'], 2: ['Vasanth', 'pass1'] };
   let user = document.getElementById("username").value;
   let pass = document.getElementById("password").value;
   let flag = false;
   for (let i = 0; i < Object.keys(db).length; i++){
      if ((db[i][0] == user) && (db[i][1] == pass)) {         
         flag = true;
      }
   }
   if (flag == true) {
      window.location.href = "profile.html";
   }
   else {
      document.getElementById('para').innerHTML="Wrong Password"
   }
}
function google(){
   window.location.href="https://accounts.google.com/v3/signin/identifier?dsh=S-1073170170%3A1673414184522589&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession"
}
var state= false;
function show(){
   if(state){
      document.getElementById("password").
      setAttribute("type","password");
      document.getElementById("eye").style.color = '#7a797e';
      state = false;
   }
   else{
      document.getElementById("password").
      setAttribute("type","text");
      document.getElementById("eye").style.color = '#5887ef';
      state = true;
   }
}

function forget(){
   window.location.href="forget.html"
}

function signup(){
   window.location.href="sign.html"
}