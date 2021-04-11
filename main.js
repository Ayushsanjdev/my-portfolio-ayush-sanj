// creating function for mobile navigation to work

function toggleMobileNavigation() {
    var element = document.getElementById("mobile-nav");

    if (element.classList.contains("mobile-nav-open")) {

        element.classList.remove("mobile-nav-open");
    } else {
        element.classList.add("mobile-nav-open");
    }
}






// function directionNotification() {
//     alert("click on blue button and see accordingly!!, :) :D");
// }
// var click = document.getElementById("direction").addEventListener("click", directionNotification());