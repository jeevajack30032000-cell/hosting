// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Target all the lines we want to animate
const lines = document.querySelectorAll(".animated-line");

// Animate each line in a sequence
lines.forEach((line, index) => {
    // Create a GSAP Timeline for the current line
    const tl = gsap.timeline({
        // Configure ScrollTrigger for this timeline
        scrollTrigger: {
            trigger: line,
            // Start the animation when the line hits the center of the viewport
            start: "top center+=15%", 
            // End the animation when the line is 30% up from the bottom
            end: "bottom center",
            toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
            // markers: true // Uncomment for visual debugging of start/end points
        }
    });

    // Define the animation for the current line
    tl.to(line, {
        opacity: 1, // Fade in
        y: 0, // Move back to original vertical position (from 100%)
        rotationX: 0, // Rotate back to original 0 degrees (from -90deg)
        duration: 1.5, // Animation duration
        ease: "power3.out", // Smooth easing for a dramatic feel
        delay: index * 0.1 // Stagger the lines slightly (0s, 0.1s, 0.2s, etc.)
    });
});