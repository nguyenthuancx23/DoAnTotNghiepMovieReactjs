(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[9],{293:function(e,a,t){"use strict";var n=t(36),i=t(2),r=t(171),c=Object(r.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarTitle:{margin:"0px",padding:"12px"},toolbarIcon:Object(i.a)({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{height:"100vh",overflowY:"auto",position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),"&::-webkit-scrollbar":{width:"0.4em"},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0,0,0,0.00)",webkitBoxShadow:"inset 0 0 6px rgba(0,0,0,0.00)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.1)",outline:"1px solid slategrey"}},drawerPaperClose:Object(n.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",flexDirection:"column",marginBottom:e.spacing(4)},fixedHeight:{height:240},activeNavLink:{background:"#F3F5FF",color:e.palette.primary.main}}}));a.a=c},304:function(e,a,t){"use strict";var n=t(29),i={getDanhSachPhim:function(){return n.a.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP09")},getThongTinPhim:function(e){var a="/QuanLyPhim/LayThongTinPhim?MaPhim=".concat(e);return n.a.get(a)},getDanhSachPhimPhanTrang:function(e){return n.a.get("/QuanLyPhim/LayDanhSachPhimPhanTrang",{param:e})},postThemPhim:function(e){var a=new FormData;for(var t in e)a.append(t,e[t]);return n.a.post("/QuanLyPhim/ThemPhimUploadHinh",a)},postCapNhatPhim:function(e){var a=new FormData;for(var t in e)a.append(t,e[t]);return console.log(a.get("hinhAnh")),n.a.post("/QuanLyPhim/CapNhatPhimUpload",a)},deleteMovie:function(e){var a="/QuanLyPhim/XoaPhim?MaPhim=".concat(e);return n.a.delete(a)}};a.a=i},312:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return u}));var n=t(35),i=t.n(n),r=t(53),c=t(59),l=t(304),o=function(){return function(){var e=Object(r.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:c.c}),e.prev=1,e.next=4,l.a.getDanhSachPhim();case 4:t=e.sent,a((i=t,{type:c.d,data:i})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a((n=e.t0,{type:c.b,error:n}));case 11:case"end":return e.stop()}var n,i}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}()},u=function(e){return{type:c.a,movie:e}}},317:function(e,a,t){"use strict";var n=t(29),i={getThongTinHeThongRap:function(){return n.a.get("/QuanLyRap/LayThongTinHeThongRap")},getThongTinLichChieuHeThongRap:function(){return n.a.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09")},getThongTinLichChieuPhim:function(e){var a="/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=".concat(e);return n.a.get(a)},getListCumRapTheoHeThong:function(e){var a="/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=".concat(e);return n.a.get(a)}};a.a=i},326:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return h}));var n=t(35),i=t.n(n),r=t(2),c=t(53),l=t(62),o=t(317),u=t(304),h=function(e){return{type:l.d,selectDay:e}},m=function(e){return function(){var a=Object(c.a)(i.a.mark((function a(t){var n,c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:l.b}),a.prev=1,a.next=4,o.a.getThongTinLichChieuPhim(e);case 4:return n=a.sent,a.next=7,u.a.getThongTinPhim(e);case 7:c=a.sent,t((h=Object(r.a)(Object(r.a)({},c),n),{type:l.c,data:h})),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),t((i=a.t0,{type:l.a,error:i}));case 14:case"end":return a.stop()}var i,h}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()}},339:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),i=t.n(n),r=t(275),c=t(279),l=t(269),o=t(98),u=t(171),h=Object(u.a)((function(e){return{pageTitleContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:e.spacing(4)},typo:{color:e.palette.text.hint},button:{textTransform:"none",height:"50px","&:active":{color:e.palette.primary.light}}}}));function m(e){var a=h();return i.a.createElement("div",{className:a.pageTitleContainer},i.a.createElement(o.a,{className:a.typo,variant:"h2",size:"sm"},e.title),e.button&&i.a.createElement(l.a,{classes:{root:a.button},variant:"contained",size:"large",color:"secondary"},e.button),e.select&&i.a.createElement("div",null))}var p=t(293);function s(e){var a=Object(p.a)(),t=e.title,n=e.children;return i.a.createElement(r.a,{maxWidth:"lg",className:a.container},t&&i.a.createElement(m,{title:t}),i.a.createElement(c.a,{container:!0,spacing:3},i.a.createElement(c.a,{item:!0,xs:12},n)))}},344:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),i=t.n(n),r=t(98);function c(e){return i.a.createElement(r.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,className:e.className},e.children)}},349:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return o}));var n=t(35),i=t.n(n),r=t(53),c=t(49),l=t(317),o=function(){return function(){var e=Object(r.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:c.b}),e.prev=1,e.next=4,l.a.getThongTinLichChieuHeThongRap();case 4:t=e.sent,a((i=t,{type:c.c,data:i})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a((n=e.t0,{type:c.a,error:n}));case 11:case"end":return e.stop()}var n,i}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}()},u=function(){return function(){var e=Object(r.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:c.e}),e.prev=1,e.next=4,l.a.getThongTinHeThongRap();case 4:t=e.sent,a((i=t,{type:c.f,data:i})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a((n=e.t0,{type:c.d,error:n}));case 11:case"end":return e.stop()}var n,i}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}()}},611:function(e,a,t){"use strict";t.r(a),t.d(a,"AddShowtimeContext",(function(){return Y}));var n=t(18),i=t(36),r=t(2),c=t(174),l=t(0),o=t.n(l),u=t(11),h=t(349),m=t(67),p=t(293),s=t(312),g=t(339),d=t(28),v=t(279),f=t(494),C=t(173),b=t(172),E=t(180),y=t(269),R=t(171),O=t(317),T=t(388),j=t(296),L=t(385),x=t(85),P=t(26),w=t.n(P),N=t(326),H=t(344),k=t(460),S=t(454),G=t(461),M=t(473),D=t(37),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,t=e.map((function(e){return e[a]}));return Object(d.a)(new Set(t))},F=Object(R.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},adjust:{marginTop:e.spacing(1)},title:{textAlign:"center",margin:0,padding:e.spacing(1),width:"100%"},headCell:{background:e.palette.primary.main,color:"#fff",fontWeight:"600",padding:"6px 16px 6px 16px",width:"30%",maxWidth:"120px"},logoImg:{width:"calc(100% / 6)",display:"inline-block",padding:"0 3px",cursor:"pointer","&:hover":{transform:"scale(1.1)"}}}})),W=[{value:75e3,label:"75k"},{value:1e5,label:"100k"},{value:12e4,label:"120k"},{value:15e4,label:"150k"}];var A=Object(u.b)((function(e){return{listMovie:e.listMovieReducer.listMovie,listHeThongRap:e.listHeThongRapReducer.listHeThongRap,detailMovie:e.detailMovieReducer.detailMovie,loadingDetailMovie:e.detailMovieReducer.loading}}),(function(e){return{fetchGetCumRapTheoHeThong:function(e){},fetchDetailMovie:function(a){e(Object(N.a)(a))}}}))((function(e){var a,t=F(),i=e.listMovie,c=e.listHeThongRap,u=e.fetchDetailMovie,h=e.detailMovie,m=e.loadingDetailMovie,p=Object(l.useContext)(Y),s=p.state,g=p.dispatch,d=s.maHeThongRap,R=s.maPhim,P=s.maCumRap,N=s.maRap,A=s.ngayChieuGioChieu,V=s.giaVe,B=s.canSubmit,_=Object(l.useState)([]),Q=Object(n.a)(_,2),q=Q[0],z=Q[1],X=Object(l.useState)([]),K=Object(n.a)(X,2),J=K[0],U=K[1];Object(l.useEffect)((function(){var e=!1;return""===R||e||(u(R),ce([])),function(){e=!0}}),[R]),Object(l.useEffect)((function(){var e=!1;return d&&O.a.getListCumRapTheoHeThong(d).then((function(a){e||(q.length>0&&(U([]),g({type:"CHOOSE_AGAIN"})),z(a))})).catch((function(a){e||console.log(a)})),function(){e=!0}}),[d]);var Z=function(e){var a=e.target,t=a.name,n=a.value;if("maCumRap"===t){var i=P;0!==i.length&&n!==i&&(U([]),g({type:"CHOOSE_AGAIN"}));var r=q.find((function(e){return e.maCumRap===n}));U(r?r.danhSachRap:[])}g({type:"CHOOSE_FIELD",field:t,data:n}),g({type:"CHECK_ALLOW"})},$=Object(l.useState)("2020-10-01T00:00:00"),ee=Object(n.a)($,2),ae=ee[0],te=ee[1],ne=Object(l.useState)([]),ie=Object(n.a)(ne,2),re=ie[0],ce=ie[1];return o.a.createElement(v.a,{container:!0,spacing:2},o.a.createElement(v.a,{item:!0,md:7,sm:12,container:!0,spacing:2},o.a.createElement(v.a,{item:!0,xs:12,sm:6},o.a.createElement(b.a,{className:t.formControl,required:!0,fullWidth:!0,variant:"outlined"},o.a.createElement(C.a,{htmlFor:"chonPhim"},"Ch\u1ecdn phim"),o.a.createElement(E.a,{native:!0,value:R,onChange:Z,label:"Ch\u1ecdn phim",inputProps:{name:"maPhim",id:"chonPhim"}},o.a.createElement("option",{"aria-label":"None",value:""}),i.map((function(e){return o.a.createElement("option",{key:e.maPhim,value:e.maPhim},e.tenPhim)})))),o.a.createElement(b.a,{className:t.formControl,required:!0,fullWidth:!0,variant:"outlined"},o.a.createElement(C.a,{htmlFor:"chonHeThongRap"},"Ch\u1ecdn h\u1ec7 th\u1ed1ng r\u1ea1p"),o.a.createElement(E.a,{native:!0,value:d,onChange:Z,label:"Ch\u1ecdn h\u1ec7 th\u1ed1ng r\u1ea1p",inputProps:{name:"maHeThongRap",id:"chonHeThongRap"}},o.a.createElement("option",{"aria-label":"None",value:""}),c.map((function(e){return o.a.createElement("option",{key:e.maHeThongRap,value:e.maHeThongRap},e.maHeThongRap)})))),o.a.createElement(b.a,{className:t.formControl,required:!0,fullWidth:!0,variant:"outlined",disabled:0===q.length},o.a.createElement(C.a,{htmlFor:"chonCumRap"},"Ch\u1ecdn c\u1ee5m r\u1ea1p"),o.a.createElement(E.a,{native:!0,value:P,onChange:Z,label:"Ch\u1ecdn c\u1ee5m r\u1ea1p",inputProps:{name:"maCumRap",id:"chonCumRap"}},o.a.createElement("option",{"aria-label":"None",value:""}),q&&q.length>0&&q.map((function(e){return o.a.createElement("option",{key:e.maCumRap,value:e.maCumRap},e.tenCumRap)}))))),o.a.createElement(v.a,{item:!0,xs:12,sm:6},o.a.createElement(b.a,{className:t.formControl,required:!0,fullWidth:!0,variant:"outlined",disabled:0===J.length},o.a.createElement(C.a,{htmlFor:"chonRap"},"Ch\u1ecdn r\u1ea1p"),o.a.createElement(E.a,{native:!0,value:N,onChange:Z,label:"Ch\u1ecdn r\u1ea1p",inputProps:{name:"maRap",id:"chonRap"}},o.a.createElement("option",{"aria-label":"None",value:""}),J&&J.length>0&&J.map((function(e){return o.a.createElement("option",{key:e.maRap,value:e.maRap},e.tenRap)})))),o.a.createElement(j.a,{utils:T.default},o.a.createElement(L.b,{fullWidth:!0,className:t.formControl,required:!0,inputVariant:"outlined",ampm:!1,label:"Ch\u1ecdn ng\xe0y gi\u1edd chi\u1ebfu",value:ae,name:"ngayChieuGioChieu",onChange:function(e,a,t){a instanceof Date&&!isNaN(a)?(te(a),g({type:"CHOOSE_FIELD",field:e,data:t}),g({type:"CHECK_ALLOW"})):(te(a),g({type:"NOT_ALLOW"}))}.bind(this,"ngayChieuGioChieu"),invalidDateMessage:'H\xe3y ch\u1ecdn \u0111\u1ecbnh d\u1ea1ng "dd/mm/yyyy hh:mm"',format:"dd/MM/yyyy HH:mm",minutesStep:5})),o.a.createElement(b.a,{className:t.formControl,required:!0,fullWidth:!0,variant:"outlined"},o.a.createElement(C.a,{htmlFor:"chonGiaVe"},"Ch\u1ecdn gi\xe1 v\xe9 (VIP = 6/5)"),o.a.createElement(E.a,{native:!0,value:V,onChange:Z,label:"Ch\u1ecdn gi\xe1 v\xe9 (VIP = 6/5)",inputProps:{name:"giaVe",id:"chonGiaVe"}},W.map((function(e){return o.a.createElement("option",{key:e.label,value:e.value},e.label)}))))),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(y.a,{variant:"contained",color:"primary",className:t.formControl,fullWidth:!0,disabled:!B,onClick:function(){if(R&&N&&A){var e={maPhim:parseInt(R),maRap:parseInt(N),ngayChieuGioChieu:"".concat(A,":00"),giaVe:V};x.a.postTaoLichChieu(e).then((function(e){w.a.fire("",e,"success"),g({type:"CLEAR_FORM"}),ce([]),u(R)})).catch((function(e){w.a.fire("L\u1ed7i","L\u1ed7i khi c\u1eadp nh\u1eadt d\u1eef li\u1ec7u","error")}))}else alert("b\u1ea1n ph\u1ea3i nh\u1eadp \u0111\u1ee7 th\xf4ng tin l\u1ecbch chi\u1ebfu c\u1ea7n t\u1ea1p")}},"T\u1ea1o l\u1ecbch chi\u1ebfu"))),o.a.createElement(f.a,{smDown:!0},o.a.createElement(v.a,{item:!0,md:!0,container:!0,spacing:2},""===R?o.a.createElement(H.a,{className:t.title},"Ch\u1ecdn phim \u0111\u1ec3 xem th\u1ed1ng k\xea!"):m?o.a.createElement(H.a,{className:t.title},"\u0110ang t\u1ea3i d\u1eef li\u1ec7u..."):o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(M.a,{className:t.adjust,size:"small"},o.a.createElement("caption",null,"\u0110\xe2y l\xe0 th\u1ed1ng k\xea chung, chi ti\u1ebft xem \u1edf b\u1ea3ng d\u01b0\u1edbi."),o.a.createElement(k.a,null,o.a.createElement(G.a,null,o.a.createElement(S.a,{className:t.headCell,component:"th",variant:"head"},"HT r\u1ea1p"),o.a.createElement(S.a,null,null===h||void 0===h||null===(a=h.heThongRapChieu)||void 0===a?void 0:a.map((function(e,a,n){return o.a.createElement("img",{key:e.maHeThongRap,className:t.logoImg,src:Object(D.b)(e.logo),alt:e.maHeThongRap,name:e.maHeThongRap,onClick:function(e){return function(e,a){var t=e.target.name,n=a.find((function(e){return e.maHeThongRap===t}));n&&ce(n.cumRapChieu)}(e,n)}})})))),o.a.createElement(G.a,null,o.a.createElement(S.a,{className:t.headCell,component:"th",variant:"head"},"C\u1ee5m r\u1ea1p"),o.a.createElement(S.a,null,0===re.length?"B\u1ea5m v\xe0o h\xecnh tr\xean \u0111\u1ec3 hi\u1ec3n th\u1ecb c\u1ee5m r\u1ea1p \u0111ang chi\u1ebfu t\u01b0\u01a1ng \u1ee9ng":re.map((function(e,a){var t=Object(D.e)(e),i=Object(n.a)(t,2),r=i[0],c=i[1];return o.a.createElement("div",{key:e.maCumRap},o.a.createElement("span",{className:r},a+1,". ",r)," ","-",c)})))),o.a.createElement(G.a,null,o.a.createElement(S.a,{className:t.headCell,component:"th",variant:"head"},"L\u1ecbch chi\u1ebfu"),o.a.createElement(S.a,null,0===re.length?"B\u1ea5m v\xe0o h\xecnh tr\xean \u0111\u1ec3 hi\u1ec3n th\u1ecb c\xe1c l\u1ecbch chi\u1ebfu t\u01b0\u01a1ng \u1ee9ng v\u1edbi c\u1ee5m r\u1ea1p":re.map((function(e,a){return o.a.createElement("div",{key:e.maCumRap},o.a.createElement("span",null,a+1,". ",e.lichChieuPhim.length," ","l\u1ecbch chi\u1ebfu phim \u1edf -"," ",I(e.lichChieuPhim,"tenRap").join(", ")))})))),o.a.createElement(G.a,null,o.a.createElement(S.a,{className:t.headCell,component:"th",variant:"head"},"Ng\xe0y chi\u1ebfu"),o.a.createElement(S.a,null,0===re.length?"C\xe1c ng\xe0y chi\u1ebfu":re.map((function(e,a){var t=e.lichChieuPhim.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{ngayChieuGioChieu:new Date(e.ngayChieuGioChieu).toLocaleDateString("it-IT")})}));return o.a.createElement("div",{key:e.maCumRap},o.a.createElement("span",null,a+1,"."," ",I(t,"ngayChieuGioChieu").join(", ")))})))),o.a.createElement(G.a,null,o.a.createElement(S.a,{className:t.headCell,component:"th",variant:"head"},"Gi\u1edd chi\u1ebfu"),o.a.createElement(S.a,null,0===re.length?"C\xe1c gi\u1edd chi\u1ebfu":re.map((function(e,a){var t=e.lichChieuPhim.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{ngayChieuGioChieu:new Date(e.ngayChieuGioChieu).toLocaleTimeString("it-IT")})}));return o.a.createElement("div",{key:e.maCumRap},o.a.createElement("span",null,a+1,"."," ",I(t,"ngayChieuGioChieu").join(", ")))})))))))))))})),V=t(7),B=t(268),_=t(606),Q=t(471),q=Object(R.a)((function(e){return{title:{textAlign:"left",margin:0,width:"100%"},headCell:{background:e.palette.primary.main,color:"#fff",fontWeight:"600",maxWidth:"120px"}}})),z=Object(V.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(G.a),X={tenRap:[],giaVe:[],maLichChieu:[],heThongIndex:0,cumRapIndex:0};var K=function(){var e=q(),a=Object(u.c)((function(e){return e.detailMovieReducer})),t=a.detailMovie,c=a.loading,h=Object(l.useContext)(Y).state.maPhim,m=Object(l.useState)(!1),p=Object(n.a)(m,2),s=p[0],g=p[1],v=Object(l.useState)(X),f=Object(n.a)(v,2),y=f[0],R=f[1],O=Object(l.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.heThongRapChieu)||void 0===e?void 0:e.length}),[h,c]);Object(l.useEffect)((function(){var e,a,n;(c&&R(Object(r.a)({},X)),h&&!c)&&(O&&R(Object(r.a)(Object(r.a)({},y),{},{maLichChieu:null===t||void 0===t||null===(e=t.heThongRapChieu)||void 0===e?void 0:e.map((function(e){return e.cumRapChieu.map((function(e){return""}))})),giaVe:null===t||void 0===t||null===(a=t.heThongRapChieu)||void 0===a?void 0:a.map((function(e){return e.cumRapChieu.map((function(e){return""}))})),tenRap:null===t||void 0===t||null===(n=t.heThongRapChieu)||void 0===n?void 0:n.map((function(e){return e.cumRapChieu.map((function(e){return""}))}))})))}),[h,c,O]);var T=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;e.persist();var c=e.target,l=c.name,o=c.value,u=a.find((function(e){return new Date(e.ngayChieuGioChieu).toLocaleString("en-GB")===o})),h=Object(d.a)(y.maLichChieu),m=Object(d.a)(y.giaVe),p=Object(d.a)(y.tenRap);h[t][n]=u.maLichChieu,m[t][n]=u.giaVe,p[t][n]=u.tenRap,R(Object(r.a)(Object(r.a)({},y),{},Object(i.a)({heThongIndex:t,cumRapIndex:n,maLichChieu:Object(d.a)(h),giaVe:Object(d.a)(m),tenRap:Object(d.a)(p)},l,o)))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,{control:o.a.createElement(_.a,{checked:!s,onChange:function(){return g((function(e){return!e}))},color:"primary"}),disabled:!h||c,label:"Ch\u1ebf \u0111\u1ed9 thu g\u1ecdn",labelPlacement:"start"}),o.a.createElement(M.a,{stickyHeader:!0,"aria-label":"sticky table"},o.a.createElement(Q.a,null,o.a.createElement(z,null,o.a.createElement(S.a,{className:e.headCell},"STT"),o.a.createElement(S.a,{className:e.headCell},"M\xe3 l\u1ecbch chi\u1ebfu"),o.a.createElement(S.a,{className:e.headCell},"H\u1ec7 th\u1ed1ng r\u1ea1p"),o.a.createElement(S.a,{className:e.headCell},"C\u1ee5m r\u1ea1p"),o.a.createElement(S.a,{className:e.headCell},"Ng\xe0y gi\u1edd chi\u1ebfu"),o.a.createElement(S.a,{className:e.headCell},"R\u1ea1p"),o.a.createElement(S.a,{className:e.headCell},"Gi\xe1 v\xe9"))),o.a.createElement(k.a,null,h?c?o.a.createElement(G.a,null,o.a.createElement(S.a,null,o.a.createElement(H.a,{className:e.title},"\u0110ang t\u1ea3i d\u1eef li\u1ec7u..."))):o.a.createElement(o.a.Fragment,null,s?function(){var a,n;return 0===(null===t||void 0===t||null===(a=t.heThongRapChieu)||void 0===a?void 0:a.length)?o.a.createElement(G.a,null,o.a.createElement(S.a,null,o.a.createElement(H.a,{className:e.title},"Phim n\xe0y ch\u01b0a c\xf3 th\xf4ng tin l\u1ecbch chi\u1ebfu"))):null===t||void 0===t||null===(n=t.heThongRapChieu)||void 0===n?void 0:n.map((function(e){return e.cumRapChieu.map((function(a){return a.lichChieuPhim.map((function(t,n){return o.a.createElement(z,{key:t.maLichChieu},o.a.createElement(S.a,null,n+1),o.a.createElement(S.a,null,t.maLichChieu),o.a.createElement(S.a,null,o.a.createElement("img",{src:Object(D.b)(e.logo),alt:e.maHeThong,width:"50px"})),o.a.createElement(S.a,null,a.tenCumRap),o.a.createElement(S.a,null,new Date(t.ngayChieuGioChieu).toLocaleString("en-GB")),o.a.createElement(S.a,null,t.tenRap),o.a.createElement(S.a,null,t.giaVe))}))}))}))}():function(){var a,n;return 0===(null===t||void 0===t||null===(a=t.heThongRapChieu)||void 0===a?void 0:a.length)?o.a.createElement(G.a,null,o.a.createElement(S.a,null,o.a.createElement(H.a,{className:e.title},"Phim n\xe0y ch\u01b0a c\xf3 th\xf4ng tin l\u1ecbch chi\u1ebfu"))):null===t||void 0===t||null===(n=t.heThongRapChieu)||void 0===n?void 0:n.map((function(e,a){return e.cumRapChieu.map((function(t,n){return o.a.createElement(z,{key:t.maCumRap},o.a.createElement(S.a,null,n+1),o.a.createElement(S.a,null,y.maLichChieu.length&&!c?y.maLichChieu[a][n]:""),o.a.createElement(S.a,null,o.a.createElement("img",{src:Object(D.b)(e.logo),alt:e.maHeThong,width:"50px"})),o.a.createElement(S.a,null,t.tenCumRap),o.a.createElement(S.a,null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;return e.length?o.a.createElement(b.a,{required:!0,fullWidth:!0,variant:"outlined"},o.a.createElement(C.a,{htmlFor:a},"Xem l\u1ecbch chi\u1ebfu"),o.a.createElement(E.a,{native:!0,defaultValue:y[a]||"",onChange:function(a){return T(a,e,t,n)},name:a,label:"Xem l\u1ecbch chi\u1ebfu"},o.a.createElement("option",{"aria-label":"None",value:""}),e.map((function(e){return o.a.createElement("option",{key:e.maLichChieu,value:new Date(e.ngayChieuGioChieu).toLocaleString("en-GB")},new Date(e.ngayChieuGioChieu).toLocaleString("en-GB"))})))):"Ch\u01b0a c\xf3 l\u1ecbch chi\u1ebfu"}(t.lichChieuPhim,t.maCumRap,a,n)),o.a.createElement(S.a,null,y.maLichChieu.length&&!c?y.tenRap[a][n]:""),o.a.createElement(S.a,null,y.maLichChieu.length&&!c?y.giaVe[a][n]:""))}))}))}()):o.a.createElement(G.a,null,o.a.createElement(S.a,null,o.a.createElement(H.a,{className:e.title},"Ch\u1ecdn phim \u0111\u1ec3 xem th\xf4ng tin"))))))},J={maPhim:"",maHeThongRap:"",maCumRap:"",maRap:"",ngayChieuGioChieu:"",giaVe:"75000",canSubmit:!1},U=function(e,a){var t=a.type,n=a.field,c=a.data;switch(t){case"CHOOSE_FIELD":return Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},n,c));case"CHOOSE_AGAIN":return Object(r.a)(Object(r.a)({},e),{},{maCumRap:"",maRap:"",canSubmit:!1});case"CHECK_ALLOW":return Object.keys(e).every((function(a){return""!==e[a]}))?Object(r.a)(Object(r.a)({},e),{},{canSubmit:!0}):Object(r.a)({},e);case"NOT_ALLOW":return Object(r.a)(Object(r.a)({},e),{},{canSubmit:!1});case"CLEAR_FORM":return Object(r.a)(Object(r.a)({},J),{},{maPhim:e.maPhim})}},Y=Object(l.createContext)();a.default=Object(u.b)((function(e){return{loadingListMovie:e.listMovieReducer.loading,loadingListHTR:e.listHeThongRapReducer.loading}}),(function(e){return{fetchGetListMovie:function(){e(Object(s.a)())},fetchGetListHeThongRap:function(){e(Object(h.a)())}}}))((function(e){Object(m.a)("Th\xeam l\u1ecbch chi\u1ebfu","admin");var a=Object(p.a)(),t=e.fetchGetListMovie,i=e.fetchGetListHeThongRap,r=e.loadingListMovie,u=e.loadingListHTR;Object(l.useEffect)((function(){t(),i()}),[]);var h=Object(l.useReducer)(U,J),s=Object(n.a)(h,2),d=s[0],v=s[1],f=Object(l.useMemo)((function(){return{state:d,dispatch:v}}),[d,v]);return r||u?o.a.createElement("div",null,"\u0110ang l\u1ea5y d\u1eef li\u1ec7u..."):o.a.createElement(Y.Provider,{value:f},o.a.createElement(g.a,{title:"Manage Showtime"},o.a.createElement(c.a,{className:a.paper},o.a.createElement(A,null)),o.a.createElement(c.a,{className:a.paper},o.a.createElement(K,null))))}))}}]);
//# sourceMappingURL=9.a6496e46.chunk.js.map