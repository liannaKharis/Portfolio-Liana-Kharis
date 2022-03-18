
gsap.registerPlugin(ScrollTrigger);
gsap.from(".ggg", {
    scrollTrigger: {
        trigger: ".ggg",
        start: "top center",
       
      },
        y: -100,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.in",
        duration: 0.5,
        delay:0.5,
      });





      gsap.from(".icons", {
        y: -150,
        opacity: 0,
        ease: "power1.in",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".icons",
          start: "top center",
          
        },
      });
    
      gsap.from(".project", {
            y: 80,
            opacity: 0,
            ease: "power2.in",
            stagger: 0.3,
            scrollTrigger: {
              trigger: ".project",
              start: "top center",
           
            },
          });

  gsap.from("form", {
    y: -150,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
    ease: "power2.in",
    scrollTrigger: {
      trigger: "form",
      start: "top center",
   
    },
  });


  gsap.from(".contactText", {
    y: -150,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
    ease: "power2.in",
    scrollTrigger: {
      trigger: ".contactText",
      start: "top bottom",
    
    },
  });



