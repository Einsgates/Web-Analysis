(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d83c7"],{"79e4":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-content",{staticStyle:{padding:"0 50px"}},[a("a-breadcrumb",{staticStyle:{margin:"16px 0"}},[a("a-breadcrumb-item",[e._v("首页")]),a("a-breadcrumb-item",[e._v("申述,举报")])],1),a("div",{style:{background:"#fff",padding:"24px",minHeight:"620px",height:"100%"}},[a("a-form-model",{attrs:{model:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"网址url"}},[a("a-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("a-form-model-item",{attrs:{label:"查询时间"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{"show-time":"",type:"date",placeholder:"Pick a date"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),a("a-form-model-item",{attrs:{label:"是否加急"}},[a("a-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),a("a-form-model-item",{attrs:{label:"申述类型"}},[a("a-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("a-checkbox",{attrs:{value:"1",name:"type"}},[e._v(" 申述 ")]),a("a-checkbox",{attrs:{value:"2",name:"type"}},[e._v(" 举报 ")])],1)],1),a("a-form-model-item",{attrs:{label:"附加说明"}},[a("a-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("a-form-model-item",{attrs:{"wrapper-col":{span:24,offset:4}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" 提交 ")])],1)],1),a("a-divider"),e.showProgress?a("a-steps",{staticStyle:{"margin-top":"100px"},attrs:{current:1,size:"small"}},[a("a-step",{attrs:{title:"提交申请"}}),a("a-step",{attrs:{title:"管理员审批"}}),a("a-step",{attrs:{title:"邮箱告知"}})],1):e._e()],1)],1)},r=[],l={data:function(){return{labelCol:{span:4},wrapperCol:{span:14},form:{name:"",region:void 0,date:void 0,delivery:!1,type:[],resource:"",desc:""},showProgress:!1}},methods:{onSubmit:function(){var e=this.$createElement;this.$notification.open({message:"感谢您的反馈",description:"您的提交我们已经收到,我们会尽快给您进行处理,并通过邮件方式告知,十分感谢🙏",icon:e("a-icon",{attrs:{type:"smile"},style:"color: #108ee9"})}),console.log("submit!",this.form),this.showProgress=!0}}},s=l,i=a("4023"),m=Object(i["a"])(s,o,r,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0d83c7.4b9fdbda.js.map