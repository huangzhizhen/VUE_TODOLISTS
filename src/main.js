/**入口文件
 * 1.创建Vue根实例 new Vue
 * 2.挂载App组件
 *   2.1 首先要安装vue  npm install vue(我们不仅在开发时需要vue，在生产环境中也需要vue)
 *   2.2 编写App.vue组件
 *   2.3 2.2完成之后，再将App.vue组件挂载到根实例
 *   2.4 使用App渲染页面
 */

 
 import Vue from 'vue' //便可以从node_modules中加载我们的vue对象（我们通过命令暗转的包对象都在node_modules中）
 //导入App组件
 import App from './App.vue'
 //创建vue根实例
 new Vue({
     el:'#app', //表示需要vue来接管我们index.html中的id为app的内容
     components:{
         //组件名：组件对象
         App:App
     },
     template:'<App/>' //渲染标签（即组件名）
 })
 const arr=[1,2,3].map(item=>item+1)
 console.log(arr)

 //2.