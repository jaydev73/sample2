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

const button = document.getElementById("my-id");
button.addEventListener("click", doSomething)