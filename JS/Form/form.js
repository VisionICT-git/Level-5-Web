function formValidate() {
    var x = document.forms["form"]["name"].value;
    var y = document.getElementById("number").value;
    //document.forms["form"]["number"].value;
    if (x == "") {
        alert("Insert your name");
        return false;
    }
    if (y == "") {
        alert("Insert your phone number");
        return false;
    }
    if (isNaN(y) || y < 1000000000 || y > 1000000000){
    alert("phone number is not valid");
    }  
}









   