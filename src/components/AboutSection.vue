<script setup></script>

<template>
  <section id="about" class="about-section">
    <div class="about-container" v-scroll>
      <div class="about-content">
        <h2 class="section-title-left text-primary-glow">WHO I AM?</h2>
        <p class="about-desc">
          My name is Roeurb Navy. I am a professional and enthusiastic programmer from Battambang,
          Cambodia. I am a quick learner with a self-learning attitude. I love to learn and explore
          new technologies and am passionate about problem-solving.
        </p>
        <p class="about-desc">
          I love almost all stacks of web application development and love to make the web more open
          to the world. My core expertise lies in building highly reactive frontends with Vue.js &
          React, combined with robust, scalable backends using Node.js & microservice architectures.
        </p>
        <p class="about-desc">
          I am available for any kind of job opportunity that suits my skills and interests. Let's
          build something exceptional.
        </p>
      </div>

      <div class="about-visual">
        <div class="isometric-profile">
          <!-- Abstract representation of a developer workspace -->
          <div class="iso-laptop">
            <div class="iso-screen">
              <div class="iso-code-line l1"></div>
              <div class="iso-code-line l2"></div>
              <div class="iso-code-line l3"></div>
            </div>
            <div class="iso-keyboard"></div>
          </div>
          <div class="iso-coffee"></div>
        </div>
      </div>

      <!-- Vertical Signature Title -->
      <div class="vertical-title">
        <span>ABOUT ME</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding-top: 6rem;
  position: relative;
}

.about-container {
  display: flex;
  position: relative;
  align-items: center;
  gap: 4rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 4rem;
  overflow: hidden;
}

.about-content {
  flex: 1.5;
  z-index: 2;
}

.section-title-left {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}

.text-primary-glow {
  color: var(--color-primary);
  text-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
}

.about-desc {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-main); /* Changed to text-main for much better contrast */
  margin-bottom: 1.5rem;
}

.about-desc:last-child {
  margin-bottom: 0;
}

/* Vertical Title on the right */
.vertical-title {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 60px;
  background: rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
}

.vertical-title span {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  font-size: 1.5rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.4); /* Increased opacity from 0.1 to 0.4 */
  letter-spacing: 5px;
}

/* Isometric Visuals */
.about-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  perspective: 1000px;
}

.isometric-profile {
  position: relative;
  width: 250px;
  height: 250px;
  transform: rotateX(60deg) rotateZ(-45deg);
  transform-style: preserve-3d;
  animation: floatIsometrics 6s ease-in-out infinite;
  /* Make sure it's scaled up a bit so it's clearly visible */
  scale: 1.2;
}

@keyframes floatIsometrics {
  0% {
    transform: rotateX(60deg) rotateZ(-45deg) translateZ(0px);
  }
  50% {
    transform: rotateX(60deg) rotateZ(-45deg) translateZ(20px);
  }
  100% {
    transform: rotateX(60deg) rotateZ(-45deg) translateZ(0px);
  }
}

.iso-laptop {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 160px;
  height: 120px;
  background: #2a2d3e;
  border-radius: 4px;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.5);
  transform: translateZ(20px);
}

.iso-keyboard {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 140px;
  height: 60px;
  background: #1a1b26;
  border-radius: 4px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
}

.iso-screen {
  position: absolute;
  bottom: 110px; /* Attach to back of base */
  left: 0px;
  width: 160px;
  height: 100px;
  background: #1e1e2e;
  border: 4px solid #2a2d3e;
  border-bottom: 8px solid #3b4261;
  border-radius: 4px 4px 0 0;
  transform-origin: bottom;
  transform: rotateX(-90deg); /* Stand up */
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px;
  box-shadow: 0 -5px 15px rgba(22, 242, 179, 0.2);
}

.iso-code-line {
  height: 4px;
  border-radius: 2px;
}

.iso-code-line.l1 {
  width: 40%;
  background: var(--color-pink);
}
.iso-code-line.l2 {
  width: 70%;
  background: var(--color-cyan);
}
.iso-code-line.l3 {
  width: 50%;
  background: var(--color-primary);
}

.iso-coffee {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 50px;
  background: var(--color-pink);
  border-radius: 5px;
  transform: translateZ(10px);
  box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.5);
}

.iso-coffee::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 10px;
  width: 20px;
  height: 10px;
  background: white;
  border-radius: 10px 10px 0 0;
  opacity: 0.8;
}

@media (max-width: 900px) {
  .about-container {
    flex-direction: column;
    padding: 2rem;
    padding-right: 4rem; /* Leave room for vertical title */
  }

  .vertical-title {
    width: 40px;
  }
}
</style>
