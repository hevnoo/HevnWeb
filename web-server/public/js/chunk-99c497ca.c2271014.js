(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99c497ca"],{"04d0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"edit_wrap wrapper"},[e("div",{staticClass:"backBtn"},[e("el-button",{on:{click:t.goBack}},[t._v("返回")])],1),e("div",{staticClass:"edit_title"},[t._v("标题")]),e("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),e("div",{staticClass:"edit_title"},[t._v("文章内容 (Markdown编辑器)")]),e("div",{staticClass:"markdown"},[e("mavon-editor",{staticClass:"mavon",model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),e("div",{staticClass:"save_btn"},[e("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],1)},n=[],s={name:"ArticleEdit",data:function(){return{title:"",content:""}},methods:{goBack:function(){this.$router.go(-1)},save:function(){var t=this;this.$route.params.id?this.$axios.post("/api/article/update",{title:this.title,content:this.content,article_id:this.$route.params.id}).then((function(e){0===e.data.code&&(t.$message({message:"更新成功",type:"success"}),setTimeout((function(){t.$router.push({name:"article"})}),1500))})).catch((function(t){console.log(t)})):this.$axios.post("/api/article/add",{title:this.title,content:this.content}).then((function(e){0===e.data.code&&(t.$message({message:"新增成功",type:"success"}),setTimeout((function(){t.$router.push({name:"article"})}),1500))})).catch((function(t){console.log(t)}))},getDetail:function(){var t=this;this.$axios.get("/api/article/detail",{params:{article_id:this.$route.params.id}}).then((function(e){0===e.data.code&&(t.title=e.data.data.title,t.content=e.data.data.content)})).catch((function(t){console.log(t)}))}},created:function(){this.$route.params.id&&this.getDetail()}},c=s,o=(a("189f"),a("2877")),l=Object(o["a"])(c,i,n,!1,null,"44087677",null);e["default"]=l.exports},"189f":function(t,e,a){"use strict";a("67d9")},"67d9":function(t,e,a){}}]);
//# sourceMappingURL=chunk-99c497ca.c2271014.js.map