var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level=0;
var started=false;

function playSound(name){


    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});


$(document).keypress(function (){
    $("#level-title").html("Level "+level);
if(!started){
    nextSequence();
    started=true;
}

});

function nextSequence() {
level++;
    $("#level-title").html("Level "+level);

    var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + gamePattern)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
playSound(randomChosenColour);


 
}

function animatePress(currentColour){
var id=$("#"+currentColour);
id.toggleClass("pressed");

setTimeout(function (){
    id.removeClass("pressed");
},100);
    
}
console.log(level);



