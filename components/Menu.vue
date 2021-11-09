<template>
  <header>
    <!-- <nav>
      <div>
        <img width="140" height="140" alt="logo" title="logo" src="../img/teskab_final_png.png">
      </div>

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
    </nav> -->

    <div class="header__main">
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
      <div class="header__main--title">
        <h1 class="main">
          Tesařství kabeláč
        </h1><br>
        <span class="second">Firma klade největší důraz na kvalitu provedené práce a komunikaci se zákazníkem. Nabízíme montáže suchých staveb, realizaci fasád, dřevostaveb, prodej stavebních materiálů atd.</span>
        <button id="infoBtn" class="header-button">
          Více informací
        </button>
      </div>
    </div>
  </header>
</template>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
