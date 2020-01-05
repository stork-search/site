<template>
  <section>
    <h1 v-if="error.statusCode === 404">Page not found.</h1>
    <h1 v-else>An error occurred.</h1>
    <p v-if="error.statusCode === 404">
      I'm still working on this page, check back later for more content.
    </p>
  </section>
</template>

<script>
export default {
  props: { error: { type: Object, default: () => ({}) } }
}
</script>
