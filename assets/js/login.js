var login = document.getElementById('login');


//document.onload= localStorage.setItem('isLoggedInnn', "false");

login.onclick = (e) => {
 
  e.preventDefault();

  var usernameAddress = document.getElementById('username').value;
  var passwordAddress = document.getElementById('password').value;
  //document.onload= localStorage.setItem('isLoggedInnn', false);
  var getUser = localStorage.getItem('Username');
  var getPass = localStorage.getItem('Password');

  if (usernameAddress == '' && passwordAddress == '') {
    alert('Input field has no value');
  } else {
    if (usernameAddress == getUser && passwordAddress == getPass) {
      alert(`Login successfull, hi ${usernameAddress}`);
      localStorage.setItem('isLoggedInnn', "true");
      //window.location.href = './index.html';
      
     
    } else {
      alert('Something is wrong');
    }
  }
};
var login = document.getElementById('toRegister');



if (localStorage.length == 0) {
  
function black() {
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
black();

  } else {
    // hide btn login
    var b_button = document.getElementById('LOOPER');
    var k_button = document.getElementById('wText');
    var h_button = document.getElementById('crsList');
    document.getElementById('logoutBtn').style.display="block";
    if(document.getElementById('letsGo') != null){
      document.getElementById('letsGo').style.display="none"; }
    if(document.getElementById('ShiiT') != null){
      document.getElementById('ShiiT').innerHTML="Keep GOING !!! You are the Best "+localStorage.getItem("username");
      document.getElementById('ShiiT').style.display="block"}
    //b_button.innerHTML = 'Logout';
    //b_button.setAttribute('type', 'button');
   // b_button.setAttribute('class', 'btn btn-primary');
    //b_button.setAttribute('style', 'display : none');
   // LogOut_button.style.display="block";
    b_button.style.display= "none";
    k_button.innerHTML="Welcome "+ localStorage.getItem("username")+" !"
    k_button.style.display="block";
    h_button.style.display="block";

  
    // logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
      window.localStorage.clear();
      window.location.href='../../index.html';
    });















}
