$(document).ready(function () {

    var num = Math.floor((Math.random() * 100) + 1);
    console.log(num);
    var guesses = [];
    
    $(".temperature").hide();

    $("#restart").hide();

    $("#congrats").hide();

    $(".alert").hide();

    $(".lowHigh").hide();

    $("#guess").click(function () {
        var userAttempt = $("#userGuess").val();
        guesses.push(parseInt(userAttempt));
        distance = Math.abs(guesses[guesses.length-1] - num);
        if (distance === 0) {
            $("#congrats").fadeIn("fast");
            $("#restart").show("slow", function () {});
            $(".lowHigh").hide();
        }

        else if (userAttempt === "") {
            $("#noString").show();

        } 
        else if (guesses.length <= 1) {
            if (userAttempt < num && userAttempt > 0) {
                $("#tooLow").show("fast")
            }
            else $("#tooHigh").show("fast")
                $("#guesses").append(" " + userAttempt);
        }
        else if (userAttempt > 100) {
            $(".alert").hide();
            $("#over100").show();
            $(".temperature").hide();
            $(".lowHigh").hide();
            
        } else if (userAttempt <= 0) {
            $(".alert").hide();
            $("#under1").show();
            $(".temperature").hide();
            $(".lowHigh").hide();
            
        } else if (distance > Math.abs(guesses[guesses.length - 2] - num)) {
            $("#warmer").hide();
            $("#colder").show("slow", function () {});
            $("#guesses").append(" " + userAttempt);
            $(".alert").hide();
            $(".lowHigh").hide();
                    
        } else if (distance < Math.abs(guesses[guesses.length - 2] - num)) {
            $("#colder").hide();
            $("#warmer").show("slow", function () {});
            $("#guesses").append(" " + userAttempt);
            $(".alert").hide();
            $(".lowHigh").hide();
     
        }

        console.log(guesses);
        console.log("distance " + distance)

    });

    $("#restart").click(function () {
        num = Math.floor((Math.random() * 100) + 1);
        console.log(num);
        $("#congrats").hide();
        $("#restart").hide();
        $("#noString").hide();
        $("#guesses").empty();
        $("temperature").hide();
        guesses = [];
    });


});