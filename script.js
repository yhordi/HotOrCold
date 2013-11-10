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
        guesses.push(parseInt(userAttempt));
        distance = Math.abs(guesses[guesses.length-1] - num);
        if (userAttempt === "") {
            $("#noString").show();
        } else if (userAttempt > 100) {
            $(".alert").hide();
            $("#over100").show();
            $(".temperature").hide();
            if (distance < guesses[guesses.length - 2] - num) {
                alert("getting warmer");
            } else if (distance > Math.abs(guesses[guesses.length - 2] - num)) {
                alert("colder, broseph");
            }
        } else if (userAttempt < 0) {
            $(".alert").hide();
            $("#under1").show();
            $(".temperature").hide();
            if (distance < guesses[guesses.length - 2] - num) {
                alert("getting warmer");
            } else if (distance > Math.abs(guesses[guesses.length - 2] - num)) {
                alert("colder, broseph");
            }
        } else if (userAttempt < num && userAttempt > 0) {
            $("#warmer").hide();
            $("#colder").show("slow", function () {});
            $("#guesses").append(" " + userAttempt);
            $(".alert").hide();
            if (distance < Math.abs(guesses[guesses.length - 2] - num)) {
                alert("getting warmer");
            } else if (distance > Math.abs(guesses[guesses.length - 2] - num)) {
                alert("colder, broseph");
            }        
        } else if (userAttempt > num && userAttempt < 100) {
            $("#colder").hide();
            $("#warmer").show("slow", function () {});
            $("#guesses").append(" " + userAttempt);
            $(".alert").hide();
            if (distance < Math.abs(guesses[guesses.length - 2] - num)) {
                alert("getting warmer");
            } else if (distance > Math.abs(guesses[guesses.length - 2] - num)) {
                alert("colder, broseph");
            }
        } else if (userAttempt == num) {
            $("#congrats").fadeIn("fast");
            $("#restart").show("slow", function () {});
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
        guesses = [];
    });


});