// JavaScript Document
$(document).ready(function(){  
    var count = 0;// 记录数  
    var size = 100; // 每页显示的图片个数  
    var $imgs = $(".spec-img img"); // 获取所有的img  
    var len = $imgs.length;// 得到img的个数  
    var ycount = -1; // 原有数据  
  
    // 给所有图片注册   
    $imgs.mousedown(function(e) {  
                // 当鼠点击到某个图片时，获取其图片的name属性值，把它设置到id=dt中得img中  
                $(".dtt img").attr("src", this.name); // html中怎么扩展标签的属性  
                $(".dtt img").css("display","block");
				  
            })
  
    // 获取id="spec-img"中所有的li元素  
    var $lis = $(".spec-img li");  
    // 判断图片的个数 如果大于10就进行隐藏数据  
    if ($lis.length > size) {  
        $lis.each(function(i) {  
                    if (i >= size) {  
                        $(this).hide();  
                    }  
                });  
    }  
  
   
	$(".dtt img").click(function(e) {
        $(this).css("display","none");
    });
  
});  