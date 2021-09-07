function showtab(a) {
  for (i = 0; i <= 2; i++) {
    var target = document.getElementById("tab" + i);
    var parent = document.getElementById("side" + i);

    if (i == a) {
      target.style.display = "block";

      parent.classList.add("checked");
    } else {
      target.style.display = "none";
      parent.classList.remove("checked");
    }
  }
}
