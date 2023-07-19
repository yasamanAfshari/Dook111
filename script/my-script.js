$(".business .owl-carousel").owlCarousel({
        autoplay:true,
        items:7,
        loop:true,
        nav:false,
        dots: false,
        autoplayHoverPause:true,
        rtl:true,
        autoplayTimeout:3000,
        margin:10,
        responsive: {
            0: {
                items: 1,
                nav:false

            },
            600: {
                items: 2,
                nav:false
            },
            800: {
                items: 3,
                nav:false
            },
            1000: {
                items: 4,
                nav:false
            },
            1300: {
                items: 5,
                nav:false
            },
        }
    }
);
$(".news .owl-carousel").owlCarousel({
        autoplay:true,
        items:7,
        loop:true,
        nav:true,
        dots: false,
        autoplayHoverPause:true,
        rtl:true,
        autoplayTimeout:3000,
        margin:10,
        responsive: {
            0: {
                items: 1,
                nav:false
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            },
            1300: {
                items: 4
            },
        }
    }
);
$(".products .owl-carousel").owlCarousel({
        autoplay:true,
        items:7,
        loop:true,
        nav:true,
        dots: false,
        autoplayHoverPause:true,
        rtl:true,
        autoplayTimeout:3000,
        margin:10,
        responsive: {
            0: {
                items: 1,
                nav:false
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            },
            1300: {
                items: 4
            },
        }
    }
);

const header = document.getElementById("page-header");
const intercept = document.createElement("div");

intercept.setAttribute("data-observer-intercept", "");
header.before(intercept);

const observer = new IntersectionObserver(([entry]) => {
    header.classList.toggle("active", !entry.isIntersecting);
});

observer.observe(intercept);
$('.acc-title').click(function () {
    $('.acc-title').children().removeClass('fa-angle-up')

    if ( $(this).next().is(':visible')) {
        $(this).children().removeClass('fa-angle-up')
    }else{
        $(this).children().addClass('fa-angle-up')
    }

    $(this).next().slideToggle(500).siblings('.acc-content').slideUp()
})
