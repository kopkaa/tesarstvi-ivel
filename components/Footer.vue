<template>
  <footer>
    <div class="footer">
      <div class="column">
        <div class="logo" />
      </div>
      <div class="column">
        <h3>Tesařství kabeláč</h3>
        <p>Na trhu působíme již od roku 2005. Během této doby jsme nabrali mnoho zkušeností, díky nimž jsme schopni postavit roubenku či jinou dřevostavbu přesně podle Vašich představ. K tomu využíváme moderní postupy a technologie.</p>
      </div>
      <div class="column">
        <h3>Kontakt</h3>
        <p>Můžete nás kontaktovat formulářem na našich stránkách, případně můžete zavolat na níže uvedené číslo, nebo napsat email.</p>
        <div class="socials">
          <div class="icons">
            <div><img :src="pin"><span>Na Plavisku 1235, Vsetín</span></div><br>
            <div><img :src="phone"><span>774 888 357</span></div><br>
            <div><img :src="email"><span>tesar.kabelac@seznam.cz</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-second">
      <!-- TODO: pridat srdce -->
      <p>© Created by <a href="mailto:janxhromadka@outlook.cz">Jan Hromádka</a></p>
      <ul>
        <li><a href="index.html">Úvod</a></li>
        <li><a href="services.html">Služby</a></li>
        <li><a href="about.asp">Galerie</a></li>
        <li><a href="contact.html">Kontakt</a></li>
      </ul>
    </div>
  </footer>
</template>
<script>
import email from '../img/icons/mail.svg'
import pin from '../img/icons/map-pin.svg'
import phone from '../img/icons/phone.svg'
import heart from '../img/icons/heart.svg'

export default {
  data () {
    return {
      email,
      pin,
      phone,
      heart
    }
  }
}
</script>
