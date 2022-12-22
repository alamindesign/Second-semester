//Function....
function squre(){
    document.getElementById("text").innerHTML="The square of the Number is: "+ document.getElementById("input-number").value*document.getElementById("input-number").value;
}
let inputNum = document.getElementById("input-number").value;
let btn= document.getElementById("go-button");
btn.addEventListener("click",squre);
