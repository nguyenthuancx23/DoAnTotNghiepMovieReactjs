(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[13],{608:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(11),i=t(495),l=t(448),s=t(348),o=function(e){var a=parseFloat(e),t="";return a>=0&&a<=1.25&&(t="polygon( 50% 0, 100% 0,".concat(40*a+50,"% 0, 50% 50%)")),a>1.25&&a<=3.75&&(t="polygon(50% 0, 100% 0, 100% 50%, 100% 100%, 100% ".concat(40*a-50,"%, 50% 50%)")),a>3.75&&a<=6.25&&(t="polygon(50% 0, 100% 0, 100% 50%, 100% 100%, ".concat(-40*a+250,"% 100%, 50% 50%)")),a>6.25&&a<=8.75&&(t="polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0, 0 ".concat(-40*a+350,"%, 50% 50%")),a>8.75&&a<=10&&(t="polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0, ".concat(40*a-350,"% 0, 50% 50%")),{WebkitClipPath:t,MozClipPath:t,msClipPath:t,OClipPath:t,clipPath:t}};var m=Object(s.a)((function(e){var a=Object(r.c)((function(e){return e.reviewsReducer.people})),t=Object(r.c)((function(e){return e.reviewsReducer.totalPoint})),n=e.movie.danhGia,i=e.renderStar,l=(parseInt(t)+parseInt(n))/parseInt(a);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"circlePercent"},c.a.createElement("div",{className:"circleBorder"}),c.a.createElement("div",{className:"point-group"},c.a.createElement("div",{className:"bar",id:"bar",style:o(l)})),c.a.createElement("span",{className:"point"},l.toFixed(1))),c.a.createElement("div",{className:"star"},i(l)),c.a.createElement("p",{className:"danhGia"},a," ng\u01b0\u1eddi \u0111\xe1nh gi\xe1"))}),"movie"),u=t(10),d="/images/star1.png";function v(e){var a=e.hasInfo,t=e.src,n=e.post;return c.a.createElement("div",{className:"row discuss__item--header"},c.a.createElement("div",{className:"text-center avatar"},c.a.createElement("img",{className:"avatar-img",src:t,alt:"avatar"})),c.a.createElement("div",{className:"col pl-1 middle "},a?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"thinking font-weight-bold"},n.username),c.a.createElement("p",{className:"time__post"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Date(e).toLocaleString("en-GB",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}(n.createdAt))):c.a.createElement("p",{className:"thinking"},"B\u1ea1n ngh\u0129 g\xec v\u1ec1 phim n\xe0y?")),c.a.createElement("div",{className:"text-right star__group"},a?c.a.createElement("div",{className:"star__group--comment stack"},c.a.createElement("span",{className:"danhGia"},n.point),c.a.createElement("div",{className:"star"},function(e){for(var a=[];parseInt(e)>2;)a.push(d),e-=2;return e>0&&Math.round(e)>1?a.push(d):a.push("/images/star2.png"),a.map((function(e,a){return c.a.createElement("img",{src:e,key:a,alt:"star"})}))}(n.point))):c.a.createElement("div",{className:"star__group--default"},c.a.createElement("i",{className:"fa fa-star icon-star"}),c.a.createElement("i",{className:"fa fa-star icon-star"}),c.a.createElement("i",{className:"fa fa-star icon-star"}),c.a.createElement("i",{className:"fa fa-star icon-star"}),c.a.createElement("i",{className:"fa fa-star icon-star"}))))}v.defaultProps={src:"/images/avatar.png",hasInfo:!0};var h=v,g=t(18),p=t(36),f=t(2),E=t(13),N=t.n(E),b=t(35),y=t.n(b),T=t(53),R=t(441),w=t(51),O=t(346),j={point:0,post:"",errorMessage:"",canSubmit:!1},I=function(e,a){switch(a.type){case"CHANGE":return Object(f.a)(Object(f.a)({},e),{},Object(p.a)({},a.field,a.data));case"FAILED":return Object(f.a)(Object(f.a)({},e),{},{errorMessage:a.errorMessage,canSubmit:!1});case"SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{errorMessage:"",canSubmit:!0});case"POSTED":return Object(f.a)({},j);default:throw new Error("ko x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c action")}};var _=Object(r.b)((function(e){return{isLoggedIn:e.userLoginReducer.isLoggedIn}}),(function(e){return{actPostReviews:function(a){e(function(e){return function(){var t=Object(T.a)(y.a.mark((function t(n){var c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:w.e}),t.prev=1,t.next=4,R.a.postDiscuss(e);case 4:c=t.sent,n(a(c.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n((r=t.t0,{type:w.d,err:r}));case 11:case"end":return t.stop()}var r}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();function a(e){return{type:w.f,newPost:e}}}(a))}}}))((function(e){var a=e.isLoggedIn,t=e.actPostReviews,r=Object(n.useReducer)(I,j),i=Object(g.a)(r,2),l=i[0],s=i[1],o=l.post,m=l.errorMessage,d=l.canSubmit,v=l.point;return N.a.createPortal(c.a.createElement("div",{className:"modal fade reviewModel",tabIndex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true",id:"reviewInput"},c.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("div",{className:"rating"},Array.from(Array(10),(function(e,a){return a+1})).reverse().map((function(e,a){return c.a.createElement(n.Fragment,{key:a},c.a.createElement("input",{type:"radio",name:"rating",id:"".concat(e,"pts"),onChange:function(e){return s({type:"CHANGE",field:"point",data:e.target.value})},value:"".concat(e)}),c.a.createElement("label",{htmlFor:"".concat(e,"pts"),title:"".concat(e," \u0111i\u1ec3m")}))}))),c.a.createElement("h2",{className:"star-point"}," ",v," /10 \u0111i\u1ec3m")),c.a.createElement("div",{className:"modal-body"},c.a.createElement("textarea",{rows:"2",className:"input-comment",placeholder:"Cho m\u1ecdi ng\u01b0\u1eddi bi\u1ebft suy ngh\u0129 c\u1ee7a b\u1ea1n v\u1ec1 b\u1ed9 phim...",disabled:!a,onChange:function(e){return s({type:"CHANGE",field:"post",data:e.target.value})},value:o}),c.a.createElement("div",{className:"text-center"},c.a.createElement("span",{className:"text-alert"},a?"".concat(m):"(*) B\u1ea1n ph\u1ea3i \u0111\u0103ng nh\u1eadp \u0111\u1ec3 c\xf3 th\u1ec3 b\xecnh lu\u1eadn")),a?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"btn btn-sendreview w-100 mt-4",onClick:function(){return function(e,a){var n=function(e,a){return 0===e?"B\u1ea1n ch\u01b0a ch\u1ea5m \u0111i\u1ec3m k\xeca!":0===a.length?"H\xe3y vi\u1ebft g\xec \u0111\xf3 \u0111\u1ec3 chia s\u1ebd suy ngh\u0129 c\u1ee7a b\u1ea1n!":""}(e,a);if(n.length>0?s({type:"FAILED",errorMessage:n}):s({type:"SUCCESS"}),d){var c=localStorage.getItem(u.h),r={username:JSON.parse(c).hoTen,like:0,comment:0,createdAt:new Date,point:e,post:a,isLike:!1};s({type:"POSTED"}),t(r),document.getElementById("close").click()}}(v,o)}},"\u0110\u0103ng"),c.a.createElement("button",{"data-dismiss":"modal",id:"close",style:{display:"none"}})):c.a.createElement(O.a,{className:"btn btn-sendreview w-100 mt-4","data-dismiss":"modal",to:"/login"},"\u0110\u0103ng Nh\u1eadp"))))),document.getElementById("modal-review"))})),C=t(442),D=t(325),H=t(443);function k(e){var a=e.post;return c.a.createElement("div",{className:"discuss__item"},c.a.createElement(h,{src:a.avatar,post:a}),c.a.createElement("div",{className:"discuss__item--body"},c.a.createElement("p",{className:"thinking"},a.post)),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"row discuss__item--footer"},c.a.createElement("div",{className:"col-12"},c.a.createElement(H.a,{hasLabel:!0,like:a.like,comment:a.comment}))))}k.defaultProps={post:{}};var M=k;var L=function(){var e=Object(D.b)(),a=e.indexShow;return e.oriPosts.map((function(e,t){return c.a.createElement(n.Fragment,{key:t},t<=a?e.map((function(e,a){return c.a.createElement(M,{key:e.id,post:e})})):null)}))};var P=function(){var e=Object(r.c)((function(e){return e.userLoginReducer.isLoggedIn})),a=Object(r.c)((function(e){return e.reviewsReducer.posts}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"discuss myContainer"},c.a.createElement("div",{className:"discuss__click","data-toggle":"modal","data-target":"#reviewInput"},c.a.createElement("div",{className:"discuss__item"},c.a.createElement(h,{src:e?u.c:"/images/avatar.png",hasInfo:!1}))),c.a.createElement("div",{className:"discuss__area clearfix"},c.a.createElement(D.a,{initialPosts:a,postSize:5},c.a.createElement(L,null),c.a.createElement(C.a,null),c.a.createElement(_,null)))))},S=t(73),x=t(345);var F=Object(n.memo)(Object(s.a)((function(e){var a=e.movie,t=e.renderDate;return c.a.createElement("section",{className:"movie__info"},c.a.createElement("div",{className:"myContainer row"},c.a.createElement("div",{className:"col-12 col-md-6"},c.a.createElement("div",{className:"rowInfo"},c.a.createElement("div",{className:"titleInfo"},"Ng\xe0y c\xf4ng chi\u1ebfu"),c.a.createElement("div",{className:"contentInfo"},t(0))),c.a.createElement("div",{className:"rowInfo"},c.a.createElement("div",{className:"titleInfo"},"\u0110\u1ea1o di\u1ec5n"),c.a.createElement("div",{className:"contentInfo"},"Quo vero architecto")),c.a.createElement("div",{className:"rowInfo"},c.a.createElement("div",{className:"titleInfo"},"Di\u1ec5n vi\xean"),c.a.createElement("div",{className:"contentInfo"},"Lorem range, Ipsum dolor")),c.a.createElement("div",{className:"rowInfo"},c.a.createElement("div",{className:"titleInfo"},"Th\u1ec3 lo\u1ea1i"),c.a.createElement("div",{className:"contentInfo"},"Dramma, Vietsub")),c.a.createElement("div",{className:"rowInfo"},c.a.createElement("div",{className:"titleInfo"},"\u0110\u1ecbnh d\u1ea1ng"),c.a.createElement("div",{className:"contentInfo"},"2D/Digital")),c.a.createElement("div",{className:"rowInfo"},c.a.createElement("div",{className:"titleInfo"},"Ng\xf4n Ng\u1eef"),c.a.createElement("div",{className:"contentInfo"},"Ti\u1ebfng Vi\u1ec7t"))),c.a.createElement("div",{className:"col-12 col-md-6"},c.a.createElement("div",{className:"rowInfo"},c.a.createElement("div",{className:"titleInfo"},"N\u1ed9i dung")),c.a.createElement("div",{className:"rowInfo"},c.a.createElement("p",{className:"description contentInfo"},a.moTa)))))}),"movie")),A=t(445),G=t(380),B=t(54),q=t(447),J=t(446),z=t(319),U=t(28),V=t(493),W=t(4),Q=t.n(W),K=function(e){var a=new Date(e),t=a.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"});return a.setHours(a.getHours()+2),[t,new Date(a).toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})]},X=function(e){return!(e>(new Date).toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"}))};function Y(e){var a=e.foundHeThongRap,t=a.cumRapChieu;return c.a.createElement(c.a.Fragment,null,function(){if(t&&t.length>0)return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.every((function(e){return 0===e.lichChieuPhim.length}))}(t)?c.a.createElement("div",{className:"alert alert-danger"},"Ng\xe0y n\xe0y kh\xf4ng c\xf3 l\u1ecbch chi\u1ebfu"):t.map((function(e,t){return e.lichChieuPhim&&e.lichChieuPhim.length>0&&c.a.createElement("div",{key:e.maCumRap,className:"wrapper__collapse "},c.a.createElement("div",{className:"main__collapse","data-toggle":"collapse","data-target":"#".concat(a.maHeThongRap,"_").concat(e.maCumRap.trim())},c.a.createElement(V.a,{system:a,cinema:e})),c.a.createElement("div",{className:"collapse",id:"".concat(a.maHeThongRap,"_").concat(e.maCumRap.trim())},c.a.createElement("div",{className:"pt-3 row content__collapse stack"},c.a.createElement("div",{className:"col-12"},"2D Digital"),c.a.createElement("div",{className:"col-12"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e&&e.length>0)return e.map((function(e,a){var t=K(e.ngayChieuGioChieu),n=Object(g.a)(t,2),r=n[0],i=n[1];return c.a.createElement(O.a,{key:e.maLichChieu,to:"/booking/".concat(e.maLichChieu),className:"btn btn-time",disabled:X(r)},c.a.createElement("span",{className:"start"},r)," ~ ",i)}))}(e.lichChieuPhim,e)))))}))}())}Y.propsTypes={foundHeThongRap:Q.a.object.isRequired};var Z=Object(r.b)((function(e){return{selectDay:e.detailMovieReducer.selectDay}}),null)(Y);function $(e){var a=e.detailMovie,t=e.maHeThongRap,r=e.selectDay,i=a.heThongRapChieu,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(i&&i.length>0)return i.find((function(a){return a.maHeThongRap===e}))},s=Object(n.useState)(l(t)),o=Object(g.a)(s,2),m=o[0],u=o[1];return Object(n.useEffect)((function(){var e=l(t);if(e){var a=e.cumRapChieu.reduce((function(e,a){var t=a.lichChieuPhim.filter((function(e){return new Date(e.ngayChieuGioChieu).toLocaleDateString("it-IT")===r}));return[].concat(Object(U.a)(e),[Object(f.a)(Object(f.a)({},a),{},{lichChieuPhim:t})])}),[]),n=Object(f.a)(Object(f.a)({},e),{},{cumRapChieu:a});u(n)}}),[r]),c.a.createElement(c.a.Fragment,null,m?c.a.createElement(Z,{foundHeThongRap:m}):c.a.createElement("div",{className:"alert alert-info"},"Hi\u1ec7n kh\xf4ng c\xf3 l\u1ecbch chi\u1ebfu tr\xean h\u1ec7 th\u1ed1ng r\u1ea1p n\xe0y"))}$.propsTypes={detailMovie:Q.a.object.isRequired,maHeThongRap:Q.a.string.isRequired,selectDay:Q.a.string.isRequired};var ee=Object(r.b)((function(e){return{detailMovie:e.detailMovieReducer.detailMovie,selectDay:e.detailMovieReducer.selectDay}}),null)($);function ae(e){var a=e.heThongRap,t=e.index,n=Object(B.a)(u.d)?{className:"collapse",id:a.maHeThongRap}:{className:"tab-pane fade ".concat(0===t?"show active":""),id:a.maHeThongRap};return c.a.createElement(z.a,{settings:n},c.a.createElement(ee,{maHeThongRap:a.maHeThongRap}))}ae.defaultProps={heThongRap:{},index:0};var te=ae;function ne(e){var a=e.listHeThongRap,t=Object(B.a)(u.d);return c.a.createElement(c.a.Fragment,null,t?c.a.createElement(c.a.Fragment,null,function(e){if(e&&e.length>0)return e.map((function(e,a){var t={className:"collapsed MOBILE wrapper__collase?","data-toggle":"collapse","data-target":"#".concat(e.maHeThongRap)};return c.a.createElement("div",{className:"logo__wrapper collapse__mobile",key:e.maHeThongRap},c.a.createElement(z.a,{settings:t},c.a.createElement(q.a,{heThong:e,hasLabel:!0})),c.a.createElement(te,{heThongRap:e}))}))}(a)):c.a.createElement(J.a,{hasLabel:!0}))}ne.defaultProps={listHeThongRap:[]};var ce=Object(r.b)((function(e){return{listHeThongRap:e.listHeThongRapReducer.listHeThongRap}}),null)(ne),re=t(326),ie=function(e){switch(e.getDay()){case 0:return["Ch\u1ee7 nh\u1eadt","CN"];case 1:return["Th\u1ee9 2","T2"];case 2:return["Th\u1ee9 3","T3"];case 3:return["Th\u1ee9 4","T4"];case 4:return["Th\u1ee9 5","T5"];case 5:return["Th\u1ee9 6","T6"];case 6:return["Th\u1ee9 7","T7"]}},le=Object(r.b)(null,(function(e){return{selectDay:function(a){e(Object(re.b)(a))}}}))((function(e){var a=Object(B.a)(u.d),t=Object(n.useRef)(null),r=Object(n.useMemo)((function(){return function(e,a){for(var t=[],n=new Date(e);n<=a;n.setDate(n.getDate()+1))t.push(new Date(n));return t}(new Date(u.f),new Date(u.b))}),[]);return c.a.createElement("ul",{ref:t,className:"detail__listOfDay"},r.map((function(n,r){return c.a.createElement("li",{key:n.toLocaleDateString(),className:"detail__listOfDay--item ".concat(0===r?"active":""),onClick:function(a){return function(a,n){var c=n.toLocaleDateString("it-IT");e.selectDay(c),Array.from(t.current.childNodes).forEach((function(e){e.classList.remove("active")})),a.target.classList.add("active")}(a,n)}},c.a.createElement("p",{className:"dayOfWeek"},a?ie(n)[1]:ie(n)[0]),c.a.createElement("p",{className:"date"},"".concat(n.getDate()).padStart(2,"0")))})))}));var se=Object(r.b)((function(e){return{listHeThongRap:e.listHeThongRapReducer.listHeThongRap}}),null)((function(e){var a=e.listHeThongRap,t=Object(B.a)(u.a);return c.a.createElement("section",{className:"detail"},c.a.createElement("div",{className:"detail-wrapper"},c.a.createElement(le,null),c.a.createElement("div",{className:"nav detail__theater",role:"tablist"},c.a.createElement(ce,null)),t&&c.a.createElement("div",{className:"detail__showList tab-content"},a&&a.length>0&&a.map((function(e,a){return c.a.createElement(te,{key:e.maHeThongRap,heThongRap:e,index:a})})))))})),oe=t(349),me=t(67),ue=function(e){return function(a){var t=a.renderDate;return c.a.createElement("div",{className:"row align-items-center main-title-detail"},c.a.createElement("div",{className:"col-9 col-md-12"},c.a.createElement("p",null,t(0)),c.a.createElement(e,a),c.a.createElement("p",null,"2D/Digital")),c.a.createElement("div",{className:"col-3 col-md-12 text-center text-md-left"},c.a.createElement("a",{href:"#!!!!",className:"btnBuyTicket"},"Mua v\xe9")))}};var de=ue((function(e){return c.a.createElement("h6",{className:"title"},c.a.createElement("span",{className:e.renderAge[0]},e.renderAge[1])," ",e.detailMovie.tenPhim)}));var ve=ue((function(e){return c.a.createElement("h6",{className:"title"},e.detailMovie.tenPhim," - (",e.renderAge[1],")")})),he=Object(s.a)(de,"detailMovie"),ge=Object(s.a)(ve,"detailMovie"),pe={lichChieu:"L\u1ecbch chi\u1ebfu",thongTin:"Th\xf4ng tin",danhGia:"\u0110\xe1nh gi\xe1"};a.default=Object(r.b)((function(e){return{detailMovie:e.detailMovieReducer.detailMovie,loadingDetailMovie:e.detailMovieReducer.loading,loadingReview:e.reviewsReducer.loading,listHeThongRap:e.listHeThongRapReducer.listHeThongRap}}),(function(e){return{fetchDetailMovie:function(a){e(Object(re.a)(a))},fetchListHeThongRap:function(){e(Object(oe.a)())},fetchReviewsPost:function(){e(function(){var e=Object(T.a)(y.a.mark((function e(a){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:w.b}),e.prev=1,e.next=4,R.a.getDiscussPost();case 4:t=e.sent,a((c=t.data,{type:w.c,data:c})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),a((n=e.t0,{type:w.a,err:n})),console.log(e.t0);case 12:case"end":return e.stop()}var n,c}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}())}}}))((function(e){var a=Object(B.a)(u.d);Object(me.a)("Chi ti\u1ebft");var t=e.detailMovie,r=e.loadingDetailMovie,s=e.fetchDetailMovie,o=e.fetchReviewsPost,d=e.fetchListHeThongRap,v=e.listHeThongRap,h=e.loadingReview;return Object(n.useEffect)((function(){var a=e.match.params.slug,t=a.slice(0,a.indexOf("-"));s(t),o(),v&&0!==v.length||d()}),[]),r||h?c.a.createElement(S.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{marginTop:60}}),c.a.createElement(i.a,{isHero:!0},c.a.createElement(l.a,{detailMovie:t,isHero:!0}),!a&&c.a.createElement("div",{className:"hero-detail myContainer"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"movieThumbnail col-3"},c.a.createElement(A.a,{movie:t,allowNavigate:!1})),c.a.createElement("div",{className:"col-6"},c.a.createElement(he,{detailMovie:t})),c.a.createElement("div",{className:"hero__detail--pointgroup col-3 d-flex flex-column align-items-center mx-auto"},c.a.createElement(m,{movie:t}))))),a&&c.a.createElement("section",{className:"mobile-main-title myContainer"},c.a.createElement("div",{className:"myContainer"},c.a.createElement(ge,{detailMovie:t}))),c.a.createElement("section",{className:"main",id:"main"},c.a.createElement("div",{className:"myContainer"},c.a.createElement(G.a,{items:pe}),c.a.createElement("div",{className:"tab-content"},c.a.createElement("div",{className:" tab-pane fade show active",id:"lichChieu",role:"tabpanel","aria-labelledby":"lichChieu-tab"},c.a.createElement(se,null)),c.a.createElement("div",{className:" tab-pane fade",id:"thongTin",role:"tabpanel","aria-labelledby":"thongTin-tab"},c.a.createElement(F,{movie:t})),c.a.createElement("div",{className:" tab-pane fade",id:"danhGia",role:"tabpanel","aria-labelledby":"danhGia-tab"},c.a.createElement(P,null))))),c.a.createElement(x.a,null))}))}}]);
//# sourceMappingURL=13.be1cc719.chunk.js.map