



gsap.registerPlugin(ScrollTrigger);

// hero text animations
gsap.fromTo(".f-text", {
    y: -80,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });

gsap.fromTo(".f-p", {
    y: 80,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

gsap.fromTo(".f-b", {
    y: 80,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 2,
        delay: 0.3,
        ease: "power3.out"
    });

// hero image animations
gsap.fromTo(".img1", {
    y: 90,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 2,
        delay: 0.3,
        ease: "power3.out"
    });

// second section  animations
gsap.fromTo(".s-text", {
    y: 60,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#features",
            start: "top 80%",
            toggleActions: "restart none none none"
        }
    });
gsap.fromTo(".feature-box", {
    y: 90,
    opacity: 0,
    scale: 0.7
},
    {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        duration: 0.5,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#features",
            start: "top 80%",
            toggleActions: "restart none none none"
        }
    });

// third section  animations
gsap.fromTo(".t-text", {
    y: 80,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#pricing",
            start: "top 80%",
            toggleActions: "restart none none none"
        }
    });

gsap.fromTo(".pricing-card", {
    y: 90,
    opacity: 0,
    scale: 0.5
},
    {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        duration: 2,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#pricing",
            start: "top 80%",
            toggleActions: "restart none none none"
        }
    });

// fourth section  animations
gsap.fromTo(".fo-text", {
    y: 80,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "restart none none none"
        }
    });

gsap.fromTo(".s-p", {
    y: 80,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "restart none none none"
        }
    })

gsap.fromTo(".contact-f", {
    y: 80,
    opacity: 0,
    scale: 0.9
},
    {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "restart none none none"
        }
    });
gsap.fromTo(".contact-m", {
    y: 80,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        scale: 0.9,
        stagger: 0.2,
        duration: 2,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "restart none none none"
        }
    });

// fifth section  animations
gsap.fromTo(".footer-text", {
    y: 60,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#footer",
            start: "top 60%",
            end: "top 40%",
            toggleActions: "restart none none none"
        }
    });





// boxes animation
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");

// gsap.fromTo(box1,
//     {
//         opacity: 0.1,
//         scale: 0.1
//     },
//     {

//         scale: 1,
//         opacity: 1,
//         scrollTrigger: (box1, {
//             trigger: box1,
//             start: "top 90%",
//             end: "top 50%",
//             ease: "power2.out",
//             opacity: 1,
//             scrub: true,
//             duration: 3,
//             // markers: true
//         })
//     });


box1.addEventListener("mouseover", () => {
    gsap.to([box1], {
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


