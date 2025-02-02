$(document).ready(function(){

    console.log("PSTui Loaded");

    var currentPath = window.location.href;
    
    if (currentPath.includes("admtools")) {
    
        // Move the Reports Section Higher Up
        var reportsSection = $(".fixed-wrapper .section:eq(5)")
        reportsSection.insertAfter("#guide-navigation")

    }

    // Make tweaks to edit game page
    if (currentPath.includes("admtools/game_edit")) {
        
        // Enable the enter button to save changes
        $(document).keypress(function(){
            if(e.which == 13) {
                $("#game_edit_btn button").click()
            }
        })

        // Move Save Game Info box so that I don't need to scroll when updating stack info
        var edit_form = $("#game_edit .section:eq(0)");
        var submit_changes = $(".col-md-8 section:eq(7)");
        submit_changes.appendTo(edit_form);

    }

    // Make tweaks to forum creation page
    if (currentPath.includes("forum/admin")){

        // Enable the enter button to save changes
        $(document).keypress(function(){
            if(e.which == 13) {
                $("button.ipsButton_primary").click()
            }
        })

        if (currentPath.includes("do=form")){
        
            // Auto-check Discussions option
            document.getElementById("elRadio_forum_type_normal_forum_type").click();

            // Remove fields I don't use
            $("#form_new_header_permissions").css({"display": "none"})
            $("#forum_min_posts_view").css({"display": "none"})
            $("#forum_can_view_others").css({"display": "none"})
            $("#forum_permission_showtopic").css({"display": "none"})
            $("#forum_permission_custom_error").css({"display": "none"})
            $("#forum_use_feature_color").css({"display": "none"})
            //$("#form_new_forum_description").css({"display": "none"})
            $("#forum_icon").css({"display": "none"})
            $("#forum_card_image").css({"display": "none"})
            $("#forum_password_on").css({"display": "none"})
            $("#forum_skin_id").css({"display": "none"})
            $("#forum_ipseo_priority").css({"display": "none"})
            $("#form_new_forum_type li:eq(1)").css({"display": "none"})

            // Collapse Parent Forum options menu
            $("div.acpFormTabContent .ipsFieldRow_content .ipsSelectTree .ipsSelectTree_nodes .ipsScrollbar ul li .ipsSelectTree_itemOpen").removeClass("ipsSelectTree_itemOpen")
            $("div.acpFormTabContent .ipsFieldRow_content .ipsSelectTree .ipsSelectTree_nodes .ipsScrollbar ul li div[data-role]").css({"style":"display: none"}).css({"display": "none"})

        }

        if (currentPath.includes("do=permissions")) {

            // Hide some rows so that the Submit button is in line with the previous page
            $("tbody tr:eq(0)").css({"display": "none"})
            $("tbody tr:eq(1)").css({"display": "none"})
            $("tbody tr:eq(2)").css({"display": "none"})
            $("tbody tr:eq(3)").css({"display": "none"})
            $("tbody tr:eq(4)").css({"display": "none"})

        }
    }

    if (currentPath.includes("forum/forum") && currentPath.includes("do=add")) {

        var pollType = ''
        var q1Type = ''
        var contentType = ''
        // Add embedded styles for the buttons
        var styles = `
            <style>
                #platinumPollsButton, #hundredPercentPollsButton {
                    position: fixed;
                    left: 2%;
                    top: 45%;
                    transform: translateY(-50%);
                    z-index: 10000;
                }
                #hundredPercentPollsButton {
                    top: 55%;
                }
            </style>
        `;
        $('head').append(styles);

        // Add a button to the page to fill in all the values.
        var platinumButton = $('<button/>', {
            text: 'Platinum Polls',
            id: 'platinumPollsButton',
            click: function () { 
                pollType = 'Platinum'
                q1Type = 'Platinum'
                contentType = 'the platinum'
                createPolls(pollType, q1Type, contentType)
            }
        });
        platinumButton.appendTo('body');

        // Add a button to the page to fill in all the values.
        var hundredPercentButton = $('<button/>', {
            text: '100% Polls',
            id: 'hundredPercentPollsButton',
            click: function () { 
                pollType = '100%'
                q1Type = 'Trophy'
                contentType = '100%'
                createPolls(pollType, q1Type, contentType)
            }
        });
        hundredPercentButton.appendTo('body');

        function createPolls(pollType, q1Type, contentType){
            // Click Pin
            $("#elCheckbox_topic_create_state_pin").click();
            
            // Thread title
            $("#elInput_topic_title").val("Estimated " + q1Type + " Difficulty and Time to " + pollType)

            // Thread content
            var platinumContent = '<div><div style="text-align:center;"><a data-cke-saved-href="https://i.imgur.com/Ht6nerK.png" href="https://i.imgur.com/Ht6nerK.png" title="Enlarge image" rel="external nofollow noopener" target="_blank"><img alt="Ht6nerK.png" data-ratio="16.67" height="100" style="height:auto;" width="600" data-src="https://i.imgur.com/Ht6nerK.png" data-cke-saved-src="https://www.playstationtrophies.org/forum/applications/core/interface/js/spacer.png" src="https://i.imgur.com/Ht6nerK.png" data-loaded="true"></a></div><p><br></p><p><span style="font-size:20px;"><span><strong>Voting Guidelines</strong></span></span></p><p><br></p><ol><li>Do not vote unless you have played the game.</li><li>Do not vote until you have dedicated a substantial amount of time towards the game.<br type="_moz"></li><li>Do not vote based solely on the descriptions from the trophy list.<br type="_moz"></li><li>A time consuming game does not necessarily mean a difficult game so vote accordingly.</li><li>Voted time should be based on your own personal time spent working towards the platinum.</li><li>Do not vote based on "fastest possible run", but rather your own experience in playing the game.</li><li>Voted time should be in-game time spent, from first starting game to achieving the platinum.</li><li>Vote with honesty and integrity.<br type="_moz"></li></ol></div>'
            var trophyContent = '<div data-role="commentContent" data-controller="core.front.core.lightboxedImages"><div style="text-align:center"><a data-cke-saved-href="https://i.imgur.com/Ht6nerK.png" href="https://i.imgur.com/Ht6nerK.png" title="Enlarge image" data-wrappedlink="" data-ipslightbox="" data-ipslightbox-group="undefined"><img alt="Ht6nerK.png" data-ratio="16.67" data-src="https://i.imgur.com/Ht6nerK.png" data-cke-saved-src="https://i.imgur.com/Ht6nerK.png" src="https://i.imgur.com/Ht6nerK.png" data-loaded="true" width="600" height="100" style="height: auto;"></a></div><p><br></p><p><span style="font-size:20px"><span><strong>Voting Guidelines</strong></span></span></p><p><br></p><ol><li>Do not vote unless you have played the game.</li><li>Do not vote until you have dedicated a substantial amount of time towards the game.</li><li>Do not vote based solely on the descriptions from the trophy list.</li><li>A time consuming game does not necessarily mean a difficult game so vote accordingly.</li><li>Voted time should be based on your own personal time spent working towards 100%.</li><li>Do not vote based on "fastest possible run", but rather your own experience in playing the game.</li><li>Voted time should be in-game time spent, from first starting game to achieving 100%.</li><li>Vote with honesty and integrity.</li></ol></div>'
            if (pollType == 'Platinum'){
                $("div[title='Enter your text; hold cmd and right click for more options']").append(platinumContent)
            } else {
                $("div[title='Enter your text; hold cmd and right click for more options']").append(trophyContent)
            }

            // Poll title
            $("input[name='topic_poll[title]']").val("Rate the " + q1Type + " Difficulty and Time to " + pollType)

            // Question 1 title
            $("input[name='topic_poll[questions][1][title]']").val("Rate the " + q1Type + " Difficulty")

            // Click Add Choice x10
            // $("a[data-action='addChoice']").trigger("click")
            // $("a[data-action='addChoice']").click()
            // $("a[data-action='addChoice']").click()
            // $("a[data-action='addChoice']").click()
            // $("a[data-action='addChoice']").click()
            // $("a[data-action='addChoice']").click()
            // $("a[data-action='addChoice']").click()
            // $("a[data-action='addChoice']").click()

            // Question 1 Answers
            $("input[name='topic_poll[questions][1][answers][1][value]']").val("1 - Very Easy")
            $("input[name='topic_poll[questions][1][answers][2][value]']").val("2")
            $("input[name='topic_poll[questions][1][answers][3][value]']").val("3")
            $("input[name='topic_poll[questions][1][answers][4][value]']").val("4")
            $("input[name='topic_poll[questions][1][answers][5][value]']").val("5")
            $("input[name='topic_poll[questions][1][answers][6][value]']").val("6")
            $("input[name='topic_poll[questions][1][answers][7][value]']").val("7")
            $("input[name='topic_poll[questions][1][answers][8][value]']").val("8")
            $("input[name='topic_poll[questions][1][answers][9][value]']").val("9")
            $("input[name='topic_poll[questions][1][answers][10][value]']").val("10 - Very Hard")

            // Click Add Question
            
            // Question 2 title
            $("input[name='topic_poll[questions][2][title]']").val("Estimated Time to " + pollType)

            // Click add Choice x10

            // Question 2 Options
            $("input[name='topic_poll[questions][2][answers][1][value]']").val("0-29 Minutes")
            $("input[name='topic_poll[questions][2][answers][2][value]']").val("30-59 Minutes")
            $("input[name='topic_poll[questions][2][answers][3][value]']").val("1-2 Hours")
            $("input[name='topic_poll[questions][2][answers][4][value]']").val("3-5 Hours")
            $("input[name='topic_poll[questions][2][answers][5][value]']").val("6-10 Hours")
            $("input[name='topic_poll[questions][2][answers][6][value]']").val("11-15 Hours")
            $("input[name='topic_poll[questions][2][answers][7][value]']").val("16-20 Hours")
            $("input[name='topic_poll[questions][2][answers][8][value]']").val("21-25 Hours")
            $("input[name='topic_poll[questions][2][answers][9][value]']").val("26-35 Hours")
            $("input[name='topic_poll[questions][2][answers][10][value]']").val("36-50 Hours")
            $("input[name='topic_poll[questions][2][answers][11][value]']").val("51-75 Hours")
            $("input[name='topic_poll[questions][2][answers][12][value]']").val("76-99 Hours")
            $("input[name='topic_poll[questions][2][answers][13][value]']").val("100-499 Hours")
            $("input[name='topic_poll[questions][2][answers][14][value]']").val("500-999 Hours")
            $("input[name='topic_poll[questions][2][answers][15][value]']").val("1000+ Hours")

        // Submit
        };
    }
});