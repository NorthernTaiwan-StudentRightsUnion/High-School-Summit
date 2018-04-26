<template>
  <div class="container-fluid header" :style="{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/high-school-summit.appspot.com/o/cover-photo.jpg?alt=media&token=56ded2b6-b240-4688-9732-0c0ca3b6ea3f')` }">
    <div class="row">
      <div class="col-md-6 offset-md-3 header-text">
        <h1>{{ $t('PROGRAM_NAME') }}</h1>
        <button class="btn btn-primary btn-lg">{{ $t('APPLY_NOW') }}</button>
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
