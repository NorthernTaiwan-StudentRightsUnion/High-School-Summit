<template>
  <div class="">
    <nav class="navbar navbar-expand-lg fixed-top bg-info navbar-transparent" color-on-scroll="5">
      <div class="container">
        <a class="navbar-brand" href="#">
          {{ $t('PROGRAM_NAME') }}
        </a>
        <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navigation">
          <ul class="navbar-nav">
            <li class="nav-item"><a href="#" class="nav-link">{{ $t('SCHEDULE') }}</a></li>
            <li class="nav-item"><a href="#" class="nav-link">{{ $t('SPONSOR') }}</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ $t('LANGUAGE') }}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#" @click="setLanguage('en-US')">English</a>
                <a class="dropdown-item" href="#" @click="setLanguage('zh-TW')">繁體中文</a>
              </div>
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

<style scoped>
.navbar .navbar-brand {
  text-transform: none !important;
  font-size: 1.3rem !important;
}
.navbar .navbar-nav .nav-link:not(.btn) {
  text-transform: none !important;
  font-size: 1rem !important;
}
.dropdown-menu .dropdown-item {
  font-size: 1rem !important;
}

@media screen and (max-width: 991px) {
  .dropdown-item {
    color: white;
  }
}

</style>
