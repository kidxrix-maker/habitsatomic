// ---- HABIT TRACKER COUNTER ----
// When a checkbox is clicked, count how many are checked

const checkboxes = document.querySelectorAll('.check');
const countDisplay = document.getElementById('count');

checkboxes.forEach(function(box) {
  box.addEventListener('change', function() {
    let total = 0;
    checkboxes.forEach(function(b) {
      if (b.checked) total++;
    });
    countDisplay.textContent = total;
  });
});


// ---- FADE IN ON SCROLL ----
// Add "show" class to sections when they appear on screen

const sections = document.querySelectorAll('section');

sections.forEach(function(section) {
  section.classList.add('fade-in');
});

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

sections.forEach(function(section) {
  observer.observe(section);
});
