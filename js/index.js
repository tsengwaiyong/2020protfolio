var menu = new Vue({
  el:".menu",
  data:{
    menu:["Application","Web","Icon","Illustration"]
  }
});

// $(function(){
//
//   var menu_element_falfheight = $(".menu").outerHeight(true) / 2;
//   var menu_offsettop = $(".menu").offset().top- $(window).scrollTop();
//   var part2_offsettop = $(".part2").offset().top - $(window).scrollTop();
//   var part3_offsettop = $(".part3").offset().top - $(window).scrollTop();
//   var part4_offsettop = $(".part4").offset().top - $(window).scrollTop();
//   var part5_offsettop = $(".part5").offset().top - $(window).scrollTop();
//   var showmenu_item;
//
//   $(window).scroll(function(){
//
//     part2_offsettop = $(".part2").offset().top - $(window).scrollTop();
//     part3_offsettop = $(".part3").offset().top - $(window).scrollTop();
//     part4_offsettop = $(".part4").offset().top - $(window).scrollTop();
//     part5_offsettop = $(".part5").offset().top - $(window).scrollTop();
//
//       if (part2_offsettop <= menu_offsettop + menu_element_falfheight) {
//         $(".menu").find("li").eq(0).addClass("isativice");
//         $(".menu").css("visibility","visible");
//         $(".menu").css("opacity","1");
//
//       }
//       else{
//         $(".menu").css("visibility","visible");
//         $(".menu").css("opacity","0");
//       }
//
//       if (part3_offsettop <= menu_offsettop+ menu_element_falfheight) {
//         $(".menu").find("li").removeClass("isativice");
//         $(".menu").find("li").eq(1).addClass("isativice");
//       }
//
//       else {
//         $(".menu").find("li").eq(1).removeClass("isativice");
//       }
//
//       if (part4_offsettop <= menu_offsettop+ menu_element_falfheight) {
//         $(".menu").find("li").removeClass("isativice");
//         $(".menu").find("li").eq(2).addClass("isativice");
//       }
//
//       else {
//         $(".menu").find("li").eq(2).removeClass("isativice");
//       }
//
//       if (part5_offsettop <= menu_offsettop+ menu_element_falfheight) {
//         $(".menu").find("li").removeClass("isativice");
//         $(".menu").find("li").eq(3).addClass("isativice");
//       }
//
//       else {
//         $(".menu").find("li").eq(3).removeClass("isativice");
//       }
//
//
//
// });
//
// });
