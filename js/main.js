window.onscroll = (e) => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").classList.add("navbar-background");
  } else {
    document.querySelector(".navbar").classList.remove("navbar-background");
  }
}