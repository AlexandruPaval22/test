//create button more and less

//button more
let more = document.getElementById("more");

//button less

let less= document.getElementById("less");
less.style.display = "none";


//event click for button more images

more.addEventListener("click" , () => {
    //set display for buttons
        more.style.display = "none";
        less.style.display = "block"

        //create variable for all image with class ".hide"

        let hideImage = document.querySelectorAll(".i");
// looping for select all element and removes class ".hide"
        for( let i = 0; i < hideImage.length; i++){
            hideImage[i].classList.remove("hide");
        }

     });

//event click for button less images

less.addEventListener("click" , () => {
     //set display for buttons
    less.style.display = "none";
    more.style.display = "block"

    //create variable for all image with class ".hide"

    let hideImage = document.querySelectorAll(".i");
// looping for select all element and add class ".hide"
    for( let i = 0; i < hideImage.length; i++){
        hideImage[i].classList.add("hide");
    }
})


// form email send

function sendEmail() {
    var name = document.getElementById("name").value;
    var tel = document.getElementById("tel").value;

    Email.send({
        SecureToken: "64e3263c-6220-4351-b8f4-d3fbcce55aa4",
        To: 'seniorum.is@gmail.com',
        From: "seniorum.is@gmail.com",
        Subject: document.getElementById("email").value,
        Body: '<b>Nume: </b>' + name + '<br>' + '<b>Telefon: </b>' + tel + "<br>" + document.getElementById("mesaj").value
    }).then(
        function (message) {
            if (message === "OK") {
                // Email-ul a fost trimis cu succes, redirec&#539;ioneaz&#259; c&#259;tre pagina "multumesc.html"
                window.location.href = "multumesc.html";
            } else {
                // A ap&#259;rut o eroare la trimiterea email-ului
                alert("Eroare la trimiterea email-ului.");
            }
        }
    );
};

    //create a function for all phone call button

const CALL_ME = document.querySelectorAll(".call-me");

function call(){
        window.location.href = "tel:0755992255";
}

CALL_ME.forEach(function(element){
    element.addEventListener("click" , call);
});


/* mobile fixed */

let mobileFixed = document.getElementById("mobile");

mobileFixed.addEventListener("click" , () => {
    window.location.href = "tel:0755992255";
});