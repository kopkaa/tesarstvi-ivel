<template>
  <header
    :class="[isHomepage ? 'h-100' : 'h-70' ]"
  >
    <div
      class="header__main"
      :class="getCss()"
    >
      <nav>
        <!-- <div>
          <img width="140" height="140" alt="logo" title="logo" src="../img/teskab_final_png.png">
        </div> -->

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
        <div><a class="hamburger" onclick="openNav()">☰</a></div>
      </nav>

      <slot name="header_title" />
    </div>
  </header>
</template>
<script>

export default {
  props: ['isHomepage', 'page'],

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
