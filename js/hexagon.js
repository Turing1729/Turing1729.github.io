var device_width=window.innerWidth>0?window.innerWidth:screen.width,device_height=window.innerHeight>0?window.innerHeight:screen.height,last_open;$(document).ready(function(){768>=device_width&&$(".dummy-hexagon-in2").each(function(){$(this).parent().parent().parent().remove()}),$(".club-container").unbind().click(function(){var e=$(this).attr("data-club"),n=$("."+e+"-layer").is(":visible");$("."+last_open+"-layer").hide(),$("."+last_open+"-helper").show(),n||($("."+e+"-layer").stop(!0,!0).fadeIn({duration:500,queue:!1}).css("display","none").slideDown(500),$("."+e+"-helper").stop(!0,!0).hide(),last_open=e),$("html,body").animate({scrollTop:$("#"+e+"-container").offset().top-180},"ease-in-out")})});