<script setup>
const projects = [
  {
    title: 'Multi-Tenant POS System',
    description:
      'A scalable solution built with Meteor.js, Vue 3, and MongoDB, orchestrated via Kubernetes.',
    extraDescription:
      'Features include real-time inventory tracking, offline-first capabilities, and complex role-based access control.',
    techStack: ['Vue 3', 'Meteor.js', 'MongoDB', 'Kubernetes'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: '🛒',
  },
  {
    title: 'Automated Cloud Infrastructure',
    description:
      'Production-ready Ubuntu server deployments using Ansible and GitLab CI/CD for zero-downtime releases.',
    extraDescription:
      'Architected with high availability in mind, featuring automated database backups, secure secrets management, and continuous monitoring.',
    techStack: ['Ansible', 'GitLab CI/CD', 'Ubuntu', 'Docker'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: '☁️',
  },
]
</script>

<template>
  <section id="projects" class="projects-section">
    <h2 class="section-title" v-scroll>Project Highlights</h2>

    <div class="projects-grid">
      <article
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
        v-scroll
        :style="{ 'transition-delay': `${index * 150}ms` }"
      >
        <div class="project-image-wrapper">
          <div class="project-overlay">
            <span class="project-icon">{{ project.icon }}</span>
          </div>
          <img :src="project.image" :alt="project.title" class="project-image" loading="lazy" />
        </div>

        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>

          <div class="project-extra-info">
            <p>{{ project.extraDescription }}</p>
          </div>

          <div class="project-tech">
            <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>

          <a :href="project.link" class="project-link">
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="arrow-icon"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding-top: 6rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--color-surface);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-radius: var(--border-radius);
  overflow: hidden;
  border: var(--glass-border);
  transition:
    transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 0.5s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow:
    0 20px 40px var(--shadow-color),
    0 0 20px rgba(138, 43, 226, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
    filter 0.6s ease; /* Longer cinematic transition */
  filter: brightness(0.6) grayscale(0.2);
  transform: scale(1.15); /* Start zoomed in */
}

/* When the scroll directive marks it visible, zoom out to normal */
.scroll-hidden.is-visible .project-image {
  transform: scale(1);
}

.project-card:hover .project-image {
  transform: scale(1.03); /* Subtle zoom on hover, don't overdo it */
  filter: brightness(0.9) grayscale(0);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.2), var(--color-background));
  z-index: 1;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}

.project-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
}

.project-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  color: var(--color-text-main);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-description {
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.project-extra-info {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.4s ease,
    opacity 0.4s ease,
    padding 0.4s ease;
  color: var(--color-text-main);
  font-size: 0.95rem;
  border-left: 2px solid var(--color-primary);
  padding-left: 1rem;
}

.project-card:hover .project-extra-info {
  max-height: 200px;
  opacity: 1;
  padding-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: var(--glass-blur);
  color: var(--color-text-main);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: var(--glass-border);
}

.project-card:hover .tech-tag {
  border-color: var(--color-primary);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-secondary);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.project-link:hover .arrow-icon {
  transform: translateX(5px);
}
</style>
