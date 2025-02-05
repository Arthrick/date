const messages = [
    "Estas segura?",
    "De verdad estas segura?",
    "Que tan segura estas?",
    "Piensalo un poco...",
    "De verdad deberías pensarlo más!",
    "Si dices que no, me pondré muy triste... :C",
    "Estaré muy triste :'c",
    "Enserio,ya dime que SI! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "Sabia_que_dirias_que_Si!.html";
}