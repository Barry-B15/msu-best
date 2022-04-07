// *** I have moved this codes to app.js to work better with earlier codes ***

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
// s.setAttribute('type', "submit");//button can use type submit
sendBtn.setAttribute('value', "Send");
sendBtn.setAttribute('onclick', "closeMessage();");


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