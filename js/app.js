let bg = document.getElementById('bg');
let left_image = document.getElementById('img-left');
// let right_image = document.getElementById('img-right');
// let floor = document.getElementById('floor');
let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    const value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';

    left_image.style.left = -value * 0.15 + 'px';

    // right_image.style.top = value * 0.15 + 'px';

    // floor.style.top = value * 0.15 + 'px';

    text.style.top = value * 1 + 'px';

});

// toggle the nav menu
{ /* <script type="text/javascript "> */ }
// add sticky to the active class
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// toggle the menu open and close
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navi');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
// =========================================================================
// build a dynamic form
var f = document.createElement("form");
f.setAttribute('method', "post");
//  f.setAttribute('action', "submit.php"); // for production
f.setAttribute('action', "message");


// create field for surname
var sname = document.createElement("input");
sname.setAttribute('type', "text");
sname.setAttribute('name', "surname");
sname.setAttribute('placeholder', "Enter family name");

// create field for first name
var fname = document.createElement("input"); //input element, text
fname.setAttribute('type', "text");
fname.setAttribute('name', "username");
fname.setAttribute('placeholder', "Enter first name");

// create field for email
var em = document.createElement("input"); //input element, text
em.setAttribute('type', "email");
em.setAttribute('name', "email");
em.setAttribute('placeholder', "Enter your email id");

//create a textarea field for the message
var txtMsg = document.createElement("textarea"); //input element, text

// txtMsg.setAttribute('type', "text");
txtMsg.setAttribute('name', "get-quotation");
txtMsg.setAttribute('id', "quotation");
// may set the row/cols here or append to f later (see below)
// txtMsg.setAttribute('rows', "10");
// txtMsg.setAttribute('cols', "30");
txtMsg.setAttribute('placeholder', "Enter Item No. and message");

var div = document.createElement('div');
div.setAttribute('class', "btn")

var sendBtn = document.createElement('input');
sendBtn.setAttribute('type', "button");
sendBtn.setAttribute('class', "send");
sendBtn.setAttribute('id', "send");

// s.setAttribute('type', "submit");//button can use type submit
sendBtn.setAttribute('value', "Send");
sendBtn.setAttribute('onclick', "sendMessage();");


const cancelBtn = document.createElement('input');
cancelBtn.setAttribute('type', "button");
cancelBtn.setAttribute('value', "X Cancel");
cancelBtn.setAttribute('id', "btn_cancel");


div.appendChild(sendBtn);
div.appendChild(cancelBtn);


//var s = document.createElement("input"); //input element, Submit button
// s.setAttribute('type', "submit");
// s.setAttribute('value', "Submit");

f.appendChild(fname);
f.appendChild(sname);
f.appendChild(em);
f.appendChild(txtMsg).cols = "30";
f.appendChild(txtMsg).rows = "10";

f.appendChild(div);
//f.appendChild(s);

//and dont forget to add a submit button
document.getElementById('msg').append(f);

// ==========================================================================



// <!-- handle toggle form -->
// get the ids
const email = document.querySelector('.email');
const message = document.querySelector('.message');
// const requestPrices = document.querySelectorAll(".request-price");


const cancel = document.getElementById("btn_cancel");

//To Do : May need to use querySelectorAll for email and loop thru it
// add listeners
email.addEventListener('click', sendMessage);

// select all the btns with request-price class, add listener
const requestPrices = document.querySelectorAll(".request-price");
for (let i = 0; i < requestPrices.length; i++) {
    if (i !== "active") {
        requestPrices[i].addEventListener('click', sendMessage);
    } else {
        requestPrices[i].addEventListener('click', cancelForm);

    }
}

// make class active to show the form
function sendMessage() {
    message.classList.add("active");
    email.classList.add("active");
    // requestPrices[i].classList.add("active");
}
cancel.addEventListener('click', cancelForm);
// func to remove active state so the form will hide
function cancelForm() {
    message.classList.remove('active');
    email.classList.remove('active');
    // requestPrices[i].remove('active');

    // close the form after dragging
    message.style.left = null;
    message.style.top = null;
}
// End form handle

// build a dynamic form