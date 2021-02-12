
    function toggleFuzzyGlow() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    if (window.innerWidth < 770) {
      button.classList.add('fuzzy-glow');
    } else {
      button.classList.remove('fuzzy-glow');
    }
  });
}
window.addEventListener('resize', toggleFuzzyGlow);
/*Tabs*/
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.querySelector(target).classList.add('active');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
  });
});
      // Tabbed content functionality
      const tabButtons = document.querySelectorAll('.tab-button');
      const tabContents = document.querySelectorAll('.tab-content');
      function switchTab(tab) {
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        tab.classList.add('active');
        const content = document.querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`);
        content.classList.add('active');
      }
      tabButtons.forEach(button => button.addEventListener('click', () => switchTab(button)));

for (var i = 0; i < 50; i++) {
  document.write("<br>");
}

