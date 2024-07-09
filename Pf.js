// Get the image element
const image = document.getElementById('animateImage');

// Add event listener to trigger the animation
image.addEventListener('mouseover', () => {
    image.classList.add('animate');
});

// Remove the animation class when the mouse leaves the image
image.addEventListener('mouseleave', () => {
    image.classList.remove('animate');
});


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const message = document.getElementById('message').value;
    
    const subject = `Inquiry from ${name}`;
    const body = `Hi Siva,\n\n${message}\n\nBest regards,\n${name}`;
    
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Attempt to open mailto link
    window.location.href = mailtoLink;
    
    // Show success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    successMessage.style.animation = 'fadeIn 0.5s forwards';
  });
});