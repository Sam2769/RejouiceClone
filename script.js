const page1Content = document.getElementById("page1-content");

const gola = document.getElementById("gola");

// PAGE 2 ELEMENTS SELECTION ******************************
const elem2Headings = Array.from(document.querySelectorAll(".elem2 h1"));
const line2 = document.querySelector(".line2");
const line2Replacement = document.querySelector(".line2-replacement");
const line3 = document.querySelector(".line3");
const line3Replacement = document.querySelector(".line3-replacement");
const serviceContainer = document.querySelector("#services");

serviceContainer.addEventListener("mouseover", () => {
  console.log("mouse entered service container");

  const timeline2 = gsap.timeline();
  const timeline3 = gsap.timeline();

  timeline2.to(line2, {
    x: 400,
    duration: 0.1,
  });

  timeline2.to(line2Replacement, {
    duration: 0.2,
    delay: 0,
    x: 370,
  });

  timeline3.to(line3, {
    x: 410,
    duration: 0.1,
  });

  timeline3.to(line3Replacement, {
    duration: 0.2,
    x: 410,
  });
});
// **************************************************
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
      stagger: 1.2,
    });
  });
};

page2Animation();

const elem3Text = Array.from(document.querySelectorAll(".elem3-part2 h1"));
const page2BottomAnimation = () => {
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#emptyDiv",
      scroller: "body",
      start: "top 75%",
      end: "top 35%",
      markers: false,
      scrub: 3,
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

const line = document.querySelector(".line");
const quoteArr = [];
const page3EndText = document.querySelector("#page3-end span");
const createquoteArr = () => {
  const quoteList = document.querySelectorAll("#quote span");
  quoteArr.push(quoteList[0]);
  quoteArr.push(quoteList[1]);
};

createquoteArr();

const page3EndAnimation = () => {
  const t = gsap.timeline({
    scrollTrigger: {
      trigger: ".gap",
      scroller: "body",
      start: "top 40%",
      end: "top 45%",
      markers: false,
      scrub: 2,
    },
  });

  t.fromTo(
    page3EndText,
    {
      y: 200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    }
  );
};

page3EndAnimation();

const quoteAnimation = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".gap",
      scroller: "body",
      start: "top 75%",
      end: "bottom 80%",
      markers: false,
      scrub: 2,
    },
  });

  quoteArr.forEach((elem, i) => {
    timeline.fromTo(
      elem,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 6,
        delay: 0.2,
      }
    );
  });

  gsap.to(line, {
    width: "100%",
    duration: 2,
    ease: "power3.out",
    delay: 5,
    scrollTrigger: {
      trigger: ".gap",
      scroller: "body",
      start: "top 60%",
      end: "bottom 80%",
      markers: false,
      scrub: 2,
    },
  });
};

quoteAnimation();

/************* Lennis CODE */
/************************************************************** */
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});
