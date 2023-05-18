//function social_media() {
//   var selectvalue=$('input[name=link]:checked','#form').var();
//   if(selectvalue=="bus"){
//      window.location.href=('bus ticket.html','_self');
//      return true;
//   }
//   else if(selectvalue=="train"){
//      window.location.href=('train booking.html','_self');
//      return true;
//   }
//   else if(selectvalue=="flight"){
//      window.location.href=('flight booking.html','_self');
//      return true;
//   }
//}

   // let social = document.getElementById("Choice").checked;
   // if (Choice='Bus') {
   //    window.location.href = "Bus ticket.html";
   // } else if (Choice='Train') {
   //    window.location.href = "train booking.html";
   // } else if (Choice='Flight') {
   //    window.location.href = "flight booking.html";
   // }
   
function social_media(){
   var selecttext=document.getElementById("mytext").value;
   localStorage.setItem("ddvalue",selecttext);
   return true
}