// Scroll reveal animation
if (typeof ScrollReveal !== "undefined") {
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: false
  });

  srtop.reveal(".home .content h2", { delay: 200 });
  srtop.reveal(".home .content p", { delay: 200 });
  srtop.reveal(".home .content .btn", { delay: 200 });
  srtop.reveal(".home .image", { delay: 400 });
  srtop.reveal(".home .social-icons li", { interval: 150 });

  srtop.reveal(
    ".about .content h3, .about .content .tag, .about .content p, .about .content .box-container, .about .content .resumebtn",
    { delay: 200 }
  );

  srtop.reveal(".skills .container", { delay: 200 });
  srtop.reveal(".skills .container .bar", { interval: 100 });

  srtop.reveal(".education .box", { interval: 200 });
  srtop.reveal(".work .box", { interval: 200 });

  srtop.reveal(".experience .timeline", { delay: 400 });
  srtop.reveal(".experience .timeline .container", { interval: 300 });

  // Updated contact section animation
  // Use this because your new contact section uses .contact-direct-container,
  // not .contact .container
  srtop.reveal(".contact-direct-container", {
    delay: 400,
    reset: false
  });

  srtop.reveal(".contact-direct-image", {
    delay: 500,
    origin: "left",
    reset: false
  });

  srtop.reveal(".contact-direct-content", {
    delay: 600,
    origin: "right",
    reset: false
  });

  srtop.reveal(".contact-card", {
    interval: 150,
    reset: false
  });
}
// Typed text effect
document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing-text");

  if (typingElement) {
    if (typeof Typed !== "undefined") {
      new Typed(".typing-text", {
        strings: [
          "MBA Student",
          "Business Administration",
          "Project Management",
          "Public Relations",
          "Entrepreneurship Projects"
        ],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 700,
      });
    } else {
      // Fallback typing effect if Typed.js CDN does not load
      const words = [
        "MBA Student",
        "Business Administration",
        "Project Management",
        "Public Relations",
        "Entrepreneurship Projects"
      ];

      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
          typingElement.textContent = currentWord.substring(0, charIndex--);
        } else {
          typingElement.textContent = currentWord.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex > currentWord.length) {
          isDeleting = true;
          setTimeout(typeEffect, 900);
          return;
        }

        if (isDeleting && charIndex < 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, isDeleting ? 40 : 80);
      }

      typeEffect();
    }
  }
});
$(document).ready(function () {

  // Mobile menu bar / hamburger toggle
  $('#menu').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  // Close menu only when clicking a menu link
  $('.navbar a').on('click', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

  $(window).on('scroll load', function () {

    // Scroll top button
    if (window.scrollY > 60) {
      $('#scroll-top').addClass('active');
    } else {
      $('#scroll-top').removeClass('active');
    }

    // Active menu highlight while scrolling
    $('section').each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr('id');

      if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }
    });
  });

  // Smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
    const target = $($(this).attr('href'));

    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500, 'linear');
    }
  });

});