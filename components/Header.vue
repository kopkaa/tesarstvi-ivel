<template>
  <header :class="[isHomepage ? 'h-100' : 'h-70']">
    <div class="header__main" :class="getCss()">
      <div v-if="isHomepage">
        <picture>
          <img class="hero-img img-1" src="../img/header/1.webp" loading="eager" alt="">
        </picture>
        <picture>
          <img
            class="hero-img img-2"
            src="../img/header/2.webp"
            loading="eager"
            alt=""
          >
        </picture>
        <picture>
          <img
            class="hero-img img-3"
            src="../img/header/3.webp"
            loading="eager"
            alt=""
          >
        </picture>
        <picture>
          <img
            class="hero-img img-4"
            src="../img/header/4.webp"
            loading="eager"
            alt=""
          >
        </picture>
      </div>
      <nav>
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
          <span
            id="closeHamburger"
            class="closebtn"
          >&times;</span>
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
          <span class="hamburger">☰</span>
        </div>
      </nav>

      <slot name="header_title" />
    </div>
  </header>
</template>
<script>
export default {
  props: ['isHomepage', 'page'],
  head () {
    if (this.isHomepage) {
      return {
        link: [
          { rel: 'preload', href: require('@/img/header/1.webp'), as: 'image' },
          { rel: 'preload', href: require('@/img/header/2.webp'), as: 'image' },
          { rel: 'preload', href: require('@/img/header/3.webp'), as: 'image' },
          { rel: 'preload', href: require('@/img/header/4.webp'), as: 'image' }
        ]
      }
    }
    return {}
  },
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
