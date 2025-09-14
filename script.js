
// Animate only when section is visible
//const section = document.querySelector('.counter-card').parentElement;

// const observer = new IntersectionObserver(entries => {
//   if (entries[0].isIntersecting) {
//     animateCounters();
//     observer.unobserve(section);
//   }
// }, { threshold: 0.5 });

// observer.observe(section);

// Counter animation


const counters = document.querySelectorAll('[data-target]');
const speed = 200; // lower is faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Run when page loads
document.addEventListener('DOMContentLoaded', animateCounters);

