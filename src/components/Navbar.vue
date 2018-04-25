<template>
  <div class="">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">{{ $t('PROGRAM_NAME') }}</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">{{ $t('SCHEDULE') }}</a></li>
            <li><a href="#">{{ $t('SPONSOR') }}</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('LANGUAGE') }} <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li @click="setLanguage('en-US')"><a href="#">English</a></li>
                <li class="divider"></li>
                <li @click="setLanguage('zh-TW')"><a href="#">繁體中文</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {

    }
  },
  methods: {
    setLanguage(language) {
      this.$i18n.locale = language
    }
  },
  mounted() {

  }
}
</script>

<style>
</style>
