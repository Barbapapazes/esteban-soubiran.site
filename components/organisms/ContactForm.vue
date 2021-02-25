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
    <TextInput type="email" name="email" placeholder="courriel" center>
      <IconMail fill="white" class="h-6 w-6" />
    </TextInput>
    <TextInput type="text" name="name" placeholder="nom-prénom" center>
      <IconPersonn fill="white" class="h-6 w-6" />
    </TextInput>
    <TextInput type="text" name="object" placeholder="objet du message" center>
      <IconTextBox fill="white" class="h-6 w-6" />
    </TextInput>
    <TextInput name="message" placeholder="message">
      <IconTextDescription fill="white" class="h-6 w-6" />
      <template v-slot:input="{ className, id, inputName, placeholder }">
        <textarea
          :id="id"
          :name="inputName"
          :placeholder="placeholder"
          cols="30"
          rows="10"
          class="resize-none"
          :class="className"
        ></textarea>
      </template>
    </TextInput>
    <div class="flex justify-end">
      <Button type="submit">envoyer</Button>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    createFormDataObj(data) {
      const formData = new FormData()
      for (const key of Object.keys(data)) {
        formData.append(key, data[key])
      }
      return formData
    },
    handleSubmit() {
      // This `data` object is what's passed to the createFormDataObj function. It needs all of your form fields, where the key is the name= attribute and the value is the computed value.
      const data = {
        'form-name': 'contact',
        tea: 'yep',
      }
      // This POSTs your encoded form to Netlify with the required headers (for text; headers will be different for POSTing a file) and, on success, redirects to the custom success page located at pages/thanks.vue
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(this.createFormDataObj(data)).toString(),
      })
        // This is how we route to /thanks on successful form submission
        // More on $router.push function: https://router.vuejs.org/guide/essentials/navigation.html
        .then(() => this.$router.push('thanks'))
        .catch((error) => alert(error))
    },
  },
}
</script>

<style></style>
