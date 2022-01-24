<template>
  <div class="h-100">
    <Header page="contact">
      <template #header_title>
        <div class="header__main--title">
          <h1 class="main">
            Kontakt
          </h1><br>
          <span class="second">Obraťe se na nás s jakoukoli poptávkou či dotazem.</span>
        </div>
      </template>
    </Header>
    <main id="contact">
      <h2>Kontaktujte nás</h2>
      <p class="desc">
        Popište nám stručně svůj projekt nebo co potřebujete řešit, nechte nám na Vás kontakt a my se Vám s radostí ozveme.
      </p>
      <div class="contact">
        <form class="contact__form">
          <input id="name" type="text" placeholder="Jméno">
          <input id="subject" type="text" placeholder="Předmět zprávy" required>
          <input id="phone" type="email" placeholder="E-mail" required>
          <textarea id="message" placeholder="Zpráva" type="text" required />
          <input id="submit" type="submit" class="contact-button" value="Poslat">
        </form>
      </div>
      <div class="line">
        <span> <img :src="email" width="25" alt="map  icon">tesar.kabelac@seznam.cz</span>
        <span><img :src="phone" width="25" alt="phone  icon">774 888 357</span><br>
      </div>
      <div style="width: 100%">
        <iframe
          width="100%"
          height="375"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?q=R%C5%AF%C5%BE%C4%8Fka%20281,%20756%2025&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
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
import email from '../../img/icons/mail.svg'
import phone from '../../img/icons/phone.svg'

export default {
  data () {
    return {
      arrow,
      email,
      phone
    }
  },
  head () {
    return {
      title: 'Tesařství Ivel | Kontakt'
    }
  }
}
</script>
