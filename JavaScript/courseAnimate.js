// our courses animations

// intro1 animation
const observerCourses1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".intro1");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div0-animation");
        }, 200);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerCourses1.observe(document.querySelector(".intro-section-flex-container1"));

//   intro1-image animation
  const observerCourses2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".intro1-image");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div1-animation");
        }, 200);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerCourses2.observe(document.querySelector(".intro-section-flex-container1"));

//   intro2 animation
  const observerCourses3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".intro2");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div1-animation");
        }, 200);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerCourses3.observe(document.querySelector(".intro-section-flex-container2"));

//    intro2-image animation
  const observerCourses4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".intro2-image");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div0-animation");
        }, 200);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerCourses4.observe(document.querySelector(".intro-section-flex-container2"));