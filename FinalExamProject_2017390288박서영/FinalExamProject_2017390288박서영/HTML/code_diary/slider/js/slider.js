
$(function () {

    var listCon = $(".slider_visual_con ul");
    var sliderIndex = 0;
    var viewSize = 3;
    var totalItemCnt = $(".slider_visual_con ul li").length;

    var minIndexLimit = 0;
    var maxIndexLimit = totalItemCnt - viewSize;

    $(".btn.slier_left_button").on("click", function () {

        sliderIndex++;

        if ( sliderIndex > maxIndexLimit ){
            sliderIndex = maxIndexLimit;
            return;
        }else{
            listCon.animate({marginLeft : -110 * sliderIndex + "px" },400 );
        }

        // sliderIndex = Math.min( maxIndexLimit, sliderIndex );
        // listCon.animate({marginLeft : -110 * sliderIndex + "px" },400 );
    })


    $(".btn.slier_right_button").on("click", function () {
        sliderIndex--;

        if ( sliderIndex < minIndexLimit ){
            sliderIndex = minIndexLimit;
            return;
        }else{
            listCon.animate({marginLeft : -110 * sliderIndex + "px" },400 );
        }

        // sliderIndex = Math.max( minIndexLimit, sliderIndex );
        // listCon.animate({marginLeft : -110 * sliderIndex + "px" },400 );
    })
})