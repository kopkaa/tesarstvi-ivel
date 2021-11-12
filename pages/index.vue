<template>
  <div class="h-100">
    <Header is-homepage="true" page="homepage">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            Tesařství kabeláč
          </h1><br>
          <span class="second">Naše firma nabízí všechny řemeslné práce spojené se dřevem a dřevěnými stavbami.</span>
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
            <!-- TODDO scale image on hover -->
            <img src="../img/work/01.jpg" alt="reference" title="reference" @click="openLightbox(0)">
            <span class="card__text">
              <p><b>Realizace pergoly</b></p>
              <p class="card__text--small">Pergoly</p>
            </span>
          </div>
          <div class="card">
            <img src="../img/work/strecha02.jpg" alt="reference" title="reference" @click="openLightbox(1)">
            <span class="card__text">
              <p><b>Realizace střesního krovu</b></p>
              <p class="card__text--small">Krovy</p>
            </span>
          </div>
          <div class="photo-list">
            <img src="../img/work/zahrada03.jpg" class="" alt="práce" @click="openLightbox(2)">
            <img src="../img/work/zahrada01.jpg" class="" alt="práce" @click="openLightbox(3)">
            <img src="../img/work/podlaha01.jpg" class="" alt="práce" @click="openLightbox(4)">
            <img src="../img/work/krov04.jpg" class="" alt="práce" @click="openLightbox(5)">
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
        <button class="header-button contact-button">
          <NuxtLink to="/kontakt">
            Kontaktní formulář
          </NuxtLink>
        </button>
      </section>
    </main>
    <Footer />
    <Lightbox :is-open="isLightboxOpened" :images="images" :thumbnail="id" @closeLightbox="isLightboxOpened=false" />
  </div>
</template>

<script>
import tool from '../img/icons/tool.svg'
import heart from '../img/icons/heart.svg'
import time from '../img/icons/time.svg'
import work1 from '../img/work/01.jpg'
import work2 from '../img/work/strecha02.jpg'
import zahrada03 from '../img/work/zahrada03.jpg'
import zahrada01 from '../img/work/zahrada01.jpg'
import podlaha01 from '../img/work/podlaha01.jpg'
import krov04 from '../img/work/krov04.jpg'

export default {
  data () {
    return {
      isLightboxOpened: false,
      id: 0,
      tool,
      heart,
      time,
      images: [
        work1,
        work2,
        zahrada03,
        zahrada01,
        podlaha01,
        krov04
      ]
    }
  },

  created () {
    console.log('CREATED BY JAN HROMADKA WITH 💓\ncontact me for collab janxhromadka@outlook.cz')
  },

  methods: {
    openLightbox (id) {
      this.id = id
      this.isLightboxOpened = true
    }
  }
}
</script>
