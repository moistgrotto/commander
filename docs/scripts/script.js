/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let playerautoid = 0;

$("#butt-button").click(function () {
    $("#butt-content").append("Ass");
});

$("#add-player").click(addPlayer);

$("#player-entry").on("keypress", function (e) {
    if (e.which == 13) {
        addPlayer();
    }
});

function addPlayer() {
    let currentplayername = $("#player-entry").val();

    //Validation
    if (currentplayername === ""){
        $('#myModal').modal();
        return;
    }

    playerautoid += 1;
    let currentplayerid = playerautoid;

    $("#player-list").append(`
    <tr data-player-id="` + currentplayerid + `">
        <th scope="row">` + currentplayerid + `</th>
        <td class="player-name">` + currentplayername + `</td>
        <td class="player-score"></td>
        <td>  
            <a href="#" class="btn btn-primary rename"><i class="fas fa-pencil-alt"></i>  Rename</a>
            <a href="#" class="btn btn-danger delete"><i class="fas fa-trash"></i>  Delete</a>
        </td>
    </tr>
    `);
    $("[data-player-id=" + currentplayerid + "] .delete").click(function () {
        console.log("Deleting player" + currentplayerid);
        $("[data-player-id=" + currentplayerid + "]").remove();
    });

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

