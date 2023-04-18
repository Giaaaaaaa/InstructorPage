// console.log(123);

// show animation when clicking the nav link
$(".nav-link").on("click", function () {
    $(this).addClass("active")
    $(".nav-link").not(this).removeClass("active")
})

// click nav link and page scroll to certain position
$(".nav-item").on("click", function () {
    const topPosition = $("section").eq($(this).index()).offset().top - 150
    $("body,html").stop().animate({
        scrollTop: topPosition
    })
})

// window scroll to certain position and automatically to show active nav link

$(window).scroll(function () {
    $("section").each(function (index, item) {
        if ($(document).scrollTop() + 150 >= $(item).offset().top) {

            $(".nav-link").removeClass("active").eq(index).addClass("active")
            
           
        }

    })
})







