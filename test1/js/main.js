'use strict';

var success = document.getElementById("successA");

//retrieve username
function user(){
var user = document.getElementById("username");
var username = user.value;
    
    //username
    if(username){
        success.innerHTML = "The modal has been closed successfully by "+username+".";
        success.style.display = "block";
        $('#modal').modal('hide');
        setTimeout("location.reload(true)", 5000);
    }else{
        $(".form-control").css("border-color","red");
    }

}
