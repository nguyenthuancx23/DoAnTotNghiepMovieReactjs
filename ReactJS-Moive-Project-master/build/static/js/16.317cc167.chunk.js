(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[16],{612:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),o=t(280),i=t(269),u=t(276),m=t(267),c=t(268),h=t(270),s=t(279),d=t(265),p=t(98),g=t(275),f=t(11),E=t(35),v=t.n(E),b=t(53),K=t(93),x=t(111),C=function(e){return{type:K.c,user:e}},S=t(84),T=t(130),k=t(114),y=t(138),D=t(137),w=t(139),N=t(67),U={ho:"",ten:"",taiKhoan:"",matKhau:"",matKhau2:"",email:"",soDt:""};a.default=Object(f.b)((function(e){return{loadingSignUp:e.userSignUpReducer.loading,errorSignUp:e.userSignUpReducer.error}}),(function(e){return{fetchSignUp:function(a,t){e(function(e,a){return function(){var t=Object(b.a)(v.a.mark((function t(n){var r,l;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:K.b}),t.prev=1,t.next=4,x.a.postSignUp(e);case 4:r=t.sent,n(C(r)),a.push("/login"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),n((o=t.t0,{type:K.a,error:o})),console.log(null===(l=t.t0.response)||void 0===l?void 0:l.data);case 13:case"end":return t.stop()}var o}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(a,t))}}}))((function(e){var a,t=e.fetchSignUp,n=e.loadingSignUp,f=e.errorSignUp,E=Object(w.a)();Object(S.a)(),Object(N.a)("\u0110\u0103ng K\xfd");var v=Object(D.a)(U,y.a,t,e),b=v.handleChange,K=v.handleSubmit,x=v.handleBlur,C=v.values,V=v.errors,W=v.isNotValid;return r.a.createElement(g.a,{component:"main",maxWidth:"xs",className:E.wrapper},r.a.createElement(u.a,null),r.a.createElement("div",{className:E.paper},r.a.createElement(o.a,{className:E.avatar},r.a.createElement("img",{src:"/images/logo.png",alt:"user thumbnails"})),r.a.createElement(p.a,{component:"h1",variant:"h5"},"\u0110\u0103ng k\xfd"),r.a.createElement("form",{className:E.form,noValidate:!0,onSubmit:function(e){return function(e,a){e.preventDefault();var t=a.ho,n=a.ten,r=a.taiKhoan,l=a.matKhau,o=a.email,i=a.soDt,u={hoTen:"".concat(t," ").concat(n),taiKhoan:r,matKhau:l,soDt:i,email:o,maNhom:"GP09",maLoaiNguoiDung:"KhachHang"};K(e,u)}(e,C)}},r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:12,sm:6},r.a.createElement(m.a,{autoComplete:"ho",name:"ho",variant:"outlined",required:!0,fullWidth:!0,id:"ho",label:"H\u1ecd",autoFocus:!0,error:!!V.ho,defaultValue:C.ho,helperText:V.ho,onChange:b,onBlur:x})),r.a.createElement(s.a,{item:!0,xs:12,sm:6},r.a.createElement(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"ten",label:"T\xean",name:"ten",autoComplete:"ten",defaultValue:C.ten,onChange:b,onBlur:x,error:!!V.ten,helperText:V.ten})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"taiKhoan",label:"T\xe0i kho\u1ea3n",name:"taiKhoan",autoComplete:"taiKhoan",defaultValue:C.taiKhoan,onChange:b,error:!!V.taiKhoan,helperText:V.taiKhoan,onBlur:x})),r.a.createElement(s.a,{item:!0,xs:12,sm:6},r.a.createElement(m.a,{variant:"outlined",required:!0,fullWidth:!0,name:"matKhau",label:"M\u1eadt kh\u1ea9u",type:"password",id:"matKhau",autoComplete:"current-password",defaultValue:C.matKhau,onChange:b,error:!!V.matKhau,helperText:V.matKhau,onBlur:x})),r.a.createElement(s.a,{item:!0,xs:12,sm:6},r.a.createElement(m.a,{variant:"outlined",required:!0,fullWidth:!0,name:"matKhau2",label:"X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u",type:"password",id:"matKhau2",defaultValue:C.matKhau2,onChange:b,error:!!V.matKhau2,helperText:V.matKhau2,onBlur:x})),r.a.createElement(s.a,{item:!0,xs:12,sm:6},r.a.createElement(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",defaultValue:C.email,onChange:b,error:!!V.email,helperText:V.email,onBlur:x})),r.a.createElement(s.a,{item:!0,xs:12,sm:6},r.a.createElement(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"soDt",label:"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i",name:"soDt",autoComplete:"soDt",defaultValue:C.soDt,onChange:b,error:!!V.soDt,helperText:V.soDt,onBlur:x})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(c.a,{control:r.a.createElement(h.a,{value:"allowExtraEmails",color:"primary"}),label:"Nh\u1eadn c\xe1c th\xf4ng b\xe1o v\xe0 \u01b0u \u0111\xe3i m\u1edbi nh\u1ea5t"}))),f&&r.a.createElement(T.a,{message:null===(a=f.response)||void 0===a?void 0:a.data}),r.a.createElement(i.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:E.submit,disabled:W||n},"\u0110\u0103ng k\xfd"),r.a.createElement(s.a,{container:!0,justify:"flex-end"},r.a.createElement(s.a,{item:!0},r.a.createElement(l.Link,{to:"/login"},"\u0110\xe3 c\xf3 t\xe0i kho\u1ea3n t\u1ea1i Tix? \u0110\u0103ng nh\u1eadp ngay"))))),r.a.createElement(d.a,{mt:3},r.a.createElement(k.a,null)))}))}}]);
//# sourceMappingURL=16.317cc167.chunk.js.map