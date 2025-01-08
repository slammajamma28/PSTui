$(document).ready(function(){

    console.log("PSTui Loaded");

    var currentPath = window.location.href;
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
});