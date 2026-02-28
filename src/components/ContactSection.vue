<script setup>
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
  },
  {
    name: 'Email',
    url: 'mailto:contact@example.com',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  },
]
</script>

<template>
  <footer id="contact" class="contact-section">
    <div class="contact-container">
      <h2 class="section-title" v-scroll>Get In Touch</h2>
      <p class="contact-desc" v-scroll style="transition-delay: 100ms">
        Interested in collaborating on a scalable application or need a robust infrastructure setup?
        Let's build something exceptional together.
      </p>

      <div class="social-links">
        <a
          v-for="(link, index) in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-btn"
          :aria-label="link.name"
          v-scroll
          :style="{ 'transition-delay': `${200 + index * 100}ms` }"
        >
          <span class="icon-wrapper" v-html="link.icon"></span>
          <span class="link-name">{{ link.name }}</span>
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Roeurb Navy. Built with Vue 3.</p>
    </div>
  </footer>
</template>

<style scoped>
.contact-section {
  padding-top: 6rem;
  margin-top: 4rem;
  background: linear-gradient(to top, rgba(0, 240, 255, 0.05), transparent);
  border-top: 1px solid var(--border-color);
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
}

.section-title {
  margin-bottom: 1.5rem;
}

.contact-desc {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--color-surface);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  padding: 1rem 2rem;
  border-radius: 50px;
  border: var(--glass-border);
  color: var(--color-text-main);
  transition: all var(--transition-speed) ease;
}

.social-btn:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-primary);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 240, 255, 0.15);
  text-decoration: none;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  color: var(--color-primary);
  transition: color var(--transition-speed);
}

.social-btn:hover .icon-wrapper {
  color: var(--color-secondary);
}

.link-name {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.footer-bottom {
  text-align: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.2);
  color: var(--color-text-muted);
  font-size: 0.9rem;
  border-top: 1px solid var(--border-color);
}
</style>
