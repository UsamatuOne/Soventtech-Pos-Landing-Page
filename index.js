
// boxes animation
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

// price card animation
const plan1 = document.querySelector(".plan1");
const plan2 = document.querySelector(".plan2");
const plan3 = document.querySelector(".plan3");

plan1.addEventListener("mouseover", () => {
    gsap.to(plan1, {
        scale: 1.05,
        duration: 0.2,
        y: -2
    });
})
plan1.addEventListener("mouseout", () => {
    gsap.to(plan1, {
        scale: 1,
        duration: 0.2,
        y: 2
    });
})

plan2.addEventListener("mouseover", () => {
    gsap.to(plan2, {
        scale: 1.05,
        duration: 0.2,
        y: -2
    });
})
plan2.addEventListener("mouseout", () => {
    gsap.to(plan2, {
        scale: 1,
        duration: 0.2,
        y: 2
    });
})

plan3.addEventListener("mouseover", () => {
    gsap.to(plan3, {
        scale: 1.05,
        duration: 0.2,
        y: -2
    });
})
plan3.addEventListener("mouseout", () => {
    gsap.to(plan3, {
        scale: 1,
        duration: 0.2,
        y: 2
    });
})

// current year
const year = document.querySelector("#year");

const date = new Date();
const years = date.getFullYear();

year.textContent = years;