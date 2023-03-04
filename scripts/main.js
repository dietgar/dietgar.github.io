const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/diet.jpg") {
        myImage.setAttribute("src", "images/paisaje.jpg");
    } else {
        myImage.setAttribute("src", "images/diet.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
    const myName = prompt("Please, enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = 'El mero ' + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.innerHTML = 'El mero ' + storedName; 
}

myButton.onclick = function() {
    setUserName();
}