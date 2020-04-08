$(function (){
    $.ajax({
        url:'./js/data.json',
        success:function (data) {
            $("#contents").empty();
            $(data.result).each(function (i,res) {
                $("#contents").append('<div class="content">\n' +
                    '<div class="picture">'+ '<img src="'+res.img+'">'+'</div>'+
                    '<div class="title">'+res.title+'</br>'+'<span>'+res.time+'</span>'+
                   '<span style="margin: 18px">'+res.status_DISPLAY+'</span>'+
                    '</div>\n' +
                    '\n' +
                    '</div>'
                );
            });
        }
    });
});