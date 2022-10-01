document.addEventListener("DOMContentLoaded", () => {
  const hazardImagesSelect = document.querySelectorAll(".hazard");
  const modal = document.querySelectorAll(".modal");

  hazardImagesSelect.forEach((eachHazard) => {
    eachHazard.addEventListener("click", () => {
      includesFunction(eachHazard);
    });
  });

  function includesFunction(eachHazard) {
    if (eachHazard.id == "radiation") {
      modalDisplay(eachHazard.id);
    } else if (eachHazard.id == "isolation") {
      modalDisplay(eachHazard.id);
    } else if (eachHazard.id == "distance") {
      modalDisplay(eachHazard.id);
    } else if (eachHazard.id == "gravity") {
      modalDisplay(eachHazard.id);
    } else {
      modalDisplay(eachHazard.id);
    }
  }

  function modalDisplay(eachHazardId) {
    modal.forEach((eachModal) => {
      let eachModalString = String(eachModal.classList);
      if (eachModalString.includes(eachHazardId)) {
        eachModal.classList.remove("hidden");
        document.addEventListener("keydown", (e) => {
          if (e.key == "Escape") {
            eachModal.classList.add("hidden");
          }
        });
      }
    });
  }
});
