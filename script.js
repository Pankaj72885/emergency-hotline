const servicesCardSection = document.getElementById("services-card-section");
servicesCardSection.addEventListener("click", function (event) {
  if (event.target.closest(".fa-heart")) {
    const heartElement = document.getElementById("heart-count");
    const currentCount = parseInt(heartElement.textContent, 0);
    heartElement.textContent = currentCount + 1;
  }
});
