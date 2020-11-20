// GSAP Animation

// Landing Page
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// const tl2 = gsap.timeline({
//   defaults: { duration: 2.5, ease: "elastic.out", y: -500 },
// });

tl.to(".text", {
  y: "0%",
  duration: 1,
  stagger: 0.25,
});

// tl.to(".slider", {
//   y: "-100%",
//   duration: 1.5,
//   delay: 0.5,
// });

tl.to(
  ".intro",
  {
    y: "-100%",
    duration: 2,
    opacity: 0,
  },
  "+=0.5"
);

tl.fromTo(
  ".logo",
  {
    opacity: 0,
    y: "10%",
  },
  {
    opacity: 1,
    duration: 0.5,
    y: "0",
  }
);

tl.fromTo(
  ".navbar",
  {
    opacity: 0,
    y: "10%",
  },
  {
    opacity: 1,
    duration: 0.5,
    y: "0",
  },
  "-=1.5"
);

tl.fromTo(
  ".big-text",
  {
    opacity: 0,
    y: "50%",
  },
  {
    opacity: 1,
    duration: 1,
    y: "0",
  },
  "-=1"
);
tl.fromTo(
  ".explore-btn",
  {
    opacity: 0,
    y: "10%",
  },
  {
    opacity: 1,
    duration: 0.5,
    y: "0",
  },
  "-=1"
);
// Landing Page END
