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

/* ==========================================
   MODULE 2
   PREMIUM HERO
========================================== */

/* TYPEWRITER */

const heroTitle = document.getElementById("heroTitle");

const heroSubtitle = document.getElementById("heroSubtitle");

const heroText = document.getElementById("heroText");

const titleText = "Abdulhodiy ❤️ Robiya Bibi";

const subtitleText = "∞ Forever With You ∞";

const paragraphText = "Bizning hikoyamiz boshlangan sana...";

function typeWriter(element,text,speed){

    element.innerHTML="";

    let i=0;

    function typing(){

        if(i<text.length){

            element.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,speed);

        }

    }

    typing();

}

/* START TYPEWRITER */

setTimeout(()=>{

    typeWriter(heroTitle,titleText,90);

},1300);

setTimeout(()=>{

    typeWriter(heroSubtitle,subtitleText,60);

},4200);

setTimeout(()=>{

    typeWriter(heroText,paragraphText,45);

},6500);

/* ==========================================
   STARS
========================================== */

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}

/* ==========================================
   PARTICLES
========================================== */

const particles=document.getElementById("particles");

setInterval(()=>{

    const particle=document.createElement("div");

    particle.className="particle";

    particle.innerHTML="❤️";

    particle.style.left=Math.random()*100+"vw";

    particle.style.fontSize=(10+Math.random()*22)+"px";

    particles.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },8000);

},450);

/* ==========================================
   HERO HEART
========================================== */

const heroHeart=document.querySelector(".hero-heart");

setInterval(()=>{

    heroHeart.style.transform="scale(1.25)";

    setTimeout(()=>{

        heroHeart.style.transform="scale(1)";

    },350);

},1400);

console.log("MODULE 2 LOADED ❤️");
