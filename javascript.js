$(document).ready(function(){

    /*
     *  ELEMENT PLACEMENT
     */

    // Move search bar to more appropriate position
    $("#search").appendTo("#menu");

    // Remove "Welcome" from Login section
    oldhtml = $('#login').html();
    var newhtml = oldhtml.replace("Welcome", "");
    $('#login').html(newhtml);

    // Fixing User pages top nav by hiding the extras
    $(".vbmenu_control").each(function(index) {
        $(".vbmenu_control:contains('Page')").hide();
        $("[id*=pagenav]").hide();
    });

    // Making the Login section look nicer
    $("#login img").remove();
    var loginAnchors = [];
    $("#login a").each(function(){
        loginAnchors.push(this);
    });
    $("#login").html("");
    for(var i in loginAnchors){
        if(i == (loginAnchors.length-1)){ $("#login").append(loginAnchors[i].outerHTML); }
        else { $("#login").append(loginAnchors[i].outerHTML + " | "); }
    }


    /*
     *  FUNCTIONALITY
     */

    // Enable checking all checkboxes for PMs
    $(":checkbox").click (function (e) {
        var checkID = e.target.id;
        checkID = checkID.replace("checkall_", "");
        if(checkID == "all"){ $(':checkbox').prop('checked', this.checked); }
        else { $(":checkbox[value=" + checkID + "]").prop('checked', this.checked); }
    });


    /*
     *  NEW FEATURES
     */

    // POST IMAGES OPEN IN MODAL
    // Add modal container
    $("body").append("<div id='live_modal'></div>");

    // Click Actions
    var movement = false;
    $('div[id^=post_message] img').attr("style", "cursor: pointer").click(function(){
        if(movement){
            // do nothing
        } else {
            movement = true;
            $("#live_modal").html("<img src='"+ this.src +"'/>").fadeIn(500);
            setTimeout(function(){
                movement = false;
            }, 500)
        }
    });
    $("#live_modal").click(function(){
        if(movement){
            // do nothing
        } else {
            movement = true;
            $(this).fadeOut(500);
            setTimeout(function(){
                movement = false;
            }, 500)
        }
    });

    // Post Character Count
    if($("#vB_Editor_001_textarea").length){
        $("#vB_Editor_001_textarea").parent().parent().after("<p id='charCount'>Character Count: <span>" + $("#vB_Editor_001_textarea").val().length + "</span></p>");
        $("#vB_Editor_001_textarea").keyup(function(){
            $("#charCount span").text($(this).val().length);
        });
    }
    if($("#vB_Editor_QR_textarea").length){
        $("#vB_Editor_QR_textarea").after("<p id='charCount'>Character Count: <span>0</span></p>");
        $("#vB_Editor_QR_textarea").keyup(function(){
            $("#charCount span").text($(this).val().length);
        });
    }

});