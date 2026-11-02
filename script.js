/* ===================================
   MUSIC
=================================== */

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {

    bgMusic.play();

    musicBtn.innerHTML =
    "❤️ Music Playing";

});


/* ===================================
   LOVE LETTER TYPING EFFECT
=================================== */

const typingTarget =
document.getElementById(
"typing-message"
);

if(typingTarget){

const loveMessage =

`Every day with you feels like a page from a beautiful story.

You make ordinary moments feel magical.

Thank you for every laugh, every memory, and every adventure.

No matter where life takes us, you'll always be my favorite person,
my favorite memory,
and my favorite chapter.

❤️ Love,
Jay`;

let letterIndex = 0;

function typeLetter(){

    if(letterIndex < loveMessage.length){

        typingTarget.innerHTML +=
        loveMessage.charAt(letterIndex);

        letterIndex++;

        setTimeout(
            typeLetter,
            40
        );

    }

}

typeLetter();

}


/* ===================================
   PHOTO GALLERY
=================================== */

/*
ADD YOUR PHOTOS HERE
*/

const photos = [

"photos/photo1.jpg",
"photos/photo2.jpg",
"photos/photo3.jpg",
"photos/photo4.jpg",
"photos/photo5.jpg"

];

/*
ADD YOUR VIDEOS HERE
*/

const videos = [

"videos/video1.mp4",
"videos/video2.mp4"

];

const gallery =
document.getElementById(
"gallery"
);

/* LOAD PHOTOS */

photos.forEach(photo => {

    const card =
    document.createElement("div");

    card.classList.add(
    "memory-card"
    );

    card.innerHTML = `
        <img
        src="${photo}"
        alt="Memory">

        <div class="caption">

            ❤️ Beautiful Memory ❤️

        </div>
    `;

    card.addEventListener(
    "click",
    () => openLightbox(photo)
    );

    gallery.appendChild(card);

});


/* LOAD VIDEOS */

videos.forEach(video => {

    const card =
    document.createElement("div");

    card.classList.add(
    "memory-card"
    );

    card.innerHTML = `
        <video
        autoplay
        muted
        loop
        playsinline>

            <source
            src="${video}"
            type="video/mp4">

        </video>

        <div class="caption">

            🎥 Precious Memory

        </div>
    `;

    gallery.appendChild(card);

});


/* ===================================
   LIGHTBOX
=================================== */

const lightbox =
document.getElementById(
"lightbox"
);

const lightboxImg =
document.getElementById(
"lightboxImg"
);

const closeBtn =
document.getElementById(
"closeLightbox"
);

function openLightbox(src){

    lightbox.style.display =
    "flex";

    lightboxImg.src =
    src;

    createHeartBurst();

}

if(closeBtn){

closeBtn.addEventListener(
"click",
() => {

    lightbox.style.display =
    "none";

});

}

if(lightbox){

lightbox.addEventListener(
"click",
e => {

    if(e.target === lightbox){

        lightbox.style.display =
        "none";

    }

});

}


/* ===================================
   SCROLL REVEAL
=================================== */

const revealElements =
document.querySelectorAll(
".reveal"
);

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
            "active"
            );

        }

    });

},

{
    threshold:0.1
}

);

revealElements.forEach(el=>{

    observer.observe(el);

});


/* ===================================
   FALLING LEAVES
=================================== */

function createLeaf(){

    const leaf =
    document.createElement(
    "div"
    );

    leaf.className =
    "leaf";

    leaf.innerHTML =
    "🍂";

    leaf.style.left =
    Math.random()*100
    + "vw";

    leaf.style.animationDuration =
    (
    5 +
    Math.random()*8
    ) + "s";

    document.body.appendChild(
    leaf
    );

    setTimeout(()=>{

        leaf.remove();

    },15000);

}

setInterval(
createLeaf,
400
);


/* ===================================
   FIREFLIES
=================================== */

for(let i=0;i<40;i++){

    const firefly =
    document.createElement(
    "div"
    );

    firefly.className =
    "firefly";

    firefly.style.left =
    Math.random()*100
    + "vw";

    firefly.style.top =
    Math.random()*100
    + "vh";

    firefly.style.animationDelay =
    Math.random()*5
    + "s";

    document.body.appendChild(
    firefly
    );

}


/* ===================================
   FLOATING HEARTS
=================================== */

function createHeart(){

    const heart =
    document.createElement(
    "div"
    );

    heart.className =
    "floating-heart";

    heart.innerHTML =
    "❤️";

    heart.style.left =
    Math.random()*100 +
    "vw";

    document.body.appendChild(
    heart
    );

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(
createHeart,
1800
);


/* ===================================
   HEART BURST
=================================== */

function createHeartBurst(){

    for(let i=0;i<15;i++){

        const heart =
        document.createElement(
        "div"
        );

        heart.className =
        "floating-heart";

        heart.innerHTML =
        "❤️";

        heart.style.left =
        (
        window.innerWidth/2
        +
        (Math.random()*200-100)
        )
        + "px";

        heart.style.bottom =
        "30vh";

        document.body.appendChild(
        heart
        );

        setTimeout(()=>{

            heart.remove();

        },4000);

    }

}


/* ===================================
   AUTO SCROLL TITLE GLOW
=================================== */

window.addEventListener(
"scroll",
()=>{

    const hero =
    document.querySelector(
    ".hero-card h1"
    );

    if(!hero) return;

    const scroll =
    window.scrollY;

    hero.style.textShadow =
    `
    0 0 ${
    20 + scroll/25
    }px pink
    `;

});


/* ===================================
   ROMANTIC QUOTES ROTATOR
=================================== */

const quotes = [

"❤️ Every memory is better because of you.",

"❤️ My favorite place is beside you.",

"❤️ You make ordinary days extraordinary.",

"❤️ You are my favorite chapter.",

"❤️ In every lifetime, I would still choose you.",

"❤️ Forever begins with us."

];

let quoteIndex = 0;

const quoteContainer =
document.createElement("div");

quoteContainer.style.position =
"fixed";

quoteContainer.style.bottom =
"25px";

quoteContainer.style.left =
"50%";

quoteContainer.style.transform =
"translateX(-50%)";

quoteContainer.style.padding =
"12px 25px";

quoteContainer.style.borderRadius =
"50px";

quoteContainer.style.backdropFilter =
"blur(20px)";

quoteContainer.style.background =
"rgba(255,255,255,.08)";

quoteContainer.style.color =
"white";

quoteContainer.style.zIndex =
"9999";

document.body.appendChild(
quoteContainer
);

function changeQuote(){

    quoteContainer.innerHTML =
    quotes[quoteIndex];

    quoteIndex++;

    if(
    quoteIndex >=
    quotes.length
    ){

        quoteIndex = 0;

    }

}

changeQuote();

setInterval(
changeQuote,
5000
);
