<template>
  <div class="h-100">
    <Header is-homepage="true" page="homepage">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            TESAŘSTVÍ IVEL
          </h1><br>
          <span class="second">Naše firma nabízí všechny řemeslné práce spojené se dřevem a dřevěnými stavbami.</span>
          <button id="infoBtn" class="header-button" @click="scrollTo">
            Více informací
          </button>
        </div>
      </template>
    </Header>
    <main id="main-intro" class="homepage__main">
      <section class="homepage__main--intro">
        <h2>Kdo jsme?</h2>
        <p class="homepage__main--intro__title">
          Tesařství Ivel poskytuje služby v oblasti tesařství a práci se dřevem. Máme za sebou více než 10 let praxe. Firma klade největší důraz na kvalitu provedené práce a komunikaci se zákazníkem.
        </p>
        <div class="homepage__main--about">
          <div class="homepage__main--about__wrapper">
            <div>
              <h3><img :src="heart" alt="heart icon">Kvalita</h3>
              <p>Jsme profesionálové a veškerou práci děláme s láskou k našemu řemeslu. Využíváme kvalitních surovin a nástrojů. Ke každé zakázce přistupujeme indivudálně a snažíme se najít optimální řešení.</p>
            </div>
          </div>

          <div class="homepage__main--about__wrapper ml-14">
            <div>
              <h3><img :src="tool" alt="tools icon">Spolehlivost</h3>
              <p>Práci děláme poctivě. Při realizaci se snažíme vyhovět přáním klenta. Zároveň poskytujeme odborné poradenství v oblasti stavebních prací při výběru materiálu, nebo při způsobu realizace.</p>
            </div>
          </div>

          <div class="homepage__main--about__wrapper ml-14">
            <div>
              <h3><img :src="time" alt="calendar icon">Rychlost</h3>
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
            <img src="../img/pristresky/P7210139.webp" alt="reference" title="reference" loading="lazy" @click="index = 0">
            <span class="card__text">
              <p><b>Realizace pergoly</b></p>
              <p class="card__text--small">Pergoly</p>
            </span>
          </div>
          <div class="card">
            <img src="../img/header/2.webp" alt="reference" title="reference" loading="lazy" @click="index = 1">
            <span class="card__text">
              <p><b>Realizace garážového stání</b></p>
              <p class="card__text--small">Přístřešky</p>
            </span>
          </div>
          <div class="photo-list">
            <img
              src="../img/pristresky/img187.webp"
              alt="práce"
              loading="lazy"
              width="200"
              height="200"
              @click="index = 2"
            >
            <img
              src="../img/drevostavby/PB104177.webp"
              alt="práce"
              loading="lazy"
              width="200"
              height="200"
              @click="index = 3"
            >
            <img
              src="../img/pristresky/img196.webp"
              alt="práce"
              loading="lazy"
              width="200"
              height="200"
              @click="index = 4"
            >
            <img
              src="../img/ostatni/1642858616540.webp"
              alt="práce"
              loading="lazy"
              width="200"
              height="200"
              @click="index = 5"
            >
          </div>
          <div class="photo-list__controls">
            <span class="dot" />
            <span class="dot" />
            <span class="dot" />
          </div>
        </div>
        <client-only placeholder="Loading...">
          <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />
        </client-only>
      </section>

      <section class="homepage__main--workWithUs">
        <h2>Máte zájem o naše služby?</h2>
        <p class="homepage__main--intro__title">
          Máte-li jakýkoliv dotaz, nebo Vás zajímají ceny našich služeb, můžete nám zavolat, nebo využít kontaktního formuláře kliknutím na tlačítko.
        </p>
        <NuxtLink to="/kontakt" style="text-decoration: none;">
          <button class="header-button contact-button">
            Kontaktní formulář
          </button>
        </NuxtLink>
      </section>
      <button id="scrollButton" title="Nahoru">
        <img :src="arrow" alt="top">
      </button>
    </main>
    <Footer />
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'
import tool from '../img/icons/tool.svg'
import heart from '../img/icons/heart.svg'
import time from '../img/icons/time.svg'
import work1 from '../img/pristresky/P7210139.webp'
import work2 from '../img/header/2.webp'
import zahrada03 from '../img/pristresky/img187.webp'
import zahrada01 from '../img/drevostavby/PB104177.webp'
import bklad01 from '../img/pristresky/img196.webp'
import krov04 from '../img/ostatni/1642858616540.webp'
import arrow from '../img/prev.png'

export default {
  components: {
    VueGallerySlideshow
  },
  data () {
    return {
      tool,
      heart,
      time,
      arrow,
      images: [
        work1,
        work2,
        zahrada03,
        zahrada01,
        bklad01,
        krov04
      ],
      index: null
    }
  },

  created () {
    console.log('CREATED BY JAN HROMADKA WITH 💓\ncontact me for collab janxhromadka@outlook.cz')
  },

  methods: {
    scrollTo () {
      const element = document.getElementById('main-intro')
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
