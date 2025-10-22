<template>
  <div class="loader d-flex justify-content-center align-items-center vh-100 bg-light position-fixed top-0 start-0 w-100">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loader {
  z-index: 9999;
}
</style>
