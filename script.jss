let score = 0;
const music = document.getElementById("bg-music");
const enemy = document.getElementById("enemy");
const scoreDisplay = document.getElementById("score");

// Music play karne ke liye first click/tap listener
document.body.addEventListener("click", () => {
    if (music.paused) {
        music.play().catch(e => console.log("Audio play blocked:", e));
    }
}, { once: true });

function tapAction() {
    score += 10;
    scoreDisplay.innerText = score;

    // Visual reaction on tap
    enemy.classList.add("hit");
    setTimeout(() => {
        enemy.classList.remove("hit");
    }, 150);

    // Funny changing emojis on hit
    const emojis = ["🥷", "🐒", "😜", "💥", "🔥"];
    enemy.innerText = emojis[Math.floor(Math.random() * emojis.length)];
}

