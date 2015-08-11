<h1>react-es6-webpack-bootstrap-gulp-less</h1>
<p>try to use react+es6+webpack+bootstrap+gulp+less create a project</p>


<h1>目录结构:</h1>
<p>|-react-es6-webpack  //项目名称</p>
    |-src
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
          |-detail  // 挣点详情
               |-index.js
               |-template.jsx
      |-app.jsx   //route
      |-index.js  //entry start
      |-routes.js  //route
      |-style  //less
          |-main.less
    |-tasks  //gulp tasks
      |-build.js
      |-debug.js
      |-serve.js
    |-util
      |-definePlugin.js //插件
    |-dist  // public
    |-LICENSE
    |-package.json
    |-README.md
    |-config.js  //gulp tasks config
    |-gulpfile.js //gulp tasks
    |-webpack.config.js  // test
    |-webpack.config.pro.js  // production
    |-webpack.defaults.js  //


<h1>步骤：</h1>
  <p>1、npm install </p>
  <p>2、gulp</p>


<h1>组件原理：</h1>
  <p>src中components文件夹里面放置的是各个组件 </p>
  <p>src中pages文件夹里面对各个页面进行整合</p>
  <p>src中app文件夹，app.js,routes.js是对route进行处理</p>
  <p>src中index.js为entry，引入css(bootstrap & main.less)以及项目的启动</p>
  <p>style中为项目css,使用less</p>




