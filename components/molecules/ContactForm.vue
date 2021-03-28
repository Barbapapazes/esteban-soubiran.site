<template>
  <form
    class="grid gap-5 font-text"
    name="contact"
    netlify
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <p class="hidden">
      <label
        >Don’t fill this out if you’re human: <input name="bot-field"
      /></label>
    </p>
    <input type="hidden" name="form-name" value="contact" />
    <TextInput
      v-model="email"
      type="email"
      name="email"
      placeholder="courriel"
      center
    >
      <IconMail fill="white" class="h-6 w-6" />
    </TextInput>
    <TextInput
      v-model="name"
      type="text"
      name="name"
      placeholder="nom-prénom"
      center
    >
      <IconPersonn fill="white" class="h-6 w-6" />
    </TextInput>
    <TextInput
      v-model="object"
      type="text"
      name="object"
      placeholder="objet du message"
      center
    >
      <IconTextBox fill="white" class="h-6 w-6" />
    </TextInput>
    <TextInput v-model="message" name="message" placeholder="message">
      <IconTextDescription fill="white" class="h-6 w-6" />
      <template
        #input="{ className, id, inputName, placeholder, value, input }"
      >
        <textarea
          :id="id"
          :name="inputName"
          :value="value"
          :placeholder="placeholder"
          cols="30"
          rows="10"
          class="resize-none"
          :class="className"
          @input="input"
        ></textarea>
      </template>
    </TextInput>
    <div class="flex justify-end">
      <AppButton type="submit">envoyer</AppButton>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      name: '',
      object: '',
      message: '',
    }
  },
  methods: {
    createFormDataObj(data) {
      const formData = new FormData()
      for (const key of Object.keys(data)) {
        formData.append(key, data[key])
      }
      return formData
    },
    handleSubmit() {
      const data = {
        'form-name': 'contact',
        email: this.email,
        name: this.name,
        object: this.object,
        message: this.message,
      }
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(this.createFormDataObj(data)).toString(),
      })
        .then((res) =>
          this.$emit(
            'res',
            res.ok ? 'Merci pour votre message !' : 'Une erreur est survenue !'
          )
        )
        .catch(() => this.$emit('res', 'Une erreur est survenue !'))
    },
  },
}
</script>

<style></style>
