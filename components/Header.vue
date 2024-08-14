<template>
  <header :class="[isHomepage ? 'h-100' : 'h-70']">
    <div class="header__main" :class="getCss()">
      <div v-if="isHomepage" class="crossfade">
        <div class="img-1" />
        <div class="img-2" />
        <div class="img-3" />
        <div class="img-4" />
      </div>
      <nav>
        <ul v-if="false">
          <li>Telefon</li>
        </ul>
        <ul>
          <li>
            <NuxtLink to="/">
              Úvod
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/sluzby">
              Služby
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/galerie">
              Galerie
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/kontakt">
              Kontakt
            </NuxtLink>
          </li>
        </ul>

        <div id="myNav" class="overlay">
          <a
            id="closeHamburger"
            class="closebtn"
          >&times;</a>
          <div class="overlay-content">
            <NuxtLink to="/">
              Úvod
            </NuxtLink>
            <NuxtLink to="/sluzby">
              Služby
            </NuxtLink>
            <NuxtLink to="/galerie">
              Galerie
            </NuxtLink>
            <NuxtLink to="/kontakt">
              Kontakt
            </NuxtLink>
          </div>
        </div>
        <div id="hamburger-wrapper" @onclick="openNav()">
          <a class="hamburger">☰</a>
        </div>
      </nav>

      <slot name="header_title" />
    </div>
  </header>
</template>
<script>
export default {
  props: ['isHomepage', 'page'],
  mounted () {
    const hamburger = document.getElementById('hamburger-wrapper')
    hamburger.addEventListener('click', function (e) {
      document.getElementById('myNav').style.display = 'block'
      hamburger.style.display = 'none'
    })

    const hamburgerClose = document.getElementById('closeHamburger')
    hamburgerClose.addEventListener('click', function (e) {
      document.getElementById('myNav').style.display = 'none'
      hamburger.style.display = 'block'
    })
  },
  methods: {
    getCss () {
      if (this.page === 'services') {
        return 'header__main--services'
      } else if (this.page === 'contact') {
        return 'header__main--contact'
      } else if (this.page === 'homepage') {
        return 'header__main--homepage'
      } else if (this.page === 'gallery') {
        return 'header__main--gallery'
      } else {
        return ''
      }
    }
  }
}
</script>
