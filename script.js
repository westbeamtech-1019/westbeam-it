// =========================================================
// WESTBEAM TECHNOLOGIES
// Main JavaScript
// =========================================================


// ---------- COPYRIGHT YEAR ----------

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ---------- SMOOTH NAVIGATION ----------

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ---------- MOBILE MENU ----------

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("active");

    });


    // Close menu after selecting a navigation link

    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

        });

    });

}
// ---------- CONTACT FORM MESSAGE ----------

const formMessage = document.getElementById("formMessage");

const urlParams = new URLSearchParams(window.location.search);

if (formMessage && urlParams.get("sent") === "1") {

    formMessage.textContent =
        "Thank you! Your enquiry has been sent successfully. We will get back to you shortly.";

    formMessage.classList.add("success");

}

if (formMessage && urlParams.get("sent") === "0") {

    formMessage.textContent =
        "Sorry, we couldn't send your enquiry. Please contact us directly at info@westbeamtech.com.";

    formMessage.classList.add("error");

}