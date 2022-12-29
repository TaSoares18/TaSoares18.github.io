// Typewriter Loop on Top of page

var text = "Hello, I'm Thais Soares, a Software Engineer. Welcome to my page!";
var chars = text.split('');
var divTypewriter = document.getElementById("typewritertext");
var i = 0;

setInterval(function(){
    if(i < chars.length){divTypewriter.innerHTML += chars[i++]}
    else{
        i = 0;
        divTypewriter.innerHTML = "";
    }

}, 110);


