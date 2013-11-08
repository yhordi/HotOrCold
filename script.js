$(document).ready(function () {
    var num = Math.floor((Math.random() * 100) + 1);
    console.log(num);
    
    $(".temperature").hide();

    $("#restart").hide();

    $("#congrats").hide();

    $(".alert").hide();

    $("#guess").click(function () {
        var userAttempt = $("#userGuess").val();
    
    if (userAttempt < num && userAttempt > 0) {
        $("#warmer").hide();
        $("#colder").show("slow",function(){});
        $("#guesses").append(" " + userAttempt);
        $(".alert").hide();
    }
    if (userAttempt === ""){
        $("#noString").show();
    }
    if (userAttempt > num && userAttempt < 100) {
        $("#colder").hide();
        $("#warmer").show("slow", function(){});
        $("#guesses").append(" " + userAttempt);
        $(".alert").hide();
    }
    if (userAttempt > 100) {
        $(".alert").hide();
    	$("#over100").show();
        $(".temperature").hide();
    }

    if (userAttempt < 0) {
        $(".alert").hide();
    	$("#under1").show();
        $(".temperature").hide();
    }
    if (userAttempt == num) {
        $("#congrats").fadeIn("fast");
        $("#restart").show("slow", function(){});
    }
    

    });
     $("#restart").click(function () {
         num = Math.floor((Math.random() * 100) + 1);
    console.log(num);
        $("#congrats").hide();
        $("#restart").hide();
        $("#noString").hide();
});   
    
	
});

	