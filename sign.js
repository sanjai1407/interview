function password() {
   let p = document.getElementById("email").value;
   if (p in '@'){
      let p1 = document.getElementById("Password").value;
      if ((p1.length >= 8) && (p1.length <= 16)) {
         let upper = 0;
         let lower = 0;
         let num = 0;
         let special = 0;
         for (let i = 0; i < p1.length; i++){
            if ((p1[i] >= 'A') && (p1[i] <= 'Z')) {
                  upper++;
            } else if ((p1[i] >= 'a') && (p1[i] <= 'z')) {
                  lower++;
               } else if ((p1[i] >= '0') && (p1[i] <= '9')) {
                  num++;
               } else {
                  special++
               }
            }
         let p2 = document.getElementById("confirm").value;
         if (p1==p2){
            window.location.href="login.html";
         }
      } else {
         document.getElementById("para").innerHTML=("Password is weak")
      }
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
