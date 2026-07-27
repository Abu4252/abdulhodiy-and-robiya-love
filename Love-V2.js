/*=========================================
    Abdulhodiy ❤️ Robiya Bibi V2
    script.js
=========================================*/

/*=========================================
ELEMENTS
=========================================*/

const intro = document.getElementById("intro");

const website = document.getElementById("website");

const startBtn = document.getElementById("startBtn");

const music = document.getElementById("bgMusic");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const success = document.getElementById("success");

/*=========================================
AOS REFRESH
=========================================*/

window.addEventListener("load", () => {

    if (typeof AOS !== "undefined") {

        AOS.refresh();

    }

});

/*=========================================
START WEBSITE
=========================================*/

startBtn.addEventListener("click", async () => {

    try {

        music.volume = 0.5;

        await music.play();

    } catch (err) {

        console.log("Music autoplay blocked:", err);

    }

    intro.classList.add("fade-out");

    setTimeout(() => {

        intro.style.display = "none";

        website.classList.remove("hidden");

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }, 800);

});

/*=========================================
LOVE COUNTER
=========================================*/

const days = document.getElementById("days");

const hours = document.getElementById("hours");

const minutes = document.getElementById("minutes");

const seconds = document.getElementById("seconds");

/*
03.03.2026
Oy JavaScript'da 0 dan boshlanadi.
Mart = 2
*/

const loveDate = new Date(2026, 2, 3, 0, 0, 0);

function updateLoveCounter() {

    const now = new Date();

    let diff = now - loveDate;

    /*
    Agar sana hali kelmagan bo'lsa,
    countdown qiladi.
    Kelgandan keyin esa o'tgan vaqtni ko'rsatadi.
    */

    if (diff < 0) {

        diff = Math.abs(diff);

    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));

    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const m = Math.floor((diff / (1000 * 60)) % 60);

    const s = Math.floor((diff / 1000) % 60);

    days.textContent = d;

    hours.textContent = h.toString().padStart(2, "0");

    minutes.textContent = m.toString().padStart(2, "0");

    seconds.textContent = s.toString().padStart(2, "0");

}

updateLoveCounter();

setInterval(updateLoveCounter, 1000);

/*=========================================
FLOATING HEARTS
=========================================*/

const heartsContainer = document.getElementById("hearts");

function createHeart(x = null, y = null) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    if (x === null) {

        heart.style.left = Math.random() * window.innerWidth + "px";

    } else {

        heart.style.left = x + "px";

    }

    if (y === null) {

        heart.style.top = "100vh";

    } else {

        heart.style.top = y + "px";

    }

    heart.style.fontSize = (16 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

/* Har 800 ms da yangi yurak */

setInterval(() => {

    createHeart();

}, 800);

/* Telefon va kompyuter uchun */

document.addEventListener("pointerdown", (e) => {

    createHeart(e.clientX, e.clientY);

});

/*=========================================
PROPOSAL BUTTONS
=========================================*/

if (noBtn) {

    function moveNoButton() {

        const maxX = window.innerWidth - noBtn.offsetWidth - 20;

        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        const randomX = Math.random() * maxX;

        const randomY = Math.random() * maxY;

        noBtn.style.position = "fixed";

        noBtn.style.left = randomX + "px";

        noBtn.style.top = randomY + "px";

        noBtn.style.zIndex = "9999";

    }

    noBtn.addEventListener("mouseenter", moveNoButton);

    noBtn.addEventListener("touchstart", (e) => {

        e.preventDefault();

        moveNoButton();

    });

}

if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        if (success) {

            success.classList.remove("hidden");

            success.scrollIntoView({

                behavior: "smooth"

            });

        }

        for (let i = 0; i < 40; i++) {

            setTimeout(() => {

                createHeart(

                    Math.random() * window.innerWidth,

                    window.innerHeight

                );

            }, i * 80);

        }

    });

}

/*=========================================
TYPEWRITER EFFECT
=========================================*/

const typingText = document.getElementById("typingText");

if (typingText) {

    const originalText = typingText.innerHTML
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/\s+/g, " ")
        .trim();

    typingText.innerHTML = "";

    let index = 0;

    function typeWriter() {

        if (index < originalText.length) {

            const char = originalText.charAt(index);

            if (char === "\n") {

                typingText.innerHTML += "<br><br>";

            } else {

                typingText.innerHTML += char;

            }

            index++;

            setTimeout(typeWriter, 40);

        }

    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && index === 0) {

                typeWriter();

            }

        });

    }, {

        threshold: 0.4

    });

    observer.observe(typingText);

}

/*=========================================
SMOOTH SECTION ANIMATION
=========================================*/

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

});

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.transition =
                "all .9s ease";

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    sectionObserver.observe(section);

});

/*=========================================
    FINAL FUNCTIONS
=========================================*/

/* Page fully loaded */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* Resize */

window.addEventListener("resize", () => {

    if (typeof AOS !== "undefined") {

        AOS.refresh();

    }

});

/* Keyboard shortcut */

document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {

        if (music.paused) {

            music.play().catch(() => {});

        } else {

            music.pause();

        }

    }

});

/* Music Fade In */

async function fadeMusic() {

    try {

        music.volume = 0;

        await music.play();

        let volume = 0;

        const fade = setInterval(() => {

            volume += 0.05;

            if (volume >= 0.5) {

                volume = 0.5;

                clearInterval(fade);

            }

            music.volume = volume;

        }, 200);

    } catch (err) {

        console.log(err);

    }

}

/* Agar intro hali ochiq bo'lsa */

if (startBtn) {

    startBtn.addEventListener("click", () => {

        fadeMusic();

    });

}

/* Console Message */

console.log("%c❤️ Abdulhodiy ❤️ Robiya Bibi ❤️",
"color:#ff4d88;font-size:22px;font-weight:bold;");

console.log("%cForever With You ❤️",
"color:white;font-size:16px;");
