<h1>react-es6-webpack</h1>
<p>try to use react+es6+webpack create a project</p>


<h1>目录结构:</h1>
+![](https://github.com/treeok/react-es6-webpack/blob/master/%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84.png)

<p>react-es6-webpack  //项目名称</p>
<code>|-src
      |-components  //所有组件
          |-chrome
              |-index.js
              |-template.jsx
          |-navigation
          |-...  //更多组件
      |-pages  //页面
          |-index  // 首页
               |-index.js
               |-template.jsx
          |-personal  // 个人中心
               |-index.js
               |-template.jsx
          |-trip  // 行程
               |-index.js
               |-template.jsx
          |-notfount  // 404
               |-index.js
               |-template.jsx
      |-app
          |-index.js  //route
      |-app.jsx   //route
      |-index.js  //entry start
      |-routes.js  //route</code>
<p>|-style  //less</p>
      |-main.less
<p>|-gulp  //gulp tasks</p>
      |-assets.js
      |-custom-task.js
<p>|-dist  // public</p>
<p>|-LICENSE</p>
<p>|-package.json</p>
<p>|-README.md</p>
<p>|-config.js  //gulp tasks config</p>
<p>|-gulpfile.js //gulp tasks</p>
<p>|-webpack.config.js  // test</p>
<p>|-webpack.config.pro.js  // production</p>


<h1>步骤：</h1>
  <p>1、npm install </p>
  <p>2、gulp default</p>


<h1>组件原理：</h1>
  <p>src中components文件夹里面放置的是各个组件 </p>
  <p>src中pages文件夹里面对各个页面进行整合</p>
  <p>src中app文件夹，app.js,routes.js是对route进行处理</p>
  <p>src中index.js为entry，引入css(bootstrap & main.less)以及项目的启动</p>
  <p>style中为项目css,使用less</p>


PS:使用了一个turris-gulp-tasks


