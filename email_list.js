$(document).ready(function() {

    $("#join_list").click(function(){
        var emailAddress1 = $("#email_address1").val();
        var emailAddress2 = $("#email_address2").val();
        var firstName = $("#first_name").val();
        var isValid = true;

        //validate the first email address
        if(emailAddress1 == "") {
            $("#email_address1").next().text("This field is required");
            isValid = false;
        }else {
            $("#email_address1").next().text("");
        }

        //validate the second email address
        if(emailAddress1 == "") {
            $("#email_address2").next().text("This field is required");
            isValid = false;
        }else if(emailAddress1 != emailAddress2) {
            $("#email_address2").next().text("This entry must equal first entry");
        }
        else {
            $("#email_address2").next().text("");
        }

         //validate the first name
        if(firstName == "") {
            $("#first_name").next().text("This field is required");
            isValid = false;
        }else {
            $("#first_name").next().text("");
        }
   
        //submit the form if all entries are valid
        if(isValid) {
            $("#email_form").submit();
        }
    });//end click

    $("#clear_list").click(function(){
        $(":text").val("");
        $("span").text("*");
        $("#email_address1").focus();
    });

    $(":text").dblclick(function(){
        //$("#clear_list").click();
        $(this).val("");
    });

    $("#email_address1").focus();

});//end ready