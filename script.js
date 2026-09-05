let score = 0;
let lives = 3;
const music = document.getElementById("bg-music");
const enemy = document.getElementById("enemy");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const effectText = document.getElementById("effect-text");
const container = document.getElementById("game-container");

// Play music on first click anywhere
document.body.addEventListener("click", () => {
    if (music.paused) {
        music.play().catch(e => console.log("Audio play blocked:", e));
    }
}, { once: true });

function tapAction() {
    score += 15;
    scoreDisplay.innerText = score;

    // Visual reaction
    enemy.classList.add("hit");
    container.classList.add("shake");
    
    setTimeout(() => {
        enemy.classList.remove("hit");
        container.classList.remove("shake");
    }, 150);

    // Funny elements & floating text
    const actions = ["DHAMAKA! 💥", "CHAPPAL SHOT! 🩴", "FATAFAT! 🔥", "BAM! 🎯", "BASS DROP! 🔊"];
    const emojis = ["🥷", "🐒", "😜", "🤖", "😎", "👾"];
    
    effectText.innerText = actions[Math.floor(Math.random() * actions.length)];
    effectText.classList.add("show");
    
    setTimeout(() => {
        effectText.classList.remove("show");
    }, 400);

    enemy.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    // Level up speed / difficulty message at certain scores
    if (score === 150) {
        alert("Level Up! Tapori mode activated! 🚀");
    }
}
