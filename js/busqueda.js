var consulta = $("#searchTable").DataTable()

$("#inputBusqueda").keyup(function(){
    consulta.search($(this).val()).draw();
    
    $(".panel-body").css({
        "height": "20vh",
        "background":"rgba(243,243,243)"
    })

    if ($("#inputBusqueda").val() == ""){
        $(".panel-body").css({
            "height": "auto",
            "background":"none"
            
        })
    
        $("#search").hide();
    } else {
        $("#search").fadeIn("fast");
    }
})