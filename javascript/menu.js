const toggle = document.getElementById("menuToggle");
const navMobile = document.getElementById("navMobile");

toggle.addEventListener("click", () => {
  navMobile.style.display = navMobile.style.display === "block" ? "none" : "block";
});
