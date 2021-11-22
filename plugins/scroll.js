export default () => {
  window.onscroll = function () { scrollFunction() }

  function scrollFunction () {
    const scrollButton = document.getElementById('scrollButton')
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollButton.style.display = 'block'
    } else {
      scrollButton.style.display = 'none'
    }
  }
}
