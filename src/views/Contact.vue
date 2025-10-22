<template>
  <div class="container my-5 pt-5">
    <h2 class="text-center mb-4">Contactez-moi</h2>
    <form @submit.prevent="sendEmail" class="w-75 mx-auto">
        <div v-if="status.message" :class="['alert', status.type === 'success' ? 'alert-success' : 'alert-danger']" role="status">
          {{ status.message }}
        </div>
      <div class="mb-3">
        <label class="form-label">Nom</label>
        <input type="text" v-model="form.name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" v-model="form.email" class="form-control" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea v-model="form.message" class="form-control" rows="4" required></textarea>
      </div>
      <button class="btn btn-primary w-100" type="submit" :disabled="loading">
        <span v-if="loading">Envoi...</span>
        <span v-else>Envoyer</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import emailjs from 'emailjs-com'
import { onUnmounted, reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const sendEmail = () => {
  const serviceID = 'service_m9fz35i'
  const templateID = 'template_ve8ctwc'
  const publicKey = 'Fyky8FkJx6tKFF7Gt'
  loading.value = true
  status.message = ''

  emailjs.send(serviceID, templateID, {
    from_name: form.name,
    from_email: form.email,
    message: form.message
  }, publicKey)
  .then(() => {
    status.type = 'success'
    status.message = 'Message envoyé avec succès !'
    form.name = ''
    form.email = ''
    form.message = ''
    scheduleHide()
  })
  .catch((error) => {
    status.type = 'error'
    status.message = error?.text || 'Une erreur est survenue lors de l\'envoi.'
    scheduleHide()
  })
  .finally(() => {
    loading.value = false
  })
}

const loading = ref(false)
const status = reactive({ type: '', message: '' })
const hideTimer = ref(null)

function scheduleHide() {
  clearHideTimer()
  hideTimer.value = setTimeout(() => {
    status.message = ''
    status.type = ''
  }, 3000)
}

function clearHideTimer() {
  if (hideTimer.value) {
    clearTimeout(hideTimer.value)
    hideTimer.value = null
  }
}

onUnmounted(() => {
  clearHideTimer()
})
</script>
