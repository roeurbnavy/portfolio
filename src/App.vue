<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <!-- Global Noise Overlay -->
  <div class="noise-overlay"></div>

  <!-- Global Ambient Mesh Background -->
  <div class="global-bg-mesh">
    <div class="global-orb global-orb-1"></div>
    <div class="global-orb global-orb-2"></div>
    <div class="global-orb global-orb-3"></div>
    <div class="global-glass-overlay"></div>
  </div>

  <NavBar />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  position: relative;
  z-index: 10; /* Keep content above ambient background */
}

/* Global Noise Texture */
.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.04;
}

/* Global Ambient Mesh */
.global-bg-mesh {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.global-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px); /* Larger blur for softer global glow */
  opacity: 0.4;
  animation: orbDrift 20s infinite alternate ease-in-out;
  transform: translateZ(0);
}

.global-orb-1 {
  background: var(--color-primary);
  width: 60vw;
  height: 60vw;
  top: -20vh;
  right: -10vw;
}

.global-orb-2 {
  background: var(--color-secondary);
  width: 50vw;
  height: 50vw;
  bottom: -20vh;
  left: -10vw;
  animation-duration: 30s;
  animation-direction: alternate-reverse;
}

.global-orb-3 {
  background: var(--color-accent);
  width: 45vw;
  height: 45vw;
  top: 40vh;
  left: 20vw;
  opacity: 0.2;
  animation-duration: 35s;
}

.global-glass-overlay {
  position: absolute;
  inset: 0;
  background: var(--color-background);
  opacity: 0.85; /* Makes the orbs subtle */
  z-index: 1;
}

@keyframes orbDrift {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-5vw, 5vh) scale(1.1);
  }
  100% {
    transform: translate(3vw, -5vh) scale(0.9);
  }
}
</style>
