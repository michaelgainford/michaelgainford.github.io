function toggleNav() {
  var x = document.getElementById("top-nav")
  if (x.className === "top-nav") {
    x.className += " responsive"
  } else {
    x.className = "top-nav"
  }
}