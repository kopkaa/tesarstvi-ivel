<template>
  <div class="h-100">
    <Header page="gallery">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            Galerie
          </h1><br>
          <span class="second">Zde je pár ukázek naši práce</span>
        </div>
      </template>
    </Header>
    <main id="gallery">
      <h2>Zde můžete najít pár ukázek naši práce</h2>
      <!-- TODO: Udelat detail a prochazeni -->
      <div class="gallery">
        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/01.jpg" alt="work reference">
        </div>
        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/02.jpg" alt="work reference">
        </div>

        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/03.jpg" alt="work reference">
        </div>

        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/altan01.jpg" alt="work reference">
        </div>

        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/altan02.jpg" alt="work reference">
        </div>

        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/krov01.jpg" alt="work reference">
        </div>

        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/krov02.jpg" alt="work reference">
        </div>

        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/krov03.jpg" alt="work reference">
        </div>
        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/krov04.jpg" alt="work reference">
        </div>

        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/strecha01.jpg" alt="work reference">
        </div>

        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/strecha02.jpg" alt="work reference">
        </div>

        <div class="gallery-item">
          <img class="gallery-image" src="../../img/work/zahrada01.jpg" alt="work reference">
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
