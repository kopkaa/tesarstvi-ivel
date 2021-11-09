<template>
  <header>
    <!-- udleat height podle props a bg-img taky -->
    <div
      class="header__main"
      :class="[isHomepage ? 'header__main--homepage' : '', ]"
    >
      <nav>
        <!-- <div>
          <img width="140" height="140" alt="logo" title="logo" src="../img/teskab_final_png.png">
        </div> -->

        <ul>
          <li><a href="index.html">Úvod</a></li>
          <li><a href="services.html">Služby</a></li>
          <li><a href="gallery.html">Galerie</a></li>
          <li><a href="contact.html">Kontakt</a></li>
        </ul>

        <div id="myNav" class="overlay">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <div class="overlay-content">
            <a href="index.html">Úvod</a>
            <a href="services.html">Služby</a>
            <a href="gallery.html">Galerie</a>
            <a href="contact.html">Kontakt</a>
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
  props: ['isHomepage']
}
</script>
