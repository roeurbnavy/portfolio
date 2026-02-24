<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#tech-stack' },
  { name: 'Experience', href: '#experience' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="nav-container">
      <a href="#hero" class="nav-brand text-primary-glow">RN.</a>

      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href" class="nav-item">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 1000;
  transition: all 0.4s ease;
  background: transparent;
}

.navbar-scrolled {
  padding: 1rem 0;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text-main);
  text-decoration: none;
  letter-spacing: 1px;
}

.text-primary-glow {
  color: var(--color-primary);
  text-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  color: var(--color-text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.nav-item:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* Hide on mobile for now to keep it clean, could add hamburger later */
  }
}
</style>
