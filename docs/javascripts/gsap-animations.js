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

    // Card section animations - trigger based on card-section
    gsap.utils.toArray(".card-section").forEach((cardSection, index) => {
        // Get the text-block and image-block within this card section
        const textBlock = cardSection.querySelector(".text-block");
        const imageBlock = cardSection.querySelector(".image-block");
        
        // Enhanced text-block animation
        if (textBlock) {
            // Initial state - set text block to be invisible and rotated
            gsap.set(textBlock, {
                opacity: 0,
                x: -100,
                rotationY: -15,
                scale: 0.8,
                filter: "blur(10px)"
            });
            
            gsap.to(textBlock, {
                scrollTrigger: {
                    trigger: cardSection,
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse"
                },
                duration: 1.5,
                x: 0,
                opacity: 1,
                rotationY: 0,
                scale: 1,
                filter: "blur(0px)",
                ease: "power3.out"
            });
            
            // Animate text content elements with stagger
            const textElements = textBlock.querySelectorAll("h2, p, a");
            gsap.from(textElements, {
                scrollTrigger: {
                    trigger: cardSection,
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse"
                },
                duration: 0.8,
                y: 30,
                opacity: 0,
                stagger: 0.15,
                ease: "power2.out",
                delay: 0.3
            });
            
            // Add hover effects to "Learn more" links
            const learnMoreLinks = textBlock.querySelectorAll("a");
            learnMoreLinks.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    gsap.to(link, {
                        scale: 1.15,
                        color: "#ffffff",
                        backgroundColor: "#2962ff",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });
                
                link.addEventListener('mouseleave', () => {
                    gsap.to(link, {
                        scale: 1,
                        color: "#2962ff",
                        backgroundColor: "transparent",
                        padding: "0px 0px",
                        borderRadius: "0px",
                        textShadow: "none",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });
            });
        }
        
        // Enhanced image-block animation
        if (imageBlock) {
            // Initial state - set image block to be invisible and rotated
            gsap.set(imageBlock, {
                opacity: 0,
                x: 100,
                rotationY: 15,
                scale: 0.8,
                filter: "blur(10px)"
            });
            
            gsap.to(imageBlock, {
                scrollTrigger: {
                    trigger: cardSection,
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse"
                },
                duration: 1.5,
                x: 0,
                opacity: 1,
                rotationY: 0,
                scale: 1,
                filter: "blur(0px)",
                ease: "power3.out",
                delay: 0.2
            });
            
            // Enhanced hover effect for image-block
            imageBlock.addEventListener('mouseenter', () => {
                gsap.to(imageBlock, {
                    scale: 1.08,
                    rotationY: 5,
                    duration: 0.4,
                    ease: "power2.out"
                });
                
                // Add subtle glow effect
                // gsap.to(imageBlock, {
                //     boxShadow: "0 25px 35px rgba(0, 0, 0, 0.2)",
                //     duration: 0.4,
                //     ease: "power2.out"
                // });
            });
            
            imageBlock.addEventListener('mouseleave', () => {
                gsap.to(imageBlock, {
                    scale: 1,
                    rotationY: 0,
                    duration: 0.4,
                    ease: "power2.out"
                });
                
                // Remove glow effect
                // gsap.to(imageBlock, {
                //     boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)",
                //     duration: 0.4,
                //     ease: "power2.out"
                // });
            });
            
            // Add click animation
            imageBlock.addEventListener('click', () => {
                gsap.to(imageBlock, {
                    scale: 0.95,
                    duration: 0.1,
                    ease: "power2.in",
                    yoyo: true,
                    repeat: 1
                });
            });
        }
    });

    // --- Team Section Animations ---
    // Animate the team-header
    gsap.from(".team-header", {
        scrollTrigger: {
            trigger: ".Team-section",
            start: "top 60%",
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Animate each team-figure with stagger
    gsap.from(".team-figure", {
        scrollTrigger: {
            trigger: ".Team-section",
            start: "top 60%",
            toggleActions: "play none none none"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // --- Partners Section Animations ---
    // Animate the partners-header
    gsap.from(".partners-header", {
        scrollTrigger: {
            trigger: ".partners-section",
            start: "top 60%",
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Animate each partner-item with stagger
    gsap.from(".partner-item", {
        scrollTrigger: {
            trigger: ".partners-section",
            start: "top 60%",
            toggleActions: "play none none none"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

});