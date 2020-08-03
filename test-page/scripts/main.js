document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!')
}

let myImage = document.querySelector('img'); 
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/full-stacker.jpg') {
        myImage.setAttribute('src','images/full-stacker2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/full-stacker.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Full-Stacker is Cool,'+ myName +'.';
    } 
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Full-Stacker is Cool,' + storedName + '.';
}
myButton.onclick = function() {
    setUserName();
}