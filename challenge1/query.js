// $("h1").css({ fontSize: "8rem", textAlign: "center" }).click(function() {
//     // Toggle the color between red and black
//     const currentColor = $(this).css("color");
//     if (currentColor === "rgb(255, 0, 0)") { // "rgb(255, 0, 0)" is the RGB equivalent of red
//         $(this).css("color", "black");
//     } else {
//         $(this).css("color", "red");
//     }
// });

// alternate method for the above code

//query Animations
$(document).on("click", () => {
    $("h1").toggle();
})

$(document).keypress((event) => {
    $("h1").text( event.key);
})