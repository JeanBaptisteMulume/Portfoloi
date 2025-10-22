<template>
  <nav :class="['navbar navbar-expand-lg fixed-top', darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light']">
    <div class="container">
      <a class="navbar-brand" href="#">Jean Baptiste Yves</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link to="/" class="nav-link">Accueil</router-link></li>
          <li class="nav-item"><router-link to="/about" class="nav-link">À propos</router-link></li>
          <li class="nav-item"><router-link to="/skills" class="nav-link">Compétances</router-link></li>
          <li class="nav-item"><router-link to="/projects" class="nav-link">Projets</router-link></li>
          <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
        </ul>
        <button class="btn btn-outline-secondary btn-sm" @click="$emit('toggle-dark')">
          <i :class="darkMode ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill'">Mode : light / dark</i>
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup>
defineProps({
  darkMode: Boolean
})
</script>