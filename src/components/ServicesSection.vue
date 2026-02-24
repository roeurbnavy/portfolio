<script setup>
const services = [
  {
    icon: '⚡',
    title: 'Real-time Web Apps',
    description:
      'Architecting highly reactive, data-intensive web applications using Meteor.js and MongoDB for instant client-server synchronization.',
    delay: 100,
  },
  {
    icon: '🎨',
    title: 'Modern Frontend',
    description:
      'Building pixel-perfect, accessible user interfaces and single-page applications with Vue 3 and React.',
    delay: 200,
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description:
      'Automating deployments and ensuring zero-downtime infrastructure with Docker, Kubernetes, and CI/CD pipelines.',
    delay: 300,
  },
]
</script>

<template>
  <section id="services" class="services-section">
    <h2 class="section-title" v-scroll>What I Do</h2>

    <div class="services-grid">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-card"
        v-scroll
        :style="{ 'transition-delay': `${service.delay}ms` }"
      >
        <div class="service-icon-wrapper">
          <span class="service-icon">{{ service.icon }}</span>
        </div>
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-desc">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding-top: 6rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all var(--transition-speed) ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--color-primary);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  transform-origin: center;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 240, 255, 0.1);
  border-color: rgba(0, 240, 255, 0.3);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon-wrapper {
  width: 70px;
  height: 70px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
}

.service-card:hover .service-icon-wrapper {
  background: rgba(0, 240, 255, 0.1);
  border-color: var(--color-primary);
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
}

.service-icon {
  font-size: 2rem;
}

.service-title {
  color: var(--color-text-main);
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.service-desc {
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.6;
}
</style>
