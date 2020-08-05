var userName = document.querySelector("name");
var passWord = document.querySelector("pass");
var btn = document.querySelector("button");

btn.addEventListener("click",function(){
   if(userName.value ===" " && passWord.value === " "){
       alert("Enter The user name & password");
   } 
});