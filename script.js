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
      start: "top 50%",
      end: "bottom 29%",
      markers: true,
      scrub: 3,
    },
  });

  elem3Text.forEach((heading, index) => {
    t2.from(heading, {
      y: 100,
      duration: 3,
      zIndex: 14,
      delay: 2,
      // opacity: 0,
      ease: "back",
    });
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

/************* LOCOMOTIVE SCROLL TRIGGER CODEPEN CODE */
/************************************************************** */

/*Using Locomotive Scroll from Locomotive https:github.com/locomotivemtl/locomotive-scroll

 const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#main"),
   smooth: true,
 });
  each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
 locoScroll.on("scroll", ScrollTrigger.update);

  tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
 ScrollTrigger.scrollerProxy("#main", {
   scrollTop(value) {
     return arguments.length
       ? locoScroll.scrollTo(value, 0, 0)
       : locoScroll.scroll.instance.scroll.y;
   },  we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
     return {
       top: 0,
       left: 0,
       width: window.innerWidth,
       height: window.innerHeight,
     };
   },
    LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
   pinType: document.querySelector("#main").style.transform
     ? "transform"
     : "fixed",
 });

  each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
 ScrollTrigger.refresh();
 */
