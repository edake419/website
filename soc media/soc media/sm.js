// Initialize Firebase
var config = {
    apiKey: "AIzaSyDhGyE2ZC9RoTuI82GqGjv6I3sYUQUcYbg",
    authDomain: "pushsiite.firebaseapp.com",
    databaseURL: "https://pushsiite.firebaseio.com",
    projectId: "pushsiite",
    storageBucket: "pushsiite.appspot.com",
    messagingSenderId: "806000169892"
  };
  firebase.initializeApp(config);

  //Listen to logIN
  document.getElementById('logInform').addEventListener('submit', confirmlogIn);

function confirmlogIn(e) {
    e.preventDefault();

    var userEmail = document.getElementById("email");
    var userPass = document.getElementById("pwd");
    // console.log(userEmail.value);
    if (userEmail == "") {
        alert("Every box must be filled");
        userEmail.focus();
        userEmail.style.border = "solid 3px red";
        return false;
    }
    if (userPass.value == "" || userPass.value.length < 5 || userPass.value.length > 20) {
        alert("Every box must be filled");
        userPass.focus();
        userPass.style.border = "solid 3px red";
        return false;
    } //else {
    //     return true;
    // }

    document.getElementById('logInform').reset();
}


  //Reference form collection
  var formsRef=firebase.database().ref('forms');
//Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    

    //Get values
var fname=getInputVal('fname');
var lname=getInputVal('lname');
var email=getInputVal('new_email');
var password=getInputVal('new_password');
//Form validation
if (fname == "" || !isNaN(fname) || fname.length > 15) {
        alert("Every box must be filled");
        document.getElementById("fnameid").innerHTML = "*Please fill the first name box with at most 15 letters ";
        // fname.focus();
        // fname.style.border = "solid 3px red";
        return false;
    }

    if (lname== "" || !isNaN(lname.value) || lname.length > 15) {
        alert("Every box must be filled");
        document.getElementById("lnameid").innerHTML = "*Please fill the last name box with at most 15 letters";
        // lname.focus();
        // lname.style.border = "solid 3px red";
        return false;
    }
    if (email == "") {
        alert("Every box must be filled");
        document.getElementById("new_emailid").innerHTML = "*Please fill email box";
        // email.focus();
        // email.style.border = "solid 3px red";
        return false;
    }
    if (password == "" || password < 5 || password.length > 20) {
        alert("Every box must be filled");
        document.getElementById("new_passwordid").innerHTML = "*Please fill password box with 5 and 20 charcters";
        // password.focus();
        // password.style.border = "solid 3px red";
        return false;
    }
    swal("Great!","You have completed your registration.Welcome!!!","success");
//Save Form
saveForm(fname,lname,email,password)
document.getElementById('contactForm').reset();
}


//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save form to database
function saveForm(fname,lname,email,password){
var newFormRef=formsRef.push();
newFormRef.set({
    Firstname:fname,
    Lastname:lname,
    Email:email,
    Password:password
});
}