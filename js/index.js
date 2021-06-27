
console.log("your index.js file is loaded correctly!!");

$(document).ready(function () {

    $("#popup").hide().fadeIn(1000);
    $("#close").on("click", function (e) {
        e.preventDefault();
        $("#popup").fadeOut(1000);
    });
});