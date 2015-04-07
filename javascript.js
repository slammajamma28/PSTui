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




    /*
    * Fun shit for no good reason
    * */

    // Upside-down avatars
    /*$('img[src*="avatar"]').css("transform", "rotate(180deg)");*/

    // tuffmuff raindbow
    $("a.bigusername span:contains('tuffmuff')").html("" +
    "<span style='color:#f13c9d'>t</span>" +
    "<span style='color:#f80b25'>u</span>" +
    "<span style='color:#f78121'>f</span>" +
    "<span style='color:#f9e81f'>f</span>" +
    "<span style='color:#1e9730'>m</span>" +
    "<span style='color:#1b86bc'>u</span>" +
    "<span style='color:#243796'>f</span>" +
    "<span style='color:#6f0a82'>f</span>" +
    "");

    $("img[src^='http://www.playstationtrophies.org/forum/images/Main/buttons/edit.gif']").attr("src","http://i.imgur.com/FYxWyVz.png");

    // Tell everyone how cool i am
    /*var noidArray = [
        "Noid rocks!",
        "I can't help but swoon over that Noid guy!",
        "Man, have you SEEN Noid's SIX PACK!?",
        "Noid really melts my butter!",
        "Noid's so cool!",
        "I'd let Noid steal MY pizza!",
        "Noid sure knows how to treat a lady!",
        "A little off-topic, but has anybody else noticed how AWESOME Noid is?",
        "I like turtles.",
        "Release the Kraken!",
        "She sells sea shells by the sea shore.",
        "Battleship was a really underrated game.",
        "Magus for GOTY 2014!",
        "Back to the OT, did you guys see Noid's cool suit? I want one!",
        "My ankles smell like almonds...",
        "I really love Noid's cologne...",
        "Noid's got such a sweet aura, dude.",
        "Red is my favorite color",
        "My favorite color is chartreuse",
        "Pickle is my favorite color",
        "It rubs the lotion on it's skin, or else it gets the hose again.",
        "I'm the dude, man.",
        "That Noid dude abides.",
        "Oh, and this one time, at band camp...",
        "I had no idea you could milk a cat.",
        "I'm in a glass case of emotion!",
        "I'm kinda psychic. I have a fifth sense.",
        "It's like I have ESPN or something. My breasts can always tell when it's gonna rain.",
        "Aaaaarrrrrgggghhhh - Kelly Clarkson!",
        "I like to make sexy time!",
        "I'm glad Noid's single, because I'm gonna climb that like a tree.",
        "The Price is WRONG, bitch!"
    ];
    $('div[id^=post_message]').each(function(){
        $(this).prepend("<span style='color: red;'>"+ noidArray[random = Math.ceil(Math.random() * 32)-1] +"</span><br/><br/>");
        console.log(random = Math.ceil(Math.random() * 5)-1);
    });*/


});