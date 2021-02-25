<template>
  <div class="container">
    <h1 class="title">Contact</h1>
    <div class="content">
      <form name="contact" action="" method="post" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <label class="form-label" for="name"> Name: </label>
        <input id="name" class="form-field" name="name" />
        <label class="form-label" for="email"> Email: </label>
        <input id="email" class="form-field" name="email" />
        <label class="form-label" for="message"> Message: </label>
        <textarea id="message" class="form-field" name="message"></textarea>
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
  </div>
</template>

<script>
// Many thanks: https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/
export default {
  data() {
    return {
      chosenTea: 'Earl Grey',
      teaTypes: {
        'Earl Grey': 'London',
        'Irish Breakfast': 'Dublin',
        Chai: 'Bombay',
        Rose: 'Atlantic City',
        Matcha: 'Tokyo',
        Rooibos: 'Cape Town',
        'Yerba Mate': 'Montreal',
        Green: 'Oregon Mist',
      },
    }
  },
  computed: {
    teaName() {
      return `${this.teaTypes[this.chosenTea]} Fog`
    },
    teaNames() {
      return Object.keys(this.teaTypes)
    },
  },
  methods: {
    // This function puts all the form fields into a FormData constructor, which we later encode with the URLSearchParams constructor
    createFormDataObj(data) {
      const formData = new FormData()
      for (const key of Object.keys(data)) {
        formData.append(key, data[key])
      }
      return formData
    },
    // This is our custom onSubmit function; don't forget to add `@submit.prevent="handleSubmit"` inside your <form> tag
    handleSubmit() {
      // This `data` object is what's passed to the createFormDataObj function. It needs all of your form fields, where the key is the name= attribute and the value is the computed value.
      const data = {
        'form-name': 'vue-tea',
        tea: this.teaName,
      }
      // This POSTs your encoded form to Netlify with the required headers (for text; headers will be different for POSTing a file) and, on success, redirects to the custom success page located at pages/thanks.vue
      fetch('/form', {
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.tea {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1.5em;
}
.linkfunction {
  padding-top: 5em;
}
</style>
