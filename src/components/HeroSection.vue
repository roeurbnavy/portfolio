<script setup>
import { computed } from 'vue'

const profile = {
  name: 'Roeurb Navy',
  role: 'Full-Stack Web Developer & DevOps Engineer',
  location: 'Battambang, Cambodia',
  tagline: 'Bridging the gap between reactive code and robust infrastructure.',
}
</script>

<template>
  <section id="hero" class="hero-section">
    <!-- Mesh gradient now handled globally in App.vue -->
    <div class="hero-content">
      <h2 class="greeting">Hello, I'm</h2>
      <h1 class="name">
        <span class="text-gradient">{{ profile.name }}</span>
      </h1>
      <h3 class="role">{{ profile.role }}</h3>
      <p class="tagline">{{ profile.tagline }}</p>

      <div class="location">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon-location"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span>{{ profile.location }}</span>
      </div>

      <div class="cta-buttons">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-secondary">Contact Me</a>
      </div>
    </div>

    <div class="hero-visual">
      <!-- Abstract Tech Shape using CSS -->
      <!-- MacOS Style Code Window -->
      <div class="code-window">
        <div class="code-header">
          <div class="mac-buttons">
            <span class="btn-red"></span>
            <span class="btn-yellow"></span>
            <span class="btn-green"></span>
          </div>
        </div>
        <div class="code-body">
          <pre><code class="language-js"><span class="code-keyword">const</span> <span class="code-variable">developer</span> <span class="code-operator">=</span> {
  <span class="code-property">name</span>: <span class="code-string">'Roeurb Navy'</span>,
  <span class="code-property">skills</span>: [
    <span class="code-string">'Vue.js'</span>, <span class="code-string">'React'</span>, <span class="code-string">'Flutter'</span>, <span class="code-string">'Node.js'</span>,
    <span class="code-string">'Meteor'</span>, <span class="code-string">'MongoDB'</span>, <span class="code-string">'SQL'</span>, <span class="code-string">'AWS'</span>, 
    <span class="code-string">'Kubernetes'</span>, <span class="code-string">'Docker'</span>, <span class="code-string">'Ansible'</span>, <span class="code-string">'GitLab CI'</span>
  ],
  <span class="code-property">hardWorker</span>: <span class="code-boolean">true</span>,
  <span class="code-property">problemSolver</span>: <span class="code-boolean">true</span>,
  <span class="code-method">hireable</span>: <span class="code-keyword">function</span>() {
    <span class="code-keyword">return</span> (
      <span class="code-this">this</span>.<span class="code-property">hardWorker</span> <span class="code-operator">&&</span>
      <span class="code-this">this</span>.<span class="code-property">problemSolver</span> <span class="code-operator">&&</span>
      <span class="code-this">this</span>.<span class="code-property">skills</span>.<span class="code-property">length</span> <span class="code-operator">>=</span> <span class="code-number">5</span>
    );
  }
};</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  gap: 2rem;
}

.hero-content {
  position: relative;
  z-index: 1;
  flex: 1;
  max-width: 600px;
  animation: slideUp 0.8s ease-out forwards;
}

.greeting {
  font-size: 1.5rem;
  color: var(--color-text-muted);
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.name {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  letter-spacing: -1px;
}

.role {
  font-size: 2rem;
  color: var(--color-text-main);
  margin-bottom: 1.5rem;
}

.tagline {
  font-size: 1.25rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-secondary);
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  color: var(--color-text-main);
  border: var(--glass-border);
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  z-index: -1;
}

.btn-primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(138, 43, 226, 0.2);
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
}

.btn-secondary {
  background: transparent;
  color: var(--color-text-main);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: all 0.4s ease;
}

.btn-secondary:hover {
  background: var(--color-surface);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 210, 255, 0.15);
}

/* 3D Cube Animation for Vibe */
.hero-visual {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* MacOS Code Window Styles with Glassmorphism */
.code-window {
  width: 100%;
  max-width: 500px;
  background: rgba(15, 15, 20, 0.6);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-radius: 16px;
  border: var(--glass-border);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(138, 43, 226, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 10;
  transition:
    transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 0.5s ease;
}

.code-window::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  z-index: 11;
}

.code-window:hover {
  transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.6),
    0 0 40px rgba(0, 210, 255, 0.2);
}

.code-header {
  background: rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
}

.mac-buttons {
  display: flex;
  gap: 8px;
}

.mac-buttons span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.btn-red {
  background-color: #ff5f56;
}
.btn-yellow {
  background-color: #ffbd2e;
}
.btn-green {
  background-color: #27c93f;
}

.code-body {
  padding: 20px;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #e2e8f0;
  overflow-x: auto;
}

.code-body pre {
  margin: 0;
}

/* Syntax Highlighting Colors */
.code-keyword {
  color: #d33c82; /* Pink */
}
.code-variable {
  color: #f8f8f2;
}
.code-operator {
  color: #16f2b3; /* Cyan */
}
.code-property {
  color: #e2e8f0;
}
.code-string {
  color: #f1fa8c; /* Yellow-ish */
}
.code-boolean {
  color: #bd93f9; /* Purple */
}
.code-number {
  color: #bd93f9;
}
.code-method {
  color: #16f2b3;
}
.code-this {
  color: #d33c82;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 900px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding-top: 6rem;
  }

  .location {
    justify-content: center;
  }

  .cta-buttons {
    justify-content: center;
  }

  .hero-visual {
    margin-top: 4rem;
  }

  .name {
    font-size: 3rem;
  }

  .role {
    font-size: 1.5rem;
  }
}
</style>
