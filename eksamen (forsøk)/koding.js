 
     document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");

    // Sjekk om brukeren har gjort et valg
    if (!localStorage.getItem("cookiesAccepted")) {
        popup.classList.add("active"); // Vis pop-up
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        popup.classList.remove("active"); // Lukk pop-up
    });

    declineButton.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "false");
        popup.classList.remove("active"); // Lukk pop-up
    });
});

