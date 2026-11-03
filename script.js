/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 2000);

});


/* =====================================================
   MUSIC
===================================================== */

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play();

        musicBtn.innerHTML =
        "⏸ Pause Music";

    } else {

        bgMusic.pause();

        musicBtn.innerHTML =
        "🎵 Play Music";

    }

});


/* =====================================================
   MEMORIES
   EDIT THIS SECTION ONLY
===================================================== */

const memories = [

{
    type: "image",
    file: "photos/photo1.jpg",
    title: "The Beginning",
    text: "Where one unforgettable chapter started."
},

{
    type: "image",
    file: "photos/photo2.jpg",
    title: "Favorite Day",
    text: "One of our most treasured memories."
},

{
    type: "image",
    file: "photos/photo3.jpg",
    title: "Adventure Together",
    text: "Every adventure became a story."
},

{
    type: "video",
    file: "videos/video1.mp4",
    title: "Road Trip",
    text: "Captured forever in motion."
},

{
    type: "video",
    file: "videos/video2.mp4",
    title: "Special Moment",
    text: "A memory worth revisiting."
}

];


/* =====================================================
   STATS COUNTERS
===================================================== */

const photoCount =
memories.filter(
item => item.type === "image"
).length;

const videoCount =
memories.filter(
item => item.type === "video"
).length;

const memoryCount =
memories.length;

animateCounter(
"photoCount",
photoCount
);

animateCounter(
"videoCount",
videoCount
);

animateCounter(
"memoryCount",
memoryCount
);

function animateCounter(
elementId,
target
){

    const element =
    document.getElementById(
    elementId
    );

    let count = 0;

    const interval =
    setInterval(()=>{

        count++;

        element.innerHTML =
        count;

        if(count >= target){

            clearInterval(
            interval
            );

        }

    },80);

}


/* =====================================================
   FEATURED MEMORY
===================================================== */

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

let featuredIndex = 0;

function updateFeatured(){

    const memory =
    memories[featuredIndex];

    featuredTitle.innerHTML =
    memory.title;

    featuredText.innerHTML =
    memory.text;

    if(memory.type === "image"){

        featuredMedia.innerHTML =
        `
        <img
        src="${memory.file}"
        alt="${memory.title}">
        `;

    }else{

        featuredMedia.innerHTML =
        `
        <video
        autoplay
        muted
        loop
        playsinline>

        <source
        src="${memory.file}"
        type="video/mp4">

        </video>
        `;

    }

    featuredIndex++;

    if(
        featuredIndex >=
        memories.length
    ){

        featuredIndex = 0;

    }

}

updateFeatured();

setInterval(
updateFeatured,
6000
);


/* =====================================================
   PHOTO GALLERY
===================================================== */

const photoGallery =
document.getElementById(
"photoGallery"
);

const videoGallery =
document.getElementById(
"videoGallery"
);

memories.forEach(memory => {

    const card =
    document.createElement("div");

    card.className =
    "memory-card";

    if(memory.type === "image"){

        card.innerHTML = `

        <img
        src="${memory.file}"
        alt="${memory.title}">

        <div class="memory-content">

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
            openLightbox(
            memory.file
            );
        }
        );

        photoGallery.appendChild(
        card
        );

    }else{

        card.innerHTML = `

        <video
        autoplay
        muted
        loop
        playsinline>

        <source
        src="${memory.file}"
        type="video/mp4">

        </video>

        <div class="memory-content">

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

    }

});


/* =====================================================
   LIGHTBOX
===================================================== */

const lightbox =
document.getElementById(
"lightbox"
);

const lightboxImg =
document.getElementById(
"lightboxImg"
);

const closeLightbox =
document.getElementById(
"closeLightbox"
);

function openLightbox(src){

    lightbox.style.display =
    "flex";

    lightboxImg.src =
    src;

}

closeLightbox.addEventListener(
"click",
()=>{

    lightbox.style.display =
    "none";

});

lightbox.addEventListener(
"click",
(event)=>{

    if(
    event.target ===
    lightbox
    ){

        lightbox.style.display =
        "none";

    }

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
document.querySelectorAll(
".reveal"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(
        entry.isIntersecting
        ){

            entry.target.classList.add(
            "active"
            );

        }

    });

},

{
threshold:0.15
}

);

revealElements.forEach(
element=>{

    revealObserver.observe(
    element
    );

}
);


/* =====================================================
   FLOATING QUOTES
===================================================== */

const quotes = [

"❤️ Every memory tells a story.",

"❤️ Every picture is a chapter.",

"❤️ Every adventure becomes a memory.",

"❤️ Some moments deserve to last forever.",

"❤️ Memories are life's greatest treasures.",

"❤️ Our story is still being written."

];

const quoteBanner =
document.getElementById(
"quoteBanner"
);

let quoteIndex = 0;

function rotateQuote(){

    quoteBanner.innerHTML =
    quotes[
    quoteIndex
    ];

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
5000
);


/* =====================================================
   FLOATING HEARTS
===================================================== */

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
2800
);


/* =====================================================
   FALLING LEAVES
===================================================== */

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
    Math.random()*100 +
    "vw";

    leaf.style.animationDuration =
    (
        6 +
        Math.random()*6
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
900
);


/* =====================================================
   FIREFLIES
===================================================== */

for(let i=0;i<30;i++){

    const firefly =
    document.createElement(
    "div"
    );

    firefly.className =
    "firefly"ument.body.appendChild(
    firefly
    );

}


/* =====================================================
   PARALLAX HERO
===================================================== */

document.addEventListener(
"mousemove",
(event)=>{

    const hero =
    document.querySelector(
    ".hero-content"
    );

    if(!hero) return;

    const x =
    (
    event.clientX /
    window.innerWidth
    ) - 0.5;

    const y =
    (
    event.clientY /
    window.innerHeight
    ) - 0.5;

    hero.style.transform =
    `
    translate(
        ${x*15}px,
        ${y*15}px
    )
    `;

});
