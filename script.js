
/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1500);
});


/* =====================================================
   MUSIC
===================================================== */

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", async () => {
    if (bgMusic.paused) {
        try {
            await bgMusic.play();
            musicBtn.innerHTML = "♫ Pause Music";
        } catch (error) {
            musicBtn.innerHTML = "♫ Play Music";
        }
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = "♫ Play Music";
    }
});

bgMusic.addEventListener("ended", () => {
    musicBtn.innerHTML = "♫ Play Music";
});


/* =====================================================
   MEMORIES
   EDIT THIS SECTION TO ADD YOUR PHOTOS AND VIDEOS
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

const photos = memories.filter(item => item.type === "image");
const videos = memories.filter(item => item.type === "video");

function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);

    if (!element) return;

    let count = 0;

    const interval = setInterval(() => {
        count++;
        element.textContent = count;

        if (count >= target) {
            clearInterval(interval);
        }
    }, 80);
}

animateCounter("photoCount", photos.length);
animateCounter("videoCount", videos.length);
animateCounter("memoryCount", memories.length);

document.getElementById("galleryCount").textContent =
    `${photos.length} memories`;


/* =====================================================
   FEATURED MEMORY SLIDESHOW
===================================================== */

const featuredMedia = document.getElementById("featuredMedia");
const featuredTitle = document.getElementById("featuredTitle");
const featuredText = document.getElementById("featuredText");
const featuredNumber = document.getElementById("featuredNumber");
const featuredDots = document.getElementById("featuredDots");

let featuredIndex = 0;
let featuredTimer;

function createFeaturedDots() {
    featuredDots.innerHTML = "";

    memories.forEach((memory, index) => {
        const dot = document.createElement("button");

        dot.className = "featured-dot";
        dot.setAttribute("aria-label", `Show memory ${index + 1}`);

        dot.addEventListener("click", () => {
            featuredIndex = index;
            updateFeatured();
            resetFeaturedTimer();
        });

        featuredDots.appendChild(dot);
    });
}

function updateFeatured() {
    if (!memories.length) return;

    const memory = memories[featuredIndex];

    featuredTitle.textContent = memory.title;
    featuredText.textContent = memory.text;
    featuredNumber.textContent =
        `MEMORY ${String(featuredIndex + 1).padStart(2, "0")}`;

    featuredMedia.innerHTML = "";

    let media;

    if (memory.type === "image") {
        media = document.createElement("img");
        media.src = memory.file;
        media.alt = memory.title;
    } else {
        media = document.createElement("video");
        media.autoplay = true;
        media.muted = true;
        media.loop = true;
        media.playsInline = true;

        const source = document.createElement("source");
        source.src = memory.file;
        source.type = "video/mp4";

        media.appendChild(source);
    }

    featuredMedia.appendChild(media);

    [...featuredDots.children].forEach((dot, index) => {
        dot.classList.toggle("active", index === featuredIndex);
    });
}

function nextFeatured() {
    featuredIndex = (featuredIndex + 1) % memories.length;
    updateFeatured();
}

function previousFeatured() {
    featuredIndex = (featuredIndex - 1 + memories.length) % memories.length;
    updateFeatured();
}

function resetFeaturedTimer() {
    clearInterval(featuredTimer);
    featuredTimer = setInterval(nextFeatured, 7000);
}

document.getElementById("featuredNext").addEventListener("click", () => {
    nextFeatured();
    resetFeaturedTimer();
});

document.getElementById("featuredPrev").addEventListener("click", () => {
    previousFeatured();
    resetFeaturedTimer();
});

createFeaturedDots();
updateFeatured();
resetFeaturedTimer();


/* =====================================================
   PHOTO AND VIDEO GALLERIES
===================================================== */

const photoGallery = document.getElementById("photoGallery");
const videoGallery = document.getElementById("videoGallery");

function createMemoryCard(memory, index) {
    const card = document.createElement("div");
    card.className = "memory-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "memory-image-wrap";

    if (memory.type === "image") {
        const image = document.createElement("img");

        image.src = memory.file;
        image.alt = memory.title;
        image.loading = "lazy";

        imageWrap.appendChild(image);

        card.addEventListener("click", () => {
            openLightbox(index);
        });

        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Open ${memory.title}`);

        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(index);
            }
        });

    } else {
        const video = document.createElement("video");

        video.src = memory.file;
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.preload = "metadata";

        imageWrap.appendChild(video);
    }

    const content = document.createElement("div");
    content.className = "memory-content";

    const tag = document.createElement("span");
    tag.className = "memory-tag";
    tag.textContent = memory.type === "image" ? "PHOTO MEMORY" : "VIDEO MEMORY";

    const title = document.createElement("h3");
    title.textContent = memory.title;

    const text = document.createElement("p");
    text.textContent = memory.text;

    content.append(tag, title, text);
    card.append(imageWrap, content);

    return card;
}

memories.forEach((memory, index) => {
    const card = createMemoryCard(memory, index);

    if (memory.type === "image") {
        photoGallery.appendChild(card);
    } else {
        videoGallery.appendChild(card);
    }
});


/* =====================================================
   LIGHTBOX ALBUM
===================================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxText = document.getElementById("lightboxText");
const lightboxCounter = document.getElementById("lightboxCounter");

let lightboxIndex = 0;
let previousFocus = null;

function openLightbox(index) {
    lightboxIndex = index;
    previousFocus = document.activeElement;

    updateLightbox();

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    document.getElementById("closeLightbox").focus();
}

function updateLightbox() {
    const memory = photos[lightboxIndex];

    if (!memory) return;

    lightboxImg.src = memory.file;
    lightboxImg.alt = memory.title;
    lightboxTitle.textContent = memory.title;
    lightboxText.textContent = memory.text;

    lightboxCounter.textContent =
        `${lightboxIndex + 1} / ${photos.length}`;
}

function nextLightbox() {
    lightboxIndex = (lightboxIndex + 1) % photos.length;
    updateLightbox();
}

function previousLightbox() {
    lightboxIndex = (lightboxIndex - 1 + photos.length) % photos.length;
    updateLightbox();
}

function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (previousFocus) {
        previousFocus.focus();
    }
}

document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
document.getElementById("lightboxNext").addEventListener("click", nextLightbox);
document.getElementById("lightboxPrev").addEventListener("click", previousLightbox);

lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", event => {
    if (!lightbox.classList.contains("open")) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") nextLightbox();
    if (event.key === "ArrowLeft") previousLightbox();
});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("active");
    });
}


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

const quoteBanner = document.getElementById("quoteBanner");

let quoteIndex = 0;

function rotateQuote() {
    quoteBanner.style.opacity = "0";

    setTimeout(() => {
        quoteBanner.textContent = quotes[quoteIndex];

        quoteIndex = (quoteIndex + 1) % quotes.length;

        quoteBanner.style.opacity = "1";
    }, 500);
}

rotateQuote();
setInterval(rotateQuote, 6000);


/* =====================================================
   FALLING CHERRY BLOSSOMS
===================================================== */

const petalLayer = document.getElementById("petalLayer");

const petals = ["🌸", "✿", "❀", "🍂"];

function createPetal() {
    const petal = document.createElement("span");

    petal.className = "petal";
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (10 + Math.random() * 14) + "px";

    petal.style.animationDuration = (8 + Math.random() * 8) + "s";
    petal.style.setProperty(
        "--drift",
        (Math.random() * 250 - 125) + "px"
    );

    petalLayer.appendChild(petal);

    setTimeout(() => petal.remove(), 17000);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(createPetal, 500);
}


/* =====================================================
   FIREFLIES
===================================================== */

const fireflyLayer = document.getElementById("fireflyLayer");

for (let i = 0; i < 35; i++) {
    const firefly = document.createElement("div");

    firefly.className = "firefly";

    firefly.style.left = Math.random() * 100 + "vw";
    firefly.style.top = Math.random() * 100 + "vh";
    firefly.style.animationDelay = Math.random() * 4 + "s";
    firefly.style.animationDuration = (2 + Math.random() * 4) + "s";

    fireflyLayer.appendChild(firefly);
}


/* =====================================================
   FLOATING HEARTS
===================================================== */

const heartLayer = document.getElementById("heartLayer");

function createHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > .5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    heartLayer.appendChild(heart);

    setTimeout(() => heart.remove(), 12000);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(createHeart, 4000);
}


/* =====================================================
   HERO PARALLAX
===================================================== */

const hero = document.querySelector(".hero-content");

if (window.matchMedia("(hover: hover)").matches) {
    document.addEventListener("mousemove", event => {
        if (!hero) return;

        const x = event.clientX / window.innerWidth - .5;
        const y = event.clientY / window.innerHeight - .5;

        hero.style.transform = `
            translate(${x * 12}px, ${y * 12}px)
        `;
    });
}
