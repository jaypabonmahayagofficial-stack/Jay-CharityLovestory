/* FALLING LEAVES */

function createLeaf(){

    const leaf =
    document.createElement("div");

    leaf.classList.add("leaf");

    leaf.innerHTML = "🍂";

    leaf.style.left =
    Math.random() * 100 + "vw";

    leaf.style.animationDuration =
    (6 + Math.random() * 8) + "s";

    document.body.appendChild(leaf);

    setTimeout(() => {

        leaf.remove();

    },15000);
}

setInterval(createLeaf,300);


/* FIREFLIES */

for(let i = 0; i < 40; i++){

    const firefly =
    document.createElement("div");

    firefly.classList.add("firefly");

    firefly.style.left =
    Math.random() * 100 + "vw";

    firefly.style.top =
    Math.random() * 100 + "vh";

    document.body.appendChild(firefly);
}


/* SCROLL REVEAL */

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");
        }

    });

});

document
.querySelectorAll(".reveal")
.forEach(section=>{

    observer.observe(section);

});


/* GALLERY */

const upload =
document.getElementById("mediaUpload");

const gallery =
document.getElementById("gallery");

upload.addEventListener("change",(e)=>{

    const files =
    [...e.target.files];

    files.forEach(file=>{

        const url =
        URL.createObjectURL(file);

        const card =
        document.createElement("div");

        card.classList.add("memory");

        if(file.type.startsWith("image")){

            card.innerHTML =
            `${url}`;

            card.addEventListener("click",()=>{

                document
                .getElementById("lightbox")
                .style.display="flex";

                document
                .getElementById("lightboxImage")
                .src=url;

                createHearts();

            });

        }else{

            card.innerHTML=
            `
            <video controls>
                ${url}
            </video>
            `;
        }

        gallery.appendChild(card);

    });

});


/* LIGHTBOX CLOSE */

document
.getElementById("lightbox")
.addEventListener("click",function(){

    this.style.display = "none";

});


/* HEART EFFECT */

function createHearts(){

    for(let i=0;i<20;i++){

        const heart =
        document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
        (window.innerWidth/2 +
        (Math.random()*200-100))
        + "px";

        heart.style.top =
        (window.innerHeight/2)
        + "px";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },3000);

    }

}