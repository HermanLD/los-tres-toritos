const mobileDropdown = document.querySelector(".mobile-dropdown");
const mobileDropdownBtns = document.querySelectorAll(".mobile-dropdown-btn");

function toggleMobileDropdown() {
  if (mobileDropdown.dataset.isExpanded === "false")
    mobileDropdown.dataset.isExpanded = "true";
  else mobileDropdown.dataset.isExpanded = "false";
}

mobileDropdownBtns.forEach(function (btn) {
  btn.addEventListener("click", toggleMobileDropdown);
});
