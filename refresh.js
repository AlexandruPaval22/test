let logos = document.querySelectorAll(".logos");

logos.forEach(logo => {
    logo.addEventListener("click" , () => {
        window.location.href = "index.html";
    })
})

