document.addEventListener("DOMContentLoaded", function () {

  // Select primary header
  const header_primary = document.querySelector(".header__primary");
  const search_icon = document.querySelector(".header__primary__dropdown");
  const header = document.querySelector(".header");

    // Handles primary menu display
    search_icon.addEventListener("click", function () {
      if (window.getComputedStyle(header_primary).display === "none") {
        header_primary.classList.add("active");
        header_primary.classList.remove("inactive");
      }
      else {
        header_primary.classList.remove("active");
        header_primary.classList.add("inactive");
      }
    });
});
