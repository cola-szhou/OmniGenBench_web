// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Import GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    // gsap.from(".hero-container", {
    //     duration: 1.5,
    //     y: 100,
    //     opacity: 0,
    //     ease: "power3.out"
    // });

    // Animate the hero image
    gsap.from(".hero-container", {
        duration: 2,
        scale: 1.2,
        opacity: 0,
        ease: "power2.out",
        delay: 0
    });

    gsap.fromTo(".hero-container",
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-container",
            start: "top top",
            end: "bottom top",
            scrub: true,
            toggleActions: "play none none reverse",
          }
        }
    );
    

    // Animate headings with scroll trigger
    // gsap.utils.toArray("h2").forEach(heading => {
    //     gsap.from(heading, {
    //         scrollTrigger: {
    //             trigger: heading,
    //             start: "top 80%",
    //             toggleActions: "play none none play"
    //         },
    //         duration: 1,
    //         y: 50,
    //         opacity: 0,
    //         ease: "power2.out"
    //     });
    // });

    // Features section animation
    gsap.from(".feature-item", {
        scrollTrigger: {
            trigger: "#features",
            start: "top 30%",
            end: "bottom 70%",
            toggleActions: "restart none restart pause",
        },
        duration: 1.5,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Feature header animation
    gsap.from(".feature-header", {
        scrollTrigger: {
            trigger: "#features",
            start: "top 30%",
            end: "bottom 70%",

            toggleActions: "restart none restart pause"
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".md-nav--primary", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0,
        ease: "power2.out"
    });

    gsap.from(".md-nav--secondary", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0,
        ease: "power2.out"
    });

    

    const tl2 = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

    tl2.from(".hero-title", {
      y: 50,
      opacity: 0
    })
    .from(".hero-description", {
      y: 50,
      opacity: 0
    }, "-=0.5")
    .from(".hero-buttons", {
      y: 30,
      opacity: 0
    }, "-=0.5");
});

window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none", duration: 2 });

    const tl = gsap.timeline();
    tl.from(".red-box", {xPercent: -100})
    .from(".blue-box", {xPercent: 100})
    .from(".green-box", {xPercent: -100})
    .from(".yellow-box", {xPercent: 100});

    ScrollTrigger.create({
        animation: tl,
        trigger: ".container",
        start: "top top",
        scrub: 1,
        end: "+=400",
        anticipatePin: 1,
    });
});