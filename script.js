/* ======================================
   MUSIC
====================================== */

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

musicBtn.addEventListener(
"click",
() => {

    bgMusic.play();

    musicBtn.innerHTML =
    "❤️ Music Playing";

}
);

/* ======================================
   MEMORY DATA
====================================== */

const memories = [

{
    type:"image",
    file:"photos/photo1.jpg",
    chapter:"Chapter 01",
    title:"The Beginning",
    text:"Every journey starts somewhere. This was one of the moments that became part of our story."
},

{
    type:"video",
    file:"videos/video1.mp4",
    chapter:"Chapter 02",
    title:"An Adventure Together",
    text:"A memory worth revisiting again and again."
},

{
    type:"image",
    file:"photos/photo2.jpg",
    chapter:"Chapter 03",
    title:"Favorite Moment",
    text:"Some memories become timeless because of who we shared them with."
},

{
    type:"video",
    file:"videos/video2.mp4",
    chapter:"Chapter 04",
    title:"Another Beautiful Day",
    text:"A small moment that became unforgettable."
},

{
    type:"image",
    file:"photos/photo3.jpg",
    chapter:"Chapter 05",
    title:"Memories We Treasure",
    text:"Every photo tells a piece of our story."
}

];

/* ======================================
   BUILD MEMORY SECTIONS
====================================== */

const memoryFeed =
document.getElementById(
"memoryFeed"
);

memories.forEach(memory => {

    const section =
    document.createElement(
    "div"
    );

    section.classList.add(
    "memory-item"
    );

    let mediaHTML = "";

    if(memory.type === "image"){

        mediaHTML = `
            <div class="memory-media">

                <img
                src="${memory.file}"
                alt="${memory.title}"
                class="memory-image">

            </div>
        `;

    } else {

        mediaHTML = `
            <div class="memory-media">

                <video
                autoplay
                muted
                loop
                playsinline>

                    <source
                    src="${memory.file}"
                    type="video/mp4">

                </video>

            </div>
        `;

    }

    section.innerHTML = `

        ${mediaHTML}

        <div class="memory-text">

            <span>

                ${memory.chapter}

            </span>

            <h2>

                ${memory.title}

            </h2>

            <p>

                ${memory.text}

            </p>

        </div>

    `;

    memoryFeed.appendChild(
    section
    );

});

/* ======================================
   SCROLL REVEAL
====================================== */

const revealObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
            "show"
            );

        }

    });

},

{
    threshold:.15
}

);

document
.querySelectorAll(".memory-item")
.forEach(item=>{

    revealObserver.observe(item);

});

/* ======================================
   REVEAL OTHER SECTIONS
====================================== */

const sections =
document.querySelectorAll(
".reveal"
);

const sectionObserver =
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
    threshold:.1
}

);

sections.forEach(section=>{

    sectionObserver.observe(
    section
    );

});

/* ======================================
   LIGHTBOX
====================================== */

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

document.addEventListener(
"click",
e=>{

if(
e.target.classList.contains(
"memory-image"
)
){

    lightbox.style.display =
    "flex";

    lightboxImg.src =
    e.target.src;

    createHeartBurst();

}

});

closeBtn.addEventListener(
"click",
()=>{

    lightbox.style.display =
    "none";

});

lightbox.addEventListener(
"click",
e=>{

if(e.target === lightbox){

    lightbox.style.display =
    "none";

}

});

/* ======================================
   CINEMATIC IMAGE ZOOM
====================================== */

window.addEventListener(
"scroll",
()=>{

document
.querySelectorAll(
".memory-image"
)
.forEach(img=>{

    const rect =
    img.getBoundingClientRect();

    const center =
    window.innerHeight / 2;

    const distance =
    Math.abs(
    rect.top - center
    );

    const scale =
    Math.max(
    1,
    1.08 - distance/3000
    );

    img.style.transform =
    `scale(${scale})`;

});

});

/* ======================================
   FALLING LEAVES
====================================== */

function createLeaf(){

    const leaf =
    document.createElement("div");

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

    setTimeout(
    ()=>leaf.remove(),
    15000
    );

}

setInterval(
createLeaf,
450
);

/* ======================================
   FIREFLIES
====================================== */

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

/* ======================================
   FLOATING HEARTS
====================================== */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.className =
    "floating-heart";

    heart.innerHTML =
    "❤️";

    heart.style.left =
    Math.random()*100
    + "vw";

    document.body.appendChild(
    heart
    );

    setTimeout(
    ()=>heart.remove(),
    8000
    );

}

setInterval(
createHeart,
2500
);

/* ======================================
   HEART BURST
====================================== */

function createHeartBurst(){

    for(let i=0;i<12;i++){

        const heart =
        document.createElement("div");

        heart.className =
        "floating-heart";

        heart.innerHTML =
        "❤️";

        heart.style.left =
        (
        window.innerWidth/2
        +
        (Math.random()*250-125)
        )
        + "px";

        heart.style.bottom =
        "35vh";

        document.body.appendChild(
        heart
        );

        setTimeout(
        ()=>heart.remove(),
        5000
        );

    }

}

/* ======================================
   FLOATING MEMORY QUOTES
====================================== */

const quotes = [

"❤️ Every memory has a story.",

"❤️ The best adventures become favorite memories.",

"❤️ Some moments deserve to be remembered forever.",

"❤️ Every photo is a chapter.",

"❤️ Every video is a moment frozen in time.",

"❤️ Our story is still being written."

];

let quoteIndex = 0;

const quoteBanner =
document.getElementById(
"quoteBanner"
);

function rotateQuote(){

    quoteBanner.innerHTML =
    quotes[quoteIndex];

    quoteIndex++;

    if(
    quoteIndex >=
    quotes.length
    ){

        quoteIndex = 0;

    }

}

rotateQuote();

setInterval(
rotateQuote,
6000
);
`
