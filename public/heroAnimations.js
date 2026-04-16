// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    
    gsap.from('.logo', {
        opacity: 0.15,
        duration: 3,
    });
    gsap.from('.entrenamientos-top', {
        opacity: 1,
        x: -800,
        duration: 3,
    });
    gsap.from('.entrenamientos-bottom', {
        opacity: 1,
        x: 800,
        duration: 3,
    });

    let header = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            // markers: true,
            scrub: 8,
            pin: true,
            end: 'bottom top',
            pinSpacing: false,
        },
    });

    header.to('.logo', {
        scale: 0.5,
    });



  
})