<template>
  <div id="app" :class="darkMode ? 'bg-dark text-light' : 'bg-light text-dark'">
    <!-- Loader -->
    <Loader v-if="loading" />

    <!-- Contenu principal -->
    <div v-else>
      <Navbar class="nav" :darkMode="darkMode" @toggle-dark="toggleDarkMode" />

      <main class="pt-5 mt-4">
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'

// Loader d’attente
const loading = ref(true)

// Thème sombre / clair
const darkMode = ref(localStorage.getItem('theme') === 'dark')

// Activation / désactivation du mode sombre
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  localStorage.setItem('theme', darkMode.value ? 'dark' : 'light')
}

// Appliquer la classe globale sur le body
watch(darkMode, (newVal) => {
  document.body.className = newVal ? 'bg-dark text-light' : 'bg-light text-dark'
}, { immediate: true })

// Simulation du chargement
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2500)
})
</script>

<style>
body {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  margin: 10px;
}

/* Navbar personnalisée */
.nav {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Zone principale */
main {
  min-height: 80vh;
  padding-top: 60px;
}

/* Animation de transition entre les pages */
.slide-enter-active, .slide-leave-active {
  transition: all 1.5s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
