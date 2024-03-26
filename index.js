function data(){
  let name = document.getElementById("name").value;
  let uName = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let password = document.getElementById("password").value;
  let conformPassword = document.getElementById("cPassword").value;
  // let gender = document.getElementById("gender").value;

  if(name=="" || uName=="" || email=="" || number=="" || password=="" || conformPassword==""){
    alert("All Fields are mendatory");
    return false;
  }
  else if(number.length < 10 || number.length > 10){
    alert("Number should of be 10 Digits ! Please enter valid Number");
    return false;
  }
  else if(isNaN (number)){
    alert("Only numbers are allowed ! Please enter valid Number");
    return false;
  }
  else if(isNaN (number)){
    alert("Only numbers are allowed ! Please enter valid Number");
    return false;
  }
  else if(password != conformPassword){
    alert("Please Enter same password");
    return false;
  }else{
    true;
  }
}
