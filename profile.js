let usr = window.localStorage["current_user"];

let pasw = window.localStorage["current_pass"];

console.log(usr,pasw);
var profileItems = JSON.parse(localStorage.getItem('profile'))
    for(i of profileItems){
        if(usr==i.name&&pasw==i.pass){
            document.getElementById("username").innerHTML=usr;
            document.getElementById("mail").innerHTML=i.mail;
        }
    }

function logout(){
    window.localStorage["current_user"]=undefined;
    window.location.href = 'login.html';
}
