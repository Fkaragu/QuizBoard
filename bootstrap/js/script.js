//Business logic
var add = function(num1, num2, num3, num4, num5) {
  var res = num1 + num2 + num3 + num4 + num5;
  alert("You have scored " + res + " out of 100");
};


//user interface logic:
$(document).ready(function() {
  $("button#evaluate").click(function() {
    //event.preventDefault();
    var questOne = $("input:radio[name=choiceone]:checked").val();
    var questTwo = $("input:radio[name=choicetwo]:checked").val();
    var questThree = $("input:radio[name=choicethree]:checked").val();
    var questFour = $("input:radio[name=choicefour]:checked").val();
    var questFive = $("input:radio[name=choicefive]:checked").val();


    var res1, res2, res3, res4, res4;
    // Building logic
    //// QUESTION: 1
    if (questOne.toString() === "correct") {
      res1 = 20;
      //alert(res1);
    } else {
      res1 = 0;
      //alert(res1);
    }
    //// QUESTION: 2
    if (questTwo.toString() === "correct") {
      res2 = 20;
      //alert(res2);
    } else {
      res2 = 0;
      //alert(res2);
    }
    //// QUESTION: 3
    if (questThree.toString() === "correct") {
      res3 = 20;
      //alert(res3);
    } else {
      res3 = 0;
      //alert(res3);
    }
    //// QUESTION: 4
    if (questFour.toString() === "correct") {
      res4 = 20;
      //alert(res4);
    } else {
      res4 = 0;
      //alert(res4);
    }
    //// QUESTION: 5
    if (questFive.toString() === "correct") {
      res5 = 20;
      //alert(res5);
    } else {
      res5 = 0;
      //alert(res5);
    }
    add(res1, res2, res3, res4, res5);
    $('#review').prop('disabled', false);

  });
});
//user interface logic:
$(document).ready(function() {
  $("button#review").click(function() {
    $("#feedback1").show();
    $("#feedback2").show();
    $("#feedback3").show();
    $("#feedback4").show();
    $("#feedback5").show();
    $("#image").show();
  });
});
