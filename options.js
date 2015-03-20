$(document).ready(function(){

    // Variables for submission
    var pageWidth = "";

    // Page Width Slider
    $("#content_width").on("input", function(){
        $("#content_width_number").val($(this).val());
        pageWidth = $("#content_width_number").val();
    });

    // Submit
    $("#submit_form").click(function(e){
        e.preventDefault();

        // Errors
        if(pageWidth == ""){
            $("#status").text("Please Enter a Page Width Above").fadeIn(200);
            setTimeout(function() {
                $("#status").fadeOut(200);
            }, 1500);
        } else {
            chrome.storage.sync.set({
                storedPageWidth: pageWidth
            }, function() {
                $("#status").text("Saved: " + pageWidth).fadeIn(200);
                setTimeout(function() {
                    $("#status").fadeOut(200);
                }, 1500);
            });
        }

    });

});