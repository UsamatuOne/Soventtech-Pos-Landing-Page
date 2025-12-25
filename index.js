gsap.registerPlugin(ScrollTrigger);

// hero text animations
gsap.from(".f-text", {
    y: -80,
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    delay: 0.80,
    ease: "power3.out"
});

gsap.from(".f-p", {
    y: 70,
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    delay: 0.90,
    ease: "power3.out"
});
gsap.from(".f-b", {
    y: 70,
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    delay: 1.2,
    ease: "power3.out"
});

// hero image animations
gsap.from(".img1", {
    x: 90,
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    delay: 0.3,
    ease: "power3.out"
});

// second section  animations
gsap.from(".s-text", {
    y: 60,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#features",
        start: "top 80%",
        toggleActions: "restart none none none"
    }
});
gsap.from(".feature-box", {
    y: 80,
    opacity: 0,
    scale: 0.9,
    stagger: 0.3,
    duration: 2,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#features",
        start: "top 80%",
        toggleActions: "restart none none none"
    }
});

// third section  animations
gsap.from(".t-text", {
    y: 80,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#pricing",
        start: "top 80%",
        toggleActions: "restart none none none"
    }
});

gsap.from(".pricing-card", {
    y: 80,
    opacity: 0,
    scale: 0.9,
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
gsap.from(".fo-text", {
    y: 80,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "restart none none none"
    }
});

gsap.from(".s-p", {
    y: 80,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "restart none none none"
    }
})

gsap.from(".contact-f", {
    x: 80,
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "restart none none none"
    }
});
gsap.from(".contact-m", {
    x: 80,
    opacity: 0,
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
gsap.from(".footer-text", {
    y: 60,
    opacity: 0,
    duration: 2,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#footer",
        start: "top 60%",
        end: "top 40%%",
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