document.querySelector("form").addEventListener('submit',formSubmit);
var arr=JSON.parse(localStorage.getItem(arr))||[];
function formSubmit(event){
    event.preventDefault()
    var name=document.getElementById("name").value;
    var contact=document.getElementById("contact_no").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;

    var userData={
        'name':name,
        'contact':contact,
        'email':email,
        'pass':pass
    };
    arr.push(userData);
    localStorage.setItem("arr",JSON.stringify(arr));
    alert("Signup Success");
    window.location.href="login.html";
}