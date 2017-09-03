 
 $(document).ready(function (e) {
    //ȫ����Ʒ��ť ��������ť
 window.setInterval(function(){
  	//alert(2);
  },1000);
    window.setInterval(function(){
    	//alert(2);
     if(parseInt($(document).scrollTop()) >= 1320)
     {
     	$(".Fixed").css({'position':'fixed','top':'-10px'});
     	$(".Fixed1").css("display","block");
     	$("#jubu").css("display","none");
     	//alert($(document).scrollTop());
     }
     else if(parseInt($(document).scrollTop()) <1320)
     {
     	$(".Fixed").css({'position':'relative','top':'0px'});
     	$(".Fixed1").css("display","none");
     	$("#jubu").css("display","block");
     	//alert($(document).scrollTop());
     }
     },1000);
 
 if(parseInt($(document).scrollTop()) >= 1320){
	//$("#jubu").css("display","none");
}
//    else if(parseInt($(document).scrollTop()) <1320)
        $("#zhengt strong").mouseover(function(e){
        	$("#jubu").css("display","block");
        })
          $("#zhengt strong").mouseout(function(e){
        	$("#jubu").css("display","none");
        })
          
        $("#All").mouseover(function (e) {
            $(".slideBarleft").css("display", "block");

        });
        $(".slideBarleft").mouseover(function (e) {
            $(".slideBarleft").css("display", "block");

        });
        $("#All").mouseleave(function (e) {
            $(".slideBarleft").css("display", "none");

        });
		
        $(".slideBarleft").mouseleave(function (e) {
            $(".slideBarleft").css("display", "none");

        });
		 //ȫ����Ʒ��ť ��������ť
		
		//���ﳵ�Ĺ���
        $("#Allcar").mouseover(function (e) {
             $("#carThing").css("display", "block");
             $("#Allcar").css("background-color","#fff");
			 $("#carThing").css("border","2px solid  #dfdfdf");
             $("#Allcar").css("border","2px solid  #dfdfdf");
			 $("#Allcar").css("border-bottom","none");
        });
        $("#Allcar").mouseleave(function (e) {
            $("#carThing").css("display", "none");
			$("#Allcar").css("border","none");
           $("#Allcar").css("background-color","#f9f9f9");
        });
		$("#carThing").mouseover(function (e) {
			$("#Allcar").css("border","2px solid  #dfdfdf");
			   $("#Allcar").css("border-bottom","none");
            $("#carThing").css("display", "block");
            $("#Allcar").css("background-color","#fff");
        });
        $("#carThing").mouseleave(function (e) {
			$("#Allcar").css("border","none");
            $("#carThing").css("display", "none");
            $("#Allcar").css("background-color","#f9f9f9");
        });
		
		//���ﳵ�Ĺ���
		  
 //�ı�Ŵ󾵵�ͼƬ���ֲ�
   var slides=$(".smallSlide li");
   var slide1=$(".CellSmall img");
   var slide2=$("#BigImage");
   var Simg;
   var lastImg;
   
  slides.mousemove(function(e) {
	 slides.eq(0).css("border","none");
	 i=parseInt($(this).index());
	 slides.eq(Simg).css("border","none");
	 Simg=$(this).index();
	 $(this).css("border","2px solid #e53e41");
     slide1.attr("src","img/fd"+(i+1)+".jpg");
	 slide2.attr("src","img/fd"+(i+1)+(i+1)+".jpg");
	 slides.eq(lastImg).css("border","none");
	 
	
});
//�ı�߿���ɫ

var color1=$(".Type1");
var color2=$(".BigType");
var color3=$(".Type2");
var color4=$(".Type3");
var color5=$(".rebackType");
var color6=$(".playType");
var lastColor;
color1.mousemove(function(e) {
    $(this).css("border","1px solid #e53e41");
//alert($(this).index());
	color1.eq(0).css("1px solid #e53e41");
});

color1.mouseleave(function(e) {
    $(this).css("border","1px solid #ccc");
	color1.eq(0).css("border","1px solid #e53e41");
});
color2.mousemove(function(e) {
    $(this).css("border","1px solid #e53e41");
	color2.eq(0).css("border","1px solid #e53e41");
});

color2.mouseleave(function(e) {
    $(this).css("border","1px solid #ccc");
	color2.eq(0).css("border","1px solid #e53e41");
});
  color3.mousemove(function(e) {
    $(this).css("border","1px solid #e53e41");
	color3.eq(0).css("1px solid #e53e41");
});

color3.mouseleave(function(e) {
    $(this).css("border","1px solid #ccc");
	color3.eq(0).css("border","1px solid #e53e41");
});
color4.mousemove(function(e) {
    $(this).css("border","1px solid #e53e41");
	color4.eq(0).css("1px solid #e53e41");
});

color4.mouseleave(function(e) {
    $(this).css("border","1px solid #ccc");
	color4.eq(0).css("border","1px solid #e53e41");
});
color5.mousemove(function(e) {
    $(this).css("border","1px solid #e53e41");
	color5.eq(1).css("1px solid #e53e41");
});

color5.mouseleave(function(e) {
    $(this).css("border","1px solid #ccc");
	color5.eq(1).css("border","1px solid #e53e41");
});
color6.mousemove(function(e) {
    $(this).css("border","1px solid #e53e41");
	color6.eq(0).css("1px solid #e53e41");
});

color6.mouseleave(function(e) {
    $(this).css("border","1px solid #ccc");
	color6.eq(0).css("border","1px solid #e53e41");
});

$(".playType>:nth-child(2)").css("background","#f00");

$(".playType>:nth-child(1)").mousemove(function(e) {
   //$(".playType>:nth-child(2)").css("display","block");
});
//�ı�Ŵ󾵵�ͼƬ���ֲ�

	   //�Ŵ󾵵Ĺ���
        var fdj = $("#fdj");
        var Small = $("#CellSmall");
        var Big = $("#CellBig");
        var Mose = $("#CellMose");
        var x = 0;
        var y = 0;
        var MoseX;
        var MoseY;
        var BigImage = $("#BigImage");
        var offset = Small.offsetParent().offset();
        Small.mouseover(function (e) {
            Big.css("display", "block");
            Mose.css("display", "block");
			
        });
        Small.mousemove(function (e) {
            x = e.pageX - offset.left - Mose.innerWidth() / 2;
            y = e.pageY - offset.top - Mose.innerHeight() / 2;
            if (x < 0) {
                x = 0;
            }
            else if (x > Small.innerWidth() - Mose.innerWidth()) {
                x = Small.innerWidth() - Mose.innerWidth;
            }
            if (y < 0) {
                y = 0;
            }
            else if (y > Small.innerHeight() - Mose.innerHeight()) {
                y = Small.innerHeight() - Mose.innerHeight();
            }
            Mose.css({ 'left': x + "px", 'top': y + "px" });
        


            var Bleft = -x * Big.innerWidth() / Small.innerWidth() + "px";
            var BTop = -y * Big.innerHeight() / Small.innerHeight() + "px";
            
            BigImage.css({ 'left': Bleft, 'top': BTop });
        });

        Small.mouseout(function (e) {
            Big.css("display", "none");
            Mose.css("display", "none");
          //slides.eq(Simg).css("border","none");
        });
		//�Ŵ󾵵Ĺ���




//�ı�Ŵ�������ֲ�
 var slideImg=$(".smallSlides");

 slideImg.click(function(e) {
    SI=$(this).index();
	 
	if(SI==0){
		
		$(".smallSlide").css("left","-70px");
	}
	else if(SI==1){
		//alert(3);
		$(".smallSlide").css("left","0px");
	}
	
});


    
	  //�ͻ���Χ
              $(".dirver").hover(function(e) {
                $(".dirver1").css("display", "block");
                 
				 $(".driverplace1").css("background","#fff");
               
            });
              $(".dirver").mouseleave(function (e) {
                  $(".dirver1").css("display", "none");
				  $(".driverplace1").css("background","#f1f1f1");
              });
              $(".dirver1").mousemove(function (e) {
                  $(".dirver1").css("display", "block");
				  $(".driverplace1").css("background","#fff");
              });
              $(".dirver1").mouseleave(function (e) {
                  $(".dirver1").css("display", "none");
				  $(".driverplace1").css("background","#f1f1f1");
              });
			  
			  //��˵���ʵ��
			 var lis = $(".slideBarleft ul li");
			 var lbs=$(".li1");
			 //alert(lbs.length);
			 lis.mousemove(function (e) {
				 Num_lbs=$(this).index();
				 //alert(Num_lbs);\
				 lbs.eq(Num_lbs).css("display", "block");
				 $(this).css("background", "#fff");
				 });
            
			lis.mouseleave(function (e) {
				 Num_lbs=$(this).index();
				 //alert(Num_lbs);\
				 lbs.eq(Num_lbs).css("display", "none");
				 $(this).css("background", "rgb(200, 22, 35)");
			});
			
			 lbs.mousemove(function (e) {
				 Num_lbs=$(this).index();
				 //alert(Num_lbs);\
				 $(this).css("display", "block");
				 lis.eq(Num_lbs).css("background", "#FFF");
				 $(".slideBarleft").css("display", "block");
			});
            
			lbs.mouseleave(function (e) {
				 Num_lbs=$(this).index();
				 lis.eq(Num_lbs).css("background", "rgb(200, 22, 35)");
				 $(this).css("display", "none");
				 $(".slideBarleft").css("display", "none");
			});
		
		
		
		$(".tabMiddle").mouseover(function(){
			
				$(".tabMiddle .tabMiddle2").hide();
                $(".tabMiddle .tabMiddle2").eq($(this).index()).css({'margin-left':'-68px','display':'block'});
				$(this).find('.tabMiddl1e2').show();
				//alert($(this).index());
				$(this).css("background-color","#c81623");
		})
		
		$(".tabMiddle").mouseout(function(){
			     $(".tabMiddle .tabMiddle2").eq($(this).index()).css({'margin-left':'0px','display':'none'});
				$(this).css("background-color","#7a6e6e");
		})
		
		
		
		
  })
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
			

