# dva-react-antd-example

这个是有dva+react+antd开发的实例，提供学习和参考
代码通过实战提炼出的精华代码实例

安装步骤

1.安装node.js
	官方下载https://nodejs.org/en/
  	node.js自带npm,所以不需要再安装npm，可以直接使用
  
2.安装淘宝镜像
  	window按键 => 输入P => 找到PowerShell 打开
  	在打开的软件中输入:
  	npm install -g cnpm --registry=https://registry.npm.taobao.org
  	然后回车,等自动安装就好
  
3.安装react的脚手架
  	打开PowerShell，输入命令cnpm install dva-cli -g后回车，这样就会自动安装dva脚手架
  	查看版本：dva -v,项目初始化：进入目录然后命令dva init
  	新建项目：dva new projectname,
  	新建路由：dva generate route name,
  	新建组件：dva generate component name,
 	新建模型：dva generate model name
  
4.通过git下载代码，然后在PowerShell中进入下载目录
  	cnpm install,命令安装完成
  
5.启动web服务
  	cnpm start命令启动项目，然后浏览器访问http://localhost:8000/
  
6.项目编译
  	cnpm run build;编译的文件在dist中，把这个目录下的文件放到服务器上就可以
