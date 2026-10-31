gsap.from("#page1 #circle",{
    scale:0,
    duration:2,
    delay:0.5,
    rotate:360,
})
gsap.from("#page2 #circle",{
    scale:0,
    duration:5,
    delay:0.5,
    rotate:360,
})
gsap.to("#page3 img", {
    width:"100%",
    scrollTrigger:{
        trigger:"#page3",
        scoller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})