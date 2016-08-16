//引入模块
var homeTPL=require("../tpl/home.string");

//引用util
var util=require("../util/util.js");


//定义视图
SPA.defineView('home',{

	//转载HTML
	html:homeTPL,

    //引入delegated插件，用于绑定tap事件
    plugins:["delegated",{
        name:"avalon",
        options:function(vm){
         vm.livelist=[];
         
        }
    }],

    //初始化
    init:{
     mySlider:null,
     mynav:null,
     formatData:function(data){
        var temp=[];
        for(var i=0;i<Math.ceil(data.length/2);i++){
            temp[i]=[];
            temp[i].push(data[i*2]);
            temp[i].push(data[i*2+1]);
        } 
        return temp;
        
     }
    },

    //绑定事件
    bindEvents:{
        beforeShow:function(){
            var that=this;
            //获取vm方法
            var vm=this.getVM();

            //请求数据
           $.ajax({
            url:"./mock/beautylist.json",
            data:{},
            dataType:"json",
            success:function(data){
                vm.livelist=that.formatData(data.data);

            },
            error:function(){
                console.log("请求失败")
            }

           })
        },
        show:function(){
           this.mynav=new Swiper("#slide",{
                onSlideChangeStart:function(swiper){
                    var index=swiper.activeIndex;
                    console.log(index)
                     util.setFous($(".header li").eq(index),"on")
                }
            }) 
          
            this.mySlider = new Swiper("#ser",{ 
                onSlideChangeStart:function(swiper){
                    var index=swiper.activeIndex;
                     util.setFous($(".nav li").eq(index),"active")
                }
        })
              
      }
  },

    //绑定元素的tap事件
    bindActions:{
       "switch.slide":function(e){
         var index=$(e.el).index();
         this.mySlider.slideTo(index);
        util.setFous($(e.el),"active");
       },
       "slide.swiper":function(e){
        var index=$(e.el).index();
        util.setFous($(e.el),"on");
        this.mynav.slideTo(index);
       }
    }

})
