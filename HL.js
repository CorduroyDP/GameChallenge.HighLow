$(document).ready(function() {
  var randomNumber =5 //Math.floor((Math.random() * 100) + 1);
  var numbAttempts = 1;
    $("#guess").click(function(event) {
        var yourGuess = parseInt($("#guessNumber").val());
        $("#guessNumber").val("");
        if (yourGuess === randomNumber) {
          $("#winner").show();
          $("#home").hide()
          $("#winAgain").click(function(event) {
            $("#winner").hide();
            $("#home").show();

          });
        } else if
          (yourGuess < randomNumber) {
          $(".badGuessAlert").html("Your Guess is too Low")
          $("#badGuess").show();
          $("#home").hide();
        }
          else if
          (yourGuess > randomNumber) {
            $(".badGuessAlert").html("Your Guess is too High")
            $("#badGuess").show();
            $("#home").hide();
          }

          $("#returnHome").click(function(event){
            $("#badGuess").hide();
            $("#home").show();
            $("#guessNumber").attr("autofocus","true");

          if
            (numbAttempts === 5){
              $("#home").hide();

            }
          });
          $("#returnHome").click(function(yourGuess){
              numbAttempts++
            if (numbAttempts === 5 && guessNumber !==randomNumber) {
            $("#loser").show();
            $("#badGuess").hide();
            $("#home").hide();
          }

          $("#playAgain").click(function(event){
            $("#loser").hide();
            $("#home").show();
          })

        event.preventDefault();
      });
});
});








    // var youWin = function() {
    //   if (guessNumber === randomNumber) {
    //     $("#winner").show();
    // }
    // }
  // //   var yourGuesses = []
  // //
  // // guessNumber.forEach(function(guessNumber){
  // //     var userInput = $("input#" + guessNumber).val();
  // // })
  // //
  // //
  // //   if (guess === randomnumber) {
  // //       $("#winner").show();
  // //   } else {
  // //       $("#loser").show();
  //
  //   }
