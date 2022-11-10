export default defineNuxtPlugin((nuxtApp) => {
  const { microsoftClarityID } = nuxtApp.$config.public

  if (!microsoftClarityID) {
    console.warn('Microsoft Clarity ID is not defined in nuxt.config.js (public config)')
    return
  }

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.innerHTML = `
  (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${microsoftClarityID}");`
  document.head.appendChild(script)
})
