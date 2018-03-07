$(function () {

    $("#burgerBtn").on("click", function () {
        event.preventDefault();

        let name = $("#burgerInput").val().trim();

        if(name) {
            $.post("/api/burgers", {burger_name: name}, function () {               
                    location.reload();               
            })
        }
    })

    $(".devourBtn").on("click", function(){
       let id = $(this).attr("data-id");
       $.ajax({
            url: "/api/burgers/",
            method: "PUT",
            data: {id: id, devoured: true}           
        }).done(function(response){
            location.reload();   
       });

    })

    $(".clearBtn").on("click", function(){
        let id = $(this).attr("data-id");
    })




})