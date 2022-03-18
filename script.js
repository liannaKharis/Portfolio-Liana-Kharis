
gsap.registerPlugin(ScrollTrigger);
gsap.from(".ggg", {
    scrollTrigger: {
        trigger: ".ggg",
        start: "top center",
        toggleActions: "restart none none none"
      },
        x: 200,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.in",
        duration: 1.5,
        delay:0.5,
      });





      gsap.from(".icons", {
        x: -150,
        opacity: 0,
        ease: "power1.in",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".icons",
          start: "top center",
          toggleActions: "restart none none none"
        },
      });
    
      gsap.from(".project", {
            x: 80,
            opacity: 0,
            ease: "power2.in",
            stagger: 0.3,
            scrollTrigger: {
              trigger: ".project",
              start: "top center",
              toggleActions: "restart none none none"
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
      toggleActions: "restart none none none"
    },
  });


  gsap.from(".contactText", {
    y: 150,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
    ease: "power2.in",
    scrollTrigger: {
      trigger: ".contactText",
      start: "top bottom",
      toggleActions: "restart none none none"
    },
  });




    //   gsap.from(".imgAmI", {
    //     scrollTrigger: {
    //         trigger: ".imgAmI",
    //         start: "top center",
    //         toggleActions: "restart none none none"
    //       },
    //         y: -200,
    //         opacity: 0,
    //         ease: "power1.in",
    //         duration: 0.5,
    //         delay:0.5,
    //       });
    
    

  
// gsap.from(".boxTwo", {
//     y: 200,
//     opacity: 0,
//     ease: "power1.in",
//     duration: 0.5,
//     delay: 0.5,
//     scrollTrigger: {
//       trigger: ".boxTwo",
//       start: "right",
//     },
//   });
  

// 


 