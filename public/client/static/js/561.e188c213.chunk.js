"use strict";(self.webpackChunkknowledgecube=self.webpackChunkknowledgecube||[]).push([[561,691],{6561:function(e,l,i){i.r(l),i.d(l,{default:function(){return F}});var t=i(8152),n=i(2791),r=i(9434),s=i(3177),o=i(4880),u=i(184),d=function(e){e.baseUrl,e.url;return(0,u.jsx)(u.Fragment,{})},a=i(6493),c=i(2025),v=i(6275),h=function(){var e,l,i,d,h,x=(0,o.useParams)().courseEditId,j=(0,v.k6)(),f=(0,r.I0)(),m=(0,n.useState)({status:!0}),p=(0,t.Z)(m,2),b=p[0],N=p[1],C=(0,n.useState)({data:""}),g=(0,t.Z)(C,2),k=g[0],U=g[1],F=(0,r.v9)((function(e){var l,i;return null===e||void 0===e||null===(l=e.user)||void 0===l||null===(i=l.user)||void 0===i?void 0:i.user})),P={id:F.id,courseid:x,token:F.currentToken};return(0,n.useEffect)((function(){(function(e){try{return a.RW(e)}catch(l){}})(P).then((function(e){setTimeout((function(){N({status:!1})}),1e3),e.data.course?U({data:e.data.course}):f({type:"LOGOUT"}),e.data.course?f((0,s.wT)(e.data.posts)):j.push("/login"),console.log(e.data.course)})).catch((function(e){}))}),[x]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Z,{Load:null===b||void 0===b?void 0:b.status}),(0,u.jsx)("div",{className:"outer-profile content-top",children:(0,u.jsxs)("div",{className:"outer-profile-in  ",children:[(0,u.jsxs)("div",{className:"outer-profile-title ",children:[(0,u.jsxs)("div",{className:"outer-all outer-profile-name",children:[(0,u.jsx)("div",{className:"outer-profile-vals ",children:"Title "}),"   ",(0,u.jsx)("div",{className:" ",children:(0,u.jsxs)("div",{className:"outer-profile-subvals ",children:[null!==k&&void 0!==k&&null!==(e=k.data)&&void 0!==e&&e.title?null===k||void 0===k||null===(l=k.data)||void 0===l?void 0:l.title:"",(0,u.jsx)("div",{className:"editButton",onClick:function(e){return""},children:"Edit"})]})}),"   "]}),(0,u.jsxs)("div",{className:"outer-all outer-profile-name",children:[(0,u.jsx)("div",{className:"outer-profile-vals ",children:" Description "}),"   ",(0,u.jsx)("div",{className:" ",children:(0,u.jsxs)("div",{className:"outer-profile-subvals ",children:[null!==k&&void 0!==k&&null!==(i=k.data)&&void 0!==i&&i.description?null===k||void 0===k||null===(d=k.data)||void 0===d?void 0:d.description:"",(0,u.jsx)("div",{className:"editButton",onClick:function(e){return""},children:"Edit"})]})}),"   "]})]}),"    "]})}),"course Edit id",null===k||void 0===k||null===(h=k.data)||void 0===h?void 0:h.title]})},x=i(1278),j=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"knowledgecubeNotFound-card-two  add-cursor",children:[(0,u.jsx)("div",{}),(0,u.jsx)("img",{className:"knowledgecubeNotFound ",src:x,alt:"knowledgecube"}),(0,u.jsx)("div",{})]})})},f=i(897),m=i(5437),p=i(5691),b=i(1523),N=function(e){e.alt;var l=e.title;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:" item-card-small  add-cursor",children:(0,u.jsx)("div",{className:"item-small-text",children:l})})})},C=i(2973),g=[1,2,3,4,5,6,7,8,9],k=(0,u.jsx)(f.Z,{cards:g,type:"CourseCard"}),U=(0,C.ZP)((function(){return i.e(377).then(i.bind(i,9377))}),{fallback:k}),F=function(e){var l,i,a,c,v,x,C,k,F,P,w,T,y,R,E=e.baseUrl,Z=(0,n.useState)({status:!0}),_=(0,t.Z)(Z,2),A=_[0],I=_[1],S=function(){I({status:!0}),setTimeout((function(){I({status:!1})}),1e3)},D=function(e){return e},O=function(e){return"Paid"===e.payment},B=function(e){return"Free"===e.payment},L=function(e){return"Public"===e.visibility},M=function(e){return"Private"===e.visibility},z=function(e){return"Deleted"===e.trash},G=(0,o.useRouteMatch)().url,H=(0,r.I0)(),W=(0,r.v9)((function(e){var l,i;return null===e||void 0===e||null===(l=e.user)||void 0===l||null===(i=l.user)||void 0===i?void 0:i.user})),Y={id:W.id,token:W.currentToken};(0,n.useEffect)((function(){H((0,s.z0)(Y)),I({status:!0}),setTimeout((function(){I({status:!1})}),1e3)}),[H,U]);var q=(0,r.v9)((function(e){var l;return null===e||void 0===e||null===(l=e.courses)||void 0===l?void 0:l.mycourses})),J=null===q||void 0===q?void 0:q.map((function(e){return e}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"outer-profile-title ",children:"My Courses"}),(0,u.jsx)("div",{className:"outer-profile-subvals outer-profile-title ",children:"Hey "+(null!==W&&void 0!==W&&W.firstName?null===W||void 0===W?void 0:W.firstName:" There! ")+" , Feel Free To Update Or Edit  Your Courses"}),(0,u.jsx)(d,{baseUrl:G}),(0,u.jsxs)("div",{className:"courses-top-bar ",children:[(0,u.jsx)(b.rU,{to:"".concat(E,"/create/createCourse"),children:(0,u.jsx)(p.default,{icon:m.Z,alt:"Create New ",title:"Create New"})}),(0,u.jsx)("div",{}),(0,u.jsx)(b.rU,{onClick:S,to:"".concat(G,"/all"),children:(0,u.jsx)(N,{alt:"All",title:"All"})}),(0,u.jsx)(b.rU,{onClick:S,to:"".concat(G,"/paid"),children:(0,u.jsx)(N,{alt:"Paid",title:"Paid"})}),(0,u.jsx)(b.rU,{onClick:S,to:"".concat(G,"/free"),children:(0,u.jsx)(N,{alt:"Free",title:"Free"})}),(0,u.jsx)(b.rU,{onClick:S,to:"".concat(G,"/public"),children:(0,u.jsx)(N,{alt:"Public",title:"Public"})}),(0,u.jsx)(b.rU,{onClick:S,to:"".concat(G,"/private"),children:(0,u.jsx)(N,{alt:"Private",title:"Private"})}),(0,u.jsx)(b.rU,{onClick:S,to:"".concat(G,"/trash"),children:(0,u.jsx)(N,{alt:"Trash",title:"Trash"})})]}),A.status?(0,u.jsx)(f.Z,{cards:g,type:"CourseCard"}):(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(o.Switch,{children:[(0,u.jsxs)(o.Route,{exact:!0,path:"".concat(G),children:[(0,u.jsx)("h1",{children:" All Courses"}),null!==J&&void 0!==J&&null!==(l=J.filter(D))&&void 0!==l&&l.length?null===J||void 0===J||null===(i=J.filter(D))||void 0===i?void 0:i.map((function(e){return(0,u.jsx)(U,{baseUrl:E,course:e},null===e||void 0===e?void 0:e._id)})):(0,u.jsx)(j,{})]}),(0,u.jsxs)(o.Route,{exact:!0,path:"".concat(G,"/all"),children:[(0,u.jsx)("h1",{children:" All Courses"}),null!==J&&void 0!==J&&null!==(a=J.filter(D))&&void 0!==a&&a.length?null===J||void 0===J||null===(c=J.filter(D))||void 0===c?void 0:c.map((function(e){return(0,u.jsx)(U,{baseUrl:E,course:e},null===e||void 0===e?void 0:e._id)})):(0,u.jsx)(j,{})]}),(0,u.jsxs)(o.Route,{path:"".concat(G,"/public"),children:[(0,u.jsx)("h1",{children:" Public Courses"}),null!==J&&void 0!==J&&null!==(v=J.filter(L))&&void 0!==v&&v.length?null===J||void 0===J||null===(x=J.filter(L))||void 0===x?void 0:x.map((function(e){return(0,u.jsx)(U,{baseUrl:E,course:e},null===e||void 0===e?void 0:e._id)})):(0,u.jsx)(j,{})]}),(0,u.jsxs)(o.Route,{path:"".concat(G,"/private"),children:[(0,u.jsx)("h1",{children:" Private Courses"}),null!==J&&void 0!==J&&null!==(C=J.filter(M))&&void 0!==C&&C.length?null===J||void 0===J||null===(k=J.filter(M))||void 0===k?void 0:k.map((function(e){return(0,u.jsx)(U,{baseUrl:E,course:e},null===e||void 0===e?void 0:e._id)})):(0,u.jsx)(j,{})]}),(0,u.jsxs)(o.Route,{path:"".concat(G,"/paid"),children:[(0,u.jsx)("h1",{children:" Paid Courses"}),null!==J&&void 0!==J&&null!==(F=J.filter(O))&&void 0!==F&&F.length?null===J||void 0===J||null===(P=J.filter(O))||void 0===P?void 0:P.map((function(e){return(0,u.jsx)(U,{baseUrl:E,course:e},null===e||void 0===e?void 0:e._id)})):(0,u.jsx)(j,{})]}),(0,u.jsxs)(o.Route,{path:"".concat(G,"/free"),children:[(0,u.jsx)("h1",{children:" Free Courses"}),null!==J&&void 0!==J&&null!==(w=J.filter(B))&&void 0!==w&&w.length?null===J||void 0===J||null===(T=J.filter(B))||void 0===T?void 0:T.map((function(e){return(0,u.jsx)(U,{baseUrl:E,course:e},null===e||void 0===e?void 0:e._id)})):(0,u.jsx)(j,{})]}),(0,u.jsxs)(o.Route,{path:"".concat(G,"/trash"),children:[(0,u.jsx)("h1",{children:" Deleted Courses"}),null!==J&&void 0!==J&&null!==(y=J.filter(z))&&void 0!==y&&y.length?null===J||void 0===J||null===(R=J.filter(z))||void 0===R?void 0:R.map((function(e){return(0,u.jsx)(U,{baseUrl:E,course:e},null===e||void 0===e?void 0:e._id)})):(0,u.jsx)(j,{})]}),(0,u.jsx)(o.Route,{path:"".concat(G,"/:courseEditId?"),children:(0,u.jsx)(h,{})})]})})]})}},5691:function(e,l,i){i.r(l);i(2791);var t=i(184);l.default=function(e){var l=e.icon,i=e.alt,n=e.title;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:" item-card  add-cursor",children:[(0,t.jsx)("div",{className:"item-icon",children:(0,t.jsx)("img",{src:l,alt:i})}),(0,t.jsx)("div",{className:"item-text",children:n})]})})}}}]);
//# sourceMappingURL=561.e188c213.chunk.js.map