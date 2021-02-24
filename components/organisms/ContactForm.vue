<template>
  <form action="#" class="grid gap-5 font-text">
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
export default {}
</script>

<style></style>
