const page1Content = document.getElementById("page1-content");

const gola = document.getElementById("gola");

const page2 = document.querySelector("#page2");

const elem2Div = document.getElementsByClassName("elem2")[0];

const elem2Headings = Array.from(document.querySelectorAll(".elem2 h1"));

const page2Animation = () => {
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".elem2",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      markers: true,
    },
  });

  elem2Headings.forEach((heading, index) => {
    t1.from(heading, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  });
};
page2Animation();
const cursorEffect = () => {
  page1Content.addEventListener("mouseenter", () => {
    gsap.to(gola, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", () => {
    gsap.to(gola, {
      scale: 0,
      opacity: 0,
    });
  });
  page1Content.addEventListener("mousemove", (dets) => {
    gsap.to(gola, {
      x: dets.x,
      y: dets.y,
    });
  });
};

cursorEffect();
