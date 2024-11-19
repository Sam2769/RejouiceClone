const page1Content = document.getElementById("page1-content");

const gola = document.getElementById("gola");

const elem2Headings = Array.from(document.querySelectorAll(".elem2 h1"));
const page2Animation = () => {
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".elem1 #page2-start",
      scroller: "body",
      start: "top 60%",
      end: "bottom 20%",
      scrub: 3,
      markers: false,
    },
  });

  elem2Headings.forEach((heading, index) => {
    t1.from(heading, {
      y: 150,
      opacity: 0,
      duration: 3,
      // ease: "power3.inOut",
      ease: "back",
      stagger: 0.5,
    });
  });
};

page2Animation();

const elem3Text = Array.from(document.querySelectorAll(".elem3-part2 h1"));
console.log(elem3Text);
const page2BottomAnimation = () => {
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#emptyDiv",
      scroller: "body",
      start: "top 75%",
      end: "top 35%",
      markers: false,
      scrub: 5,
    },
  });

  elem3Text.forEach((heading, index) => {
    t2.fromTo(
      heading,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.5,
        stagger: 0.5,
        // opacity: 0,
        ease: "back",
      }
    );
  });
};

page2BottomAnimation();

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

/************* Lennis CODE */
/************************************************************** */
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});
