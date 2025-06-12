console.log("hello"); /* test conectare script > website */

/* link active culoare rosie */
  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); //identificare pagina web
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage || (linkPage === "acasa.html" && currentPage === "")) {
        link.classList.add("active"); //adaugare clasa active
      }
    });
  });
  

// script functionare meniu telefon
document.addEventListener("DOMContentLoaded", function () {
  const HAMBURGER_MENU = document.getElementById("HAMBURGER-MENU");
  const phoneNavLinks = document.querySelector(".phone-nav-links");
  let isMenuOpen = false;

  HAMBURGER_MENU.addEventListener("click", () => {
    if (!isMenuOpen) {
      phoneNavLinks.classList.remove("hidden"); // deschide
      isMenuOpen = true;
    } else {
      phoneNavLinks.classList.add("hidden"); // închide
      isMenuOpen = false;
    }
  });
});

// script funtionare animatii in functie de marimea ecranului

 document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.innerWidth < 768; // prag pentru mobil
    const reviews = document.querySelectorAll(".star-review");

    reviews.forEach((review) => {
      review.setAttribute("data-aos", isMobile ? "fade-right" : "fade-up");
    });

    // Reinitializează AOS după setare
    if (AOS) {
      AOS.init();
    }
  });


  // Așteaptă ca pagina să se încarce complet
  document.addEventListener("DOMContentLoaded", function () {
    // Selectează toate elementele cu clasa 'logo'
    const logoElements = document.querySelectorAll(".logo");

    // Adaugă evenimentul de click pentru fiecare
    logoElements.forEach(function (element) {
      element.addEventListener("click", function () {
        // Redirecționează către pagina principală
        window.location.href = "index.html";
      });
    });
  });


  //script functionare sageata spre meniu format telefon
document.querySelector(".menu-up").addEventListener("click" , () => {
  window.location.href = "#PHONE";
});

//script functionare whatssapp logo verde format telefon
document.querySelector(".menu-wh").addEventListener("click" , () => {
      const phoneNumber = '40758594669'; // înlocuiește cu numărul tău fără "+"
      const message = 'Bună ziua! Aș dori o programare cât mai curând posibil la service. Îmi puteți spune ce intervale aveți libere ?'; // mesajul predefinit
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
});

// script functionare footer media

//facebook
document.querySelector(".footer-fb").addEventListener("click" , () => {
      const url = `https://www.facebook.com/profile.php?id=61576937092982`;
      window.open(url, '_blank');
});

//whatsapp
document.querySelector(".footer-wh").addEventListener("click" , () => {
      const phoneNumber = '40758594669'; // înlocuiește cu numărul tău fără "+"
      const message = 'Bună ziua! Aș dori o programare cât mai curând posibil la service. Îmi puteți spune ce intervale aveți libere ?'; // mesajul predefinit
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
});

//instagram
document.querySelector(".footer-insta").addEventListener("click" , () => {
      alert("In curand!");
});

//tiktok
document.querySelector(".footer-tiktok").addEventListener("click" , () => {
      alert("In curand!");
});
