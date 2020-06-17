// Function to switch the contents of the hero text, span section, every 3 seconds
var i = 0;
function heroSwitcher() {
  var heroText = document.getElementById("span-hero");
  var heroArray = [
    "a web developer ⌨️",
    "a biggg fan of coffee ☕",
    "in love with pixels 💻",
    "for hire! 🧑🏻‍",
    "ready to go 🚀",
  ];
  heroText.innerText = heroArray[i];
  i = (i + 1) % heroArray.length;
}
setInterval(heroSwitcher, 3000);
