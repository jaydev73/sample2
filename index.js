const msg  = "Sign up to receive our  newsletter for 10% off!";
function updateMessage() {
    const el = document.getElementById("message");
    el.textContent = msg
}
updateMessage()

const el = document.getElementById("one")
el.className = "cool"

let  elList, addLink, newEl, newText, counter, listItems;
elList = document.getElementById('list')
function doSomething() {
    alert("I was clicked")
}

// const button = document.getElementById("my-id");
// button.addEventListener("click", doSomething)



var today = new Date();
var hournow = today.getHours();
var  greeting;

if(hournow > 18){
    greeting = "Good Evening";
}else if (hournow > 12) {
    greeting = "Good Afternoon";
}else if (hournow > 0) {
    greeting = "Good Morning";
}else {
    greeting =  "Welcome";
}
document.write('<h3>' + greeting + '</h3>')
