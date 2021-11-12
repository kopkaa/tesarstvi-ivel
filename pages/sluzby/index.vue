<template>
  <div class="h-100">
    <Header>
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
    <main id="services">
      <h2>Čím se zabýváme?</h2>
      <div class="services">
        <div class="services__row">
          <div class="item">
            <!-- <img src="./img/roof.png"> -->
            <h3>Střechy</h3>
            <p>Střešní práce jsou naši hlavní doménou.</p>
            <button class="services__more">
              Více
            </button>
          </div>
          <div class="item">
            <!-- <img src="./img/house.png"> -->
            <h3>Dřevostavby</h3>
            <p>Postavíme vám pergolu, posed nebo garáž</p>
            <button class="services__more">
              Více
            </button>
          </div>
          <div class="item">
            <!-- <img src="./img/tile.png"> -->
            <h3>Ostatní</h3>
            <p>Také stavíme dřevěné fasády, terasy, přístřešky</p>
            <button class="services__more">
              Více
            </button>
          </div>
        </div>
      </div>
      <div class="line">
        <p>Pokud máte zájem o naše služby, neváhejte nás kontaktovat.</p>
      </div>
    </main>
    <Footer />
  </div>
</template>
