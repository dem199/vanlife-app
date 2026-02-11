import{r as v,a as Nn,u as Ue,L as x,N as te,O as Fe,b as Ve,c as bn,d as In,e as kn,B as Tn,f as Sn,g as w,R as En}from"./react-vendor-CefdP5pg.js";import{G as g,m,F as Cn,z as N}from"./ui-vendor-v_tNUXSN.js";import{L as Rn,g as Et,i as Pn,a as An,_ as at,C as ot,r as ct,b as Ln,S as re,E as We,c as V,d as Z,e as On,f as Ct,h as j,F as He,j as Mn,q as ae,k as Rt,l as Dn,m as Un,n as Fn,o as Vn,p as Wn,s as Hn,t as Bn,u as zn,v as X,w as Ne,x as Pt,y as $n,z as qn,A as Be,B as ge}from"./firebase-CBX6oLEl.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var At={exports:{}},be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=v,Kn=Symbol.for("react.element"),Jn=Symbol.for("react.fragment"),Yn=Object.prototype.hasOwnProperty,Xn=Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qn={key:!0,ref:!0,__self:!0,__source:!0};function Lt(n,e,t){var i,r={},a=null,o=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Yn.call(e,i)&&!Qn.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Kn,type:n,key:a,ref:o,props:r,_owner:Xn.current}}be.Fragment=Jn;be.jsx=Lt;be.jsxs=Lt;At.exports=be;var s=At.exports,Ae={},lt=Nn;Ae.createRoot=lt.createRoot,Ae.hydrateRoot=lt.hydrateRoot;const Ot=v.createContext();function Zn({children:n}){const[e,t]=v.useState(null),[i,r]=v.useState(null),[a,o]=v.useState(!1),[l,c]=v.useState(!0);v.useEffect(()=>{const p=localStorage.getItem("vanlife_user"),y=localStorage.getItem("vanlife_token");if(p&&y)try{t(JSON.parse(p)),r(y),o(!0)}catch(_){console.error("Error parsing stored user:",_),localStorage.removeItem("vanlife_user"),localStorage.removeItem("vanlife_token")}c(!1)},[]);const f={user:e,token:i,isAuthenticated:a,loading:l,login:(p,y)=>{t(p),r(y),o(!0),localStorage.setItem("vanlife_user",JSON.stringify(p)),localStorage.setItem("vanlife_token",y)},logout:()=>{t(null),r(null),o(!1),localStorage.removeItem("vanlife_user"),localStorage.removeItem("vanlife_token")}};return s.jsx(Ot.Provider,{value:f,children:n})}function q(){const n=v.useContext(Ot);if(!n)throw new Error("useAuth must be used within AuthProvider");return n}function Mt(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(n)}function es(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(n)}function ts(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(n)}function Dt(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(n)}function ns(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(n)}function ze(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(n)}function ss(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(n)}function is(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(n)}function Ut(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(n)}function Le(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(n)}function dt(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(n)}function $e(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(n)}function qe(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(n)}function rs(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(n)}function as(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(n)}function ut(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(n)}function os(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"},child:[]},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"},child:[]},{tag:"polyline",attr:{points:"7 3 7 8 15 8"},child:[]}]})(n)}function cs(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(n)}function ls(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(n)}function B(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(n)}function ve(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(n)}function ds(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"3",width:"15",height:"13"},child:[]},{tag:"polygon",attr:{points:"16 8 20 8 23 11 23 16 16 16 16 8"},child:[]},{tag:"circle",attr:{cx:"5.5",cy:"18.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"18.5",cy:"18.5",r:"2.5"},child:[]}]})(n)}function se(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(n)}function Ft(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(n)}function us(n){return g({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(n)}function hs(){const[n,e]=v.useState(!1),{user:t,isAuthenticated:i,logout:r}=q(),a=Ue(),o=()=>{r(),a("/"),e(!1)},l=()=>{e(!1)},c=[{to:"/about",label:"About"},{to:"/vans",label:"Vans"},...i?[{to:"/host",label:"Host"}]:[]];return s.jsxs("header",{className:"header",children:[s.jsxs("div",{className:"header-container",children:[s.jsx(x,{to:"/",className:"logo",onClick:l,children:s.jsx(m.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"VANCRUISE"})}),s.jsxs("nav",{className:"desktop-nav",children:[c.map(d=>s.jsx(te,{to:d.to,className:({isActive:u})=>u?"nav-link nav-link-active":"nav-link",children:d.label},d.to)),i?s.jsxs("div",{className:"auth-section",children:[s.jsxs(te,{to:"/profile",className:"nav-link",children:[s.jsx(se,{}),s.jsx("span",{children:(t==null?void 0:t.name)||"Profile"})]}),s.jsxs("button",{onClick:o,className:"btn-logout",children:[s.jsx(dt,{}),"Logout"]})]}):s.jsx(x,{to:"/login",className:"btn btn-primary btn-sm",children:"Login"})]}),s.jsx("button",{className:"mobile-menu-toggle",onClick:()=>e(!n),"aria-label":"Toggle menu",children:n?s.jsx(us,{}):s.jsx(rs,{})})]}),n&&s.jsxs(m.nav,{className:"mobile-nav",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[c.map(d=>s.jsx(te,{to:d.to,className:({isActive:u})=>u?"mobile-nav-link mobile-nav-link-active":"mobile-nav-link",onClick:l,children:d.label},d.to)),i?s.jsxs(s.Fragment,{children:[s.jsxs(te,{to:"/profile",className:"mobile-nav-link",onClick:l,children:[s.jsx(se,{})," Profile"]}),s.jsxs("button",{onClick:o,className:"mobile-nav-link mobile-logout-btn",children:[s.jsx(dt,{})," Logout"]})]}):s.jsx(x,{to:"/login",className:"btn btn-primary mobile-login-btn",onClick:l,children:"Login"})]})]})}function ps(n){return g({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(n)}function ms(n){return g({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(n)}function fs(n){return g({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(n)}function gs(n){return g({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(n)}function vs(){const n=new Date().getFullYear();return s.jsx("footer",{className:"footer",children:s.jsxs("div",{className:"footer-container",children:[s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-section",children:[s.jsx("h3",{className:"footer-title",children:"VANCRUISE"}),s.jsx("p",{className:"footer-description",children:"Your journey begins with the perfect van. Explore, adventure, and create memories on the open road."}),s.jsxs("div",{className:"social-links",children:[s.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:s.jsx(ms,{})}),s.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:s.jsx(gs,{})}),s.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:s.jsx(fs,{})}),s.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:s.jsx(ps,{})})]})]}),s.jsxs("div",{className:"footer-section",children:[s.jsx("h4",{className:"footer-heading",children:"Explore"}),s.jsxs("ul",{className:"footer-links",children:[s.jsx("li",{children:s.jsx(x,{to:"/vans",children:"All Vans"})}),s.jsx("li",{children:s.jsx(x,{to:"/vans?type=luxury",children:"Luxury Vans"})}),s.jsx("li",{children:s.jsx(x,{to:"/vans?type=rugged",children:"Rugged Vans"})}),s.jsx("li",{children:s.jsx(x,{to:"/vans?type=simple",children:"Simple Vans"})})]})]}),s.jsxs("div",{className:"footer-section",children:[s.jsx("h4",{className:"footer-heading",children:"Company"}),s.jsxs("ul",{className:"footer-links",children:[s.jsx("li",{children:s.jsx(x,{to:"/about",children:"About Us"})}),s.jsx("li",{children:s.jsx(x,{to:"/host",children:"Become a Host"})}),s.jsx("li",{children:s.jsx("a",{href:"#contact",children:"Contact"})}),s.jsx("li",{children:s.jsx("a",{href:"#careers",children:"Careers"})})]})]}),s.jsxs("div",{className:"footer-section",children:[s.jsx("h4",{className:"footer-heading",children:"Legal"}),s.jsxs("ul",{className:"footer-links",children:[s.jsx("li",{children:s.jsx("a",{href:"#privacy",children:"Privacy Policy"})}),s.jsx("li",{children:s.jsx("a",{href:"#terms",children:"Terms of Service"})}),s.jsx("li",{children:s.jsx("a",{href:"#cookies",children:"Cookie Policy"})}),s.jsx("li",{children:s.jsx("a",{href:"#sitemap",children:"Sitemap"})})]})]})]}),s.jsxs("div",{className:"footer-bottom",children:[s.jsxs("p",{className:"copyright",children:["© ",n," VanCruise. All rights reserved."]}),s.jsx("p",{className:"footer-tagline",children:"Made with ❤️ for adventurers By Optimistic"})]})]})})}function ys(){return s.jsxs("div",{className:"site-wrapper",children:[s.jsx(hs,{}),s.jsx("main",{className:"main-content",children:s.jsx(Fe,{})}),s.jsx(vs,{}),s.jsx(Cn,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#fff",color:"#374151",boxShadow:"0 10px 15px -3px rgb(0 0 0 / 0.1)",borderRadius:"0.5rem",padding:"1rem"},success:{iconTheme:{primary:"#10b981",secondary:"#fff"}},error:{iconTheme:{primary:"#ef4444",secondary:"#fff"}}}})]})}function xs(){const n=[{to:".",end:!0,icon:s.jsx(Ut,{}),label:"Dashboard"},{to:"income",icon:s.jsx(ze,{}),label:"Income"},{to:"vans",icon:s.jsx(ds,{}),label:"Vans"},{to:"reviews",icon:s.jsx(B,{}),label:"Reviews"}];return s.jsx("div",{className:"host-layout",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"host-header",children:[s.jsx("h1",{children:"Host Dashboard"}),s.jsx("p",{children:"Manage your van rentals and track performance"})]}),s.jsx("nav",{className:"host-nav",children:n.map(e=>s.jsxs(te,{to:e.to,end:e.end,className:({isActive:t})=>t?"host-nav-link host-nav-link-active":"host-nav-link",children:[e.icon,s.jsx("span",{children:e.label})]},e.to))}),s.jsx(m.div,{className:"host-content",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:s.jsx(Fe,{})})]})})}function oe({size:n="md",text:e="Loading..."}){const t={sm:"spinner-sm",md:"spinner-md",lg:"spinner-lg"};return s.jsxs(m.div,{className:"loading-container",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[s.jsxs("div",{className:`spinner ${t[n]}`,children:[s.jsx("div",{className:"spinner-circle"}),s.jsx("div",{className:"spinner-circle"}),s.jsx("div",{className:"spinner-circle"}),s.jsx("div",{className:"spinner-circle"})]}),e&&s.jsx("p",{className:"loading-text",children:e})]})}function _s(){const{isAuthenticated:n,loading:e}=q(),t=Ve();return e?s.jsx(oe,{text:"Checking authentication..."}):n?s.jsx(Fe,{}):s.jsx(bn,{to:"/login",state:{from:t.pathname,message:"You must log in first to access this page"},replace:!0})}function ws(){const n=[{icon:s.jsx(qe,{}),title:"Choose Your Adventure",description:"From rugged mountain trails to coastal highways, find the perfect van for any journey"},{icon:s.jsx(ve,{}),title:"Competitive Prices",description:"Great rates on premium vans. Start your adventure without breaking the bank"},{icon:s.jsx(ls,{}),title:"Trusted & Safe",description:"All vans are inspected and insured. Travel with confidence"}];return s.jsxs("div",{className:"home-page",children:[s.jsxs("section",{className:"hero-section",children:[s.jsx("div",{className:"hero-overlay"}),s.jsx("div",{className:"hero-content",children:s.jsxs(m.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[s.jsxs("h1",{className:"hero-title",children:["You got the travel plans,",s.jsx("br",{}),s.jsx("span",{className:"hero-highlight",children:"we got the travel vans."})]}),s.jsx("p",{className:"hero-description",children:"Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip."}),s.jsxs(x,{to:"/vans",className:"btn btn-accent btn-lg hero-cta",children:["Find your van",s.jsx(ts,{})]})]})})]}),s.jsx("section",{className:"features-section",children:s.jsxs("div",{className:"container",children:[s.jsxs(m.div,{className:"features-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[s.jsx("h2",{children:"Why Choose VanCruise?"}),s.jsx("p",{children:"Everything you need for an unforgettable journey"})]}),s.jsx("div",{className:"features-grid",children:n.map((e,t)=>s.jsxs(m.div,{className:"feature-card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:t*.2},whileHover:{y:-5},children:[s.jsx("div",{className:"feature-icon",children:e.icon}),s.jsx("h3",{children:e.title}),s.jsx("p",{children:e.description})]},t))})]})}),s.jsx("section",{className:"cta-section",children:s.jsx("div",{className:"container",children:s.jsxs(m.div,{className:"cta-content",initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6},children:[s.jsx("h2",{children:"Start Your Adventure Today"}),s.jsx("p",{children:"Join thousands of travelers who've discovered the freedom of van life"}),s.jsxs("div",{className:"cta-buttons",children:[s.jsx(x,{to:"/vans",className:"btn btn-accent btn-lg",children:"Browse Vans"}),s.jsx(x,{to:"/about",className:"btn btn-outline btn-lg",children:"Learn More"})]})]})})})]})}function js(){return s.jsxs("div",{className:"about-page",children:[s.jsx(m.div,{className:"about-hero",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:s.jsx("img",{src:"https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=1600&auto=format&fit=crop",alt:"Van parked by mountain lake",className:"about-hero-image"})}),s.jsxs("div",{className:"container",children:[s.jsxs(m.div,{className:"about-content",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[s.jsx("h1",{className:"about-title",children:"Don't squeeze in a sedan when you could relax in a van."}),s.jsxs("div",{className:"about-text",children:[s.jsx("p",{children:"Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)"}),s.jsx("p",{children:"Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels. We've spent years perfecting the art of van conversions and finding the perfect balance between comfort and adventure."}),s.jsx("p",{children:"Whether you're planning a weekend getaway, a month-long cross-country journey, or anything in between, we have the perfect van waiting for you. Each vehicle in our fleet is carefully maintained and comes equipped with everything you need to make your trip unforgettable."})]}),s.jsxs(m.div,{className:"about-stats",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[s.jsxs("div",{className:"stat",children:[s.jsx("h3",{children:"1000+"}),s.jsx("p",{children:"Happy Travelers"})]}),s.jsxs("div",{className:"stat",children:[s.jsx("h3",{children:"50+"}),s.jsx("p",{children:"Premium Vans"})]}),s.jsxs("div",{className:"stat",children:[s.jsx("h3",{children:"4.9"}),s.jsx("p",{children:"Average Rating"})]}),s.jsxs("div",{className:"stat",children:[s.jsx("h3",{children:"24/7"}),s.jsx("p",{children:"Support"})]})]})]}),s.jsxs(m.div,{className:"about-cta-box",initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6},children:[s.jsx("h2",{children:"Your destination is waiting."}),s.jsx("h2",{children:"Your van is ready."}),s.jsx(x,{to:"/vans",className:"btn btn-accent btn-lg",children:"Explore our vans"})]})]})]})}function Ge(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Vt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ns=Vt,Wt=new We("auth","Firebase",Vt());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Rn("@firebase/auth");function bs(n,...e){ye.logLevel<=Ct.WARN&&ye.warn(`Auth (${re}): ${n}`,...e)}function he(n,...e){ye.logLevel<=Ct.ERROR&&ye.error(`Auth (${re}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(n,...e){throw Ke(n,...e)}function T(n,...e){return Ke(n,...e)}function Ht(n,e,t){const i=Object.assign(Object.assign({},Ns()),{[e]:t});return new We("auth","Firebase",i).create(e,{appName:n.name})}function H(n){return Ht(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ke(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Wt.create(n,...e)}function h(n,e,...t){if(!n)throw Ke(e,...t)}function E(n){const e="INTERNAL ASSERTION FAILED: "+n;throw he(e),new Error(e)}function A(n,e){n||E(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Is(){return ht()==="http:"||ht()==="https:"}function ht(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Is()||Ln()||"connection"in navigator)?navigator.onLine:!0}function Ts(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.shortDelay=e,this.longDelay=t,A(t>e,"Short delay should be less than long delay!"),this.isMobile=Pn()||An()}get(){return ks()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,e){A(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new ce(3e4,6e4);function Ye(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ee(n,e,t,i,r={}){return zt(n,r,async()=>{let a={},o={};i&&(e==="GET"?o=i:a={body:JSON.stringify(i)});const l=ae(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:c},a);return Hn()||(d.referrerPolicy="no-referrer"),Bt.fetch()($t(n,n.config.apiHost,t,l),d)})}async function zt(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ss),e);try{const r=new Rs(n),a=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw ue(n,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const l=a.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ue(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ue(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ue(n,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ht(n,u,d);P(n,u)}}catch(r){if(r instanceof He)throw r;P(n,"network-request-failed",{message:String(r)})}}async function Cs(n,e,t,i,r={}){const a=await ee(n,e,t,i,r);return"mfaPendingCredential"in a&&P(n,"multi-factor-auth-required",{_serverResponse:a}),a}function $t(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Je(n.config,r):`${n.config.apiScheme}://${r}`}class Rs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(T(this.auth,"network-request-failed")),Es.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ue(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=T(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(n,e){return ee(n,"POST","/v1/accounts:delete",e)}async function qt(n,e){return ee(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function As(n,e=!1){const t=Z(n),i=await t.getIdToken(e),r=Xe(i);h(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const a=typeof r.firebase=="object"?r.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:r,token:i,authTime:ne(Re(r.auth_time)),issuedAtTime:ne(Re(r.iat)),expirationTime:ne(Re(r.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Re(n){return Number(n)*1e3}function Xe(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return he("JWT malformed, contained fewer than 3 sections"),null;try{const r=Mn(t);return r?JSON.parse(r):(he("Failed to decode base64 JWT payload"),null)}catch(r){return he("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function pt(n){const e=Xe(n);return h(e,"internal-error"),h(typeof e.exp<"u","internal-error"),h(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof He&&Ls(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Ls({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ne(this.lastLoginAt),this.creationTime=ne(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(n){var e;const t=n.auth,i=await n.getIdToken(),r=await ie(n,qt(t,{idToken:i}));h(r==null?void 0:r.users.length,t,"internal-error");const a=r.users[0];n._notifyReloadListener(a);const o=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Gt(a.providerUserInfo):[],l=Ds(n.providerData,o),c=n.isAnonymous,d=!(n.email&&a.passwordHash)&&!(l!=null&&l.length),u=c?d:!1,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Me(a.createdAt,a.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function Ms(n){const e=Z(n);await xe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ds(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Gt(n){return n.map(e=>{var{providerId:t}=e,i=Ge(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(n,e){const t=await zt(n,{},async()=>{const i=ae({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:a}=n.config,o=$t(n,r,"/v1/token",`key=${a}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Bt.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Fs(n,e){return ee(n,"POST","/v2/accounts:revokeToken",Ye(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){h(e.idToken,"internal-error"),h(typeof e.idToken<"u","internal-error"),h(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){h(e.length!==0,"internal-error");const t=pt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(h(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:a}=await Us(e,t);this.updateTokensAndExpiration(i,r,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:a}=t,o=new K;return i&&(h(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(h(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),a&&(h(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new K,this.toJSON())}_performRefresh(){return E("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n,e){h(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class C{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,a=Ge(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Os(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Me(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ie(this,this.stsTokenManager.getToken(this.auth,e));return h(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return As(this,e)}reload(){return Ms(this)}_assign(e){this!==e&&(h(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new C(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){h(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await xe(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(V(this.auth.app))return Promise.reject(H(this.auth));const e=await this.getIdToken();return await ie(this,Ps(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,a,o,l,c,d,u;const f=(i=t.displayName)!==null&&i!==void 0?i:void 0,p=(r=t.email)!==null&&r!==void 0?r:void 0,y=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(l=t.tenantId)!==null&&l!==void 0?l:void 0,I=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,k=(d=t.createdAt)!==null&&d!==void 0?d:void 0,L=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:W,emailVerified:Se,isAnonymous:it,providerData:Ee,stsTokenManager:rt}=t;h(W&&rt,e,"internal-error");const wn=K.fromJSON(this.name,rt);h(typeof W=="string",e,"internal-error"),O(f,e.name),O(p,e.name),h(typeof Se=="boolean",e,"internal-error"),h(typeof it=="boolean",e,"internal-error"),O(y,e.name),O(_,e.name),O(b,e.name),O(I,e.name),O(k,e.name),O(L,e.name);const Ce=new C({uid:W,auth:e,email:p,emailVerified:Se,displayName:f,isAnonymous:it,photoURL:_,phoneNumber:y,tenantId:b,stsTokenManager:wn,createdAt:k,lastLoginAt:L});return Ee&&Array.isArray(Ee)&&(Ce.providerData=Ee.map(jn=>Object.assign({},jn))),I&&(Ce._redirectEventId=I),Ce}static async _fromIdTokenResponse(e,t,i=!1){const r=new K;r.updateFromServerResponse(t);const a=new C({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await xe(a),a}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];h(r.localId!==void 0,"internal-error");const a=r.providerUserInfo!==void 0?Gt(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(a!=null&&a.length),l=new K;l.updateFromIdToken(i);const c=new C({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Me(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(a!=null&&a.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Map;function R(n){A(n instanceof Function,"Expected a class definition");let e=mt.get(n);return e?(A(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,mt.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kt.type="NONE";const ft=Kt;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n,e,t){return`firebase:${n}:${e}:${t}`}class J{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:a}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,a),this.fullPersistenceKey=pe("persistence",r.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?C._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new J(R(ft),e,i);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=r[0]||R(ft);const o=pe(i,e.config.apiKey,e.name);let l=null;for(const d of t)try{const u=await d._get(o);if(u){const f=C._fromJSON(e,u);d!==a&&(l=f),a=d;break}}catch{}const c=r.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new J(a,e,i):(a=c[0],l&&await a._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new J(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(en(e))return"Blackberry";if(tn(e))return"Webos";if(Yt(e))return"Safari";if((e.includes("chrome/")||Xt(e))&&!e.includes("edge/"))return"Chrome";if(Zt(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Jt(n=j()){return/firefox\//i.test(n)}function Yt(n=j()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xt(n=j()){return/crios\//i.test(n)}function Qt(n=j()){return/iemobile/i.test(n)}function Zt(n=j()){return/android/i.test(n)}function en(n=j()){return/blackberry/i.test(n)}function tn(n=j()){return/webos/i.test(n)}function Qe(n=j()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vs(n=j()){var e;return Qe(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ws(){return Vn()&&document.documentMode===10}function nn(n=j()){return Qe(n)||Zt(n)||tn(n)||en(n)||/windows phone/i.test(n)||Qt(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n,e=[]){let t;switch(n){case"Browser":t=gt(j());break;case"Worker":t=`${gt(j())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${re}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((o,l)=>{try{const c=e(a);o(c)}catch(c){l(c)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(n,e={}){return ee(n,"GET","/v2/passwordPolicy",Ye(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=6;class $s{constructor(e){var t,i,r,a;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:zs,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,a,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(a=c.containsUppercaseLetter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vt(this),this.idTokenSubscription=new vt(this),this.beforeStateQueue=new Hs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=R(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await J.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qt(this,{idToken:e}),i=await C._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(V(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return h(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xe(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ts()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(V(this.app))return Promise.reject(H(this));const t=e?Z(e):null;return t&&h(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&h(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return V(this.app)?Promise.reject(H(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return V(this.app)?Promise.reject(H(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(R(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bs(this),t=new $s(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new We("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Fs(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&R(e)||this._popupRedirectResolver;h(t,this,"argument-error"),this.redirectPersistenceManager=await J.create(this,[R(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(h(l,this,"internal-error"),l.then(()=>{o||a(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return h(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bs(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ze(n){return Z(n)}class vt{constructor(e){this.auth=e,this.observer=null,this.addObserver=On(t=>this.observer=t)}get next(){return h(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gs(n){et=n}function Ks(n){return et.loadJS(n)}function Js(){return et.gapiScript}function Ys(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n,e){const t=Rt(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),a=t.getOptions();if(Fn(a,e??{}))return r;P(r,"already-initialized")}return t.initialize({options:e})}function Qs(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(R);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Zs(n,e,t){const i=Ze(n);h(i._canInitEmulator,i,"emulator-config-failed"),h(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,a=rn(e),{host:o,port:l}=ei(e),c=l===null?"":`:${l}`;i.config.emulator={url:`${a}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})}),ti()}function rn(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ei(n){const e=rn(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const a=r[1];return{host:a,port:yt(i.substr(a.length+1))}}else{const[a,o]=i.split(":");return{host:a,port:yt(o)}}}function yt(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ti(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(n,e){return Cs(n,"POST","/v1/accounts:signInWithIdp",Ye(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="http://localhost";class z extends an{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new z(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):P("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,a=Ge(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new z(i,r);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Y(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Y(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Y(e,t)}buildRequest(){const e={requestUri:ni,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ae(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends on{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M extends le{constructor(){super("facebook.com")}static credential(e){return z._fromParams({providerId:M.PROVIDER_ID,signInMethod:M.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return M.credentialFromTaggedObject(e)}static credentialFromError(e){return M.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return M.credential(e.oauthAccessToken)}catch{return null}}}M.FACEBOOK_SIGN_IN_METHOD="facebook.com";M.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends le{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return z._fromParams({providerId:D.PROVIDER_ID,signInMethod:D.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return D.credentialFromTaggedObject(e)}static credentialFromError(e){return D.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return D.credential(t,i)}catch{return null}}}D.GOOGLE_SIGN_IN_METHOD="google.com";D.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U extends le{constructor(){super("github.com")}static credential(e){return z._fromParams({providerId:U.PROVIDER_ID,signInMethod:U.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return U.credentialFromTaggedObject(e)}static credentialFromError(e){return U.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return U.credential(e.oauthAccessToken)}catch{return null}}}U.GITHUB_SIGN_IN_METHOD="github.com";U.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F extends le{constructor(){super("twitter.com")}static credential(e,t){return z._fromParams({providerId:F.PROVIDER_ID,signInMethod:F.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return F.credentialFromTaggedObject(e)}static credentialFromError(e){return F.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return F.credential(t,i)}catch{return null}}}F.TWITTER_SIGN_IN_METHOD="twitter.com";F.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const a=await C._fromIdTokenResponse(e,i,r),o=xt(i);return new Q({user:a,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=xt(i);return new Q({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function xt(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends He{constructor(e,t,i,r){var a;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,_e.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new _e(e,t,i,r)}}function cn(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?_e._fromErrorAndOperation(n,a,e,i):a})}async function si(n,e,t=!1){const i=await ie(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Q._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(n,e,t=!1){const{auth:i}=n;if(V(i.app))return Promise.reject(H(i));const r="reauthenticate";try{const a=await ie(n,cn(i,r,e,n),t);h(a.idToken,i,"internal-error");const o=Xe(a.idToken);h(o,i,"internal-error");const{sub:l}=o;return h(n.uid===l,i,"user-mismatch"),Q._forOperation(n,r,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&P(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(n,e,t=!1){if(V(n.app))return Promise.reject(H(n));const i="signIn",r=await cn(n,i,e),a=await Q._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(a.user),a}function ai(n,e,t,i){return Z(n).onIdTokenChanged(e,t,i)}function oi(n,e,t){return Z(n).beforeAuthStateChanged(e,t)}const we="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(we,"1"),this.storage.removeItem(we),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=1e3,li=10;class dn extends ln{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},a=this.storage.getItem(i);Ws()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,li):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ci)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dn.type="LOCAL";const di=dn;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends ln{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}un.type="SESSION";const hn=un;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Ie(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:a}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(o).map(async d=>d(t.origin,a)),c=await ui(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ie.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,o;return new Promise((l,c)=>{const d=tt("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===d)switch(p.data.status){case"ack":clearTimeout(u),a=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(p.data.response);break;default:clearTimeout(u),clearTimeout(a),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return window}function pi(n){S().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return typeof S().WorkerGlobalScope<"u"&&typeof S().importScripts=="function"}async function mi(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fi(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gi(){return pn()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="firebaseLocalStorageDb",vi=1,je="firebaseLocalStorage",fn="fbase_key";class de{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ke(n,e){return n.transaction([je],e?"readwrite":"readonly").objectStore(je)}function yi(){const n=indexedDB.deleteDatabase(mn);return new de(n).toPromise()}function De(){const n=indexedDB.open(mn,vi);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(je,{keyPath:fn})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(je)?e(i):(i.close(),await yi(),e(await De()))})})}async function _t(n,e,t){const i=ke(n,!0).put({[fn]:e,value:t});return new de(i).toPromise()}async function xi(n,e){const t=ke(n,!1).get(e),i=await new de(t).toPromise();return i===void 0?null:i.value}function wt(n,e){const t=ke(n,!0).delete(e);return new de(t).toPromise()}const _i=800,wi=3;class gn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await De(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>wi)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ie._getInstance(gi()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mi(),!this.activeServiceWorker)return;this.sender=new hi(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fi()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await De();return await _t(e,we,"1"),await wt(e,we),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>_t(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>xi(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const a=ke(r,!1).getAll();return new de(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:a}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_i)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gn.type="LOCAL";const ji=gn;new ce(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n,e){return e?R(e):(h(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends an{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Y(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Y(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Y(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bi(n){return ri(n.auth,new nt(n),n.bypassAuthState)}function Ii(n){const{auth:e,user:t}=n;return h(t,e,"internal-error"),ii(t,new nt(n),n.bypassAuthState)}async function ki(n){const{auth:e,user:t}=n;return h(t,e,"internal-error"),si(t,new nt(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,i,r,a=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:a,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bi;case"linkViaPopup":case"linkViaRedirect":return ki;case"reauthViaPopup":case"reauthViaRedirect":return Ii;default:P(this.auth,"internal-error")}}resolve(e){A(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){A(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new ce(2e3,1e4);class G extends vn{constructor(e,t,i,r,a){super(e,t,r,a),this.provider=i,this.authWindow=null,this.pollId=null,G.currentPopupAction&&G.currentPopupAction.cancel(),G.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return h(e,this.auth,"internal-error"),e}async onExecution(){A(this.filter.length===1,"Popup operations only handle one event");const e=tt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(T(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(T(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,G.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(T(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ti.get())};e()}}G.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="pendingRedirect",me=new Map;class Ei extends vn{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=me.get(this.auth._key());if(!e){try{const i=await Ci(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}me.set(this.auth._key(),e)}return this.bypassAuthState||me.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ci(n,e){const t=Ai(e),i=Pi(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Ri(n,e){me.set(n._key(),e)}function Pi(n){return R(n._redirectPersistence)}function Ai(n){return pe(Si,n.config.apiKey,n.name)}async function Li(n,e,t=!1){if(V(n.app))return Promise.reject(H(n));const i=Ze(n),r=Ni(i,e),o=await new Ei(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=10*60*1e3;class Mi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Di(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!yn(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(T(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Oi&&this.cachedEventUids.clear(),this.cachedEventUids.has(jt(e))}saveEventToCache(e){this.cachedEventUids.add(jt(e)),this.lastProcessedEventTime=Date.now()}}function jt(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yn({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Di(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yn(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(n,e={}){return ee(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vi=/^https?/;async function Wi(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ui(n);for(const t of e)try{if(Hi(t))return}catch{}P(n,"unauthorized-domain")}function Hi(n){const e=Oe(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Vi.test(t))return!1;if(Fi.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new ce(3e4,6e4);function Nt(){const n=S().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function zi(n){return new Promise((e,t)=>{var i,r,a;function o(){Nt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nt(),t(T(n,"network-request-failed"))},timeout:Bi.get()})}if(!((r=(i=S().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((a=S().gapi)===null||a===void 0)&&a.load)o();else{const l=Ys("iframefcb");return S()[l]=()=>{gapi.load?o():t(T(n,"network-request-failed"))},Ks(`${Js()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw fe=null,e})}let fe=null;function $i(n){return fe=fe||zi(n),fe}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new ce(5e3,15e3),Gi="__/auth/iframe",Ki="emulator/auth/iframe",Ji={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xi(n){const e=n.config;h(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Je(e,Ki):`https://${n.config.authDomain}/${Gi}`,i={apiKey:e.apiKey,appName:n.name,v:re},r=Yi.get(n.config.apiHost);r&&(i.eid=r);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${ae(i).slice(1)}`}async function Qi(n){const e=await $i(n),t=S().gapi;return h(t,n,"internal-error"),e.open({where:document.body,url:Xi(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ji,dontclear:!0},i=>new Promise(async(r,a)=>{await i.restyle({setHideOnLeave:!1});const o=T(n,"network-request-failed"),l=S().setTimeout(()=>{a(o)},qi.get());function c(){S().clearTimeout(l),r(i)}i.ping(c).then(c,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},er=500,tr=600,nr="_blank",sr="http://localhost";class bt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ir(n,e,t,i=er,r=tr){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Zi),{width:i.toString(),height:r.toString(),top:a,left:o}),d=j().toLowerCase();t&&(l=Xt(d)?nr:t),Jt(d)&&(e=e||sr,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[y,_])=>`${p}${y}=${_},`,"");if(Vs(d)&&l!=="_self")return rr(e||"",l),new bt(null);const f=window.open(e||"",l,u);h(f,n,"popup-blocked");try{f.focus()}catch{}return new bt(f)}function rr(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="__/auth/handler",or="emulator/auth/handler",cr=encodeURIComponent("fac");async function It(n,e,t,i,r,a){h(n.config.authDomain,n,"auth-domain-config-required"),h(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:re,eventId:r};if(e instanceof on){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Wn(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof le){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const c=await n._getAppCheckToken(),d=c?`#${cr}=${encodeURIComponent(c)}`:"";return`${lr(n)}?${ae(l).slice(1)}${d}`}function lr({config:n}){return n.emulator?Je(n,or):`https://${n.authDomain}/${ar}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="webStorageSupport";class dr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hn,this._completeRedirectFn=Li,this._overrideRedirectResult=Ri}async _openPopup(e,t,i,r){var a;A((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await It(e,t,i,Oe(),r);return ir(e,o,tt())}async _openRedirect(e,t,i,r){await this._originValidation(e);const a=await It(e,t,i,Oe(),r);return pi(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:a}=this.eventManagers[t];return r?Promise.resolve(r):(A(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Qi(e),i=new Mi(e);return t.register("authEvent",r=>(h(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pe,{type:Pe},r=>{var a;const o=(a=r==null?void 0:r[0])===null||a===void 0?void 0:a[Pe];o!==void 0&&t(!!o),P(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nn()||Yt()||Qe()}}const ur=dr;var kt="@firebase/auth",Tt="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){h(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mr(n){at(new ot("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;h(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sn(n)},d=new qs(i,r,a,c);return Qs(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),at(new ot("auth-internal",e=>{const t=Ze(e.getProvider("auth").getImmediate());return(i=>new hr(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(kt,Tt,pr(n)),ct(kt,Tt,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=5*60,gr=Et("authIdTokenMaxAge")||fr;let St=null;const vr=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>gr)return;const r=t==null?void 0:t.token;St!==r&&(St=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function yr(n=Un()){const e=Rt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Xs(n,{popupRedirectResolver:ur,persistence:[ji,di,hn]}),i=Et("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const o=vr(a.toString());oi(t,o,()=>o(t.currentUser)),ai(t,l=>o(l))}}const r=Dn("auth");return r&&Zs(t,`http://${r}`),t}function xr(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Gs({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const a=T("internal-error");a.customData=r,t(a)},i.type="text/javascript",i.charset="UTF-8",xr().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mr("Browser");const _r={apiKey:"AIzaSyAhAgJY0HDNefdvlOdtWRP2DE2jE_78t44",authDomain:"vanlife-27fe7.firebaseapp.com",projectId:"vanlife-27fe7",storageBucket:"vanlife-27fe7.firebasestorage.app",messagingSenderId:"377876515296",appId:"1:377876515296:web:b200952ff3b1e756db8385"},xn=Bn(_r),$=zn(xn);yr(xn);const st="vans",wr="bookings";async function jr(){try{const n=X($,st);return(await Ne(n)).docs.map(i=>({id:i.id,...i.data()}))}catch(n){throw console.error("Error fetching vans:",n),new Error("Failed to fetch vans. Please try again.")}}async function Nr(n){try{const e=$n($,st,n),t=await qn(e);if(!t.exists())throw new Error("Van not found");return{id:t.id,...t.data()}}catch(e){throw console.error("Error fetching van:",e),new Error(e.message||"Failed to fetch van details")}}async function br(n){try{const e=X($,st),t=Be(e,ge("hostId","==",n));return(await Ne(t)).docs.map(a=>({id:a.id,...a.data()}))}catch(e){throw console.error("Error fetching host vans:",e),new Error("Failed to fetch your vans")}}async function Ir(n){try{const e=X($,wr);return{id:(await Pt(e,{...n,createdAt:new Date().toISOString(),status:"pending"})).id,...n}}catch(e){throw console.error("Error creating booking:",e),new Error("Failed to create booking")}}function kr(){const[n,e]=v.useState([]),[t,i]=v.useState(!0),[r,a]=v.useState(null);v.useEffect(()=>{o()},[]);const o=async()=>{try{i(!0),a(null);const c=(await jr()).map(d=>({...d,id:d.id}));e(c)}catch(l){a(l.message),console.error("Error fetching vans:",l)}finally{i(!1)}};return{vans:n,loading:t,error:r,refetch:o}}function Tr(n){const[e,t]=v.useState(null),[i,r]=v.useState(!0),[a,o]=v.useState(null);v.useEffect(()=>{n&&l()},[n]);const l=async()=>{try{r(!0),o(null);const c=await Nr(n);t({...c,id:c.id||n})}catch(c){o(c.message),console.error("Error fetching van:",c)}finally{r(!1)}};return{van:e,loading:i,error:a,refetch:l}}function _n(n){const[e,t]=v.useState([]),[i,r]=v.useState(!0),[a,o]=v.useState(null);v.useEffect(()=>{n&&l()},[n]);const l=async()=>{try{r(!0),o(null);const d=(await br(n)).map(u=>({...u,id:u.id}));t(d)}catch(c){o(c.message),console.error("Error fetching host vans:",c)}finally{r(!1)}};return{vans:e,loading:i,error:a,refetch:l}}function Sr({van:n,searchParams:e}){const t={simple:"var(--teal-600)",rugged:"var(--gray-700)",luxury:"var(--gray-900)"},i=e?`/vans/${n.id}?${e}`:`/vans/${n.id}`;return s.jsx(x,{to:i,state:{search:e?`?${e}`:"",type:(e==null?void 0:e.get("type"))||"all"},className:"van-card",children:s.jsxs(m.div,{whileHover:{y:-8},transition:{duration:.3},children:[s.jsxs("div",{className:"van-card-image-container",children:[s.jsx("img",{src:n.imageUrl,alt:n.name,className:"van-card-image",loading:"lazy",onError:r=>{r.target.src="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&auto=format&fit=crop"}}),s.jsx("div",{className:"van-card-type-badge",style:{backgroundColor:t[n.type]},children:n.type})]}),s.jsxs("div",{className:"van-card-content",children:[s.jsxs("div",{className:"van-card-header",children:[s.jsx("h3",{className:"van-card-title",children:n.name}),s.jsxs("div",{className:"van-card-price",children:[s.jsxs("span",{className:"price-amount",children:["$",n.price]}),s.jsx("span",{className:"price-period",children:"/day"})]})]}),s.jsxs("div",{className:"van-card-meta",children:[s.jsxs("div",{className:"meta-item",children:[s.jsx(qe,{}),s.jsx("span",{children:n.location})]}),s.jsxs("div",{className:"meta-item",children:[s.jsx(Ft,{}),s.jsx("span",{children:n.capacity})]}),s.jsxs("div",{className:"meta-item",children:[s.jsx(B,{}),s.jsx("span",{children:n.rating})]})]}),n.description&&s.jsx("p",{className:"van-card-description",children:n.description.length>100?n.description.substring(0,100)+"...":n.description})]})]})})}function Er(n){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.001 10h2v5h-2zM11 16h2v2h-2z"},child:[]},{tag:"path",attr:{d:"M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"},child:[]}]})(n)}function Cr(n){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(n)}function Te({error:n,onRetry:e,title:t="Oops! Something went wrong",showRetry:i=!0}){return s.jsx(m.div,{className:"error-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:s.jsxs("div",{className:"error-content",children:[s.jsx(Er,{className:"error-icon"}),s.jsx("h2",{className:"error-title",children:t}),s.jsx("p",{className:"error-message",children:n||"An unexpected error occurred. Please try again."}),i&&e&&s.jsxs("button",{className:"btn btn-primary error-retry-btn",onClick:e,children:[s.jsx(Cr,{})," Try Again"]})]})})}function Rr(){const[n,e]=In(),[t,i]=v.useState(""),{vans:r,loading:a,error:o,refetch:l}=kr(),c=n.get("type"),d=r.filter(p=>{var b,I,k,L;const y=!c||((b=p.type)==null?void 0:b.toLowerCase())===c.toLowerCase(),_=!t||((I=p.name)==null?void 0:I.toLowerCase().includes(t.toLowerCase()))||((k=p.location)==null?void 0:k.toLowerCase().includes(t.toLowerCase()))||((L=p.description)==null?void 0:L.toLowerCase().includes(t.toLowerCase()));return y&&_}),u=p=>{e(y=>(p===null?y.delete("type"):y.set("type",p),y))},f=[{type:"simple",label:"Simple",color:"var(--teal-600)"},{type:"luxury",label:"Luxury",color:"var(--gray-900)"},{type:"rugged",label:"Rugged",color:"var(--gray-700)"}];return a?s.jsx(oe,{text:"Loading vans..."}):o?s.jsx(Te,{error:o,onRetry:l,title:"Failed to load vans"}):s.jsx("div",{className:"vans-page",children:s.jsx("div",{className:"container",children:s.jsxs(m.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsx("h1",{className:"page-title",children:"Explore our van options"}),s.jsxs("div",{className:"search-container",children:[s.jsx(cs,{className:"search-icon"}),s.jsx("input",{type:"text",placeholder:"Search by name, location, or description...",value:t,onChange:p=>i(p.target.value),className:"search-input"})]}),s.jsxs("div",{className:"filters-section",children:[s.jsxs("div",{className:"filters-header",children:[s.jsx(is,{}),s.jsx("span",{children:"Filter by type:"})]}),s.jsxs("div",{className:"filter-buttons",children:[f.map(({type:p,label:y,color:_})=>s.jsx("button",{onClick:()=>u(p),className:`filter-btn ${c===p?"filter-btn-active":""}`,style:{"--filter-color":_,backgroundColor:c===p?_:"transparent",borderColor:_,color:c===p?"var(--white)":_},children:y},p)),c&&s.jsx("button",{onClick:()=>u(null),className:"clear-filters-btn",children:"Clear filters"})]})]}),s.jsx("div",{className:"results-info",children:s.jsxs("p",{children:[d.length," ",d.length===1?"van":"vans"," found",c&&` in "${c}" category`,t&&` matching "${t}"`]})}),d.length>0?s.jsx(m.div,{className:"vans-grid",layout:!0,children:d.map(p=>s.jsx(Sr,{van:p,searchParams:n},p.id))}):s.jsxs("div",{className:"no-results",children:[s.jsx("p",{children:"No vans found matching your criteria."}),s.jsx("button",{onClick:()=>{u(null),i("")},className:"btn btn-primary",children:"Clear all filters"})]})]})})})}function Pr(){var f,p;const{id:n}=kn(),e=Ve(),{van:t,loading:i,error:r}=Tr(n),{user:a,isAuthenticated:o}=q(),l=((f=e.state)==null?void 0:f.search)||"",c=((p=e.state)==null?void 0:p.type)||"all",d=async()=>{if(!o){N.error("Please log in to book a van");return}try{const y={userId:a.id,vanId:t.id,vanName:t.name,price:t.price,bookingDate:new Date().toISOString(),status:"pending"};await Ir(y),N.success("Van booked successfully! Check your email for confirmation.")}catch(y){N.error("Failed to book van. Please try again."),console.error("Booking error:",y)}};if(i)return s.jsx(oe,{text:"Loading van details..."});if(r)return s.jsx(Te,{error:r,title:"Failed to load van details",showRetry:!1});if(!t)return null;const u={simple:"var(--teal-600)",rugged:"var(--gray-700)",luxury:"var(--gray-900)"};return s.jsx("div",{className:"van-detail-page",children:s.jsxs("div",{className:"container",children:[s.jsxs(x,{to:`..${l}`,relative:"path",className:"back-link",children:[s.jsx(es,{}),s.jsxs("span",{children:["Back to ",c," vans"]})]}),s.jsxs(m.div,{className:"van-detail-content",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsx("div",{className:"van-detail-images",children:s.jsx(m.img,{src:t.imageUrl,alt:t.name,className:"van-detail-main-image",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6}})}),s.jsxs("div",{className:"van-detail-info",children:[s.jsx("div",{className:"van-detail-type-badge",style:{backgroundColor:u[t.type]},children:t.type}),s.jsx("h1",{className:"van-detail-title",children:t.name}),s.jsxs("div",{className:"van-detail-meta",children:[s.jsxs("div",{className:"meta-item",children:[s.jsx(qe,{}),s.jsx("span",{children:t.location})]}),s.jsxs("div",{className:"meta-item",children:[s.jsx(Ft,{}),s.jsxs("span",{children:["Sleeps ",t.capacity]})]}),s.jsxs("div",{className:"meta-item",children:[s.jsx(B,{}),s.jsxs("span",{children:[t.rating," (",t.reviews," reviews)"]})]})]}),s.jsxs("div",{className:"van-detail-price-section",children:[s.jsxs("div",{className:"price-info",children:[s.jsx("span",{className:"price-label",children:"Price per day"}),s.jsxs("div",{className:"price-amount",children:[s.jsx("span",{className:"currency",children:"$"}),s.jsx("span",{className:"amount",children:t.price})]})]}),s.jsxs("button",{className:"btn btn-accent btn-lg rent-btn",onClick:d,children:[s.jsx(Dt,{}),"Book this van"]})]}),s.jsxs("div",{className:"van-detail-description",children:[s.jsx("h2",{children:"About this van"}),s.jsx("p",{children:t.description})]}),s.jsxs("div",{className:"van-detail-specs",children:[s.jsx("h2",{children:"Vehicle Details"}),s.jsxs("div",{className:"specs-grid",children:[s.jsxs("div",{className:"spec-item",children:[s.jsx("span",{className:"spec-label",children:"Year"}),s.jsx("span",{className:"spec-value",children:t.year})]}),s.jsxs("div",{className:"spec-item",children:[s.jsx("span",{className:"spec-label",children:"Make"}),s.jsx("span",{className:"spec-value",children:t.make})]}),s.jsxs("div",{className:"spec-item",children:[s.jsx("span",{className:"spec-label",children:"Model"}),s.jsx("span",{className:"spec-value",children:t.model})]}),s.jsxs("div",{className:"spec-item",children:[s.jsx("span",{className:"spec-label",children:"Type"}),s.jsx("span",{className:"spec-value",children:t.type})]})]})]}),t.features&&t.features.length>0&&s.jsxs("div",{className:"van-detail-features",children:[s.jsx("h2",{children:"Features & Amenities"}),s.jsx("div",{className:"features-list",children:t.features.map((y,_)=>s.jsxs("div",{className:"feature-item",children:[s.jsx(ns,{}),s.jsx("span",{children:y})]},_))})]})]})]})]})})}function Ar(){var p,y;const[n,e]=v.useState({email:"",password:""}),[t,i]=v.useState(!1),[r,a]=v.useState(null),{login:o}=q(),l=Ue(),d=((y=(p=Ve().state)==null?void 0:p.from)==null?void 0:y.pathname)||"/",u=_=>{const{name:b,value:I}=_.target;e(k=>({...k,[b]:I})),a(null)},f=async _=>{if(_.preventDefault(),a(null),!n.email||!n.password){a("Please fill in all fields");return}i(!0);try{if(n.email==="demo@vanlife.com"&&n.password==="password"){o({id:"host-123",email:"demo@vanlife.com",name:"Demo User"},"demo-token-"+Date.now()),N.success("Welcome back!"),setTimeout(()=>{l(d,{replace:!0})},100);return}const b=X($,"users"),I=Be(b,ge("email","==",n.email),ge("password","==",n.password)),k=await Ne(I);if(k.empty){a("Invalid email or password"),N.error("Login failed"),i(!1);return}const L=k.docs[0],W={id:L.id,...L.data()};delete W.password,o(W,"user-token-"+Date.now()),N.success(`Welcome back, ${W.name}!`),setTimeout(()=>{l(d,{replace:!0})},100)}catch(b){console.error("Login error:",b),a("An error occurred. Please try again."),N.error("Login failed")}finally{i(!1)}};return s.jsx("div",{className:"login-page",children:s.jsx("div",{className:"login-container",children:s.jsxs(m.div,{className:"login-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsxs("div",{className:"login-header",children:[s.jsx("h1",{children:"Welcome back"}),s.jsx("p",{children:"Sign in to access your account"})]}),r&&s.jsxs(m.div,{className:"login-error",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},children:[s.jsx(Mt,{}),s.jsx("span",{children:r})]}),s.jsxs("form",{onSubmit:f,className:"login-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"email",className:"form-label",children:[s.jsx($e,{}),"Email address"]}),s.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:u,className:"form-input",placeholder:"you@example.com",required:!0,disabled:t})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"password",className:"form-label",children:[s.jsx(Le,{}),"Password"]}),s.jsx("input",{type:"password",id:"password",name:"password",value:n.password,onChange:u,className:"form-input",placeholder:"••••••••",required:!0,disabled:t})]}),s.jsx("button",{type:"submit",className:"btn btn-primary btn-lg login-btn",disabled:t,children:t?"Signing in...":"Sign in"})]}),s.jsxs("div",{className:"login-demo",children:[s.jsx("p",{className:"demo-title",children:"Demo Credentials:"}),s.jsx("p",{className:"demo-info",children:"Email: demo@vanlife.com"}),s.jsx("p",{className:"demo-info",children:"Password: password"})]}),s.jsx("div",{className:"login-footer",children:s.jsxs("p",{children:["Don't have an account?"," ",s.jsx(x,{to:"/signup",className:"signup-link",children:"Sign up"})]})})]})})})}function Lr(){const[n,e]=v.useState({name:"",email:"",password:"",confirmPassword:""}),[t,i]=v.useState(!1),[r,a]=v.useState(null),o=Ue(),l=d=>{const{name:u,value:f}=d.target;e(p=>({...p,[u]:f})),a(null)},c=async d=>{if(d.preventDefault(),a(null),!n.name||!n.email||!n.password||!n.confirmPassword){a("Please fill in all fields");return}if(n.password!==n.confirmPassword){a("Passwords do not match");return}if(n.password.length<6){a("Password must be at least 6 characters");return}i(!0);try{const u=X($,"users"),f=Be(u,ge("email","==",n.email));if(!(await Ne(f)).empty){a("Email already in use"),N.error("Email already registered"),i(!1);return}const y=await Pt(X($,"users"),{name:n.name,email:n.email,password:n.password,joinDate:new Date().toISOString(),totalRentals:0,rating:0});N.success("Account created successfully! Please login."),o("/login")}catch(u){console.error("Signup error:",u),a("Failed to create account. Please try again."),N.error("Signup failed")}finally{i(!1)}};return s.jsx("div",{className:"login-page",children:s.jsx("div",{className:"login-container",children:s.jsxs(m.div,{className:"login-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsxs("div",{className:"login-header",children:[s.jsx("h1",{children:"Create Account"}),s.jsx("p",{children:"Join VanCruise and start your adventure"})]}),r&&s.jsxs(m.div,{className:"login-error",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},children:[s.jsx(Mt,{}),s.jsx("span",{children:r})]}),s.jsxs("form",{onSubmit:c,className:"login-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"name",className:"form-label",children:[s.jsx(se,{}),"Full Name"]}),s.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:l,className:"form-input",placeholder:"John Doe",required:!0,disabled:t})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"email",className:"form-label",children:[s.jsx($e,{}),"Email address"]}),s.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:l,className:"form-input",placeholder:"you@example.com",required:!0,disabled:t})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"password",className:"form-label",children:[s.jsx(Le,{}),"Password"]}),s.jsx("input",{type:"password",id:"password",name:"password",value:n.password,onChange:l,className:"form-input",placeholder:"••••••••",required:!0,disabled:t})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"confirmPassword",className:"form-label",children:[s.jsx(Le,{}),"Confirm Password"]}),s.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:n.confirmPassword,onChange:l,className:"form-input",placeholder:"••••••••",required:!0,disabled:t})]}),s.jsx("button",{type:"submit",className:"btn btn-primary btn-lg login-btn",disabled:t,children:t?"Creating account...":"Sign up"})]}),s.jsx("div",{className:"login-footer",children:s.jsxs("p",{children:["Already have an account?"," ",s.jsx(x,{to:"/login",className:"signup-link",children:"Sign in"})]})})]})})})}function Or(){const{user:n,updateUser:e}=q(),[t,i]=v.useState({name:(n==null?void 0:n.name)||"",email:(n==null?void 0:n.email)||"",phone:(n==null?void 0:n.phone)||""}),[r,a]=v.useState(!1),o=d=>{const{name:u,value:f}=d.target;i(p=>({...p,[u]:f}))},l=d=>{d.preventDefault(),e(t),a(!1),N.success("Profile updated successfully!")},c=()=>{i({name:(n==null?void 0:n.name)||"",email:(n==null?void 0:n.email)||"",phone:(n==null?void 0:n.phone)||""}),a(!1)};return s.jsx("div",{className:"profile-page",children:s.jsx("div",{className:"container",children:s.jsxs(m.div,{className:"profile-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsxs("div",{className:"profile-header",children:[s.jsx("div",{className:"profile-avatar",children:s.jsx(se,{})}),s.jsxs("div",{children:[s.jsx("h1",{children:"My Profile"}),s.jsx("p",{children:"Manage your account information"})]})]}),s.jsxs("form",{onSubmit:l,className:"profile-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"name",className:"form-label",children:[s.jsx(se,{}),"Full Name"]}),s.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:o,className:"form-input",disabled:!r,required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"email",className:"form-label",children:[s.jsx($e,{}),"Email Address"]}),s.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:o,className:"form-input",disabled:!r,required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"phone",className:"form-label",children:[s.jsx(as,{}),"Phone Number"]}),s.jsx("input",{type:"tel",id:"phone",name:"phone",value:t.phone,onChange:o,className:"form-input",placeholder:"(555) 123-4567",disabled:!r})]}),s.jsx("div",{className:"profile-actions",children:r?s.jsxs(s.Fragment,{children:[s.jsxs("button",{type:"submit",className:"btn btn-primary",children:[s.jsx(os,{}),"Save Changes"]}),s.jsx("button",{type:"button",onClick:c,className:"btn btn-outline",children:"Cancel"})]}):s.jsx("button",{type:"button",onClick:()=>a(!0),className:"btn btn-primary",children:"Edit Profile"})})]}),s.jsxs("div",{className:"profile-info-box",children:[s.jsx("h3",{children:"Account Information"}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Member since"}),s.jsx("span",{className:"info-value",children:"January 2024"})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Account type"}),s.jsx("span",{className:"info-value",children:"Host"})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Total rentals"}),s.jsx("span",{className:"info-value",children:"12"})]})]})]})})})}function Mr(){const{user:n}=q(),{vans:e,loading:t,error:i}=_n((n==null?void 0:n.id)||"host-123");if(t)return s.jsx(oe,{text:"Loading dashboard..."});if(i)return s.jsx(Te,{error:i});const r=[{label:"Total Income",value:"$2,340",change:"+12.5%",icon:s.jsx(ze,{}),color:"var(--success)"},{label:"Average Rating",value:"4.8",change:"+0.3",icon:s.jsx(B,{}),color:"var(--accent-orange)"},{label:"Total Views",value:"1,234",change:"+23%",icon:s.jsx(ss,{}),color:"var(--primary-600)"},{label:"Active Listings",value:e.length.toString(),change:"—",icon:s.jsx(ve,{}),color:"var(--teal-600)"}];return s.jsxs("div",{className:"dashboard-page",children:[s.jsxs(m.div,{className:"welcome-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsxs("h2",{children:["Welcome back, ",(n==null?void 0:n.name)||"Host","!"]}),s.jsx("p",{children:"Here's what's happening with your vans today"})]}),s.jsx("div",{className:"stats-grid",children:r.map((a,o)=>s.jsxs(m.div,{className:"stat-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:o*.1},children:[s.jsx("div",{className:"stat-icon",style:{backgroundColor:`${a.color}15`,color:a.color},children:a.icon}),s.jsxs("div",{className:"stat-details",children:[s.jsx("p",{className:"stat-label",children:a.label}),s.jsx("h3",{className:"stat-value",children:a.value}),s.jsx("span",{className:"stat-change",style:{color:a.change.startsWith("+")?"var(--success)":"var(--gray-500)"},children:a.change})]})]},a.label))}),s.jsxs("div",{className:"dashboard-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h3",{children:"Your Listed Vans"}),s.jsx(x,{to:"vans",className:"view-all-link",children:"View all →"})]}),e.length>0?s.jsx("div",{className:"vans-quick-list",children:e.slice(0,3).map(a=>s.jsxs(x,{to:`/vans/${a.id}`,className:"van-quick-card",children:[s.jsx("img",{src:a.imageUrl,alt:a.name}),s.jsxs("div",{className:"van-quick-info",children:[s.jsx("h4",{children:a.name}),s.jsxs("p",{children:["$",a.price,"/day"]})]}),s.jsx("button",{className:"view-btn",children:"View"})]},a.id))}):s.jsxs("div",{className:"empty-state",children:[s.jsx("p",{children:"You haven't listed any vans yet."}),s.jsx("button",{className:"btn btn-primary",children:"Add your first van"})]})]}),s.jsxs("div",{className:"dashboard-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h3",{children:"Recent Income"}),s.jsx(x,{to:"income",className:"view-all-link",children:"View details →"})]}),s.jsx("div",{className:"income-preview",children:s.jsxs("div",{className:"income-chart-placeholder",children:[s.jsx("p",{children:"Last 30 days"}),s.jsx("h2",{children:"$2,340"}),s.jsxs("div",{className:"trend-indicator positive",children:[s.jsx(ve,{}),s.jsx("span",{children:"+12.5% from last month"})]})]})})]}),s.jsxs("div",{className:"dashboard-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h3",{children:"Reviews"}),s.jsx(x,{to:"reviews",className:"view-all-link",children:"See all reviews →"})]}),s.jsx("div",{className:"reviews-preview",children:s.jsxs("div",{className:"review-summary",children:[s.jsxs("div",{className:"review-rating",children:[s.jsx(B,{}),s.jsx("span",{className:"rating-number",children:"4.8"}),s.jsx("span",{className:"rating-text",children:"out of 5"})]}),s.jsx("p",{className:"review-count",children:"Based on 156 reviews"})]})})]})]})}function Dr(){const n=[{id:1,amount:720,date:"Jan 15, 2026",van:"Sunset Cruiser"},{id:2,amount:560,date:"Jan 12, 2026",van:"Coastal Wanderer"},{id:3,amount:450,date:"Jan 8, 2026",van:"City Commuter"},{id:4,amount:610,date:"Jan 3, 2026",van:"Retro Cruiser"}];return s.jsxs("div",{className:"income-page",children:[s.jsxs(m.div,{className:"income-header",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[s.jsx("h2",{children:"Income Overview"}),s.jsx("p",{children:"Track your earnings and payment history"})]}),s.jsxs("div",{className:"income-stats",children:[s.jsxs("div",{className:"income-stat-card",children:[s.jsx(ze,{className:"stat-icon"}),s.jsxs("div",{children:[s.jsx("p",{className:"stat-label",children:"Total Income (Last 30 days)"}),s.jsx("h3",{className:"stat-value",children:"$2,340"}),s.jsxs("span",{className:"stat-trend positive",children:[s.jsx(ve,{})," +12.5%"]})]})]}),s.jsxs("div",{className:"income-stat-card",children:[s.jsx(Dt,{className:"stat-icon"}),s.jsxs("div",{children:[s.jsx("p",{className:"stat-label",children:"Upcoming Payments"}),s.jsx("h3",{className:"stat-value",children:"$890"}),s.jsx("span",{className:"stat-info",children:"Next payout: Feb 5"})]})]})]}),s.jsxs("div",{className:"transactions-section",children:[s.jsx("h3",{children:"Recent Transactions"}),s.jsx("div",{className:"transactions-list",children:n.map(e=>s.jsxs(m.div,{className:"transaction-item",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:e.id*.1},children:[s.jsxs("div",{className:"transaction-info",children:[s.jsxs("h4",{children:["$",e.amount]}),s.jsx("p",{children:e.van})]}),s.jsx("div",{className:"transaction-date",children:s.jsx("p",{children:e.date})})]},e.id))})]})]})}function Ur(){const{user:n}=q(),{vans:e,loading:t,error:i}=_n((n==null?void 0:n.id)||"host-123");return t?s.jsx(oe,{text:"Loading your vans..."}):i?s.jsx(Te,{error:i}):s.jsxs("div",{className:"host-vans-page",children:[s.jsxs("div",{className:"host-vans-header",children:[s.jsx("h2",{children:"Your Listed Vans"}),s.jsxs("button",{className:"btn btn-primary",onClick:()=>N.info("Add Van feature coming soon!"),children:[s.jsx(ut,{}),"Add New Van"]})]}),e.length>0?s.jsx(m.div,{className:"host-vans-grid",layout:!0,children:e.map(r=>s.jsx(x,{to:r.id,className:"host-van-card",children:s.jsxs(m.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{y:-3},children:[s.jsx("img",{src:r.imageUrl,alt:r.name}),s.jsxs("div",{className:"host-van-info",children:[s.jsx("h3",{children:r.name}),s.jsxs("p",{className:"van-price",children:["$",r.price,"/day"]}),s.jsxs("div",{className:"van-stats",children:[s.jsxs("span",{children:["⭐ ",r.rating]}),s.jsx("span",{children:"•"}),s.jsx("span",{children:r.type})]})]})]})},r.id))}):s.jsxs("div",{className:"empty-vans-state",children:[s.jsx("p",{children:"You haven't listed any vans yet."}),s.jsxs("button",{className:"btn btn-primary btn-lg",children:[s.jsx(ut,{}),"List Your First Van"]})]})]})}function Fr(){const n=[{id:1,rating:5,name:"Sarah M.",date:"Jan 20, 2026",van:"Sunset Cruiser",comment:"Amazing van! Everything was perfect. Highly recommend for road trips!"},{id:2,rating:5,name:"Mike T.",date:"Jan 15, 2026",van:"Coastal Wanderer",comment:"Great experience. The van was clean and well-maintained. Will rent again!"},{id:3,rating:4,name:"Emily R.",date:"Jan 10, 2026",van:"Retro Cruiser",comment:"Nice van with retro vibes. Could use a few more amenities but overall good."}];return s.jsxs("div",{className:"reviews-page",children:[s.jsxs(m.div,{className:"reviews-header",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[s.jsx("h2",{children:"Customer Reviews"}),s.jsx("p",{children:"See what renters are saying about your vans"})]}),s.jsx("div",{className:"reviews-summary",children:s.jsxs("div",{className:"rating-overview",children:[s.jsxs("div",{className:"rating-display",children:[s.jsx(B,{className:"star-icon"}),s.jsx("span",{className:"rating-number",children:4.8})]}),s.jsx("p",{className:"rating-text",children:"out of 5 stars"}),s.jsxs("p",{className:"reviews-count",children:["Based on ",n.length," reviews"]})]})}),s.jsx("div",{className:"reviews-list",children:n.map((t,i)=>s.jsxs(m.div,{className:"review-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:i*.1},children:[s.jsxs("div",{className:"review-header",children:[s.jsxs("div",{children:[s.jsx("h4",{children:t.name}),s.jsx("p",{className:"review-van",children:t.van})]}),s.jsx("div",{className:"review-rating",children:[...Array(t.rating)].map((r,a)=>s.jsx(B,{className:"star filled"},a))})]}),s.jsx("p",{className:"review-comment",children:t.comment}),s.jsx("p",{className:"review-date",children:t.date})]},t.id))})]})}function Vr(){return s.jsx("div",{className:"not-found-page",children:s.jsxs(m.div,{className:"not-found-content",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsx("h1",{className:"not-found-title",children:"404"}),s.jsx("h2",{children:"Page Not Found"}),s.jsx("p",{children:"Sorry, the page you're looking for doesn't exist or has been moved."}),s.jsxs(x,{to:"/",className:"btn btn-primary btn-lg",children:[s.jsx(Ut,{}),"Back to Home"]})]})})}function Wr(){return s.jsx(Zn,{children:s.jsx(Tn,{children:s.jsx(Sn,{children:s.jsxs(w,{path:"/",element:s.jsx(ys,{}),children:[s.jsx(w,{index:!0,element:s.jsx(ws,{})}),s.jsx(w,{path:"about",element:s.jsx(js,{})}),s.jsx(w,{path:"vans",element:s.jsx(Rr,{})}),s.jsx(w,{path:"vans/:id",element:s.jsx(Pr,{})}),s.jsx(w,{path:"login",element:s.jsx(Ar,{})}),s.jsx(w,{path:"signup",element:s.jsx(Lr,{})}),s.jsxs(w,{element:s.jsx(_s,{}),children:[s.jsx(w,{path:"profile",element:s.jsx(Or,{})}),s.jsxs(w,{path:"host",element:s.jsx(xs,{}),children:[s.jsx(w,{index:!0,element:s.jsx(Mr,{})}),s.jsx(w,{path:"income",element:s.jsx(Dr,{})}),s.jsx(w,{path:"vans",element:s.jsx(Ur,{})}),s.jsx(w,{path:"reviews",element:s.jsx(Fr,{})})]})]}),s.jsx(w,{path:"*",element:s.jsx(Vr,{})})]})})})})}Ae.createRoot(document.getElementById("root")).render(s.jsx(En.StrictMode,{children:s.jsx(Wr,{})}));
//# sourceMappingURL=index-DaOH5CYh.js.map
