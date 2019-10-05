/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let playerautoid = 0;

let playerlistingtable = $('#player-listing-table').DataTable({searching: false, lengthChange: false});

$("#butt-button").click(function () {
    $("#butt-content").append("Ass");
});

$("#add-player").click(addPlayer);

$("#player-entry").on("keypress", function (e) {
    if (e.which === 13) {
        addPlayer();
    }
});

function addPlayer() {
    let currentplayername = $("#player-entry").val().trim();

    //Validation
    if (currentplayername === ""){
        $('#missing-name').dialog("open");
        return;
    }

    playerautoid += 1;
    let currentplayerid = playerautoid;

    //$("#player-list").append(`
    //$("#player-list").append(`
    let currentplayerrow =
    playerlistingtable.row.add([currentplayerid,currentplayername,'',
    `<a href="#" class="btn btn-primary rename"><i class="fas fa-pencil-alt"></i>  Rename</a>
    <a href="#" class="btn btn-danger delete"><i class="fas fa-trash"></i>  Delete</a>`]).draw().node();

    // Add the delete function to each player row
    $(currentplayerrow).find('.delete').click(function () {
        playerlistingtable.row($(currentplayerrow)).remove().draw();
        console.log('here');
    });

    // Add the rename function to each player row
    $(currentplayerrow).find('.rename').click(function () {
        console.log("Renaming: "+currentplayerid);
        // $("#rename-user").dialog("open");
        renamePlayer(currentplayerrow);

    });

    // Clear the Name field after entry
    $("#player-entry").val("");

    getPlayers();
}


function getPlayers() {
    let names = "";
    $('tbody#player-list td.player-name').each(function() {
       names += $(this).html() + " ";
    });
    console.log(names);
}

function renamePlayer(currentplayerrow) {
    let currentplayername = playerlistingtable.row($(currentplayerrow)).data()[1];

    $("input#rename-player").val(currentplayername);

    // Set up dialog to have a variable functionality on the rename function
    $("#rename-user").dialog({
        height: "auto",
        width: 400,
        modal: true,
        autoOpen: true,
        buttons:{
            Rename: function(){
                $("input#rename-player").val();
                let namedcell = $(":nth-child(2)", currentplayerrow);
                let newname = $("input#rename-player").val();
                console.log(playerlistingtable.cell($(namedcell)).data(newname));
                $(this).dialog("close");

            },
            Close: function () {
                $(this).dialog("close");
            }
        }
    });

    $("#rename-user").on("keypress", function (e) {
        if (e.which === 13) {
            $("input#rename-player").val();
            let namedcell = $(":nth-child(2)", currentplayerrow);
            let newname = $("input#rename-player").val();
            console.log(playerlistingtable.cell($(namedcell)).data(newname));
            $("#rename-user").dialog("close");
    }});
}