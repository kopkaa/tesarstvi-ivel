<template>
  <div class="h-100">
    <Header is-homepage="true">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            Tesařství kabeláč
          </h1><br>
          <span class="second">Nabízíme montáže suchých staveb, realizaci fasád, dřevostaveb, prodej stavebních materiálů atd.</span>
          <button id="infoBtn" class="header-button">
            Více informací
          </button>
        </div>
      </template>
    </Header>
    <main id="main-intro" class="homepage__main">
      <section class="homepage__main--intro">
        <h2>Kdo jsme?</h2>
        <p class="homepage__main--intro__title">
          Tesařství Kabeláč poskytuje služby v oblasti tesařství a práci se dřevem. Máme za sebou více než 10 let praxe. Firma klade největší důraz na kvalitu provedené práce a komunikaci se zákazníkem.
        </p>
        <div class="homepage__main--about">
          <div class="homepage__main--about__wrapper">
            <div>
              <h3><img :src="heart">Kvalita</h3>
              <p>Jsme profesionálové a veškerou práci děláme s láskou k našemu řemeslu. Využíváme kvalitních surovin a nástrojů. Ke každé zakázce přistupujeme indivudálně a snažíme se najít optimální řešení.</p>
            </div>
          </div>

          <div class="homepage__main--about__wrapper ml-14">
            <div>
              <h3><img :src="tool">Spolehlivost</h3>
              <p>Práci děláme poctivě. Při realizaci se snažíme vyhovět přáním klenta. Zároveň poskytujeme odborné poradenství v oblastni stavebních prací při výběru materiálu, nebo při způsobu realizace.</p>
            </div>
          </div>

          <div class="homepage__main--about__wrapper ml-14">
            <div>
              <h3><img :src="time">Rychlost</h3>
              <p>Díky mnohaletým zkušenostem provádíme tesařské práce rychle a kvalitně. Spolehnout se můžete na férové a rychlé jednání. Snažíme se dodržovat předem dohodnuté termíny zhotovení našich prací.  </p>
            </div>
          </div>
        </div>
      </section>

      <section class="homepage__main--work">
        <h2>Naše práce</h2>
        <p class="homepage__main--intro__title">
          Zde je pár ukázek našich posledních prací
        </p>
        <div class="homepage__main--work__wrapper">
          <div class="card">
            <!-- <a href="./img/work/01.jpg" data-lightbox="show-1" data-title="Práce"><img src="./img/work/01.jpg" alt="reference" title="reference"></img></a> -->
            <span class="card__text">
              <p><b>Realizace pergoly</b></p>
              <p class="card__text--small">Pergoly</p>
            </span>
          </div>
          <div class="card">
            <!-- <a href="./img/work/strecha02.jpg" data-lightbox="show-1" data-title="Práce"><img src="./img/work/strecha02.jpg" alt="reference" title="reference"></img></a> -->
            <span class="card__text">
              <p><b>Realizace střesního krovu</b></p>
              <p class="card__text--small">Krovy</p>
            </span>
          </div>
          <div class="photo-list">
            <!-- <a href="./img/work/zahrada03.jpg" data-lightbox="show-1" data-title="Práce"><img src="./img/work/zahrada03.jpg" class="" alt="práce"></a>
            <a href="./img/work/zahrada01.jpg" data-lightbox="show-1" data-title="Práce"><img src="./img/work/zahrada01.jpg" class="" alt="práce"></a>
            <a href="./img/work/podlaha01.jpg" data-lightbox="show-1" data-title="Práce"><img src="./img/work/podlaha01.jpg" class="" alt="práce"></a>
            <a href="./img/work/krov04.jpg" data-lightbox="show-1" data-title="Práce"><img src="./img/work/krov04.jpg" class="" alt="práce"></a> -->
          </div>
          <div class="photo-list__controls">
            <span class="dot" />
            <span class="dot" />
            <span class="dot" />
          </div>
        </div>
      </section>

      <section class="homepage__main--workWithUs">
        <h2>Máte zájem o naše služby?</h2>
        <p class="homepage__main--intro__title">
          Máte-li jakýkoliv dotaz, nebo Vás zajímají ceny našich služeb, můžete nám zavolat, nebo využít kontaktního formuláře kliknutím na tlačítko.
        </p>
        <button class="header-button">
          <a href="contact.html">Kontaktní formulář</a>
        </button>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import tool from '../img/icons/tool.svg'
import heart from '../img/icons/heart.svg'
import time from '../img/icons/time.svg'
export default {
  data () {
    return {
      tool,
      heart,
      time
    }
  }
}
</script>
