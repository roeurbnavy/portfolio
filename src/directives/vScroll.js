// src/directives/vScroll.js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        // Optional: Stop observing once it's visible if we only want to animate once
        // observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px',
  },
)

export default {
  mounted(el) {
    el.classList.add('scroll-hidden')
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
