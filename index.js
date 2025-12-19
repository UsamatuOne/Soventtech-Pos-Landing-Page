// const link = document.querySelector("#link");
// const offcanvasBody = document.querySelector("#offcanvasNavbar");

// link.addEventListener("click", () => {
//     if (window.innerWidth < 766) {
//         offcanvasBody.style.display = "none";
//     }
// })

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");

box1.addEventListener("mouseover", () => {
    gsap.to(box1, {
        scale: 1.05,
        duration: 0.2,
        y: -2
    });
})
box1.addEventListener("mouseout", () => {
    gsap.to(box1, {
        scale: 1,
        duration: 0.2,
        y: 2

    });
})

box2.addEventListener("mouseover", () => {
    gsap.to(box2, {
        scale: 1.05,
        duration: 0.2,
        y: -2
    });
})
box2.addEventListener("mouseout", () => {
    gsap.to(box2, {
        scale: 1,
        duration: 0.2,
        y: 2
    });
})

box3.addEventListener("mouseover", () => {
    gsap.to(box3, {
        scale: 1.05,
        duration: 0.2,
        y: -2
    });
})
box3.addEventListener("mouseout", () => {
    gsap.to(box3, {
        scale: 1,
        duration: 0.2,
        y: 2
    });
})

box4.addEventListener("mouseover", () => {
    gsap.to(box4, {
        scale: 1.05,
        duration: 0.2,
        y: -2
    });
})
box4.addEventListener("mouseout", () => {
    gsap.to(box4, {
        scale: 1,
        duration: 0.2,
        y: 2
    });
})

box5.addEventListener("mouseover", () => {
    gsap.to(box5, {
        scale: 1.05,
        duration: 0.2,
        y: -2
    });
})
box5.addEventListener("mouseout", () => {
    gsap.to(box5, {
        scale: 1,
        duration: 0.2,
        y: 2
    });
})

box6.addEventListener("mouseover", () => {
    gsap.to(box6, {
        scale: 1.05,
        duration: 0.2,
        y: -2
    });
})
box6.addEventListener("mouseout", () => {
    gsap.to(box6, {
        scale: 1,
        duration: 0.2,
        y: 2
    });
})