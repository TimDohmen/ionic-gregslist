(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5c33"],{7059:function(o,i,t){"use strict";t.r(i),t.d(i,"ion_icon",(function(){return h}));var e=t("ffe0"),n=t("faff");const s=o=>{const i=document.createElement("div");i.innerHTML=o;for(let e=i.childNodes.length-1;e>=0;e--)"svg"!==i.childNodes[e].nodeName.toLowerCase()&&i.removeChild(i.childNodes[e]);const t=i.firstElementChild;if(t&&"svg"===t.nodeName.toLowerCase()){const o=t.getAttribute("class")||"";if(t.setAttribute("class",(o+" s-ion-icon").trim()),r(t))return i.innerHTML}return""},r=o=>{if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(let i=0;i<o.attributes.length;i++){const t=o.attributes[i].value;if(Object(n["d"])(t)&&0===t.toLowerCase().indexOf("on"))return!1}for(let i=0;i<o.childNodes.length;i++)if(!r(o.childNodes[i]))return!1}return!0},c=new Map,l=new Map,a=(o,i)=>{let t=l.get(o);if(!t){if("undefined"===typeof fetch||"undefined"===typeof document)return c.set(o,""),Promise.resolve();t=fetch(o).then(t=>{if(t.ok)return t.text().then(t=>{t&&!1!==i&&(t=s(t)),c.set(o,t||"")});c.set(o,"")}),l.set(o,t)}return t},d=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",h=class{constructor(o){Object(e["e"])(this,o),this.iconName=null,this.isVisible=!1,this.mode=f(),this.lazy=!1,this.sanitize=!0}connectedCallback(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(o,i,t){if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){const e=this.io=new window.IntersectionObserver(o=>{o[0].isIntersecting&&(e.disconnect(),this.io=void 0,t())},{rootMargin:i});e.observe(o)}else t()}loadIcon(){if(this.isVisible){const o=Object(n["c"])(this);o&&(c.has(o)?this.svgContent=c.get(o):a(o,this.sanitize).then(()=>this.svgContent=c.get(o)))}const o=this.iconName=Object(n["b"])(this.name,this.icon,this.mode,this.ios,this.md);this.ariaLabel||"true"===this.ariaHidden||o&&(this.ariaLabel=o.replace(/\-/g," "))}render(){const{iconName:o}=this,i=this.mode||"md",t=this.flipRtl||o&&(o.indexOf("arrow")>-1||o.indexOf("chevron")>-1)&&!1!==this.flipRtl;return Object(e["d"])(e["a"],{role:"img",class:Object.assign(Object.assign({[i]:!0},b(this.color)),{["icon-"+this.size]:!!this.size,"flip-rtl":!!t&&"rtl"===this.el.ownerDocument.dir})},this.svgContent?Object(e["d"])("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(e["d"])("div",{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return Object(e["b"])(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}},f=()=>"undefined"!==typeof document&&document.documentElement.getAttribute("mode")||"md",b=o=>o?{"ion-color":!0,["ion-color-"+o]:!0}:null;h.style=d}}]);