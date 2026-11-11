
/* =====================================================
   JAY & CHARITY
   COMPLETE CORRECTED JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       HELPER FUNCTIONS
    ================================================= */

    const getElement = id => document.getElementById(id);

    const createElement = (tag, className = "") => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        return element;
    };

    /* =================================================
       MEMORY DATABASE
       EDIT THIS SECTION TO ADD YOUR PHOTOS / VIDEOS
    ================================================= */

    const memories = [

        // ================= PHOTO MEMORIES =================

        {
            type: "image",
            file: "photos/Photo1.jpeg",
            title: "Memory 01",
            text: "A beautiful day at White Island, Camiguin! Swimming, enjoying the breathtaking views, sharing laughter, and making unforgettable memories together. Simple moments, endless happiness. ❤️🏝️"
        },

        {
            type: "image",
            file: "photos/Photo2.jpeg",
            title: "Memory 02",
            text: "A beautiful chapter."
        },

        {
            type: "image",
            file: "photos/Photo3.png",
            title: "Memory 03",
            text: "One of our favorite memories at White Island, Camiguin."
        },

        {
            type: "image",
            file: "photos/Photo4.jpeg",
            title: "Memory 04",
            text: "Captured forever."
        },

        {
            type: "image",
            file: "photos/Photo5.jpeg",
            title: "Memory 05",
            text: "A moment worth remembering."
        },

        {
            type: "image",
            file: "photos/photo6.jpeg",
            title: "Memory 06",
            text: "Another unforgettable day, celebrating your birthday at Katunggan Park, Camiguin Island."
        },

        {
            type: "image",
            file: "photos/photo7.jpeg",
            title: "Memory 07",
            text: "A memory filled with happiness. I'm always happy when I see your eyes and your beautiful smile while looking at the flowers."
        },

        {
            type: "image",
            file: "photos/Photo8.jpeg",
            title: "Memory 08",
            text: "The most important day, the day you said we're official. ❤️"
        },

        {
            type: "image",
            file: "photos/Photo9.jpeg",
            title: "Memory 09",
            text: "A treasured moment, your bading Miguel."
        },

        {
            type: "image",
            file: "photos/photo10.jpeg",
            title: "Memory 10",
            text: "One of our favorites, our first night date."
        },

        {
            type: "image",
            file: "photos/Photo11.jpeg",
            title: "Memory 11",
            text: "On board the ship, heading to the beautiful island of Camiguin."
        },

        {
            type: "image",
            file: "photos/Photo12.jpeg",
            title: "Memory 12",
            text: "At Camiguin Island, enjoying lunch together."
        },

        {
            type: "image",
            file: "photos/photo13.jpeg",
            title: "Memory 13",
            text: "Another beautiful moment at Medina Bay, enjoying the breathtaking sea view, feeling the fresh breeze, and appreciating the beauty of nature. 🌊❤️"
        },

        {
            type: "image",
            file: "photos/photo14.png",
            title: "Memory 14",
            text: "A treasured memory at Talisayan, waiting for the sunset."
        },

        {
            type: "image",
            file: "photos/photo15.jpeg",
            title: "Memory 15",
            text: "A moment to cherish at Halseyle Hill Garden Resort."
        },

        {
            type: "image",
            file: "photos/photo16.jpeg",
            title: "Memory 16",
            text: "Night rides with you. ❤️"
        },

        {
            type: "image",
            file: "photos/photo17.jpeg",
            title: "Memory 17",
            text: "Forever in our hearts."
        },

        {
            type: "image",
            file: "photos/photo18.jpeg",
            title: "Memory 18",
            text: "Enjoying the short moment"
        },

        {
            type: "image",
            file: "photos/photo19.jpeg",
            title: "Memory 19",
            text: "Laughing together"
        },

        {
            type: "image",
            file: "photos/photo20.jpeg",
            title: "Memory 20",
            text: "Every smile makes the world happy"
        },

        {
            type: "image",
            file: "photos/photo21.jpeg",
            title: "Memory 21",
            text: "Always and forever I will love you"
        },

        {
            type: "image",
            file: "photos/photo22.jpeg",
            title: "Memory 22",
            text: "Forever in our hearts at medina climbing a big tree together"
        },

        {
            type: "image",
            file: "photos/photo23.jpeg",
            title: "Memory 23",
            text: "With my diwata"
        },


        // ================= VIDEO MEMORIES =================

        {
            type: "video",
            file: "videos/vid1.mp4",
            title: "Video 01",
            text: "A moving memory."
        },

        {
            type: "video",
            file: "videos/vid2.mp4",
            title: "Video 02",
            text: "Captured forever."
        },

        {
            type: "video",
            file: "videos/vid3.mp4",
            title: "Video 03",
            text: "A favorite moment."
        },

        {
            type: "video",
            file: "videos/vid4.mp4",
            title: "Video 04",
            text: "A journey worth revisiting."
        },

        {
            type: "video",
            file: "videos/vid5.mp4",
            title: "Video 05",
            text: "A beautiful chapter."
        },

        {
            type: "video",
            file: "videos/vid6.mp4",
            title: "Video 06",
            text: "A wonderful memory."
        },

        {
            type: "video",
            file: "videos/vid7.mp4",
            title: "Video 07",
            text: "A treasured adventure."
        },

        {
            type: "video",
            file: "videos/vid8.mp4",
            title: "Video 08",
            text: "A moment captured in motion."
        },

        {
            type: "video",
            file: "videos/vid9.mp4",
            title: "Video 09",
            text: "A day worth reliving."
        },

        {
            type: "video",
            file: "videos/vid10.mp4",
            title: "Video 10",
            text: "Another favorite memory."
        },

        {
            type: "video",
            file: "videos/vid11.mp4",
            title: "Video 11",
            text: "A story still being written."
        },

        {
            type: "video",
            file: "videos/vid12.mp4",
            title: "Video 12",
            text: "A story still being written."
        },

        {
            type: "video",
            file: "videos/vid13.mp4",
            title: "Video 13",
            text: "A story still being written."
        },

        {
            type: "video",
            file: "videos/vid14.mp4",
            title: "Video 14",
            text: "Swimming and enjoying nature at Halseyle Hill Resort."
        },

        {
            type: "video",
            file: "videos/vid15.mp4",
            title: "Video 15",
            text: "At Medina Bay, climbing trees together, breathing in the fresh sea breeze, and sharing endless laughter. Sometimes, the simplest moments become the most beautiful memories."
        },

        {
            type: "video",
            file: "videos/vid16.mp4",
            title: "Video 16",
            text: "At Medina Bay, climbing trees together, breathing in the fresh sea breeze, and sharing endless laughter."
        },

        {
            type: "video",
            file: "videos/vid17.mp4",
            title: "Video 17",
            text: "I'm happiest when I see you smiling and enjoying every little moment. ❤️"
        },

        {
            type: "video",
            file: "videos/vid18.mp4",
            title: "Video 18",
            text: "At Medina Bay, surrounded by nature and the fresh sea breeze, I find myself looking at the most beautiful woman in my life. Every smile of yours makes the moment special. ❤️"
        }

    ];


    /* =================================================
       MEMORY FILTERS
    ================================================= */

    const photos = memories.filter(
        memory => memory.type === "image"
    );

    const videos = memories.filter(
        memory => memory.type === "video"
    );


    /* =================================================
       LOADER
    ================================================= */

    document.body.classList.add("loading");

    const loader = getElement("loader");
    const enterWithMusic = getElement("enterWithMusic");

    function hideLoader() {

        if (!loader) {
            document.body.classList.remove("loading");
            return;
        }

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

            document.body.classList.remove("loading");

        }, 500);
    }

    if (enterWithMusic) {

        enterWithMusic.addEventListener("click", () => {

            startMusic();

            hideLoader();

        });

    } else {

        hideLoader();

    }


    /* =================================================
       BACKGROUND MUSIC PLAYER
    ================================================= */

    const musicBtn = getElement("musicBtn");
    const bgMusic = getElement("bgMusic");

    let autoplayBlocked = false;
    let musicStarting = false;

    if (bgMusic) {
        bgMusic.volume = 0.5;
    }

    function syncMusicButton() {

        if (!bgMusic || !musicBtn) return;

        const playing = !bgMusic.paused;

        if (playing) {
            autoplayBlocked = false;
        }

        musicBtn.textContent = playing
            ? "♫ Pause Music"
            : autoplayBlocked
                ? "♫ Tap to Start Music"
                : "♫ Play Music";

        musicBtn.classList.toggle(
            "playing",
            playing
        );

        musicBtn.setAttribute(
            "aria-pressed",
            String(playing)
        );

    }

    async function startMusic() {

        if (!bgMusic || musicStarting) return;

        if (!bgMusic.paused) {
            syncMusicButton();
            return;
        }

        musicStarting = true;

        try {

            await bgMusic.play();

            autoplayBlocked = false;

        } catch (error) {

            if (error.name === "NotAllowedError") {

                autoplayBlocked = true;

            } else if (error.name !== "AbortError") {

                console.error(
                    "Could not play background music:",
                    error
                );

            }

        } finally {

            musicStarting = false;

            syncMusicButton();

        }

    }

    function removeMusicGestureListeners() {

        document.removeEventListener(
            "pointerdown",
            resumeMusicAfterGesture
        );

        document.removeEventListener(
            "keydown",
            resumeMusicAfterGesture
        );

    }

    function resumeMusicAfterGesture(event) {

        if (!bgMusic || !bgMusic.paused) {
            removeMusicGestureListeners();
            return;
        }

        const target = event.target;

        if (musicBtn && musicBtn.contains(target)) return;

        if (enterWithMusic && enterWithMusic.contains(target)) return;

        removeMusicGestureListeners();

        startMusic();

    }

    if (bgMusic) {

        bgMusic.addEventListener("play", syncMusicButton);
        bgMusic.addEventListener("pause", syncMusicButton);
        bgMusic.addEventListener("ended", syncMusicButton);

        document.addEventListener(
            "pointerdown",
            resumeMusicAfterGesture
        );

        document.addEventListener(
            "keydown",
            resumeMusicAfterGesture
        );

        // Attempt autoplay. Browsers may require user interaction.
        startMusic();

    }

    if (musicBtn && bgMusic) {

        musicBtn.addEventListener("click", async () => {

            if (bgMusic.paused) {

                autoplayBlocked = false;

                await startMusic();

            } else {

                bgMusic.pause();

                syncMusicButton();

            }

        });

    }


    /* =================================================
       COUNTERS
    ================================================= */

    function animateCounter(id, target) {

        const element = getElement(id);

        if (!element) return;

        let value = 0;

        if (target === 0) {
            element.textContent = "0";
            return;
        }

        const timer = setInterval(() => {

            value++;

            element.textContent = value;

            if (value >= target) {
                clearInterval(timer);
            }

        }, 60);

    }

    animateCounter("photoCount", photos.length);
    animateCounter("videoCount", videos.length);
    animateCounter("memoryCount", memories.length);

    const galleryCount = getElement("galleryCount");

    if (galleryCount) {
        galleryCount.textContent = `${photos.length} Photos`;
    }

    setTimeout(() => {

        const photoGallery = getElement("photoGallery");
        const videoGallery = getElement("videoGallery");

        if (photoGallery) {
            photoGallery.style.display = "grid";
        }

        if (videoGallery) {
            videoGallery.style.display = "grid";
        }

    }, 500);


    /* =================================================
       FEATURED MEMORY SLIDER
    ================================================= */

    const featuredMedia = getElement("featuredMedia");
    const featuredTitle = getElement("featuredTitle");
    const featuredText = getElement("featuredText");
    const featuredNumber = getElement("featuredNumber");
    const featuredDots = getElement("featuredDots");

    let featuredIndex = 0;

    function buildDots() {

        if (!featuredDots) return;

        featuredDots.innerHTML = "";

        memories.forEach((memory, index) => {

            const dot = createElement("button", "featured-dot");

            dot.type = "button";

            dot.setAttribute(
                "aria-label",
                `Show ${memory.title}`
            );

            dot.addEventListener("click", () => {

                featuredIndex = index;

                updateFeatured();

            });

            featuredDots.appendChild(dot);

        });

    }

    function updateFeatured() {

        if (!memories.length) return;

        const memory = memories[featuredIndex];

        if (featuredTitle) {
            featuredTitle.textContent = memory.title;
        }

        if (featuredText) {
            featuredText.textContent = memory.text;
        }

        if (featuredNumber) {

            featuredNumber.textContent =
                `MEMORY ${String(featuredIndex + 1).padStart(2, "0")}`;

        }

        if (featuredMedia) {

            featuredMedia.innerHTML = "";

            let media;

            if (memory.type === "image") {

                media = createElement("img");

                media.src = memory.file;
                media.alt = memory.title;
                media.loading = "lazy";

            } else {

                media = createElement("video");

                media.autoplay = true;
                media.loop = true;
                media.muted = true;
                media.playsInline = true;
                media.preload = "metadata";

                media.src = memory.file;

                media.play().catch(() => {
                    // Autoplay may be restricted by the browser.
                });

            }

            featuredMedia.appendChild(media);

        }

        if (featuredDots) {

            [...featuredDots.children].forEach((dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === featuredIndex
                );

            });

        }

    }

    function nextFeatured() {

        if (!memories.length) return;

        featuredIndex++;

        if (featuredIndex >= memories.length) {
            featuredIndex = 0;
        }

        updateFeatured();

    }

    function prevFeatured() {

        if (!memories.length) return;

        featuredIndex--;

        if (featuredIndex < 0) {
            featuredIndex = memories.length - 1;
        }

        updateFeatured();

    }

    buildDots();
    updateFeatured();

    const featuredNext = getElement("featuredNext");
    const featuredPrev = getElement("featuredPrev");

    if (featuredNext) {
        featuredNext.addEventListener("click", nextFeatured);
    }

    if (featuredPrev) {
        featuredPrev.addEventListener("click", prevFeatured);
    }

    if (featuredMedia && memories.length > 1) {

        setInterval(nextFeatured, 7000);

    }


    /* =================================================
       PHOTO GALLERY
    ================================================= */

    const photoGallery = getElement("photoGallery");

    if (photoGallery) {

        photos.forEach((memory, index) => {

            const card = createElement("div", "memory-card");

            card.setAttribute("role", "button");
            card.tabIndex = 0;

            card.setAttribute(
                "aria-label",
                `View ${memory.title} in full screen`
            );

            const imageWrap = createElement(
                "div",
                "memory-image-wrap"
            );

            const img = createElement("img");

            img.src = memory.file;
            img.alt = memory.title;
            img.loading = "lazy";

            imageWrap.appendChild(img);

            const content = createElement(
                "div",
                "memory-content"
            );

            const tag = createElement("span", "memory-tag");
            tag.textContent = "PHOTO MEMORY";

            const heading = createElement("h3");
            heading.textContent = memory.title;

            const paragraph = createElement("p");
            paragraph.textContent = memory.text;

            content.appendChild(tag);
            content.appendChild(heading);
            content.appendChild(paragraph);

            card.appendChild(imageWrap);
            card.appendChild(content);

            card.addEventListener("click", () => {

                openLightbox(index);

            });

            card.addEventListener("keydown", event => {

                if (event.key === "Enter" || event.key === " ") {

                    event.preventDefault();

                    openLightbox(index);

                }

            });

            photoGallery.appendChild(card);

        });

    }


    /* =================================================
       VIDEO GALLERY
    ================================================= */

    const videoGallery = getElement("videoGallery");

    if (videoGallery) {

        videos.forEach(memory => {

            const card = createElement("div", "memory-card");

            const imageWrap = createElement(
                "div",
                "memory-image-wrap"
            );

            const video = createElement("video");

            video.controls = true;
            video.playsInline = true;
            video.preload = "none";

            video.setAttribute("webkit-playsinline", "");

            const source = createElement("source");

            source.src = memory.file;
            source.type = "video/mp4";

            video.appendChild(source);

            imageWrap.appendChild(video);

            const content = createElement(
                "div",
                "memory-content"
            );

            const tag = createElement("span", "memory-tag");
            tag.textContent = "VIDEO MEMORY";

            const heading = createElement("h3");
            heading.textContent = memory.title;

            const paragraph = createElement("p");
            paragraph.textContent = memory.text;

            content.appendChild(tag);
            content.appendChild(heading);
            content.appendChild(paragraph);

            card.appendChild(imageWrap);
            card.appendChild(content);

            videoGallery.appendChild(card);

        });

    }


    /* =================================================
       PHOTO LIGHTBOX
    ================================================= */

    const lightbox = getElement("lightbox");
    const lightboxImg = getElement("lightboxImg");
    const lightboxTitle = getElement("lightboxTitle");
    const lightboxText = getElement("lightboxText");
    const lightboxCounter = getElement("lightboxCounter");

    let currentPhoto = 0;

    function openLightbox(index) {

        if (!photos.length || !lightbox) return;

        currentPhoto = index;

        updateLightbox();

        lightbox.classList.add("open");

        document.body.style.overflow = "hidden";

    }

    function updateLightbox() {

        if (!photos.length) return;

        const memory = photos[currentPhoto];

        if (lightboxImg) {

            lightboxImg.src = memory.file;
            lightboxImg.alt = memory.title;

        }

        if (lightboxTitle) {
            lightboxTitle.textContent = memory.title;
        }

        if (lightboxText) {
            lightboxText.textContent = memory.text;
        }

        if (lightboxCounter) {

            lightboxCounter.textContent =
                `${currentPhoto + 1} / ${photos.length}`;

        }

    }

    function nextPhoto() {

        if (!photos.length) return;

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        updateLightbox();

    }

    function previousPhoto() {

        if (!photos.length) return;

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = photos.length - 1;
        }

        updateLightbox();

    }

    function closeLightbox() {

        if (!lightbox) return;

        lightbox.classList.remove("open");

        document.body.style.overflow = "";

    }

    const closeLightboxBtn = getElement("closeLightbox");
    const lightboxNext = getElement("lightboxNext");
    const lightboxPrev = getElement("lightboxPrev");

    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener("click", closeLightbox);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener("click", nextPhoto);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener("click", previousPhoto);
    }

    if (lightbox) {

        lightbox.addEventListener("click", event => {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });

        // Mobile swipe support

        let touchStartX = 0;

        lightbox.addEventListener(
            "touchstart",
            event => {

                touchStartX = event.changedTouches[0].screenX;

            },
            { passive: true }
        );

        lightbox.addEventListener(
            "touchend",
            event => {

                const swipeDistance =
                    event.changedTouches[0].screenX - touchStartX;

                if (Math.abs(swipeDistance) < 50) return;

                if (swipeDistance < 0) {
                    nextPhoto();
                } else {
                    previousPhoto();
                }

            },
            { passive: true }
        );

    }

    // Keyboard navigation

    document.addEventListener("keydown", event => {

        if (!lightbox || !lightbox.classList.contains("open")) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowRight") {
            nextPhoto();
        }

        if (event.key === "ArrowLeft") {
            previousPhoto();
        }

    });


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealItems = document.querySelectorAll(".reveal");

    const timelineItems = document.querySelectorAll(".timeline-item");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        revealObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.1
            }
        );

        revealItems.forEach(item => {
            revealObserver.observe(item);
        });


        const timelineObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        timelineObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.2
            }
        );

        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });

    } else {

        revealItems.forEach(item => {
            item.classList.add("active");
        });

        timelineItems.forEach(item => {
            item.classList.add("active");
        });

    }


    /* =================================================
       ROTATING LOVE QUOTES
    ================================================= */

    const quotes = [

        "❤️ Every memory tells a story.",

        "❤️ Every photo is a chapter.",

        "❤️ Every adventure becomes a treasure.",

        "❤️ Love lives in the little moments.",

        "❤️ The best days become forever memories.",

        "❤️ Our story is still being written."

    ];

    const quoteBanner = getElement("quoteBanner");

    let quoteIndex = 0;

    function rotateQuote() {

        if (!quoteBanner) return;

        quoteBanner.style.opacity = "0";

        setTimeout(() => {

            quoteBanner.textContent = quotes[quoteIndex];

            quoteIndex++;

            if (quoteIndex >= quotes.length) {
                quoteIndex = 0;
            }

            quoteBanner.style.opacity = "1";

        }, 300);

    }

    if (quoteBanner) {

        rotateQuote();

        setInterval(rotateQuote, 6000);

    }


    /* =================================================
       FALLING PETALS
    ================================================= */

    const petalLayer = getElement("petalLayer");

    const petalCollection = [
        "🌸",
        "❀",
        "✿",
        "🍂"
    ];

    function createPetal() {

        if (!petalLayer) return;

        const petal = createElement("span", "petal");

        petal.textContent = petalCollection[
            Math.floor(Math.random() * petalCollection.length)
        ];

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.fontSize =
            (10 + Math.random() * 15) + "px";

        petal.style.animationDuration =
            (8 + Math.random() * 8) + "s";

        petal.style.setProperty(
            "--drift",
            (Math.random() * 250 - 125) + "px"
        );

        petalLayer.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 17000);

    }

    if (petalLayer) {
        setInterval(createPetal, 500);
    }


    /* =================================================
       SPARKLES
    ================================================= */

    const sparkleLayer = getElement("sparkleLayer");

    function createSparkle() {

        if (!sparkleLayer) return;

        const sparkle = createElement("div", "sparkle");

        sparkle.style.left = Math.random() * 100 + "vw";

        sparkle.style.top = Math.random() * 100 + "vh";

        sparkle.style.animationDuration =
            (1.5 + Math.random() * 2) + "s";

        sparkle.style.animationDelay =
            Math.random() * 2 + "s";

        sparkleLayer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 4000);

    }

    if (sparkleLayer) {
        setInterval(createSparkle, 300);
    }


    /* =================================================
       FIREFLIES
    ================================================= */

    const fireflyLayer = getElement("fireflyLayer");

    if (fireflyLayer) {

        for (let i = 0; i < 60; i++) {

            const firefly = createElement("div", "firefly");

            firefly.style.left = Math.random() * 100 + "vw";

            firefly.style.top = Math.random() * 100 + "vh";

            firefly.style.animationDelay =
                Math.random() * 5 + "s, " +
                Math.random() * 5 + "s";

            firefly.style.animationDuration =
                (10 + Math.random() * 15) + "s, " +
                (2 + Math.random() * 3) + "s";

            fireflyLayer.appendChild(firefly);

        }

    }


    /* =================================================
       FLOATING HEARTS
    ================================================= */

    const heartLayer = getElement("heartLayer");

    function createHeart() {

        if (!heartLayer) return;

        const heart = createElement("span", "floating-heart");

        heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (12 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (6 + Math.random() * 5) + "s";

        heartLayer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 12000);

    }

    if (heartLayer) {
        setInterval(createHeart, 4000);
    }


    /* =================================================
       HERO PARALLAX EFFECT
    ================================================= */

    const hero = document.querySelector(".hero-content");

    if (
        hero &&
        window.matchMedia("(hover: hover)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {

        document.addEventListener("mousemove", event => {

            const x = event.clientX / window.innerWidth - 0.5;

            const y = event.clientY / window.innerHeight - 0.5;

            hero.style.transform =
                `translate(${x * 12}px, ${y * 12}px)`;

        });

    }


    /* =================================================
       INITIALIZATION COMPLETE
    ================================================= */

    console.log("❤️ Jay & Charity website initialized successfully.");

    console.log(`📸 Total Photos: ${photos.length}`);

    console.log(`🎥 Total Videos: ${videos.length}`);

    console.log(`💕 Total Memories: ${memories.length}`);

});
