<h1>react-es6-webpack</h1>
<p>try to use react+es6+webpack create a project</p>


<h1>目录结构:</h1>
react-es6-webpack  //项目名称
  |-src  //资源
      |-components  //所有组件
          |-comment  //评论组件
              |-script  //js文件
                  |-comment.js  //评论组件组成部分
                  |-commentForm.js  //评论组件组成部分
                  |-commonList.js  //评论组件组成部分
              |-style
                  |-comment.less  //less样式
              |-main.js  //entry
          |-nav  //导航组件
          |-pagination  //分页组件
          |-...  //更多组件
      |-img  //图片
      |-fonts  //字体
  |-dist  //发布
      |-comments
          |-comments.bundle.js
      |-nav
          |-nav.bundle.js
      |-...  //更多组件
  |-LICENSE
  |-package.json
  |-README.md
  |-webpack.config.js

<h1>步骤：</h1>
  <p>1、npm install </p>
  <p>2、webpack</p>


<h1>组件原理：</h1>
  <p>components里面放置的是各个组件 </p>
  <p>每个组件里面包含的是script文件和style文件，根据文件内容生成各自的bundle.js文件</p>
  <p>test为测试</p>
  <p>public为发布内容</p>


