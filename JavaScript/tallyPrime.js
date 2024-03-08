// tallyPrime animations

// tally-div-1 animation
const observerTally1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".tally-intro1");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div0-animation");
        }, 100);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerTally1.observe(document.querySelector(".tally-div1"));


  //   tally-div1-image animation
  const observerTally2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".tally-div1-image");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div1-animation");
        }, 100);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerTally2.observe(document.querySelector(".tally-div1"));


  // tally-intro2 animation
const observerTally3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".tally-intro2");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div1-animation");
        }, 100);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerTally3.observe(document.querySelector(".tally-div2"));


  //   tally-div2-image animation
  const observerTally4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".tally-div2-image");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div0-animation");
        }, 100);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerTally4.observe(document.querySelector(".tally-div2"));


  // tally-intro3 animation
const observerTally5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".tally-intro3");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div0-animation");
        }, 100);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerTally5.observe(document.querySelector(".tally-div3"));


  //   tally-div3-image animation
  const observerTally6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".tally-div3-image");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div1-animation");
        }, 100);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerTally6.observe(document.querySelector(".tally-div3"));

  // tally-intro4 animation
const observerTally7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".tally-intro4");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div1-animation");
        }, 100);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerTally7.observe(document.querySelector(".tally-div4"));


  //   tally-div4-image animation
  const observerTally8 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log("The entry.target is " + entry.target);
      const targetedDiv = entry.target.querySelector(".tally-div4-image");
    //   console.log("The square " + targetedDiv);
      if (entry.isIntersecting) {
        setTimeout(() => {
          targetedDiv.classList.add("welcome-div0-animation");
        }, 100);
        return; // if we added the class, exit the function
      }
      /* We're not intersecting, so remove the class! if you want to apply animation 
      every time we scroll to that element then include below line */
      // square.classList.remove("welcome-div1-animation");
    });
  });
  observerTally8.observe(document.querySelector(".tally-div4"));