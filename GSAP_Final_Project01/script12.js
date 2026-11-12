function loaderAnimation(){
    var tl = gsap.timeline();

tl.from(".line h1", {
    y: 170,
    opacity: 0,
    stagger: 0.4,
    duration: 0.5,
    delay: 0.5,
})

tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
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
    },
})
tl.to(".line h2", {
    animationName:"anime",
    opcaity:1,
})
tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 0,
    display:"none",
})
tl.from("#page1", {
    y:1000,
    opacity:0,
    duration:1,
    ease:Power4,
})
tl.from("#nav", {
    opacity:0
})
tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    y:150,
    stagger:0.2
} )
};
loaderAnimation(); // loader animation

function crsrAnime(){
    document.addEventListener("mousemove", function(dets){
    gsap.to("#crsr", {
        top:dets.y,
        left:dets.x,
    })
})

Shery.makeMagnet("#nav-part2 h4");
}; //cursur animation
crsrAnime();

