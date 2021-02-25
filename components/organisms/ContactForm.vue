<template>
  <form
    class="grid gap-5 font-text"
    name="contact"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
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
      <Button type="submit" @click.prevent="">envoyer</Button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'contact',
            name: 'hello',
          }),
          axiosConfig
        )
        .then(() => console.log('hello'))
    },
  },
}
</script>

<style></style>
