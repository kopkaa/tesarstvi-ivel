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
    <main id="contact">
      <h2>Kontaktujte nás</h2>
      <p class="desc">
        Popište nám stručně svůj projekt nebo co potřebujete řešit, nechte nám na Vás kontakt a my se Vám s radosti ozveme.
      </p>
      <div class="contact">
        <form class="contact__form">
          <input id="name" type="text" placeholder="Jméno">
          <input id="subject" type="text" placeholder="Předmět zprávy" required>
          <input id="email" type="email" placeholder="E-mail" required>
          <textarea id="message" placeholder="Zpráva" type="text" required />
          <input id="submit" type="submit" class="green-button" value="Poslat">
        </form>
      </div>
      <div class="line">
        <span> <i class="far fa-envelope" />tesar.kabelac@seznam.cz</span>
        <span><i class="fas fa-mobile-alt" />774 888 357</span><br>
      </div>
      <div style="width: 100%">
        <iframe
          width="100%"
          height="375"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Na%20Plavisku%201235,%20Vset%C3%ADn+(Teskab)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
export default {

}
</script>
