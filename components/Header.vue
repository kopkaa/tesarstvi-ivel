<template>
  <header
    :class="[isHomepage ? 'h-100' : 'h-70' ]"
  >
    <div
      class="header__main"
      :class="getCss()"
    >
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
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
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
