
let value;
function DisplayCountries(value){

    localStorage.setItem("country" , value);
}

document.addEventListener("DOMContentLoaded", function(){

    var inputval = localStorage.getItem("country");

    var result1 = document.getElementById("result1");
    
    result1.innerHTML = "Showing Results for Graphic Designers in "+ inputval + " ";
    
});







