// Hide header on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
 // C# code
function myCSharpFunction() {
  // Check if the device is a touchscreen device
const isTouchDevice = 'ontouchstart' in document.documentElement;

// Get all the buttons
const buttons = document.querySelectorAll('.glow-on-hover');

// Add the appropriate class to each button based on the device
buttons.forEach((button) => {
  if (isTouchDevice) {
    button.classList.add('.fuzzy-glow');
    button.classList.remove('.glow-on-hover');
  } else {
    button.classList.add('.glow-on-hover');
    button.classList.remove('.fuzzy-glow');
  }
});

}
  


const button = document.querySelector('.glow-on-hover');
const isPhone = window.innerWidth <= 400; // Change breakpoint as necessary

if (isPhone) {
  button.classList.add('.fuzzy-glow');
}

 

function toggleFuzzyGlow() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      if (window.innerWidth < 768) {
        button.classList.add('fuzzy-glow');
      } else {
        button.classList.remove('fuzzy-glow');
      }
    });
  }
  
  window.addEventListener('resize', toggleFuzzyGlow);
  
 