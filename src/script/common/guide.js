//引入模块
var guideTPL=require("../tpl/guide.string");
//定义视图

SPA.defineView('guide',{
	//转载HTML
	html:guideTPL,

	//引入delegated插件，用于绑定tap事件
    plugins:["delegated"],

    //绑定事件
    bindEvents:{
	    'beforeShow': function() {
	      var mySwiper = new Swiper('#guide-swiper', {
	        loop: false

       })
    }
  },
   //绑定元素的tap事件
    bindActions:{
            "switch.index":function(e){
              SPA.open("index");
              console.log("hello")
              //this.hide();
              //this.hide();//隐藏视图
            }
        }
})