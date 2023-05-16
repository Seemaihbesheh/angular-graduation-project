function greet(){
    alert("hellllo");
    
    $('.alert').show();

    var bDocument;
    //var serviceURL = "@Url.Action("PDFCreate", "TX")";
    //send document to controller
    $.ajax({
        type: "POST",
       // url: serviceURL,
        data: {
            text: $("#exampleInputText").val()
        },
      
    });
}





f