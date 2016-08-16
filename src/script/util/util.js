var util={
	setFous:function(el,name){
		el.addClass(name).siblings().removeClass(name);
	}
}
module.exports=util;