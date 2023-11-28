var login = document.getElementById('login');

let wrongMsg = document.getElementById("wrongMsg");

//document.onload= localStorage.setItem('isLoggedInnn', "false");

login.onclick = (e) => {
 
  e.preventDefault();

  var usernameAddress = document.getElementById('canUsername').value;
  console.log(usernameAddress)
  var passwordAddress = document.getElementById('CanPassword').value;
  //document.onload= localStorage.setItem('isLoggedInnn', false);
  var getUser = localStorage.getItem('username');
  var getPass = localStorage.getItem('passwordValue');

  if (usernameAddress == getUser && passwordAddress == getPass) {
    localStorage.setItem('isLoggedInnn', 1);
    console.log('checkedddddddd')
    alert(`Login successfull, hi ${usernameAddress}`);
    window.location.href = './index.html';
 
  } else if (usernameAddress == '' && passwordAddress == '') {
    alert('Input field has no value');
      
     
    } else {
      wrongMsg.classList.replace("d-none", "d-block");
    }
  
};
var login = document.getElementById('toRegister');

function Hidinglabels() {
            var elements =
            document.getElementsByClassName('startCourse');
            for(var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = 'green';
                elements[i].innerHTML='Enroll Now';
                elements[i].addEventListener('click', function () {
                  window.location.href = 'forms/login.html';
            });
            }
        }


//if (localStorage.length == 0) {
if (localStorage.getItem("isLoggedInnn") == 0 ) 
{
  
Hidinglabels();
var b_button = document.getElementById('LOOPER');
var k_button = document.getElementById('wText');
var h_button = document.getElementById('crsList');
document.getElementById('logoutBtn').style.display="none";
if(document.getElementById('Greeting') != null){
  document.getElementById('Greeting').style.display="block"; }
if(document.getElementById('letsGo') != null){
  document.getElementById('letsGo').innerHTML="Keep GOING !!! You are the Best "+localStorage.getItem("username");
  document.getElementById('letsGo').style.display="none"}
//b_button.innerHTML = 'Logout';
//b_button.setAttribute('type', 'button');
// b_button.setAttribute('class', 'btn btn-primary');
//b_button.setAttribute('style', 'display : none');
// LogOut_button.style.display="block";
b_button.style.display= "block";
k_button.innerHTML="Welcome "+ localStorage.getItem("username")+" !"
k_button.style.display="none";
h_button.style.display="none";


} 
else if(localStorage.getItem("isLoggedInnn") == 1 ) {
    // hide btn login
    var b_button = document.getElementById('LOOPER');
    var k_button = document.getElementById('wText');
    var h_button = document.getElementById('crsList');
    document.getElementById('logoutBtn').style.display="block";
    if(document.getElementById('letsGo') != null){
      document.getElementById('letsGo').style.display="none"; }
    if(document.getElementById('Greeting') != null){
      document.getElementById('Greeting').innerHTML="Keep GOING !!! You are the Best "+localStorage.getItem("username");
      document.getElementById('Greeting').style.display="block"}
    //b_button.innerHTML = 'Logout';
    //b_button.setAttribute('type', 'button');
   // b_button.setAttribute('class', 'btn btn-primary');
    //b_button.setAttribute('style', 'display : none');
   // LogOut_button.style.display="block";
    b_button.style.display= "none";
    k_button.innerHTML="Welcome "+ localStorage.getItem("username")+" !"
    k_button.style.display="block";
    k_button.style.backgroundColor = "none;"
    k_button.style.Color = "#5FCF7F"
    h_button.style.display="block";

  
    // logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
      window.localStorage.clear();
      window.location.href='../../index.html';
    });

}
