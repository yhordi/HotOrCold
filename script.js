$(document).ready(function () {

    var num = Math.floor((Math.random() * 100) + 1);
    console.log(num);
    var guesses = []; 

    $(".temperature").hide();

    $("#restart").hide();

    $("#congrats").hide();

    $(".alert").hide();

    $("#guess").click(function () {
        var userAttempt = $("#userGuess").val();
    
    if (userAttempt === ""){
        $("#noString").show();
    }

    if (userAttempt > 100) {
        $(".alert").hide();
        $("#over100").show();
        $(".temperature").hide();
        guesses.push(parseInt(userAttempt));
    }

    if (userAttempt < 0) {
        $(".alert").hide();
        $("#under1").show();
        $(".temperature").hide();
    }

    if (userAttempt < num && userAttempt > 0) {
        $("#warmer").hide();
        $("#colder").show("slow",function(){});
        $("#guesses").append(" " + userAttempt);
        $(".alert").hide();
         guesses.push(parseInt(userAttempt));
    }
    
    if (userAttempt > num && userAttempt < 100) {
        $("#colder").hide();
        $("#warmer").show("slow", function(){});
        $("#guesses").append(" " + userAttempt);
        $(".alert").hide();
        guesses.push(parseInt(userAttempt));
    }
    

    if (userAttempt == num) {
        $("#congrats").fadeIn("fast");
        $("#restart").show("slow", function(){});
    }
        console.log(guesses);

    });
     
    $("#restart").click(function () {
         num = Math.floor((Math.random() * 100) + 1);
    console.log(num);
        $("#congrats").hide();
        $("#restart").hide();
        $("#noString").hide();
});   

	
});

	