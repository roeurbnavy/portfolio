<script setup>
const roadmapItems = [
  {
    status: 'Mastered',
    date: '2022 - 2023',
    title: 'Full-Stack Foundation',
    description:
      'Achieved mastery in reactive frontends with Vue.js, highly scalable backends using Node.js & Meteor, and robust foundations in MongoDB and SQL.',
    color: 'var(--color-secondary)', // Mint green for done
  },
  {
    status: 'Current Focus',
    date: '2024',
    title: 'Cloud Native & Orchestration',
    description:
      'Deep diving into advanced Kubernetes cluster management (Rancher), Docker containerization strategies, and optimizing AWS infrastructure pipelines.',
    color: 'var(--color-primary)', // Electric blue for current
  },
  {
    status: 'Next Up',
    date: 'Going Forward',
    title: 'Systems Programming & Edge',
    description:
      'Focusing on Go (Golang) for high-performance backend microservices, Rust for memory-safe CLI tools, and exploring edge computing architectures.',
    color: '#ffcc00', // Yellow for future
  },
]
</script>

<template>
  <section id="roadmap" class="roadmap-section">
    <h2 class="section-title" v-scroll>Technical Roadmap</h2>
    <div class="timeline">
      <div
        v-for="(item, index) in roadmapItems"
        :key="index"
        class="timeline-item"
        v-scroll
        :style="{ 'transition-delay': `${index * 150}ms`, '--item-color': item.color }"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span class="timeline-status">{{ item.status }}</span>
            <span class="timeline-date">{{ item.date }}</span>
          </div>
          <h3 class="timeline-title">{{ item.title }}</h3>
          <p class="timeline-desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.roadmap-section {
  padding-top: 6rem;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

/* Central line */
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

/* Glowing Nodes */
.timeline-dot {
  position: absolute;
  left: 21px;
  top: 0;
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
  background: var(--color-surface);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: all var(--transition-speed) ease;
}

.timeline-item:hover .timeline-content {
  transform: translateX(5px);
  border-color: var(--item-color);
  box-shadow: 0 5px 20px var(--shadow-color);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.timeline-status {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--item-color);
  letter-spacing: 1px;
}

.timeline-date {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.timeline-title {
  font-size: 1.4rem;
  color: var(--color-text-main);
  margin-bottom: 0.5rem;
}

.timeline-desc {
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.6;
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
}
</style>
