<template>
  <div class="h-100">
    <Header page="services">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            Služby
          </h1><br>
          <span class="second">Nabízíme montáže suchých staveb, realizaci fasád, dřevostaveb, prodej stavebních materiálů atd.</span>
        </div>
      </template>
    </Header>
    <main id="services">
      <h2>Čím se zabýváme?</h2>
      <div class="services">
        <div class="services__row">
          <div class="item">
            <img src="../../img/roof.png" alt="roof icon">
            <h3>Střechy</h3>
            <p>Střešní práce jsou naši hlavní doménou.</p>
            <!-- <button class="services__more">
              Více
            </button> -->
          </div>
          <div class="item">
            <img src="../../img/house.png" alt="wooden house icon">
            <h3>Dřevostavby</h3>
            <p>Postavíme vám pergolu, posed nebo garáž</p>
            <!-- <button class="services__more">
              Více
            </button> -->
          </div>
          <div class="item">
            <img src="../../img/carpentry.png" alt="tools icon">
            <h3>Ostatní</h3>
            <p>Stavíme také ploty, terasy nebo přístřešky</p>
            <!-- <div v-if="showFlag" class="services__more__text">
            </div>
            <button class="services__more" @click="showFlag=!showFlag">
              Více
            </button> -->
          </div>
        </div>
      </div>
      <div class="line">
        <p>Pokud máte zájem o naše služby, neváhejte nás kontaktovat.</p>
      </div>
      <button id="scrollButton" title="Nahoru">
        <img :src="arrow" alt="top">
      </button>
    </main>
    <Footer />
  </div>
</template>
<script>
import arrow from '../../img/prev.png'

export default {

  data () {
    return {
      showFlag: false,
      arrow
    }
  },

  head () {
    return {
      title: 'Tesařství Ivel | Služby'
    }
  }

}
</script>
