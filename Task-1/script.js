document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
      this.classList.add('shake');
      setTimeout(() => {
        this.classList.remove('shake');
      }, 1000); 
    });
  });