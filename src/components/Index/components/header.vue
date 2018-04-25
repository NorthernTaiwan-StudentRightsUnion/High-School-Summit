<template>
  <div class="container-fluid header" :style="{ backgroundImage: `url('/static/cover-photo.jpg')` }">
    <div class="row">
      <div class="col-md-6 col-md-offset-3 header-text">
        <h1>{{ $t('PROGRAM_NAME') }}</h1>
        <p>&nbsp;</p>
        <button class="btn btn-success btn-lg">{{ $t('APPLY_NOW') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped>
.header {
  background-position: center;
}
.header-text {
  padding-top: 200px;
  padding-bottom: 200px;
  color: white;
  text-align: center;
}
</style>
