// about-us-scroll

const observerAbout = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log("The entry.target is " + entry.target);
    const targetedDiv = entry.target.querySelector(".about-us-div");
    console.log("The square " + targetedDiv);
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
observerAbout.observe(document.querySelector(".about-us-section"));

const observerAbout2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log("The entry.target is " + entry.target);
    const targetedDiv = entry.target.querySelector(".about-us-image");
    console.log("The square " + targetedDiv);
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
observerAbout2.observe(document.querySelector(".about-us-section"));