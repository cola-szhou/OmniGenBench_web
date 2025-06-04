// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Import GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    gsap.from(".hero-container", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power3.out"
    });

    // Animate the hero image
    gsap.from(".hero-image", {
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
    gsap.utils.toArray("h2").forEach(heading => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top 80%",
                toggleActions: "play none none play"
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        });
    });

    // Features section animation
    gsap.from(".feature-item", {
        scrollTrigger: {
            trigger: "#features",
            start: "top 30%",
            end: "bottom 70%",
            toggleActions: "restart none restart pause",
            markers: true
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

});
 

