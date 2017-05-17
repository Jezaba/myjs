
/// <reference path="../node_modules/@types/jquery/index.d.ts" />

$(document).ready(()=>{
    $('#hello').html('HelloWorld2!');
    $('#hello').css('color','#009966');
    $.ajax({
        url:'http://2head4.com'
    })
});