function myMenu() {
    var x = document.getElementById("menu");
    if (x.className === "hamburger-menu") {
        x.className += " responsive";
    } else {
        x.className = "hamburger-menu";
    }
}
function myContact() {
    //document.getElementById("contact").style.display = "block";
    var y = document.getElementById("contact");
    y.classList.remove("hide");
    y.classList.add("show");
}
function closeContact() {
    document.getElementById("contact").style.display = "none";
}