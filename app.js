// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

function addClassWhenVisible(element, className) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop - windowHeight <= 0) {
      element.classList.add(className);
    }
  }

  // Call the function on scroll
  window.addEventListener("scroll", function () {
    const moreAbout = document.querySelector(".more-about");
    const skills = document.querySelector(".skills");
    const projects = document.querySelector(".projects");
    const contact = document.querySelector(".contact");

    addClassWhenVisible(moreAbout, "fade-in");
    addClassWhenVisible(skills, "fade-in");
    addClassWhenVisible(projects, "fade-in");
    addClassWhenVisible(contact, "fade-in");
  });

  // Function to handle fading in sections when they enter the viewport
  function fadeSections() {
    const sections = document.querySelectorAll('.fade-in');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight) {
        // Section is in the viewport
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  }

  // Attach the function to the scroll event
  window.addEventListener('scroll', fadeSections);

  // Initial call to fadeSections to apply the effect on page load
  fadeSections();
