<script setup>
const techCategories = [
  {
    title: 'Development',
    icon: '⚡',
    color: 'var(--color-primary)',
    skills: [
      {
        name: 'Vue.js (Vue 3)',
        desc: 'Reactive Frontend',
        iconClass: 'devicon-vuejs-plain colored',
      },
      { name: 'Node.js', desc: 'Scalable Backend', iconClass: 'devicon-nodejs-plain colored' },
      {
        name: 'Meteor.js',
        desc: 'Real-time Data Expertise',
        iconClass: 'devicon-meteor-plain colored',
      },
      {
        name: 'Flutter',
        desc: 'Cross-platform Mobile',
        iconClass: 'devicon-flutter-plain colored',
      },
      {
        name: 'React',
        desc: 'Declarative UI',
        iconClass: 'devicon-react-original colored',
      },
    ],
  },
  {
    title: 'Database & Storage',
    icon: '🗄️',
    color: 'var(--color-secondary)',
    skills: [
      {
        name: 'MongoDB',
        desc: 'Performance & Replica Sets',
        iconClass: 'devicon-mongodb-plain colored',
      },
      {
        name: 'MySQL',
        desc: 'Relational Database',
        iconClass: 'devicon-mysql-plain colored',
      },
      {
        name: 'PostgreSQL',
        desc: 'Advanced Database',
        iconClass: 'devicon-postgresql-plain colored',
      },
    ],
  },
  {
    title: 'Infrastructure & Cloud',
    icon: '☁️',
    color: '#ff007f', // Deep Pink/Magenta for contrast
    skills: [
      {
        name: 'AWS',
        desc: 'Cloud Infrastructure',
        iconClass: 'devicon-amazonwebservices-plain-wordmark colored',
      },
      {
        name: 'DigitalOcean',
        desc: 'Cloud Computing',
        iconClass: 'devicon-digitalocean-plain colored',
      },
      {
        name: 'Hetzner & Contabo',
        desc: 'Cost-effective VPS',
        iconClass: 'devicon-linux-plain', // Fallback icon since Hetzner/Contabo don't have Devicons
      },
      {
        name: 'Kubernetes (K8s)',
        desc: 'Container Orchestration',
        iconClass: 'devicon-kubernetes-plain colored',
      },
      {
        name: 'Docker',
        desc: 'Containerization',
        iconClass: 'devicon-docker-plain colored',
      },
      {
        name: 'Ubuntu',
        desc: 'Production OS',
        iconClass: 'devicon-ubuntu-plain colored',
      },
    ],
  },
  {
    title: 'DevOps & Automation',
    icon: '⚙️',
    color: '#ffcc00', // Warning Yellow
    skills: [
      {
        name: 'Ansible',
        desc: 'Configuration Management',
        iconClass: 'devicon-ansible-plain', // Note: Ansible icon doesn't have a 'colored' variant in devicon usually, so removing colored.
      },
      {
        name: 'GitLab CI/CD',
        desc: 'Automated Pipelines',
        iconClass: 'devicon-gitlab-plain colored',
      },
      {
        name: 'Rancher',
        desc: 'Cluster Management',
        iconClass: 'devicon-rancher-plain colored',
      },
    ],
  },
]
</script>

<template>
  <section id="tech-stack" class="tech-section">
    <h2 class="section-title" v-scroll>Technical Expertise</h2>

    <div class="tech-grid">
      <div
        v-for="(category, index) in techCategories"
        :key="index"
        class="tech-card"
        :style="{ '--accent': category.color, 'transition-delay': `${index * 100}ms` }"
        v-scroll
      >
        <div class="card-header">
          <span class="card-icon">{{ category.icon }}</span>
          <h3 class="card-title">{{ category.title }}</h3>
        </div>

        <ul class="skill-list">
          <li v-for="(skill, sIdx) in category.skills" :key="sIdx" class="skill-item">
            <div class="skill-icon-wrapper">
              <i :class="skill.iconClass" class="skill-icon"></i>
            </div>
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-desc">{{ skill.desc }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-section {
  padding-top: 6rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.tech-card {
  /* Enhanced iOS Glassmorphism Effect */
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(24px); /* Deeper blur */
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.05); /* Soft edge */
  border-top: 1px solid rgba(255, 255, 255, 0.15); /* Simulate top-light */
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.4),
    /* Deeper shadow */ inset 0 1px 0 rgba(255, 255, 255, 0.1); /* Inner light */

  border-radius: 16px;
  padding: 2rem;
  transition: all var(--transition-speed) ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

/* Glassmorphism/Glow effect on hover */
.tech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
  z-index: 2;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px var(--shadow-color);
  border-color: var(--color-primary);
}

.tech-card:hover::before {
  transform: scaleX(1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-icon {
  font-size: 2rem;
  filter: grayscale(0.5);
  transition: filter 0.3s ease;
}

.tech-card:hover .card-icon {
  filter: grayscale(0);
}

.card-title {
  margin: 0;
  color: var(--color-text-main);
  font-size: 1.3rem;
  letter-spacing: 0.5px;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.skill-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.skill-icon-wrapper {
  background: rgba(0, 0, 0, 0.2);
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition:
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 0.4s ease;
}

.skill-icon {
  font-size: 1.8rem;
  transition: transform 0.4s ease;
}

.skill-item:hover .skill-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-color: var(--accent);
}

.skill-item:hover .skill-icon {
  transform: scale(1.1);
}

.skill-info {
  display: flex;
  flex-direction: column;
}

.skill-name {
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 0.2rem;
  font-size: 1.05rem;
}

.skill-desc {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}
</style>
