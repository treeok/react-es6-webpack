<h1>react-es6-webpack</h1>
try to use react+es6+webpack create a project


目录结构：
react-es6-webpack  //项目名称
  |-src  //资源
      |-components  //所有组件
          |-comment  //评论组件
              |-script  //js文件
                  |-comment.js  //评论组件组成部分
                  |-commentForm.js  //评论组件组成部分
                  |-commonList.js  //评论组件组成部分
                  |-commentBox.js  //评论组件组成部分
              |-style
                  |-comment.less  //less的样式
          |-nav  //导航组件
          |-pagination  //分页组件
          ...  //更多组件
      |-img  //图片
      |-fonts  //字体
  |-test  //测试组件
      |-components  //所有组件
          |-comment  //评论组件
              |-bundle.js  //
              |-test.html  //测试页面
          |-nav  //导航组件
          |-pagination  //分页组件
          ...  //更多组件
  |-public
  |-LICENSE
  |-package.json
  |-README.md
  |-webpack.config.js


步骤：
  1、npm install
  2、webpack


组件原理：
  components里面放置的是各个组件
  每个组件里面包含的是script文件和style文件，根据文件内容生成各自的bundle.js文件
  test为测试
  public为发布内容






