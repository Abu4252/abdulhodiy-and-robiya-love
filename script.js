/* ==========================================
   ABDULHODIY ❤️ ROBIYA BIBI
   MODULE 1
========================================== */

const introScreen = document.getElementById("introScreen");

const website = document.getElementById("website");

const startButton = document.getElementById("startButton");

const bgMusic = document.getElementById("bgMusic");

/* ==========================================
   START
========================================== */

startButton.addEventListener("click", () => {

    bgMusic.volume = 0.35;

    bgMusic.play();

    introScreen.style.opacity = "0";

    introScreen.style.transition = "1s";

    setTimeout(() => {

        introScreen.style.display = "none";

        website.style.display = "block";

        website.style.animation = "fadeIn 1.2s";

        document.body.style.overflowY = "auto";

    },1000);

});

/* ==========================================
   FADE
========================================== */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fadeIn{

from{

opacity:0;

transform:translateY(30px);

}

to{

opacity:1;

transform:translateY(0);

}

}

`;

document.head.appendChild(style);

/* ==========================================
   HEART CURSOR
========================================== */

document.addEventListener("mousemove",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.pointerEvents="none";

    heart.style.fontSize="14px";

    heart.style.opacity="1";

    heart.style.transition="1s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-40px)";

        heart.style.opacity="0";

    },20);

    setTimeout(()=>{

        heart.remove();

    },1000);

});

/* ==========================================
   CLICK HEART
========================================== */

document.addEventListener("click",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.fontSize="35px";

    heart.style.pointerEvents="none";

    heart.style.transition="1.5s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="scale(2) translateY(-60px)";

        heart.style.opacity="0";

    },20);

    setTimeout(()=>{

        heart.remove();

    },1500);

});

console.log("❤️ Forever With You ❤️");
