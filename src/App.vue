<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  methods: {
    setLanguage() {
      this.$i18n.locale = navigator.language
    }
  },
  mounted() {
    this.setLanguage()
  },
  components: {
    Navbar
  }
}
</script>

<style>
</style>
