document.getElementById("iconContainer").addEventListener("click", function () {
  var icon = document.getElementById("toggleIcon");

  if (icon.classList.contains("fa-chevron-right")) {
    icon.classList.remove("fa-chevron-right");
    icon.classList.add("fa-chevron-left");
  } else {
    icon.classList.remove("fa-chevron-left");
    icon.classList.add("fa-chevron-right");
  }

  // Toggle the collapse effect
  var textContainer = document.querySelector(".text-container");
  textContainer.classList.toggle("collapsed");
});
