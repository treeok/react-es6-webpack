<h1>react-es6-webpack</h1>
<p>try to use react+es6+webpack create a project</p>


<h1>目录结构:</h1>
<p>react-es6-webpack  //项目名称</p>
  <p style="margin-left:5px;">|-src  //资源</p>
      <p style="margin-left:10px;">|-components  //所有组件</p>
          <p>|---comment  //评论组件</p>
              <p>|----script  //js文件</p>
                  <p>|-----comment.js  //评论组件组成部分</p>
                  <p>|-----commentForm.js  //评论组件组成部分</p>
                  <p>|-----commonList.js  //评论组件组成部分</p>
                  <p>|-----commentBox.js  //评论组件组成部分 </p>
              <p>|----style </p>
                  <p>|-----comment.less  //less的样式  </p>
          <p>|---nav  //导航组件  </p>
          <p>|---pagination  //分页组件 </p>
          <p>|---...  //更多组件  </p>
      <p>|--img  //图片 </p>
      <p>|--fonts  //字体 </p>
  <p>|-test  //测试组件</p>
      <p>|--components  //所有组件</p>
          <p>|---comment  //评论组件</p>
              <p>|----bundle.js  // </p>
              <p>|----test.html  //测试页面</p>
          <p>|---nav  //导航组件 </p>
          <p>|---pagination  //分页组件 </p>
          <p>|---...  //更多组件</p>
  <p>|-public</p>
  <p>|-LICENSE</p>
  <p>|-package.json</p>
  <p>|-README.md</p>
  <p>|-webpack.config.js</p>


<h1>步骤：</h1>
  <p>1、npm install </p>
  <p>2、webpack</p>


<h1>组件原理：</h1>
  <p>components里面放置的是各个组件 </p>
  <p>每个组件里面包含的是script文件和style文件，根据文件内容生成各自的bundle.js文件</p>
  <p>test为测试</p>
  <p>public为发布内容</p>


