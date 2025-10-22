<template>
  <div class="container my-5 pt-5">
    <h2 class="text-center mb-4">Mes Projets</h2>
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-md-4 mb-4">
        <div class="card h-100">
          <img :src="project.image" class="card-img-top" alt="image projet">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="btn btn-sm btn-primary">Voir plus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import projects from '../assets/data/projects.json';
</script>

