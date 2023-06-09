

$(".menu-nav").click(function (e) { 
    e.preventDefault();
    

    $(".line1").toggleClass("line1-after")
    $(".line2").toggleClass("line2-after")
    $(".line3").toggleClass("line3-after")
    $(".line4").toggleClass("line4-after")


    if($(this).hasClass("off")){

    $(".line1").addClass("line1-after")


        
        $(".nav-container").addClass("nav-container-after")
        $(".nav-container ul").css("display","flex")
        $(".nav-container .nav-rightside").css("display","flex")





        setTimeout(() => {
            $(".nav-container ul").css("opacity","1")
        $(".nav-container .nav-rightside").css("opacity","1")
        }, 500);
        $(this).removeClass("off")
    }


    
    else{
        $(".nav-container ul").css("opacity","0")
        $(".nav-container .nav-rightside").css("opacity","0")


        setTimeout(() => {
            $(".nav-container").removeClass("nav-container-after")
            $(".nav-container ul").css("display","none")
            $(".nav-container .nav-rightside").css("display","none")
        }, 100);
        $(this).addClass("off")


    }

});


$(".scariness-image").click(function (e) { 
    e.preventDefault();
    console.log(true);

    $(".active").removeClass("active")
    $(this).addClass("active")
    
});
let section1 = document.querySelector(".section1")
let section2 = document.querySelector(".section2")
let section5 = document.querySelector(".section5")
$(window).scroll(function () { 
    if(section1.getBoundingClientRect().top < window.innerHeight - 190){
        $(".headertext1_animation").removeClass("headertext1_animation");
        setTimeout(() => {
            $(".headertext2_animation").removeClass("headertext2_animation");
        }, 300);
        setTimeout(() => {
            $(".headertext3_animation").removeClass("headertext3_animation");
        }, 600);


        if(section2.getBoundingClientRect().top < window.innerHeight - 250){
            setTimeout(() => {
                $(".section2-leftside-animation").removeClass("section2-leftside-animation");
            }, 200);
            setTimeout(() => {
                $(".section2-rightside-animation").removeClass("section2-rightside-animation");
            }, 500);
        }

        if(section5.getBoundingClientRect().top < window.innerHeight - 450){
            setTimeout(() => {
                $(".section5-animation1").removeClass("section5-animation1");
            }, 200);
            setTimeout(() => {
                $(".section5-animation2").removeClass("section5-animation2");
            }, 500);

            setTimeout(() => {
                $(".section5-animation3").removeClass("section5-animation3");
            }, 800);
        }

    }


 if(section1.getBoundingClientRect().top < window.innerHeight - 490){
    $(".section1-card4-animation").removeClass("section1-card4-animation");

    setTimeout(() => {
        $(".section1-card3-animation").removeClass("section1-card3-animation");
    }, 300);

    setTimeout(() => {
        $(".section1-card2-animation").removeClass("section1-card2-animation");
    }, 600);

    setTimeout(() => {
        $(".section1-card1-animation").removeClass("section1-card1-animation");
    }, 900);


 }
    if(section1.getBoundingClientRect().bottom < window.innerHeight + 150){
$(".header-footer-text").css("opacity","1")
    }
});



let section3 = document.querySelector(".section3 .card1")

$(window).scroll(function () { 
    
if(section3.getBoundingClientRect().top < window.innerHeight - 50){

setTimeout(() => {
    $(".section3-card1-animation").removeClass("section3-card1-animation");
    
}, 100);    

setTimeout(() => {
    $(".section3-card2-animation").removeClass("section3-card2-animation");
    
}, 400);   

setTimeout(() => {
    $(".section3-card3-animation").removeClass("section3-card3-animation");
    
}, 700);   

setTimeout(() => {
    $(".section3-card4-animation").removeClass("section3-card4-animation");
    
}, 1000);   

    }



    let section4 = document.querySelector(".section4")
    let section6 = document.querySelector(".section6-leftside")

    if(section4.getBoundingClientRect().top < window.innerHeight - 150){

        setTimeout(() => {
           $(".section4 p").css("opacity","1")
         
        }, 300);    
            }

            if(section6.getBoundingClientRect().top < window.innerHeight - 150){

                setTimeout(() => {
                    $(".section6-leftside-animation").removeClass("section6-leftside-animation")

                }, 100);   

                setTimeout(() => {
                    $(".section6-elixir-main-animation1").removeClass("section6-elixir-main-animation1")
   
                   }, 400);   
                
               setTimeout(() => {
                    $(".section6-elixir-main-animation2").removeClass("section6-elixir-main-animation2")
   
                   }, 600); 


                    }
});


