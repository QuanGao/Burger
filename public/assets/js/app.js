$(function () {

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
            url: "/api/burgers",
            method: "PUT",
            data: {
                id: id,
                devoured: true
            }
        }).done(function (response) {
            console.log(response)
            location.reload();
        });
    })

    $(".clearBtn").on("click", function(event) {
        let id = $(this).data("id");

        $.ajax(`/api/burgers/${id}`, {
          method: "DELETE"
        }).then(
          function() {
            location.reload();
        });
    });

})