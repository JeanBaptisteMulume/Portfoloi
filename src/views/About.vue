<template>
  <div class="container my-5 pt-5">
    <h2 class="mb-4 text-center">À propos de moi</h2>

    <div class="row gy-4">
      <div class="col-12 col-lg-4 text-center">
        <img src="@/assets/images/my_photo.jpg" alt="Photo de profil" class="img-fluid rounded-circle mb-3" style="max-width:220px;">
        <h4 class="mb-1">Jean-Baptiste Yves Mulume</h4>
        <p class="text-muted mb-2">Développeur Web & Analyste Cybersécurité</p>
        <a href="/cv.pdf" class="btn btn-outline-primary btn-sm">Télécharger mon CV</a>
      </div>

      <div class="col-12 col-lg-8">
        <section class="mb-4">
          <h5>Résumé</h5>
          <p style="text-align: justify;">
            Passionné par les technologies web et la sécurité informatique, je conçois et développe des applications web robustes et sécurisées. J'accompagne des PME et projets personnels depuis la conception jusqu'au déploiement, en mettant l'accent sur la maintenabilité, la performance et la sécurité.
          </p>
        </section>

        <section class="mb-4">
          <h5>Compétences clés</h5>
          <div class="row">
            <div class="col-6">
              <ul>
                <li>Front-end : Vue.js, HTML5, CSS3, Bootstrap</li>
                <li>Back-end : Node.js, PHP, MySQL</li>
                <li>Langages : Java, Python</li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li>Cybersécurité : pentesting, analyse NMEA/GPS, sécurité applicative</li>
                <li>Outils : Git, Docker, CI/CD basique</li>
                <li>Bonnes pratiques : tests, revue de code, documentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="mb-4">
          <h5>Expériences sélectionnées</h5>
          <ul>
            <li><strong>Application de pentesting</strong> — Développement d'outils Python pour audit de sécurité et tests d'intrusion (collecte de vulnérabilités, rapports automatisés).</li>
            <li><strong>Plateforme E-learning</strong> — Conception front/back pour une plateforme éducative (HTML/CSS/JS + PHP/MySQL).</li>
            <li><strong>Application de suivi de livraisons</strong> — Analyse de traces GPS (NMEA), détection d'arrêts, export CSV et sauvegarde trajectoire.</li>
          </ul>
        </section>

        <section class="mb-4">
          <h5>Éducation & Certifications</h5>
          <ul>
            <li>Licence/Formation en Informatique (détails à préciser)</li>
            <li>Certifications : (ajoute ici tes certificats : e.g., CEH, CompTIA, etc.)</li>
          </ul>
        </section>

        <section>
          <h5>Projets clés</h5>
          <div class="row">
            <div class="col-12 col-md-6">
              <p class="mb-1"><strong>Portfolio personnel</strong> — Site statique dynamique avec Vue.js et Bootstrap. <a href="https://github.com/JeanBaptisteMulume/Portfoloi" target="_blank">Voir repo</a></p>
            </div>
            <div class="col-12 col-md-6">
              <p class="mb-1"><strong>Delivery Trafic</strong> — Outil d'analyse de trajet GPS et reporting. <a href="https://github.com/JeanBaptisteMulume/Delivery-Trafic.git" target="_blank">Voir repo</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <hr class="my-4">

    <div class="text-center">
      <p class="mb-1">Pour en savoir plus ou discuter d'un projet, contacte-moi :</p>
      <a href="/contact" class="btn btn-primary">Page Contact</a>
    </div>
  </div>
</template>

