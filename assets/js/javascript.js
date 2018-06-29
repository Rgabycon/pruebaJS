$(document).ready(function () {
    console.clear(); // Esto limpia la consola

    $('#uploader').submit(function (evt) {
        evt.preventDefault();

        // Create a reader
        var reader = new FileReader();

        // Get the image
        var file = $(evt.target).find('input[type="file"]').get(0).files[0];

        reader.readAsDataURL(file);

        reader.onload = function (e) {
            console.log('The image was load');
            $('#image').attr('src', e.target.result);
        };
        var srcImg = $("#image").attr("src");
        console.log(srcImg)
        var nick = $("#exampleFormControlInput1").val();
        var content = $("#exampleFormControlTextarea1").val();

        var tweet = "<div class='row bloque-twitt--contenido'>\
                        <div class='col-lg-12 '>\
                            <div class='row'>\
                                <div class='col-lg-3'>\
                                    <img class='img-twitt' src='" + srcImg + "' />\
                                </div>\
                                <div class='col-lg-9'>\
                                    <h1 class='twitt--title'>" + nick + "</h1>\
                                    <p class='twitt--contenido'>" + content + "</p>\
                                </div>\
                            </div>\
                            <div class='row'>\
                                <ul class='nav nav-tabs'>\
                                    <li ><i class='fa fa-heart'></i><span class='counter'>0</span</li>\
                                    <li ><i class='fa fa-trash'></i></li>\
                                </ul>\
                            </div>\
                        </div>\
                    </div>";
        console.log(tweet)

        $(".col-sm-7.bloque-twitt").prepend(tweet);
    });

    $(document).on("click", ".fa.fa-heart", function (evt) {
        console.log("like")
        //evt.preventDefault();
        $(this).addClass("red-heart");
        console.log($(this).parent().find("li .counter"))
        var count = $(this).offsetParent().find("li .counter").text();
        count = parseInt(count);

        $(this).offsetParent().find("li .counter").text(count += 1);

    });
    $(document).on("click", ".fa.fa-trash", function (evt) {
        $(this).offsetParent().parent().remove();

    });




});