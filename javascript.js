$(document).ready(function(){

    console.log("PSTui Loaded");

    // Move Save Game Info box so that I don't need to scroll when updating stack info
    var currentPath = window.location.href;
    if (currentPath.includes("admtools/game_edit")) {
        var edit_form = $("#game_edit .section:eq(0)");
        var submit_changes = $(".col-md-8 section:eq(5)");
        submit_changes.appendTo(edit_form);
    }
    // Make tweaks to forum creation page
    if (currentPath.includes("forum/admin")){
        if (currentPath.includes("do=form")){
            // Auto-check Discussions option
            document.getElementById("elRadio_forum_type_normal_").click();

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

            // Collapse Parent Forum options menu
            $("#form_new_forum_parent_id .ipsFieldRow_content .ipsSelectTree .ipsSelectTree_nodes .ipsScrollbar ul li .ipsSelectTree_itemOpen").removeClass("ipsSelectTree_itemOpen")
            $("#form_new_forum_parent_id .ipsFieldRow_content .ipsSelectTree .ipsSelectTree_nodes .ipsScrollbar ul li div[data-role]").css({"style":"display: none"}).css({"display": "none"})
        }
        if (currentPath.includes("do=permissions")) {
            // Hide table, I don't wanna change any permissions
            $("table.ipsTable").css({"display": "none"})
        }
    }
        
        $("table.ipsTable")
});