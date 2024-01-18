const buttonEl = document.querySelector(".btn");
const headingEl = document.querySelector(".heading");
const body = document.body;

let booleanValue = true;

function dayNigth() {
  if (booleanValue) {
    body.style.backgroundImage = `url("https://images.unsplash.com/photo-1672289707168-224994bcc83e?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`;
    booleanValue = false;
  } else {
    body.style.backgroundImage = `url("https://images.unsplash.com/photo-1535073939419-6abdbd400f1e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`;
    booleanValue = true;
  }
}

buttonEl.addEventListener("click", dayNigth);
