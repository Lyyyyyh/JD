/*——————————商品详情的tab切换——————————*/
var tabli=$(".menu ul li");
var tabBoxs=$(".tabBox1");
var i=0;
function changetab(i){
	//alert(i);
	for(j=0;j<tabli.length;j++){
		if(j==i){
			tabli.eq(i).css("background","#e4393c");
			tabli.eq(i).css("color","#fff");
	        tabBoxs.eq(j).css("display","block");
		}
		else {
			tabli.eq(j).css("background","#f7f7f7");
			tabli.eq(j).css("color","#000");
	        tabBoxs.eq(j).css("display","none");
		}
	}
}
/*——————————商品评价的tab切换——————————*/
var tabs=document.getElementById("tab").getElementsByTagName("li");
var divs=document.getElementById("tab_con").getElementsByTagName("div");
for(var i=0;i<tabs.length;i++){
tabs[i].onclick=function(){change(this);}
}

function change(obj){
for(var i=0;i<tabs.length;i++){
  if(tabs[i]==obj){
    tabs[i].className="fli";
    divs[i].className="fdiv";
  }

  else{
    tabs[i].className="";
    divs[i].className="";
  }
}
}
/*——————————购买咨询的tab切换——————————*/
var tabli2=$(".consultmenu ul li");
var shows=$(".show1");
var n=0;
function kind(n){
	//alert(i);
	
	for(m=0;m<tabli2.length;m++){
		if(m==n){
			tabli2.eq(n).css("color","#e4393c");
	        shows.eq(m).css("display","block");
		}
		else {
			tabli2.eq(m).css("color","#666");
	        shows.eq(m).css("display","none");
		}
	}
}

/*—————————手机社区的tab切换———————————*/

var tabli3=$(".postmenu ul li");
var postBoxs=$(".postBox");
var p=0;
function post(p){
	//alert(p);
	
	for(q=0;q<tabli3.length;q++){
		if(q==p){
			tabli3.eq(p).css("color","#e4393c");
	        postBoxs.eq(q).css("display","block");
		}
		else {
			tabli3.eq(q).css("color","#666");
	        postBoxs.eq(q).css("display","none");
		}
	}
}





var tabs2=document.getElementById("tab2").getElementsByTagName("li");
var divs2=document.getElementById("tab_con2").getElementsByTagName("div");
function change2(obj){
for(var j=0;j<tabs2.length;j++){
  if(tabs2[j]==obj){
    tabs2[j].className="fli2";
    divs2[j].className="fdiv2";
  }

  else{
    tabs2[j].className="";
    divs2[j].className="";
  }
}
}
for(var j=0;j<tabs2.length;j++){
tabs[i].onclick=function(){change2(this);}
}