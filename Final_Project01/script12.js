// loader animation code
gsap.from(".line h1", {
    y: 170,
    opacity: 0,
    stagger: 0.4,
    duration: 0.5,
    delay: 0.5

})

// loader timer code
var h5timer = document.querySelector("#line1-part1 h5")
var grow = 0;
setInterval(function () {
    if (grow < 100) {
        h5timer.innerHTML = grow++;
    } else {
        h5timer.innerHTML = grow;
    }
}, 28)

// hide loader
var tl = gsap.timeline();
tl.to("#loader", {
    opacity:0,
    duration:0.4,
    delay:3.38,
})