//manipulating style with jquery
$("h1").addClass("big-title margin-50");

//manipulating text with jquery
$("button").html("<em>Hey</em>");

//manipulating attribute with jquery
$("img").attr("src"); //print image

$("a").attr("href", "https://www.yahoo.com"); //replace previous link with the new one.

//adding event listner with jquery
$("h1").click(function(){
    $("h1").css("color","purple");
});

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event){
    $("h1").text(event.key);
});

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple");
// })

$("h1").on("click", function() {
    $("h1").css("color", "purple");
})