var random = Math.floor(Math.random()*(120-19+1))+19;

var val1 = Math.floor(Math.random()*12)+1;
var val2 = Math.floor(Math.random()*12)+1;
var val3 = Math.floor(Math.random()*12)+1;
var val4 = Math.floor(Math.random()*12)+1;
var total = 0;
var loss = 0;
var win = 0;



// console.log(random);

$(document).ready(function() {
    // all custom jQuery will go here

    $(".RandNum").html(random);

    $("#squat").click(function() {
        total += val1;
        $("#TotalScore").html(total);
        Failure();
        });


    $("#moth").click(function() {
            total += val2;
            $("#TotalScore").html(total);
            Failure();
            });      

    $("#kermit").click(function() {
            total += val3;
            $("#TotalScore").html(total);
            Failure();
            });

    $("#salt").click(function() {
            total += val4;
            $("#TotalScore").html(total);
            Failure();
            });



function Failure(){
    if(total>random){
        loss += 1;
        $("#EndGame").html("You have yeed your last haw.");
        $("#losses").html("Losses: " + loss);
        random = Math.floor(Math.random()*(120-19+1))+19;
        $(".RandNum").html(random);
        $("#TotalScore").html(0);
        val1 = Math.floor(Math.random()*12)+1;
        val2 = Math.floor(Math.random()*12)+1;
        val3 = Math.floor(Math.random()*12)+1;
        val4 = Math.floor(Math.random()*12)+1;
        total = 0;
        loss = loss;
    } else if(total === random){
        win += 1;
        $("#EndGame").html("YEE");
        $("#wins").html("Wins: " + win);
        random = Math.floor(Math.random()*(120-19+1))+19;
        $(".RandNum").html(random);
        $("#TotalScore").html(0);
        val1 = Math.floor(Math.random()*12)+1;
        val2 = Math.floor(Math.random()*12)+1;
        val3 = Math.floor(Math.random()*12)+1;
        val4 = Math.floor(Math.random()*12)+1;
        total = 0;
        win = win;

    }
}
                    















    
});

