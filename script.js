/* ==========================================
   LOADER
========================================== */

document.body.classList.add(
"loading"
);

window.addEventListener(
"load",
()=>{

const loader =
document.getElementById(
"loader"
);

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

document.body.classList.remove(
"loading"
);

},1000);

},3000);

});
/* ==========================================
   MUSIC PLAYER
========================================== */

const musicBtn =
document.getElementById(
    "musicBtn"
);

const bgMusic =
document.getElementById(
    "bgMusic"
);

musicBtn.addEventListener(
    "click",
    async () => {

        if (bgMusic.paused) {

            try {

                await bgMusic.play();

                musicBtn.innerHTML =
                "♫ Pause Music";

            } catch (error) {

                console.error(
                    error
                );

            }

        } else {

            bgMusic.pause();

            musicBtn.innerHTML =
            "♫ Play Music";

        }

    }
);


/* ==========================================
   MEMORY DATABASE
========================================== */

/*
EDIT ONLY THIS SECTION
ADD YOUR PHOTOS / VIDEOS HERE
*/

const memories = [

{
type:"image",
file:"photos/Photo1.jpeg",
title:"Memory 01",
text:"A special moment together."
},

{
type:"image",
file:"photos/Photo2.jpeg",
title:"Memory 02",
text:"A beautiful chapter."
},

{
type:"image",
file:"photos/Photo3.png",
title:"Memory 03",
text:"One of our favorite memories."
},

{
type:"image",
file:"photos/Photo4.jpeg",
title:"Memory 04",
text:"Captured forever."
},

{
type:"image",
file:"photos/Photo5.jpeg",
title:"Memory 05",
text:"A moment worth remembering."
},

{
type:"image",
file:"photos/photo6.jpeg",
title:"Memory 06",
text:"Another unforgettable day."
},

{
type:"image",
file:"photos/photo7.jpeg",
title:"Memory 07",
text:"A memory filled with happiness."
},

{
type:"image",
file:"photos/Photo8.jpeg",
title:"Memory 08",
text:"A beautiful adventure."
},

{
type:"image",
file:"photos/Photo9.jpeg",
title:"Memory 09",
text:"A treasured moment."
},

{
type:"image",
file:"photos/photo10.jpeg",
title:"Memory 10",
text:"One of our favorites."
},

{
type:"image",
file:"photos/Photo11.jpeg",
title:"Memory 11",
text:"A wonderful chapter."
},

{
type:"image",
file:"photos/Photo12.jpeg",
title:"Memory 12",
text:"A memory frozen in time."
},

{
type:"video",
file:"videos/vid1.mp4",
title:"Video 01",
text:"A moving memory."
},

{
type:"video",
file:"videos/vid2.mp4",
title:"Video 02",
text:"Captured forever."
},

{
type:"video",
file:"videos/vid3.mp4",
title:"Video 03",
text:"A favorite moment."
},

{
type:"video",
file:"videos/vid4.mp4",
title:"Video 04",
text:"A journey worth revisiting."
},

{
type:"video",
file:"videos/vid5.mp4",
title:"Video 05",
text:"A beautiful chapter."
},

{
type:"video",
file:"videos/vid6.mp4",
title:"Video 06",
text:"A wonderful memory."
},

{
type:"video",
file:"videos/vid7.mp4",
title:"Video 07",
text:"A treasured adventure."
},

{
type:"video",
file:"videos/vid8.mp4",
title:"Video 08",
text:"A moment captured in motion."
},

{
type:"video",
file:"videos/vid9.mp4",
title:"Video 09",
text:"A day worth reliving."
},

{
type:"video",
file:"videos/vid10.mp4",
title:"Video 10",
text:"Another favorite memory."
},

{
type:"video",
file:"videos/vid11.mp4",
title:"Video 11",
text:"A story still being written."
}

];

/* ==========================================
   COUNTERS
========================================== */

const photos =
memories.filter(
m => m.type === "image"
);

const videos =
memories.filter(
m => m.type === "video"
);

function animateCounter(
id,
target
){

    const el =
    document.getElementById(id);

    let value = 0;

    const timer =
    setInterval(() => {

        value++;

        el.textContent =
        value;

        if(
            value >= target
        ){

            clearInterval(timer);

        }

    },80);

}

animateCounter(
"photoCount",
photos.length
);

animateCounter(
"videoCount",
videos.length
);

animateCounter(
"memoryCount",
memories.length
);

document.getElementById(
"galleryCount"
).textContent =

`${photos.length} photos`;


/* ==========================================
   FEATURED SLIDER
========================================== */

const featuredMedia =
document.getElementById(
"featuredMedia"
);

const featuredTitle =
document.getElementById(
"featuredTitle"
);

const featuredText =
document.getElementById(
"featuredText"
);

const featuredNumber =
document.getElementById(
"featuredNumber"
);

const featuredDots =
document.getElementById(
"featuredDots"
);

let featuredIndex = 0;

function buildDots(){

    featuredDots.innerHTML = "";

    memories.forEach(
    (_,index)=>{

        const dot =
        document.createElement(
        "button"
        );

        dot.className =
        "featured-dot";

        dot.addEventListener(
        "click",
        ()=>{

            featuredIndex =
            index;

            updateFeatured();

        });

        featuredDots.appendChild(
        dot
        );

    });

}

function updateFeatured(){

    const memory =
    memories[featuredIndex];

    featuredTitle.textContent =
    memory.title;

    featuredText.textContent =
    memory.text;

    featuredNumber.textContent =
    `MEMORY ${String(
        featuredIndex + 1
    ).padStart(2,"0")}`;

    featuredMedia.innerHTML =
    "";

    let media;

    if(
    memory.type ===
    "image"
    ){

        media =
        document.createElement(
        "img"
        );

        media.src =
        memory.file;

        media.alt =
        memory.title;

    }
    else{

        media =
        document.createElement(
        "video"
        );

        media.autoplay = true;
        media.loop = true;
        media.muted = true;
        media.playsInline = true;

        media.src =
        memory.file;

    }

    featuredMedia.appendChild(
        media
    );

    [...featuredDots.children]
    .forEach(
    (dot,index)=>{

        dot.classList.toggle(
        "active",
        index===featuredIndex
        );

    });

}

function nextFeatured(){

    featuredIndex++;

    if(
    featuredIndex >=
    memories.length
    ){

        featuredIndex = 0;

    }

    updateFeatured();

}

function prevFeatured(){

    featuredIndex--;

    if(
    featuredIndex < 0
    ){

        featuredIndex =
        memories.length - 1;

    }

    updateFeatured();

}

buildDots();
updateFeatured();

document
.getElementById(
"featuredNext"
)
.addEventListener(
"click",
nextFeatured
);

document
.getElementById(
"featuredPrev"
)
.addEventListener(
"click",
prevFeatured
);

setInterval(
nextFeatured,
7000
);


/* ==========================================
   PHOTO GALLERY
========================================== */

const photoGallery =
document.getElementById(
"photoGallery"
);

photos.forEach(
(memory,index)=>{

const card =
document.createElement(
"div"
);

card.className =
"memory-card";

card.innerHTML = `

<div class="memory-image-wrap">

<img
src="${memory.file}"
alt="${memory.title}">

</div>

<div class="memory-content">

<span class="memory-tag">
PHOTO MEMORY
</span>

<h3>
${memory.title}
</h3>

<p>
${memory.text}
</p>

</div>

`;

card.addEventListener(
"click",
()=>{

openLightbox(index);

}
);

photoGallery.appendChild(
card
);

});


/* ==========================================
   VIDEO GALLERY
========================================== */

const videoGallery =
document.getElementById(
"videoGallery"
);

videos.forEach(
memory=>{

const card =
document.createElement(
"div"
);

card.className =
"memory-card";

card.innerHTML = `

<div class="memory-image-wrap">

<video
muted
autoplay
loop
playsinline>

<source
src="${memory.file}"
type="video/mp4">

</video>

</div>

<div class="memory-content">

<span class="memory-tag">

VIDEO MEMORY

</span>

<h3>

${memory.title}

</h3>

<p>

${memory.text}

</p>

</div>

`;

videoGallery.appendChild(
card
);

});


/* ==========================================
   LIGHTBOX
========================================== */

const lightbox =
document.getElementById(
"lightbox"
);

const lightboxImg =
document.getElementById(
"lightboxImg"
);

const lightboxTitle =
document.getElementById(
"lightboxTitle"
);

const lightboxText =
document.getElementById(
"lightboxText"
);

const lightboxCounter =
document.getElementById(
"lightboxCounter"
);

let currentPhoto = 0;

function openLightbox(index){

    currentPhoto =
    index;

    updateLightbox();

    lightbox.classList.add(
    "open"
    );

    document.body.style
    .overflow = "hidden";

}

function updateLightbox(){

    const memory =
    photos[currentPhoto];

    lightboxImg.src =
    memory.file;

    lightboxTitle.textContent =
    memory.title;

    lightboxText.textContent =
    memory.text;

    lightboxCounter.textContent =

    `${currentPhoto + 1}
     /
     ${photos.length}`;

}

function nextPhoto(){

    currentPhoto++;

    if(
    currentPhoto >=
    photos.length
    ){

        currentPhoto = 0;

    }

    updateLightbox();

}

function previousPhoto(){

    currentPhoto--;

    if(
    currentPhoto < 0
    ){

        currentPhoto =
        photos.length - 1;

    }

    updateLightbox();

}

function closeLightbox(){

    lightbox.classList.remove(
    "open"
    );

    document.body.style
    .overflow = "";

}

document
.getElementById(
"closeLightbox"
)
.addEventListener(
"click",
closeLightbox
);

document
.getElementById(
"lightboxNext"
)
.addEventListener(
"click",
nextPhoto
);

document
.getElementById(
"lightboxPrev"
)
.addEventListener(
"click",
previousPhoto
);

lightbox.addEventListener(
"click",
e=>{

if(
e.target===lightbox
){

closeLightbox();

}

});

document.addEventListener(
"keydown",
e=>{

if(
!lightbox.classList
.contains("open")
)
return;

if(e.key==="Escape")
closeLightbox();

if(e.key==="ArrowRight")
nextPhoto();

if(e.key==="ArrowLeft")
previousPhoto();

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealItems =
document.querySelectorAll(
".reveal"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(
entry=>{

if(
entry.isIntersecting
){

entry.target.classList
.add("active");

}

});

},

{
threshold:.15
}

);

revealItems.forEach(
item=>{

revealObserver.observe(
item
);

}
);


/* ==========================================
   QUOTES
========================================== */

const quotes = [

"❤️ Every memory tells a story.",

"❤️ Every photo is a chapter.",

"❤️ Every adventure becomes a treasure.",

"❤️ Love lives in the little moments.",

"❤️ The best days become forever memories.",

"❤️ Our story is still being written."

];

const quoteBanner =
document.getElementById(
"quoteBanner"
);

let quoteIndex = 0;

function rotateQuote(){

quoteBanner.style.opacity =
0;

setTimeout(()=>{

quoteBanner.textContent =
quotes[quoteIndex];

quoteIndex++;

if(
quoteIndex >=
quotes.length
){

quoteIndex = 0;

}

quoteBanner.style.opacity =
1;

},300);

}

rotateQuote();

setInterval(
rotateQuote,
6000
);


/* ==========================================
   PETALS
========================================== */

const petalLayer =
document.getElementById(
"petalLayer"
);

const petalCollection =

["🌸","❀","✿","🍂"];

function createPetal(){

const petal =
document.createElement(
"span"
);

petal.className =
"petal";

petal.textContent =

petalCollection[
Math.floor(
Math.random() *
petalCollection.length
)
];

petal.style.left =
Math.random()*100+"vw";

petal.style.fontSize =
(10 + Math.random()*15)
+"px";

petal.style.animationDuration =
(8 + Math.random()*8)
+"s";

petal.style.setProperty(
"--drift",
(Math.random()*250-125)
+"px"
);

petalLayer.appendChild(
petal
);

setTimeout(()=>{

petal.remove();

},17000);

}

setInterval(
createPetal,
500
);


/* ==========================================
   REALISTIC FIREFLIES
========================================== */

const fireflyLayer =
document.getElementById("fireflyLayer");

console.log("Firefly Layer:", fireflyLayer);

const test = document.createElement("div");

test.style.width = "50px";
test.style.height = "50px";
test.style.background = "yellow";
test.style.position = "absolute";
test.style.left = "100px";
test.style.top = "100px";
test.style.zIndex = "9999";

fireflyLayer.appendChild(test);

/* ==========================================
   FLOATING HEARTS
========================================== */

const heartLayer =
document.getElementById(
"heartLayer"
);

function createHeart(){

const heart =
document.createElement(
"span"
);

heart.className =
"floating-heart";

heart.textContent =
Math.random() > .5
? "♥"
: "♡";

heart.style.left =
Math.random()*100
+"vw";

heart.style.fontSize =
(12 + Math.random()*18)
+"px";

heart.style.animationDuration =
(6 + Math.random()*5)
+"s";

heartLayer.appendChild(
heart
);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(
createHeart,
4000
);


/* ==========================================
   HERO PARALLAX
========================================== */

const hero =
document.querySelector(
".hero-content"
);

if(
window.matchMedia(
"(hover:hover)"
).matches
){

document.addEventListener(
"mousemove",
e=>{

const x =
e.clientX /
window.innerWidth
-.5;

const y =
e.clientY /
window.innerHeight
-.5;

hero.style.transform =

`translate(
${x*12}px,
${y*12}px
)`;

});

}
