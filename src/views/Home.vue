<template>
  <section class="vh-100 d-flex flex-column justify-content-center align-items-center bg-light text-center p-3">
    <!-- Photo du profil avec fond décoratif -->
    <div class="photo-wrapper mb-4" aria-hidden="false">
      <!-- éléments décoratifs (accessibles : hidden pour les lecteurs) -->
      <span class="blob blob-1" aria-hidden="true"></span>
      <span class="blob blob-2" aria-hidden="true"></span>
      <img src="@/assets/images/my_picture.png" alt="Jean-Baptiste Yves Mulumeoderhwa" class="photo" />
    </div>

    <h1 class="text-primary fw-bold mb-2">👋 Salut, je suis Jean-Baptiste Yves Mulumeoderhwa</h1>
    <p class="lead text-secondary mb-4">Développeur Web & Analyste en Cybersécurité</p>
    <router-link to="/projects" class="btn btn-primary btn-lg shadow-sm">
      Voir mes projets
    </router-link>
  </section>
</template>

<style scoped>
.photo-wrapper {
  position: relative;
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 30px rgba(11, 18, 30, 0.25);
  position: relative;
  z-index: 3;
  border: 6px solid rgba(255,255,255,0.6);
  backdrop-filter: blur(4px);
}

/* decorative blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(36px);
  opacity: 0.9;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.blob-1 {
  width: 260px;
  height: 260px;
  left: -10px;
  top: -10px;
  background: radial-gradient(circle at 30% 30%, rgba(123,97,255,0.95), rgba(43,182,255,0.75));
  animation: floatA 8s ease-in-out infinite;
}

.blob-2 {
  width: 200px;
  height: 200px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(circle at 70% 70%, rgba(255,135,103,0.9), rgba(255,200,90,0.6));
  animation: floatB 10s ease-in-out infinite;
}

@keyframes floatA {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.03); }
  100% { transform: translateY(0) scale(1); }
}

@keyframes floatB {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(12px) scale(0.98); }
  100% { transform: translateY(0) scale(1); }
}

/* Respect user's reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .blob { animation: none !important; }
}

/* Version responsive */
@media (max-width: 768px) {
  .photo-wrapper {
    width: 160px;
    height: 160px;
  }

  .photo {
    width: 140px;
    height: 140px;
    border-width: 4px;
  }

  h1 {
    font-size: 1.5rem;
  }

  p.lead {
    font-size: 1rem;
  }
}
</style>
