document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript is running"); // Add this line to verify
  function menuToggle() {
    var navToggle = document.getElementById("myNavtoggle");
    var icon = document.getElementById("menu-icon");

    if (navToggle.className === "navtoggle") {
      navToggle.className += " responsive";
      icon.className = "fas fa-times"; // Switch to close icon
    } else {
      navToggle.className = "navtoggle";
      icon.className = "fas fa-bars"; // Switch back to burger icon
    }
  }

  // Expose the menuToggle function to be called by the burger icon
  window.menuToggle = menuToggle;

  // Function to close the menu and scroll to a section
  function scrollToSection(event, sectionId) {
    event.preventDefault(); // Prevent the default anchor behavior
    var section = document.getElementById(sectionId);

    if (section) {
      // Scroll to the section smoothly
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Close the menu
    var navToggle = document.getElementById("myNavtoggle");
    if (navToggle.className.includes("responsive")) {
      navToggle.className = "navtoggle";
      var icon = document.getElementById("menu-icon");
      icon.className = "fas fa-bars"; // Switch back to burger icon
    }
  }

  // Add click event listener to the contact link
  document.querySelectorAll('a[href="#contact"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      scrollToSection(event, "contact");
    });
  });
});

// Add zoom function for images
$(document).ready(function () {
  $("#zoom-image").ezPlus({
    zoomType: "lens",
    lensShape: "round",
    lensSize: 200,
  });

  $("#zoom-image").on("click", function (e) {
    e.preventDefault();
    $(this).parent("a").click();
  });
});
