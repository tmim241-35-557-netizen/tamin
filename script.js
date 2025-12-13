
const text = document.querySelector(".type-effect");
const words = ["Buy", "Sell"];
let i = 0;
let count = 0;

function typingEffect() {
    if (count < words.length) {
        let currentWord = words[count];
        let letter = currentWord.slice(0, ++i);
        text.textContent = letter;

        if (letter.length === currentWord.length) {
            count++;
            i = 0;
            if (count === 2) return; 
            setTimeout(typingEffect, 800);
        } else {
            setTimeout(typingEffect, 100);
        }
    }
}

typingEffect();
