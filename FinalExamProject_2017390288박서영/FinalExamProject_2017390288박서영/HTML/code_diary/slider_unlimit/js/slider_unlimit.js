
$(function () {

    var listCon = $(".slider_visual_con ul");
    var sliderIndex = 0;
    var viewSize = 3;
    var totalItemCnt = $("slider_visual_con ul li").length;

    var minIndexLimit = 0;
    var maxIndexLimit = totalItemCnt - viewSize;

    var imgList = $(".slider_visual_con ul li");
    var len = imgList.length;
    var rollingList = [];
    var tempList = [];
    for ( var i=0; i<len; i++ ){
        $(imgList[i]).css( {left : (i*110) + "px"} );

        if ( i < viewSize ){
            rollingList.push( imgList[i] );
        }else{
            tempList.push( imgList[i] );
        }
    }

    var moveStatus = "ready";


    $(".btn.slier_left_button").on("click", function () {

        if ( moveStatus != "ready" ) return;
        moveStatus = "moving";

        var newImg = tempList.shift();
        var lastImg = rollingList[ rollingList.length-1 ];
        var lastImgLeft = parseInt( $(lastImg).css("left") );
        $(newImg).css( {left : (lastImgLeft + 110 + "px") });

        rollingList.push( newImg );
        listCon.append( newImg );

        sliderIndex++;

        var firtImg;
        var isFirstRemoved = false;
        $(rollingList).animate({left : "-=110px" },{duration : 400, complete : function() {
            if ( isFirstRemoved == false ){
                moveStatus = "ready";
                isFirstRemoved = true;
                firtImg = rollingList.shift();
                $(firtImg).remove();
                tempList.push( firtImg );
            }
        }} );

    })


    $(".btn.slier_right_button").on("click", function () {

        if ( moveStatus != "ready" ) return;
        moveStatus = "moving";

        var newImg = tempList.pop();
        var firstImg = rollingList[0];
        var firstImgLeft = parseInt( $(firstImg).css("left") );
        $(newImg).css( {left : (firstImgLeft - 110 + "px") });

        rollingList.unshift( newImg );
        listCon.prepend( newImg );

        sliderIndex--;

        var lastImg;
        var isLastRemoved = false;
        $(rollingList).animate({left : "+=110px" },{duration : 400, complete : function() {
                if ( isLastRemoved == false ){
                    moveStatus = "ready";
                    isLastRemoved = true;
                    lastImg = rollingList.pop();
                    $(lastImg).remove();
                    tempList.unshift( lastImg );
                }
            }} );

    })
})