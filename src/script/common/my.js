//����ģ��
var myView=require("../tpl/my.string");

//������ͼ
SPA.defineView('my',{
	//ת��HTML
	html:myView,

	//����delegated��������ڰ�tap�¼�
    plugins:["delegated"],

    //��Ԫ�ص�tap�¼�
    bindActions:{
          
       },
       
})