
    function toggleMore() {
      const moreText = document.getElementById('more-text');
      const btn = document.querySelector('.about-btn');
       const dots = document.querySelector("#dots");

      if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'block';
        btn.textContent = 'Read Less';
        dots.style.display = "none"
        btn.style.transition= all , 0.3 , ease;
      } else {
        moreText.style.display = 'none';
        btn.textContent = 'Read More';
         dots.style.display = "inline";
      }
    }

      window.onload = function () {
      document.getElementById('more-text').style.display = 'none';
      document.querySelector('.about-btn').textContent = 'Read More';
    };


  // when click the nav-links and color will change

  const links = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('section');

  links.forEach(link => {
    link.addEventListener('click', function() {
      links.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });
 
  document.querySelector('#menu-icon').onclick = function () {
  document.querySelector('.navbar').classList.toggle('active');
};

  //=============== Toogle Navbar===============// ;

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".navbar a");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-bars");   // remove when opening
    menuIcon.classList.toggle("fa-xmark");  // add close icon
    navbar.classList.toggle("active");
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-xmark");
        navbar.classList.remove("active");
    });
});


  




// Listen for scroll events on the window
window.addEventListener('scroll', () => {
 
  let currentSection = '';

  // Loop through all page sections
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;   // Adjust for navbar height
    const sectionHeight = section.clientHeight;   // Get the height of each section

 
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.id;  // Store the id of the visible section
    }
  });


  if (window.scrollY < -70) {
    currentSection = 'home';
  }


  links.forEach(link => {
    link.classList.remove('active');
    const linkTarget = link.getAttribute('href').substring(1); // remove '#' from href
    if (linkTarget === currentSection) {
      link.classList.add('active');
    }
  });
});



  /*==========Typed.js Animation ====================*/



    var typed = new Typed('#element', {
      strings: ['Web Developer', 'Web Designer' ,'Frontend Expert', 'Backend Specialist' , 'API Integratar' , 'CMS Developer' , 'Database Developer.'],
      typeSpeed: 150,  
    backSpeed: 80,    
    backDelay: 1000,  
    loop: true 
    })


  //=================Scroll reveal------------------------//

   
      // Initialize ScrollReveal properly
      const sr = ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
        });
        
        // Reveal elements from the top
        sr.reveal('.home-content, .heading , .s-heading , .headings, .headingc' ,  { origin: 'top' });
        sr.reveal('.box, .services-container' ,  { origin: 'bottom' });
        sr.reveal('.about-img' ,  { origin: 'left' });
        sr.reveal('.about-content' ,  { origin: 'right' });



  

