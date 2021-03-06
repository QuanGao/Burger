$(function () {

    $("#burgerInput").keyup(function(e){
        if(e.keyCode === 13){
        $("#burgerBtn").click();
        }
    });

    $("#burgerBtn").on("click", function () {
        event.preventDefault();
        let name = $("#burgerInput").val().trim();

        if (name) {
            $.post("/api/burgers", {
                burger_name: name
            }, function () {
                location.reload();
            })
        }
    })

    $(".devourBtn").on("click", function () {
        let id = $(this).data("id");
        $.ajax({
            url: `/api/burgers/${id}`,
            method: "PUT",
            data: {
                id: id,
                devoured: true
            }
        }).done(function () {
            location.reload();
        });
    })

    $(".clearBtn").on("click", function () {
        let id = $(this).data("id");
        $.ajax({
            url: `/api/burgers/${id}`,
            method: "DELETE"
        }).then(
            function () {
            location.reload();
        });
    });

})