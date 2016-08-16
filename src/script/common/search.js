//引入模块
var searchTPL=require("../tpl/search.string");

//定义视图
SPA.defineView('search',{
	//转载HTML
	html:searchTPL,

    //引入delegated插件，用于绑定tap事件
    plugins:["delegated"],

    //绑定元素的tap事件
    bindEvents:{
           show:function(){
           	var searchMy=this.widgets.navscroll;
           	searchMy.on("scroll",function(el){
             if(Math.abs(this.y)>=200){
                if($(".my-search").next(".my-section").length>0){
                  ;
                }else{
                  $(".my-search").after($(".my-section").clone(true).addClass("fiexd"));
                }
                
             }else{
              $(".fiexd").remove();
             }
            })

           }
       },


})