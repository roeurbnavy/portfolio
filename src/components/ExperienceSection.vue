<script setup>
const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Present',
    date: '2023 - Present',
    description:
      'Leading development of scalable microservices and highly reactive frontends. Orchestrating containerized deployments via Kubernetes and optimizing AWS infrastructure pipelines.',
    color: 'var(--color-primary)',
  },
  {
    role: 'Full-Stack Web Developer',
    company: 'Tech Agency',
    date: '2020 - 2023',
    description:
      'Architected and built real-time, data-intensive web applications using Meteor.js and MongoDB. Designed RESTful and GraphQL APIs, and implemented complex role-based access control systems.',
    color: 'var(--color-secondary)',
  },
  {
    role: 'Junior Web Developer',
    company: 'Freelance / Agency',
    date: '2018 - 2020',
    description:
      'Developed responsive, pixel-perfect user interfaces. Mastered frontend fundamentals, UI/UX principles, and relational database design (MySQL/PostgreSQL).',
    color: '#ffcc00',
  },
]
</script>

<template>
  <section id="experience" class="experience-section">
    <h2 class="section-title" v-scroll>Professional Experience</h2>

    <div class="timeline">
      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="timeline-item"
        v-scroll
        :style="{ 'transition-delay': `${index * 150}ms`, '--item-color': exp.color }"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3 class="role">{{ exp.role }}</h3>
            <span class="date">{{ exp.date }}</span>
          </div>
          <h4 class="company">{{ exp.company }}</h4>
          <p class="description">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding-top: 6rem;
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 0;
}

/* Central vertical line */
.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 30px;
  height: 100%;
  width: 2px;
  background: var(--border-color);
  z-index: 1;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 80px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

/* Glowing Timeline Nodes */
.timeline-dot {
  position: absolute;
  left: 21px;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--color-background);
  border: 4px solid var(--item-color);
  z-index: 2;
  transition: all var(--transition-speed) ease;
  box-shadow: 0 0 10px var(--item-color);
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.3);
  box-shadow: 0 0 20px var(--item-color);
  background: var(--item-color);
}

.timeline-content {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  transition: all var(--transition-speed) ease;
  position: relative;
}

.timeline-item:hover .timeline-content {
  transform: translateX(5px);
  border-color: var(--item-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.role {
  font-size: 1.4rem;
  color: var(--item-color);
  margin: 0;
}

.company {
  font-size: 1.1rem;
  color: var(--color-text-main);
  margin-bottom: 1rem;
  font-weight: 500;
}

.date {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.description {
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 600px) {
  .timeline::before {
    left: 20px;
  }
  .timeline-dot {
    left: 11px;
  }
  .timeline-item {
    padding-left: 50px;
  }
  .timeline-header {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
