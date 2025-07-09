const texts = [
    "Youssef Rouatbi",
    "Bac Info Student 💻",
    "Computer Science Student"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const delay = 1500;
const element = document.getElementById("typewriter");

function type() {
    const current = texts[index];
    if (isDeleting) {
        charIndex--;
        element.textContent = current.substring(0, charIndex);
    } else {
        charIndex++;
        element.textContent = current.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, delay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? speed / 2 : speed);
    }
}

type();

const canvas = document.getElementById("code-bg");
const ctx = canvas.getContext("2d");

let width, height;
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const fontSize = 18;
const columns = Math.floor(width / fontSize);
const drops = [];
const binaryChars = ['0', '1','ｱ', 'ﾐ', 'ﾇ', 'ﾍ', 'ｳ', 'ｼ', 'ﾅ'];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * height / fontSize;
}

function draw() {
    // Background: very dark purple translucent for trail effect
    ctx.fillStyle = "rgba(20, 0, 40, 0.15)";
    ctx.fillRect(0, 0, width, height);

    // Binary digits color: bright magenta
    ctx.fillStyle = "#ff00ff";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < columns; i++) {
        const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.98) {
            drops[i] = 0;
        }
        drops[i] += 1.2;
    }
}

setInterval(draw, 33);
