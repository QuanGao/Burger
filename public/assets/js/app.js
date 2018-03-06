$(function () {

    $("#burgerBtn").on("click", function () {
        event.preventDefault();

        let name = $("#burgerInput").val().trim();

        if(name) {
            $.post("/api/burgers", {burger_name: name}, function () {
               
                    console.log("added new burger");
                    location.reload();
                
            })

        }
    })
})