//create a function for all phone call button

const CALL_ME = document.querySelectorAll(".call-me");

function call(){
        window.location.href = "tel:0755992255";
}

CALL_ME.forEach(function(element){
    element.addEventListener("click" , call);
});


//create a function for button 'fa o rezervare'

const FA_REZERVARE = document.querySelectorAll(".rezervare");

function faRezervare(){
   window.location.href = "#fa-o-rezervare";
}

FA_REZERVARE.forEach(function(element){
        element.addEventListener("click" , faRezervare);
    });


    //create a function for button messenger 

    const OPEN_MESSENGER = document.querySelectorAll(".messenger");

    function openMess(){
        window.open("https://www.facebook.com/profile.php?id=100086037742837");
    };

    OPEN_MESSENGER.forEach(function(element){
        element.addEventListener("click" , openMess);
    });

    //create a function open whatsApp

    const WHAPP = document.querySelectorAll(".whapp");

    console.log(WHAPP)
    
    function openWhapp(){
        window.open("https://wa.me/+40755992255");
    }

    WHAPP.forEach(function(element){
        element.addEventListener("click" , openWhapp);
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
    
/* mobile fixed */

let mobileFixed = document.getElementById("mobile");

mobileFixed.addEventListener("click" , () => {
    window.location.href = "tel:0755992255";
});