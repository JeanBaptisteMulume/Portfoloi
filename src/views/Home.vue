<template>
  <section class="vh-100 d-flex flex-column justify-content-center align-items-center bg-light text-center p-3">
    <!-- Photo du profil -->
    <img src="@/assets/images/my_photo.jpg" alt="Jean-Baptiste Yves Mulumeoderhwa" class="photo mb-4" />

    <h1 class="text-primary fw-bold mb-2">👋 Salut, je suis Jean-Baptiste Yves Mulumeoderhwa</h1>
    <p class="lead text-secondary mb-4">Développeur Web & Analyste en Cybersécurité</p>
    <router-link to="/projects" class="btn btn-primary btn-lg shadow-sm">
      Voir mes projets
    </router-link>
  </section>
</template>

<style scoped>
.photo {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

/* Version responsive */
@media (max-width: 768px) {
  .photo {
    width: 150px;
    height: 150px;
  }

  h1 {
    font-size: 1.5rem;
  }

  p.lead {
    font-size: 1rem;
  }
}
</style>
