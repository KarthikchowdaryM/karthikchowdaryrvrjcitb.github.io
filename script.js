
// Toggle navigation menu for mobile
document.getElementById('hamburger').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
  
  // Toggle the hamburger icon to show open/close animation
  this.classList.toggle('open');
});

// Smooth scroll to sections when a nav link is clicked
document.querySelectorAll('.nav-links li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });

    // Close the menu after clicking on the mobile nav link
    document.getElementById('nav-links').classList.remove('active');
    document.getElementById('hamburger').classList.remove('open');
  });
});

// Add click event to each favorite image to link to Wikipedia pages
document.querySelectorAll('.favorites-item img').forEach((img, index) => {
  img.addEventListener('click', function() {
    let url;
    if (index === 0) {
      url = 'https://en.wikipedia.org/wiki/Nandamuri_Taraka_Rama_Rao';
    } else if (index === 1) {
      url = 'https://en.wikipedia.org/wiki/N._Chandrababu_Naidu';
    } else if (index === 2) {
      url = 'https://en.wikipedia.org/wiki/N._T._Rama_Rao_Jr.';
    }
    window.open(url, '_blank');
  });
});

// Add click event to Instagram icon
document.getElementById('instagram-icon').addEventListener('click', function() {
  const instagramLink = 'https://www.instagram.com/your_instagram_handle/';  // Replace with your Instagram link
  window.open(instagramLink, '_blank');
});

// Smooth animation for yellow balls
const balls = document.querySelectorAll('.yellow-ball');
balls.forEach(ball => {
  const animationDuration = Math.random() * 5 + 3; // Random duration between 3 and 8 seconds
  ball.style.animationDuration = `${animationDuration}s`;
  ball.style.animationTimingFunction = 'ease-in-out';
});

// Favorites section animation when scrolling into view
const favoritesSection = document.querySelector('.favorites-grid');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.favorites-item').forEach(item => {
        item.classList.add('animate');
      });
    }
  });
}, { threshold: 0.5 });

observer.observe(favoritesSection);

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
  } else {
    alert(`Thank you ${name}! Your message has been sent.`);
    document.getElementById('contact-form').reset();
  }
});
