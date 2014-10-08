freezy
======

Free &amp; Lazy 前端简易框架
基本信息

Freezy为Free&Lazy缩写，通过搭积木的方式减少前端工作量。现有都是基本模块，复杂模块可以通过组合形成。
以下为几点说明

使用方法：
①引入all.js和all.css
1
<link rel="stylesheet" href="all.css">
2
<script src="all.js"></script>
②找到需要的模块，复制html和js(原生编写，不用引入js库)
③若需自定义样式，修改all.less文件，每个组件的1到2个关键属性用变量形式定义在了all.less文件的起始部分，例如btn的样式：
1
//定义关键属性的变量
2
/* u-btn */
3
@u_btn_main:0.8em; //btn的padding-top;
4
//已定义好的变量使用
5
padding: @u_btn_main 2*@u_btn_main;//main值
④关于边框颜色：橘黄色边框为一个大模块；蓝色边框为html部分；紫色边框为js部分；红色边框为css部分
⑤关于less使用，工具http://koala-app.com/index-zh.html。
过程超简单：下载→安装→把css文件夹拖进去→点击所需的less文件→选择“自动编译” “执行编译”。
对！ 就是这么简单！引入文件时 把生成的css文件引入即可。
⑥项目地址：https://github.com/trytuorisfy/freezy
