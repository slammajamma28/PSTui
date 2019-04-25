$(document).ready(function(){

    /*
    *   XBA
    */
    if(window.location.href.indexOf("playstationtrophies") > -1) {
        $("body").addClass("pst");
    } else {
        $("body").addClass("xba");
    }

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
    /*$("body").append("<div id='live_modal'></div>");

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
    });*/

    // Post Character Count
    /*if($("#vB_Editor_001_textarea").length){
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
    }*/

    // Post Character Count
    var characterCounter = function(txt, char) {
        return (txt.match(new RegExp(char, "g")) || []).length;
    };
    var vbEditorTextLength = function(txt) {
        return txt.length + characterCounter(txt, "\n");
    };
    if($("#vB_Editor_001_textarea").length){
        $("#vB_Editor_001_textarea").parent().parent().after("<p id='charCount'>Character Count: <span>" + vbEditorTextLength($("#vB_Editor_001_textarea").val()) + "</span></p>");
        $("#vB_Editor_001_textarea").keyup(function(){
            $("#charCount span").text(vbEditorTextLength($(this).val()));
        });
    }
    /*if($("#vB_Editor_QR_textarea").length){
        $("#vB_Editor_QR_textarea").after("<p id='charCount'>Character Count: <span>0</span></p>");
        $("#vB_Editor_QR_textarea").keyup(function(){
            console.log("here");
            $("#charCount span").text(vbEditorTextLength($(this).val().length));
        });
    }*/

    // Signatures
    $("div[id^=post] .alt1 div:nth-child(4):contains('__________________')").each(function(){
        // Remove Lines
        var text = $(this).html();
        $(this).html(text.replace("__________________", ""));

        var staff = false;
        if($('.alt2:contains("Welcome, Noid")').length > 0){
            staff = true;
        }
        if(staff){
            // Log Signature Heights (with names)
            if($(this).height() > 300){ console.log("!!!ALERT!!!"); }
            console.log($(this).closest("table[id^=post]").find("a.bigusername").text() + ": " + $(this).height());
        }
    });




    /*
    * Fun shit for no good reason
    * */

    // Upside-down avatars
    /*$('img[src*="avatar"]').css("transform", "rotate(180deg)");*/

    // tuffmuff rainbow
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

    // Red edit button
    $("img[src^='http://www.playstationtrophies.org/forum/images/Main/buttons/edit.gif']").attr("src","https://i.imgur.com/FYxWyVz.png");
    $("img[src^='http://www.xboxachievements.org/forum/images/Main/buttons/edit.gif']").attr("src","https://i.imgur.com/FYxWyVz.png");

/* Code for MLP April Fools 2019
    // Tell everyone how cool i am
    var noidArray = [
        "I'm a Winter Mess-Up.",
        "An outhouse?",
        "You know, there's messy, and then there's just plain rude.",
        "Can't hear you, I'm asleep.",
        "I ate too much pie.",
        "Hey! I could clear the sky in ten seconds flat!",
        "SURPRISE!",
        "All the ponies in this town are CRAZY!",
        "Whee! Let's go!",
        "Oh, Rarity, your beautiful tail!",
        "♫ The darkness and the shadows, they would always make me frooooown... ♫",
        "AAAAH! Bats! Bats on my face! HEEEELP!!",
        "...and then I said, \"Oatmeal? Are you CRAZ\"—oh.",
        "Don't you use your fancy mathematics to muddy the issue!",
        "Can bees squawk? I don't think so!",
        "Pinkie Pie, you are so random!",
        "I think I hear my laundry calling.",
        "Okay. Imagine me with a nice long Fu Manchu-type beard. Or maybe a goatee...",
        "Not everypony can be as brave as me.",
        "Beware! Beware, you pony folk! Those leaves of blue are not a joke!",
        "Oh, pony feathers!",
        "Pfe pfuh pfuh pfeak puh-pluh-pli-plus!",
        "Now I've gotta go find a trombone!",
        "YOU TOUCH IT, YOU BUY IT! We take cash or credit.",
        "Ultra Pony Roller Derby! Go!",
        "So... no fudge?",
        "Oh, horse apples!",
        "Somepony needs to put this thing out of its misery."
        /*"Noid rocks!",
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
        "Magus for GOTY 2019!",
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
        "The Price is WRONG, bitch!"*/
    ];
    $('div[id^=post_message]').each(function(){
        $(this).prepend("<span style='color: #351858;'>"+ noidArray[random = Math.ceil(Math.random() * 28)-1] +"</span><br/><br/>");
        // console.log(random = Math.ceil(Math.random() * 5)-1);
    });

    // Friendship is magic
    var images = [
        "https://i.imgur.com/2bHHDUf.png",
        "https://i.imgur.com/djUdeNl.png",
        "https://i.imgur.com/oICdNCT.png",
        "https://i.imgur.com/8CrDYAH.png",
        "https://i.imgur.com/1TfCsnU.png",
        "https://i.imgur.com/7O6dTTJ.png"
    ];
    $("img[alt*='Avatar']").each(function(){
        var num = (Math.floor(Math.random() * 6) + 1)-1;
        //console.log(num);
        $(this).attr("src", images[num]);
    });  END APRIL FOOLS 2019 */


});