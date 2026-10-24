//the clicker button program

let count = 0;

// an indexed array of data
let colors = ["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];

let buttonText="";

// green, orange, brown, yellow, gold, purple, red, pink 



$("#needy-button").click(function(){
    //what to do when button is clicked
    count = count + 1;
    
    console.log(count);
    console.log(colors[count-1]);

    buttonText="I was clicked " + count + " times and color is " + colors[count-1];

    $("#needy-button").html(buttonText);

    $("body").css("background-color", colors[count-1]);
    $("body").append("<img src='" + colors[count-1] + ".jpg'>");
    
});

