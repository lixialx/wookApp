//引入模版
var indexTpl=require("../tpl/index.string");

//引用util
var util=require("../util/util.js");
//定义视图
SPA.defineView('index',{

    //装裁HTML
	html:indexTpl,

    //引入delegated插件，用于绑定tap事件
    plugins:["delegated"],

    //定义子视图
    modules:[{
          name:"content",//视图名称，用于引用的句柄
          defaultTag:"home",//默认视图
          views:['home','search','my'],//子视图集
          container:".m-container" //子视图渲染到主视图的容器中
        }],

    //绑定元素的tap事件
        bindActions:{
            "switch.taps":function(e,data){
                //添加样式
                $(e.el).addClass("ac").siblings().removeClass("ac");
                 util.setFous($(e.el),"ac")
                //切换子视图
                this.modules.content.launch(data.tag);
            },
            "switch.chu":function(){
              this.hide();//隐藏视图
            },
            "my.taps":function(){
               SPA.open("my",{
                ani:{
                  name:"dialog",  //弹出框
                  width:280,
                  height:200
                }
               });
              
            },
            'mysearch':function(){
              SPA.open("search")
            }
        }
})



