<template>
  <section>
    <div>
      <form
        name="contact-form"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div>
          <input type="hidden" name="form-name" value="contact-form" />
          <div>
            <input
              for="name"
              type="text"
              name="name"
              required
              placeholder="Name"
            />
          </div>
          <div>
            <input type="email" name="email" required placeholder="Email" />
          </div>
          <div>
            <textarea name="message" required placeholder="Message"></textarea>
          </div>
          <div>
            <button type="submit" value="Send message">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
