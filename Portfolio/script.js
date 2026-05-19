const text = document.querySelector(".typing-text");

const words = [
    "Python Developer",
    "Web Developer",
    "AI & ML Enthusiast",
    "Frontend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

    currentWord = words[wordIndex];

    if(!isDeleting){

        text.textContent =
        currentWord.substring(0, charIndex++);

    }
    else{

        text.textContent =
        currentWord.substring(0, charIndex--);

    }

    if(charIndex === currentWord.length + 1){

        isDeleting = true;

        setTimeout(typeEffect,1000);

        return;
    }

    if(charIndex === 0){

        isDeleting = false;

        wordIndex =
        (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect,
    isDeleting ? 50 : 120);

}

typeEffect();