let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".mountain", 10, { y: -300 }, "-=10")
  .to(".hills", 50, { y: -300 }, "-=10")
  .fromTo(".img__1", { y: -50 }, { y: 0, duration: 10 }, "-=10");

let scene = new ScrollMagic.Scene({
  triggerElement: "wrapper",
  duration: "1000%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("wrapper")
  .addTo(controller);

let text = document.getElementById("text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 0.6 + "px";
});
