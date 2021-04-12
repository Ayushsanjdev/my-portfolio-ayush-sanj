// creating function for mobile navigation to work

function toggleMobileNavigation() {
    var element = document.getElementById("mobile-nav");

    if (element.classList.contains("mobile-nav-open")) {

        element.classList.remove("mobile-nav-open");
    } else {
        element.classList.add("mobile-nav-open");
    }
}