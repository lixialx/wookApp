//����ģ��
var searchTPL=require("../tpl/search.string");

//������ͼ
SPA.defineView('search',{
	//ת��HTML
	html:searchTPL,

    //����delegated��������ڰ�tap�¼�
    plugins:["delegated"],

    //��Ԫ�ص�tap�¼�
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