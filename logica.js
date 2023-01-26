$(document).ready(function(){
    let macaco = $("#macaco");
    let goodJob = $("#goodJob");
    macaco.hide();
    goodJob.hide();
    $("#form").submit((e) => {
        e.preventDefault();
        var correct = "the beatles";
        var text = $("#textarea").val();
        if (text != correct){
            alert("INCORRECT! Tip: They were 4 in the band.");
        }else{
            alert("Good job!");
       $("#goodJob").show();
        }

        if (text == "macaco"){
            $("#macaco").show();

        }

    })
   

})