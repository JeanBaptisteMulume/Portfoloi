<template>
  <article class="project-card" role="article">
    <div class="media" v-if="image">
      <img :src="image" :alt="imageAlt || title" class="cover" />
    </div>

    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description" v-if="description">{{ description }}</p>

      <ul class="tags" v-if="tags && tags.length">
        <li v-for="(t, i) in tags" :key="i" class="tag">{{ t }}</li>
      </ul>

      <div class="actions">
        <a v-if="demoLink" :href="demoLink" class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Voir le projet</a>
        <a v-if="repoLink" :href="repoLink" class="btn btn-outline-light btn-sm" target="_blank" rel="noopener noreferrer">Code</a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  demoLink: { type: String, default: '' },
  repoLink: { type: String, default: '' }
})

defineEmits(['click'])
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 8px 28px rgba(2,6,23,0.6);
  overflow: hidden;
  transition: transform .18s ease, box-shadow .18s ease;
}
.project-card:hover { transform: translateY(-8px); box-shadow: 0 18px 48px rgba(2,6,23,0.7); }
.media { width: 100%; height: 200px; overflow: hidden; background: var(--glass); display:flex; align-items:center; justify-content:center }
.media .cover { width: 100%; height: 100%; object-fit: cover; display:block }
.content { padding: 18px }
.title { margin: 0 0 8px 0; font-size: 1.08rem }
.description { margin: 0 0 12px 0; color:var(--muted); font-size: 0.95rem }
.tags { list-style: none; padding: 0; margin: 0 0 12px 0; display:flex; gap:8px; flex-wrap:wrap }
.tag { background: rgba(255,255,255,0.03); color:var(--text); padding: 4px 8px; border-radius: 999px; font-size: 0.78rem; border:1px solid rgba(255,255,255,0.02)}
.actions { display:flex; gap:8px }

@media (min-width: 640px) {
  .project-card { flex-direction: row }
  .media { width: 40%; height: auto; min-height: 160px }
  .content { width: 60% }
}

@media (min-width: 640px) {
  .project-card { flex-direction: row }
  .media { width: 40%; height: auto; min-height: 160px }
  .content { width: 60% }
}
</style>
