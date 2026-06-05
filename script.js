// Typing Animation

const words = [
  "Frontend Developer",
  "Creative Writer",
  "Public Speaker",
  "Visual Effects Creator"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

  currentWord = words[wordIndex];

  if(isDeleting){
    typing.textContent = currentWord.substring(0, charIndex--);
  } else {
    typing.textContent = currentWord.substring(0, charIndex++);
  }

  if(!isDeleting && charIndex === currentWord.length){

    isDeleting = true;

    setTimeout(typeEffect, 1000);
    return;
  }

  if(isDeleting && charIndex === 0){

    isDeleting = false;

    wordIndex++;

    if(wordIndex === words.length){
      wordIndex = 0;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// Button Message

function showMessage(){

  alert("Thanks for visiting my portfolio!");
}


// Scroll Animation

const cards = document.querySelectorAll(".card, .project-card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s";

});
