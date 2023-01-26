$(document).ready(function(){
    $("#form").submit(function(){
        var correct = "the beatles";
        var text = $("#textarea").val();
        if (text != correct){
            alert("INCORRECT! Tip: They were 4 in the band.");
        }else{
            alert("Good job!");
        }

    })
   

})