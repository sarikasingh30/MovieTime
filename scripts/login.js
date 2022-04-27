document.querySelector("form").addEventListener("submit", logindetails);
var registered_users = JSON.parse(localStorage.getItem("arr"));
function logindetails(event) {
  event.preventDefault();
  var mail = document.getElementById("mail").value;
  var passlogin = document.getElementById("passl").value;
  // console.log(mail,passlogin);
  var c = 0;
  for (var i = 0; i < registered_users.length; i++) {
    if (
      registered_users[i].email === mail &&
      registered_users[i].pass === passlogin
    ) {
      alert("Login Successful");
      window.location.href = "index.html";
      c++;
    }
  }
  if (c == 0) {
    alert("May be You are a new User!!!!  Please SignUp First");
    window.location.href = "signup.html";
  }
}
