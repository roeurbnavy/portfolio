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
    <!-- Awesome Abstract Vector Background -->
    <div class="hero-bg-vectors">
      <svg class="tech-grid-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <radialGradient id="glowG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color: var(--color-secondary); stop-opacity: 0.15" />
            <stop offset="100%" style="stop-color: var(--color-background); stop-opacity: 0" />
          </radialGradient>
          <radialGradient id="glowB" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color: var(--color-primary); stop-opacity: 0.15" />
            <stop offset="100%" style="stop-color: var(--color-background); stop-opacity: 0" />
          </radialGradient>
          <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.02)"
              stroke-width="1"
            />
            <circle cx="40" cy="40" r="1" fill="rgba(0, 240, 255, 0.3)" />
          </pattern>
        </defs>

        <!-- Background Grid -->
        <rect width="100%" height="100%" fill="url(#tech-grid)" />

        <!-- Glowing Ambient Orbs -->
        <circle cx="80%" cy="20%" r="400" fill="url(#glowB)" class="orb-float-1" />
        <circle cx="20%" cy="80%" r="300" fill="url(#glowG)" class="orb-float-2" />

        <!-- Cybernetic Data Lines -->
        <path
          class="cyber-path"
          d="M -100 150 Q 200 50, 500 250 T 1200 150"
          fill="none"
          stroke="var(--color-primary)"
          stroke-width="1"
          opacity="0.4"
        />
        <path
          class="cyber-path-reverse"
          d="M 1200 450 Q 800 550, 500 350 T -100 450"
          fill="none"
          stroke="var(--color-secondary)"
          stroke-width="1"
          opacity="0.2"
        />
      </svg>
    </div>

    <div class="hero-content">
      <h2 class="greeting">Hello, I'm</h2>
      <h1 class="name">{{ profile.name }}</h1>
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

.hero-bg-vectors {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.tech-grid-svg {
  width: 100%;
  height: 100%;
}

.orb-float-1 {
  animation: orbDrift 20s infinite alternate ease-in-out;
}

.orb-float-2 {
  animation: orbDrift 25s infinite alternate-reverse ease-in-out;
}

@keyframes orbDrift {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-30px, 50px);
  }
  100% {
    transform: translate(20px, -20px);
  }
}

.cyber-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawPath 4s infinite linear alternate;
}

.cyber-path-reverse {
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  animation: drawPath 5s infinite linear alternate-reverse;
}

@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
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
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  line-height: 1.1;
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
  background: linear-gradient(135deg, var(--color-primary), var(--color-cyan));
  color: var(--color-background);
  border: none;
  position: relative;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(0, 240, 255, 0.2);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 240, 255, 0.5);
  background: linear-gradient(135deg, var(--color-cyan), var(--color-primary));
}

.btn-secondary {
  background: transparent;
  color: var(--color-text-main);
  border: 2px solid var(--color-primary);
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: all 0.4s ease;
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-background);
  border-color: var(--color-primary);
  text-decoration: none;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 240, 255, 0.3);
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

/* MacOS Code Window Styles */
.code-window {
  width: 100%;
  max-width: 500px;
  background: #0d1224; /* Deep code background */
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(22, 242, 179, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 10;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.code-window:hover {
  transform: translateY(-5px);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.6),
    0 0 30px rgba(211, 60, 130, 0.2);
}

.code-header {
  background: #1a1e2e;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
