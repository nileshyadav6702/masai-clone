let tl=gsap.timeline()
let header=document.querySelectorAll('header .right ul li')
tl.from(header,{
    y:'-100%',
    opacity:0,
    stagger:0.3,
    ease:Power3
})


//gsap to masai cources
// gsap.registerPlugin(ScrollTrigger);

gsap.from('.rolls .one',{
    x:-500,
    duration:1,
    ease:'Power5',
    scale:0,
    rotate:'-30',
    scrollTrigger:{
        trigger:'.rolls .one',
        scroller:'body',
        start:'top 90%',
        toggleActions:'restart pause resume pause'
    },
   
})
gsap.from('.rolls .two',{
    x:500,
    duration:1,
    ease:'Power5',
    scale:0,
    rotate:'30',
    scrollTrigger:{
        trigger:'.rolls .two',
        scroller:'body',
        start:'top 90%',
        toggleActions:'restart pause resume pause'
    },
    
})
gsap.from('.features .one',{
    x:-600,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:'.features .one',
        scroller:'body',
        start:'top 100%',
        toggleActions:'restart pause resume pause'
    }


})
gsap.from('.features .three',{
    x:600,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:'.features .three',
        scroller:'body',
        start:'top 100%',
        toggleActions:'restart pause resume pause'
    }


})
gsap.from('.features .two',{
    y:'-100%',
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:'.features .two',
        scroller:'body',
        start:'top 100%',
        toggleActions:'restart pause resume pause'
    }
})


