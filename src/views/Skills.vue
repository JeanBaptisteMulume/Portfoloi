<template>
  <div class="container my-5 pt-5">
    <h2 class="text-center mb-4">Mes Compétences</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div v-for="(skill, index) in skills" :key="index" class="mb-4">
          <div class="d-flex justify-content-between">
            <strong>{{ skill.name }}</strong>
            <span>{{ skill.level }}%</span>
          </div>
          <div class="progress" style="height: 8px;">
            <div
              class="progress-bar"
              role="progressbar"
              :style="{ width: skill.level + '%', backgroundColor: skill.color }"
              :aria-valuenow="skill.level"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'HTML / CSS / JavaScript', level: 90, color: '#0d6efd' },
  { name: 'Vue.js / Bootstrap', level: 75, color: '#6610f2' },
  { name: 'MySQL', level: 85, color: '#198754' },
  { name: 'PHP', level: 60, color: '#298750' },
  { name: 'Python (Sécurité & Analyse réseau)', level: 75, color: '#fd7e14' },
  { name: 'Cybersécurité (Audit, Pentest)', level: 70, color: '#dc3545' }
])
</script>
