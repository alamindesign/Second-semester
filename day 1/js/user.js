function userPass(user,pass){
    document.write("User: "+user);
    document.write("<br/>Password: "+pass);
}
let userName = prompt("Enter User name: ");
let passWord = prompt("Enter password: ");
userPass(userName,passWord);
//IIFE(Immediately Invokeable Function Expressions)
(function show(){
    document.write("<br/>Hello, world");
})();