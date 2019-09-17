(window["webpackJsonpfrontend-jap-keep"]=window["webpackJsonpfrontend-jap-keep"]||[]).push([[0],{109:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(68),c=a.n(s),i=(a(84),a(12)),l=a(13),o=a(17),u=a(16),d=a(18),m=(a(85),a(19)),h=a(26),p=a.n(h),b="".concat("http://javidatabase.ddns.net:8080/jap-keep-0.0.1-SNAPSHOT/","/instructors/").concat("in28minutes"),f=new(function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"retrieveAllCourses",value:function(e){return p.a.get("".concat(b,"/courses"))}},{key:"deleteCourse",value:function(e,t){return p.a.delete("".concat(b,"/courses/").concat(t))}},{key:"retrieveCourse",value:function(e,t){return p.a.get("".concat(b,"/courses/").concat(t))}},{key:"updateCourse",value:function(e,t,a){return p.a.put("".concat(b,"/courses/").concat(t),a)}},{key:"createCourse",value:function(e,t){return p.a.post("".concat(b,"/courses/"),t)}}]),e}()),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={courses:[],message:null},a.refreshCourses=a.refreshCourses.bind(Object(m.a)(a)),a.deleteCourseClicked=a.deleteCourseClicked.bind(Object(m.a)(a)),a.updateCourseClicked=a.updateCourseClicked.bind(Object(m.a)(a)),a.addCourseClicked=a.addCourseClicked.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"All Courses"),this.state.message&&r.a.createElement("div",{className:"alert alert-success"},this.state.message),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Update"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,this.state.courses.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.username),r.a.createElement("td",null,t.description),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.updateCourseClicked(t.id)}},"Update")),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.deleteCourseClicked(t.id)}},"Delete")))})))),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn btn-success",onClick:this.addCourseClicked},"Add")))}},{key:"componentDidMount",value:function(){this.refreshCourses()}},{key:"refreshCourses",value:function(){var e=this;f.retrieveAllCourses("in28minutes").then(function(t){console.log(t),e.setState({courses:t.data})})}},{key:"deleteCourseClicked",value:function(e){var t=this;f.deleteCourse("in28minutes",e).then(function(a){t.setState({message:"Delete of course ".concat(e," Successful")}),t.refreshCourses()})}},{key:"updateCourseClicked",value:function(e){console.log("update "+e),this.props.history.push("/courses/".concat(e))}},{key:"addCourseClicked",value:function(){this.props.history.push("/courses/-1")}}]),t}(n.Component),E=a(27),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).validate=a.validate.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={id:a.props.match.params.id,description:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.id),-1!=this.state.id&&f.retrieveCourse("in28minutes",this.state.id).then(function(t){return e.setState({description:t.data.description})})}},{key:"onSubmit",value:function(e){var t=this,a={id:this.state.id,username:"in28minutes",description:e.description,targetDate:e.targetDate};-1==this.state.id?f.createCourse("in28minutes",a).then(function(){return t.props.history.push("/courses")}):f.updateCourse("in28minutes",this.state.id,a).then(function(){return t.props.history.push("/courses")}),console.log(e)}},{key:"validate",value:function(e){var t={};return e.description?e.description.length<5&&(t.description="Enter atleast 5 Characters in Description"):t.description="Enter a Description",t}},{key:"render",value:function(){var e=this.state,t=e.description,a=e.id;return r.a.createElement("div",null,r.a.createElement("h3",null,"Course"),r.a.createElement("div",{className:"container"},r.a.createElement(E.d,{initialValues:{description:t,id:a},validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0,onSubmit:this.onSubmit},function(e){return r.a.createElement(E.c,null,r.a.createElement(E.a,{name:"description",component:"div",className:"alert alert-warning"}),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Id"),r.a.createElement(E.b,{className:"form-control",type:"text",name:"id",disabled:!0})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Description"),r.a.createElement(E.b,{className:"form-control",type:"text",name:"description"})),r.a.createElement("button",{className:"btn btn-success",type:"submit"},"Save"))})))}}]),t}(n.Component),k=a(72),j=a(147),g=a(144),O=a(146),y=a(145),w=(a(109),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(k.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault()},a.state={email:"",password:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(j.a,{controlId:"email",bsSize:"large"},r.a.createElement(g.a,null,"Email"),r.a.createElement(O.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(j.a,{controlId:"password",bsSize:"large"},r.a.createElement(g.a,null,"Password"),r.a.createElement(O.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement(y.a,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit"},"Login")))}}]),t}(n.Component)),S=a(78),N=a(23),D=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{basename:"ChatProject/"},r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Instructor Application"),r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/",exact:!0,component:w}),r.a.createElement(N.a,{path:"/courses",exact:!0,component:v}),r.a.createElement(N.a,{path:"/courses/:id",component:C}))))}}]),t}(n.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(D,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,a){e.exports=a(142)},84:function(e,t,a){},85:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.1d98d217.chunk.js.map