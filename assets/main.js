// assets/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for all links
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic content loading for blog entries (simulated)
    const blogPosts = document.querySelectorAll('.w3-container.w3-white');
    blogPosts.forEach(post => {
        post.addEventListener('click', () => {
            // Simulate loading content
            setTimeout(() => {
                alert("New content loaded!");
            }, 500);
        });
    });

    // Like button functionality
    document.querySelectorAll('.w3-button.w3-white.w3-border').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('liked');
            if (this.classList.contains('liked')) {
                this.innerHTML = '<b><i class="fa fa-thumbs-up"></i> Liked</b>';
            } else {
                this.innerHTML = '<b><i class="fa fa-thumbs-up"></i> Like</b>';
            }
        });
    });
});

function myFunction(id) {
    var element = document.getElementById(id);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target.querySelector('img');
          const text = entry.target.querySelector('.text-content');
          img.classList.add('fade-in');
          setTimeout(() => text.classList.add('slide-in'), 500); // Delay text animation
          observer.unobserve(entry.target); // Stop observing the target after animation
        }
      });
    }, { threshold: 0.1 });
  
    // Observe each .zig-zag container
    document.querySelectorAll('.zig-zag').forEach(container => {
      observer.observe(container);
    });
  });
  
  