$("#missing-name").dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    autoOpen: false,
    buttons: {
        Close: function () {
            $(this).dialog("close");
        }
    }
});

$("#rename-user").dialog({
    autoOpen: false,
});