<template>
  <main>
    <pagetitle>404: Page not found.</pagetitle>

    <section>
      <p>
        Like... this is a search thing. You'd think we'd be able to, you know,
        search for the page you were looking for and find it. But alas.
      </p>
    </section>
  </main>
</template>

<script>
import pagetitle from '../components/pagetitle.vue'

export default {
  components: { pagetitle },
  head: {
    title: '404: Page not found.'
  }
}
</script>

<style></style>
