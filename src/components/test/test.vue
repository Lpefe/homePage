<template>

    <div id="canvers" style="position:relative;width:100%;height:75vh">
        <!-- <link href="/assets/css/style.css" rel="stylesheet" media="screen" /> -->
        <div class="scene">
        <img class="threelogo" src="/assets/img/img-logo.png">
        <nav>
            <div class="prompt mute-prompt">
                <div class="button icons">&#xe002;</div>
                <span class="label">Sound | on</span>
            </div>
        </nav>
    </div>
    <div class="loading">
        <div class="mask">
            <img class="intro-logo" src="/assets/img/img-logo.png">
            <img class="egg" src="/assets/img/img-egg.png">
            <img class="egg-shadow" src="/assets/img/img-egg_shadow.png">
        </div>
        <div class="load-mobile-prompt">Touch to start!</div>
        <div class="load-progress">Turn up your sound...
            <div class="red">Turn up your sound...</div>
        </div>
        <img class="loader" src="/assets/img/img-loader.png">
    </div>

    </div>
</template>
    
<script src="/assets/js/lib/require.js"></script>
<script src="/assets/js/lib/modernizr.custom.js"></script>
<script src="/assets/js/lib/detectizr.min.js"></script>
<script>
/*
 RequireJS 2.1.10 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(ca){function G(b){return"[object Function]"===N.call(b)}function H(b){return"[object Array]"===N.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function U(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function s(b,c){return ga.call(b,c)}function j(b,c){return s(b,c)&&b[c]}function B(b,c){for(var d in b)if(s(b,d)&&c(b[d],d))break}function V(b,c,d,g){c&&B(c,function(c,h){if(d||!s(b,h))g&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof
RegExp)?(b[h]||(b[h]={}),V(b[h],c,d,g)):b[h]=c});return b}function t(b,c){return function(){return c.apply(b,arguments)}}function da(b){throw b;}function ea(b){if(!b)return b;var c=ca;v(b.split("."),function(b){c=c[b]});return c}function C(b,c,d,g){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=g;d&&(c.originalError=d);return c}function ha(b){function c(a,e,b){var f,n,c,d,g,h,i,I=e&&e.split("/");n=I;var m=l.map,k=m&&m["*"];if(a&&"."===a.charAt(0))if(e){n=
I.slice(0,I.length-1);a=a.split("/");e=a.length-1;l.nodeIdCompat&&R.test(a[e])&&(a[e]=a[e].replace(R,""));n=a=n.concat(a);d=n.length;for(e=0;e<d;e++)if(c=n[e],"."===c)n.splice(e,1),e-=1;else if(".."===c)if(1===e&&(".."===n[2]||".."===n[0]))break;else 0<e&&(n.splice(e-1,2),e-=2);a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if(b&&m&&(I||k)){n=a.split("/");e=n.length;a:for(;0<e;e-=1){d=n.slice(0,e).join("/");if(I)for(c=I.length;0<c;c-=1)if(b=j(m,I.slice(0,c).join("/")))if(b=j(b,d)){f=b;
g=e;break a}!h&&(k&&j(k,d))&&(h=j(k,d),i=e)}!f&&h&&(f=h,g=i);f&&(n.splice(0,g,f),a=n.join("/"))}return(f=j(l.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName("script"),function(e){if(e.getAttribute("data-requiremodule")===a&&e.getAttribute("data-requirecontext")===i.contextName)return e.parentNode.removeChild(e),!0})}function g(a){var e=j(l.paths,a);if(e&&H(e)&&1<e.length)return e.shift(),i.require.undef(a),i.require([a]),!0}function u(a){var e,b=a?a.indexOf("!"):-1;-1<b&&(e=a.substring(0,
b),a=a.substring(b+1,a.length));return[e,a]}function m(a,e,b,f){var n,d,g=null,h=e?e.name:null,l=a,m=!0,k="";a||(m=!1,a="_@r"+(N+=1));a=u(a);g=a[0];a=a[1];g&&(g=c(g,h,f),d=j(p,g));a&&(g?k=d&&d.normalize?d.normalize(a,function(a){return c(a,h,f)}):c(a,h,f):(k=c(a,h,f),a=u(k),g=a[0],k=a[1],b=!0,n=i.nameToUrl(k)));b=g&&!d&&!b?"_unnormalized"+(Q+=1):"";return{prefix:g,name:k,parentMap:e,unnormalized:!!b,url:n,originalName:l,isDefine:m,id:(g?g+"!"+k:k)+b}}function q(a){var e=a.id,b=j(k,e);b||(b=k[e]=new i.Module(a));
return b}function r(a,e,b){var f=a.id,n=j(k,f);if(s(p,f)&&(!n||n.defineEmitComplete))"defined"===e&&b(p[f]);else if(n=q(a),n.error&&"error"===e)b(n.error);else n.on(e,b)}function w(a,e){var b=a.requireModules,f=!1;if(e)e(a);else if(v(b,function(e){if(e=j(k,e))e.error=a,e.events.error&&(f=!0,e.emit("error",a))}),!f)h.onError(a)}function x(){S.length&&(ia.apply(A,[A.length,0].concat(S)),S=[])}function y(a){delete k[a];delete W[a]}function F(a,e,b){var f=a.map.id;a.error?a.emit("error",a.error):(e[f]=
!0,v(a.depMaps,function(f,c){var d=f.id,g=j(k,d);g&&(!a.depMatched[c]&&!b[d])&&(j(e,d)?(a.defineDep(c,p[d]),a.check()):F(g,e,b))}),b[f]=!0)}function D(){var a,e,b=(a=1E3*l.waitSeconds)&&i.startTime+a<(new Date).getTime(),f=[],c=[],h=!1,k=!0;if(!X){X=!0;B(W,function(a){var i=a.map,m=i.id;if(a.enabled&&(i.isDefine||c.push(a),!a.error))if(!a.inited&&b)g(m)?h=e=!0:(f.push(m),d(m));else if(!a.inited&&(a.fetched&&i.isDefine)&&(h=!0,!i.prefix))return k=!1});if(b&&f.length)return a=C("timeout","Load timeout for modules: "+
f,null,f),a.contextName=i.contextName,w(a);k&&v(c,function(a){F(a,{},{})});if((!b||e)&&h)if((z||fa)&&!Y)Y=setTimeout(function(){Y=0;D()},50);X=!1}}function E(a){s(p,a[0])||q(m(a[0],null,!0)).init(a[1],a[2])}function L(a){var a=a.currentTarget||a.srcElement,e=i.onScriptLoad;a.detachEvent&&!Z?a.detachEvent("onreadystatechange",e):a.removeEventListener("load",e,!1);e=i.onScriptError;(!a.detachEvent||Z)&&a.removeEventListener("error",e,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function M(){var a;
for(x();A.length;){a=A.shift();if(null===a[0])return w(C("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));E(a)}}var X,$,i,K,Y,l={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},k={},W={},aa={},A=[],p={},T={},ba={},N=1,Q=1;K={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?a.exports:a.exports=p[a.map.id]={}},module:function(a){return a.module?a.module:
a.module={id:a.map.id,uri:a.map.url,config:function(){return j(l.config,a.map.id)||{}},exports:K.exports(a)}}};$=function(a){this.events=j(aa,a.id)||{};this.map=a;this.shim=j(l.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};$.prototype={init:function(a,e,b,f){f=f||{};if(!this.inited){this.factory=e;if(b)this.on("error",b);else this.events.error&&(b=t(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=b;this.inited=
!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,e){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=e)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],t(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
this.map.url;T[a]||(T[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,e,b=this.map.id;e=this.depExports;var f=this.exports,c=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(G(c)){if(this.events.error&&this.map.isDefine||h.onError!==da)try{f=i.execCb(b,c,e,f)}catch(d){a=d}else f=i.execCb(b,c,e,f);this.map.isDefine&&void 0===f&&((e=this.module)?f=e.exports:this.usingExports&&
(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else f=c;this.exports=f;if(this.map.isDefine&&!this.ignore&&(p[b]=f,h.onResourceLoad))h.onResourceLoad(i,this.map,this.depMaps);y(b);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=
this.map,b=a.id,d=m(a.prefix);this.depMaps.push(d);r(d,"defined",t(this,function(f){var d,g;g=j(ba,this.map.id);var J=this.map.name,u=this.map.parentMap?this.map.parentMap.name:null,p=i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(J=f.normalize(J,function(a){return c(a,u,!0)})||""),f=m(a.prefix+"!"+J,this.map.parentMap),r(f,"defined",t(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),g=j(k,f.id)){this.depMaps.push(f);
if(this.events.error)g.on("error",t(this,function(a){this.emit("error",a)}));g.enable()}}else g?(this.map.url=i.nameToUrl(g),this.load()):(d=t(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),d.error=t(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];B(k,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),d.fromText=t(this,function(f,c){var g=a.name,J=m(g),k=O;c&&(f=c);k&&(O=!1);q(J);s(l.config,b)&&(l.config[g]=l.config[b]);try{h.exec(f)}catch(j){return w(C("fromtexteval",
"fromText eval for "+b+" failed: "+j,j,[b]))}k&&(O=!0);this.depMaps.push(J);i.completeLoad(g);p([g],d)}),f.load(a.name,p,d,l))}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){W[this.map.id]=this;this.enabling=this.enabled=!0;v(this.depMaps,t(this,function(a,b){var c,f;if("string"===typeof a){a=m(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=j(K,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;r(a,"defined",t(this,function(a){this.defineDep(b,
a);this.check()}));this.errback&&r(a,"error",t(this,this.errback))}c=a.id;f=k[c];!s(K,c)&&(f&&!f.enabled)&&i.enable(a,this)}));B(this.pluginMaps,t(this,function(a){var b=j(k,a.id);b&&!b.enabled&&i.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){v(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:l,contextName:b,registry:k,defined:p,urlFetched:T,defQueue:A,Module:$,makeModuleMap:m,
nextTick:h.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=l.shim,c={paths:!0,bundles:!0,config:!0,map:!0};B(a,function(a,b){c[b]?(l[b]||(l[b]={}),V(l[b],a,!0,!0)):l[b]=a});a.bundles&&B(a.bundles,function(a,b){v(a,function(a){a!==b&&(ba[a]=b)})});a.shim&&(B(a.shim,function(a,c){H(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);b[c]=a}),l.shim=b);a.packages&&v(a.packages,function(a){var b,
a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(l.paths[b]=a.location);l.pkgs[b]=a.name+"/"+(a.main||"main").replace(ja,"").replace(R,"")});B(k,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=m(b))});if(a.deps||a.callback)i.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ca,arguments));return b||a.exports&&ea(a.exports)}},makeRequire:function(a,e){function g(f,c,d){var j,l;e.enableBuildCallback&&(c&&G(c))&&(c.__requireJsBuild=
!0);if("string"===typeof f){if(G(c))return w(C("requireargs","Invalid require call"),d);if(a&&s(K,f))return K[f](k[a.id]);if(h.get)return h.get(i,f,a,g);j=m(f,a,!1,!0);j=j.id;return!s(p,j)?w(C("notloaded",'Module name "'+j+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):p[j]}M();i.nextTick(function(){M();l=q(m(null,a));l.skipMap=e.skipMap;l.init(f,c,d,{enabled:!0});D()});return g}e=e||{};V(g,{isBrowser:z,toUrl:function(b){var e,d=b.lastIndexOf("."),g=b.split("/")[0];if(-1!==
d&&(!("."===g||".."===g)||1<d))e=b.substring(d,b.length),b=b.substring(0,d);return i.nameToUrl(c(b,a&&a.id,!0),e,!0)},defined:function(b){return s(p,m(b,a,!1,!0).id)},specified:function(b){b=m(b,a,!1,!0).id;return s(p,b)||s(k,b)}});a||(g.undef=function(b){x();var c=m(b,a,!0),e=j(k,b);d(b);delete p[b];delete T[c.url];delete aa[b];U(A,function(a,c){a[0]===b&&A.splice(c,1)});e&&(e.events.defined&&(aa[b]=e.events),y(b))});return g},enable:function(a){j(k,a.id)&&q(a).enable()},completeLoad:function(a){var b,
c,f=j(l.shim,a)||{},d=f.exports;for(x();A.length;){c=A.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}c=j(k,a);if(!b&&!s(p,a)&&c&&!c.inited){if(l.enforceDefine&&(!d||!ea(d)))return g(a)?void 0:w(C("nodefine","No define call for "+a,null,[a]));E([a,f.deps||[],f.exportsFn])}D()},nameToUrl:function(a,b,c){var f,d,g;(f=j(l.pkgs,a))&&(a=f);if(f=j(ba,a))return i.nameToUrl(f,b,c);if(h.jsExtRegExp.test(a))f=a+(b||"");else{f=l.paths;a=a.split("/");for(d=a.length;0<d;d-=1)if(g=a.slice(0,
d).join("/"),g=j(f,g)){H(g)&&(g=g[0]);a.splice(0,d,g);break}f=a.join("/");f+=b||(/^data\:|\?/.test(f)||c?"":".js");f=("/"===f.charAt(0)||f.match(/^[\w\+\.\-]+:/)?"":l.baseUrl)+f}return l.urlArgs?f+((-1===f.indexOf("?")?"?":"&")+l.urlArgs):f},load:function(a,b){h.load(i,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ka.test((a.currentTarget||a.srcElement).readyState))P=null,a=L(a),i.completeLoad(a.id)},onScriptError:function(a){var b=L(a);if(!g(b.id))return w(C("scripterror",
"Script error for: "+b.id,a,[b.id]))}};i.require=i.makeRequire();return i}var h,x,y,D,L,E,P,M,q,Q,la=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ma=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,R=/\.js$/,ja=/^\.\//;x=Object.prototype;var N=x.toString,ga=x.hasOwnProperty,ia=Array.prototype.splice,z=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),fa=!z&&"undefined"!==typeof importScripts,ka=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,
Z="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},r={},S=[],O=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(G(requirejs))return;r=requirejs;requirejs=void 0}"undefined"!==typeof require&&!G(require)&&(r=require,require=void 0);h=requirejs=function(b,c,d,g){var u,m="_";!H(b)&&"string"!==typeof b&&(u=b,H(c)?(b=c,c=d,d=g):b=[]);u&&u.context&&(m=u.context);(g=j(F,m))||(g=F[m]=h.s.newContext(m));u&&g.configure(u);return g.require(b,c,d)};h.config=function(b){return h(b)};
h.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=h);h.version="2.1.10";h.jsExtRegExp=/^\/|:|\?|\.js$/;h.isBrowser=z;x=h.s={contexts:F,newContext:ha};h({});v(["toUrl","undef","defined","specified"],function(b){h[b]=function(){var c=F._;return c.require[b].apply(c,arguments)}});if(z&&(y=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))y=x.head=D.parentNode;h.onError=da;h.createNode=function(b){var c=
b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};h.load=function(b,c,d){var g=b&&b.config||{};if(z)return g=h.createNode(g,c,d),g.setAttribute("data-requirecontext",b.contextName),g.setAttribute("data-requiremodule",c),g.attachEvent&&!(g.attachEvent.toString&&0>g.attachEvent.toString().indexOf("[native code"))&&!Z?(O=!0,g.attachEvent("onreadystatechange",b.onScriptLoad)):
(g.addEventListener("load",b.onScriptLoad,!1),g.addEventListener("error",b.onScriptError,!1)),g.src=d,M=g,D?y.insertBefore(g,D):y.appendChild(g),M=null,g;if(fa)try{importScripts(d),b.completeLoad(c)}catch(j){b.onError(C("importscripts","importScripts failed for "+c+" at "+d,j,[c]))}};z&&!r.skipDataMain&&U(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(L=b.getAttribute("data-main"))return q=L,r.baseUrl||(E=q.split("/"),q=E.pop(),Q=E.length?E.join("/")+"/":"./",r.baseUrl=
Q),q=q.replace(R,""),h.jsExtRegExp.test(q)&&(q=L),r.deps=r.deps?r.deps.concat(q):[q],!0});define=function(b,c,d){var g,h;"string"!==typeof b&&(d=c,c=b,b=null);H(c)||(d=c,c=null);!c&&G(d)&&(c=[],d.length&&(d.toString().replace(la,"").replace(ma,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(O){if(!(g=M))P&&"interactive"===P.readyState||U(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return P=b}),g=P;g&&(b||
(b=g.getAttribute("data-requiremodule")),h=F[g.getAttribute("data-requirecontext")])}(h?h.defQueue:S).push([b,c,d])};define.amd={jQuery:!0};h.exec=function(b){return eval(b)};h(r)}})(this);

requirejs.config({
    baseUrl: 'assets/js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-2.1.0.min',
        gsap: 'TweenMax.min',
        three: 'three.min',
        datgui: 'dat.gui.min',
    }
});


export default {
    name: 'test',
    data () {
        return {
            
        }
    },
    mounted(){
        this.a()
    },
    methods: {
        a(){
            requirejs([
        'matter',
        'jquery',
        'datgui',
        'three',
        'gsap',
    ],
    // loading
    
    function() {
        var loading ={}
        var _loader = $('.loading')
        var _egg = $('.egg')
        var _shadow = $('.egg-shadow')
        var _introLogo = $('.intro-logo')
        var _text = $('.load-progress, .load-mobile-prompt')
        var _textRed = $('.load-progress .red')
        var _prompts = $('nav .prompt')
        var _logo = $('.logo')
        var _spin = $('.loader')

        var removeLoader = function() {
            tlLoad.kill()
            tlLoadExit.kill()
            _loader.remove()

            tlLoad = null
            tlLoadExit = null
            _loader = null
            _egg = null
            _shadow = null
            _introLogo = null
            _text = null
            _textRed = null
            _prompts = null
            _logo = null
            _spin = null
        }

        var tlLoad = new TimelineMax({ yoyo: true, repeat: -1 })
        var tlLoadExit = new TimelineMax({ paused: true, onComplete: removeLoader })

        tlLoad.add([
            TweenLite.to(_egg, 0.17, { y: 20, rotation: 0, scaleY: 0.95, ease: Power1.easeIn }),
            TweenLite.to(_shadow, 0.17, { opacity: 1.0, scale: 1.0, ease: Power1.easeIn }),
        ])
        tlLoad.add([
            TweenLite.to(_egg, 0.22, { y: 5, rotation: 1, scaleY: 1, ease: Power1.easeOut, delay: 0.05 }),
            TweenLite.to(_shadow, 0.22, { opacity: 0.6, scale: 0.8, ease: Power1.easeOut, delay: 0.05 }),
        ])

        tlLoadExit.add([
            TweenLite.to(_spin, 0.7, { opacity: 0, scale: 1.05, ease: Power1.easeInOut, delay: 0 }),
            TweenLite.to(_introLogo, 0.6, { opacity: 0, scale: 1.05, ease: Power1.easeInOut, delay: 0.4 }),
            TweenLite.to(_text, 0.2, { opacity: 0, y: 3, ease: Power1.easeOut, delay: 0.75 }),
            TweenLite.to(_egg, 0.2, { y: 20, rotation: 0, scaleY: 0.95, ease: Power1.easeIn }),
            TweenLite.to(_shadow, 0.2, { opacity: 1.0, scale: 1.0, ease: Power1.easeIn }),
            TweenLite.to(_egg, 0.3, { y: -80, scaleY: 0.92, ease: Power1.easeOut, delay: 0.25 }),
            TweenLite.to(_shadow, 0.3, { opacity: 0.0, scale: 0.5, ease: Power1.easeOut, delay: 0.25 }),
            TweenLite.to(_egg, 0.35, { y: 260, scaleY: 1.7, ease: Power2.easeIn, delay: 0.55 }),
        ])
        tlLoadExit.add([
            TweenLite.set(_prompts, { rotation: -110, x: -64, scale: 0 }),
            TweenMax.staggerTo(_prompts, 1.4, { rotation: 0, scale: 1, x: 0, ease: Elastic.easeOut }, 0.1),
            TweenLite.set(_logo, { display: 'block', opacity: 0 }),
            TweenLite.to(_logo, 2, { opacity: 1, ease: Power2.easeIn, delay: 0.0 }),
        ])

        loading.exit = function() {
            tlLoad.pause()
            tlLoadExit.resume()
        }

        loading.update = function(p) {
            TweenLite.to(_textRed, 1, { width: Math.round(130 * p) })
        }

        TweenMax.to(_spin, 0.5, { rotation: '+=360', ease: Linear.easeNone, repeat: -1 })








// app
        var isMobile = $('html').hasClass('mobile');
        var player = null;

        player = document.createElement('audio');
        player.src = 'assets/audio/music.mp3';
        player.preload = 'auto';
        player.load();

        var firefoxAudioLoad = false;

        player.addEventListener('progress', function() {
            // console.log('progress')
            // firefox
            if ($('html').hasClass('firefox') && !firefoxAudioLoad) {
                updateLoad();
                firefoxAudioLoad = true;
            }
        });

        player.addEventListener('error', function() {
            // console.log('error');
        });

        player.addEventListener('play', function() {
            // console.log('play');
        });

        player.addEventListener('ended', function() {
            player.play();
        });

        player.addEventListener('canplay', function() {
            // console.log('canplay')
            if ($('html').hasClass('firefox')) return;
            updateLoad();
        });

        if (isMobile) {
            var fullScreen = function() {
                var doc = window.document;
                var docEl = doc.documentElement;

                var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;

                // Doesn't work for ios
                try {
                    requestFullScreen.call(docEl);
                } catch (e) {}
            };
            $(document).on('touchstart', fullScreen);
        }

        var forced = false;
        var pauseWhileAbsent = function() {
            switch (document.visibilityState) {
                case 'hidden':
                    if (player.paused) return;
                    player.pause();
                    forced = true;
                    break;
                case 'visible':
                    if (!forced) return;
                    player.play();
                    forced = false;
                    break;
            }
        };
        $(document).on('visibilitychange', pauseWhileAbsent);

        var loaded = function() {

            // Mobile needs a touch to play audio
            if (isMobile) {
                $('.load-progress').hide();
                $('.load-mobile-prompt').show();

                TweenLite.to($('.loader'), 0.5, { opacity: 0, scale: 1.05, ease: Power1.easeInOut });

                var startDownload = function() {
                    $(document).off('touchstart', startDownload);
                    player.play();
                    setTimeout(function() {
                        loading.exit();
                    }, 500);
                    setTimeout(function() {
                        engine.enabled = true;
                    }, 1270);
                };
                $(document).on('touchstart', startDownload);
                return;
            }

            player.play();
            setTimeout(function() {
                loading.exit();
            }, 500);
            setTimeout(function() {
                engine.enabled = true;
            }, 1270);
        };

        // Load items are images, 3d and music
        var loadItems = 12;
        var loadedItems = 0;
        var updateLoad = function() {
            loadedItems++;

            loading.update(loadedItems / loadItems);
            if (loadedItems == loadItems) loaded();
        };

        var WIDTH = window.innerWidth;
        // var HEIGHT = document.querySelector('#canvers').offsetHeight;

        //高度适应
        var HEIGHT = document.querySelector('#canvers').offsetHeight;
        console.log(WIDTH)
        console.log(HEIGHT)

        var engine = null;

        var params = {
            override: false,
            pause: false,
            timing: 675,

            // Have to start as float otherwise only shows integers
            x: 0.1,
            y: 0.1,
            rock: 0.1,

            xOffset: 0.01,
            scale: 55,
        };

        if (location.search.split('?')[1] == 'dev') {
            var gui = new dat.GUI();
            gui.add(params, 'override').name('Override');
            gui.add(params, 'pause').name('Pause');
            gui.add(params, 'x', 0, 3).name('Gravity x');
            gui.add(params, 'y', 0, 3).name('Gravity y');
            gui.add(params, 'rock', 0, 0.5).name('Sway');
            gui.add(params, 'timing', 0, 2000).name('Timing (ms)');
            // gui.add(params, 'xOffset', -1.0, 1.0);
            // gui.add(params, 'scale', 10, 200);
        } else {
            console.log('\nMade by NATHAN GORDON\nhttps://twitter.com/gordonnl\n');
            console.log('\nArt directed by PASCAL VAN DER HAAR\nhttps://twitter.com/Pascalsetsail\n');
            console.log('\nIllustration by JONO YUEN\nhttps://twitter.com/jonoyuen\n');
            console.log('\nAdd ?dev and check out the guts\nhttp://pablotheflamingo.com?dev\n');
            console.log('%c' +
                '\nLibraries used are:\n' +
                'MatterJs http://brm.io/matter-js/\n' +
                'ThreeJs http://threejs.org/\n' +
                'GSAP http://greensock.com/gsap\n',
                'line-height: 17px;'
            );
        }

        /**
         *
         *
         *
         * 3D scene
         *
         *
         *
         */

        var camera = new THREE.PerspectiveCamera(35, WIDTH / HEIGHT, 1, 10000);
        camera.position.x = 0;
        camera.position.y = 4.5;
        camera.position.z = 15;
        camera.target = new THREE.Vector3(-15, 30, 0);
        camera.lookAt(camera.target);
        var scene = new THREE.Scene();
        var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
        renderer.setSize(WIDTH, HEIGHT);
        renderer.domElement.className = 'pablo';
        document.querySelectorAll('.scene')[0].insertBefore(renderer.domElement, document.querySelectorAll('nav')[0]);
        var gl = renderer.context;
        var rtTexture = new THREE.WebGLRenderTarget(WIDTH, HEIGHT, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat });

        var canvasMat = document.createElement('canvas');
        var ctxMat = canvasMat.getContext('2d');
        canvasMat.width = 1024;
        canvasMat.height = 1024;

        var canvasTexture = new THREE.Texture(canvasMat);
        canvasTexture.minFilter = THREE.LinearFilter;
        canvasTexture.magFilter = THREE.LinearFilter;

        var canvasMaterial = new THREE.MeshBasicMaterial({
            map: canvasTexture,
            skinning: true,
            transparent: true,
        });

        var drawCanvas = function(eye, mouth) {
            ctxMat.clearRect(0, 0, 1024, 1024);
            ctxMat.drawImage(loadedImgs[0], 0, 0, 1024, 1024);

            if (eye) ctxMat.drawImage(loadedImgs[eye], 637, 100, 100, 137);
            if (mouth) ctxMat.drawImage(loadedImgs[mouth], 310, 100, 313, 313);

            canvasTexture.needsUpdate = true;
        };

        var textureImages = [
            'assets/img/pablo.png',
            'assets/img/pablo-eye_angry.png', //1
            'assets/img/pablo-eye_open.png',
            'assets/img/pablo-eye_cute.png', //3
            'assets/img/pablo-eye_dazed.png',
            'assets/img/pablo-eye_look.png', //5
            'assets/img/pablo-eye_rock.png',
            'assets/img/pablo-eye_shock.png', //7
            'assets/img/pablo-mouth_frown.png',
            'assets/img/pablo-mouth_smile.png', //9
        ];
        var loadedImgs = [];
        var loadCount = 0;

        var loadImage = function(src, index) {
            var imageObj = new Image();
            imageObj.onload = function() {
                updateLoad();

                loadedImgs[index] = imageObj;
                loadCount++;
                if (loadCount == textureImages.length) drawCanvas();
            };
            imageObj.src = src;
        };
        for (var i = 0; i < textureImages.length; i++) {
            loadImage(textureImages[i], i);
        }

        var mesh = null;
        var obj = new THREE.Object3D();
        new THREE.JSONLoader().load('assets/models/pabloJSON.json', function(geometry, materials) {
            updateLoad();

            // materials[0].wireframe = true

            mesh = new THREE.SkinnedMesh(geometry, canvasMaterial);
            mesh.position.y = 3;
            obj.add(mesh);
            scene.add(obj);
        });

        /**
         *
         *
         *
         * Physics scene
         *
         *
         *
         */

        var Bodies = Matter.Bodies;
        var Common = Matter.Common;
        var Composites = Matter.Composites;
        var Constraint = Matter.Constraint;
        var Engine = Matter.Engine;
        var Events = Matter.Events;
        var MouseConstraint = Matter.MouseConstraint;
        var World = Matter.World;
        var Sleeping = Matter.Sleeping;

        engine = Engine.create($('.scene')[0], {
            render: {
                options: {
                    wireframes: true
                }
            }
        });

        engine.render.canvas.className += 'debug';
        if (location.search.split('?')[1] == 'dev') engine.render.canvas.style.display = 'block';

        var ground = Bodies.rectangle(400, 625, 800, 50, {
            isStatic: true,
        });

        var neck = Composites.softBody(340, 240, 2, 6, 0, 0, true, 30, {}, {});
        var head = Composites.softBody(160, 120, 5, 2, 0, 0, true, 30, {}, {});
        var bodies = neck.bodies.concat(head.bodies);

        var mouse = MouseConstraint.create(engine, {
            constraint: { stiffness: 0.1 }
        });

        var control = Constraint.create({
            pointA: { x: 0, y: 0 },
            pointB: { x: 0, y: 0 },
            stiffness: 0.3,
            angularStiffness: 1,
            render: {
                strokeStyle: '#90EE90'
            }
        });

        var controlNose = Constraint.create({
            pointA: { x: 0, y: 0 },
            pointB: { x: 0, y: 0 },
            stiffness: 0.4,
            angularStiffness: 1,
            render: {
                strokeStyle: '#90EE90'
            }
        });

        var createAnchor = function(x, y, bodyB) {
            return Constraint.create({
                pointA: { x: x, y: y },
                bodyB: bodyB,
                stiffness: 1,
            });
        };
        var anchor1 = createAnchor(370, 570, neck.bodies[neck.bodies.length - 2]);
        var anchor2 = createAnchor(430, 570, neck.bodies[neck.bodies.length - 1]);

        var createConnect = function(bodyA, bodyB) {
            return Constraint.create({
                bodyA: bodyA,
                bodyB: bodyB,
                stiffness: 1,
            });
        };
        var connect1 = createConnect(head.bodies[8], neck.bodies[0]);
        var connect2 = createConnect(head.bodies[9], neck.bodies[1]);
        var connect3 = createConnect(head.bodies[9], neck.bodies[0]);
        var connect4 = createConnect(head.bodies[8], neck.bodies[1]);

        World.add(engine.world, [mouse, control, controlNose, ground, neck, head, anchor1, anchor2, connect1, connect2, connect3, connect4]);

        /**
         *
         *
         *
         * Gameloop
         *
         *
         *
         */

        var points = [
            neck.bodies[9],
            neck.bodies[5],
            neck.bodies[1],
            head.bodies[4],
        ];

        var rotPoints = [
            [neck.bodies[8], neck.bodies[9]],
            [neck.bodies[4], neck.bodies[5]],
            [neck.bodies[0], neck.bodies[1]],
            [head.bodies[0], head.bodies[4]],
        ];

        var getAngle = function(a, b) {
            var y = b.position.y - a.position.y;
            var x = b.position.x - a.position.x;

            return -Math.atan2(y, x);
        };

        // Have to call run before adding event listeners
        Engine.run(engine);
        engine.enabled = false;

        Events.on(engine, 'tick', function(event) {
            if (engine.timing.timestamp < 4000) {
                camera.target.x += (0 - camera.target.x) / 40;
                camera.target.y += (5.5 - camera.target.y) / 40;
                camera.lookAt(camera.target);
            }

            engine.world.gravity.y = params.y * Math.sin(20 * event.timestamp / (Math.PI * params.timing));
            engine.world.gravity.x = params.x * Math.sin(20 * event.timestamp / 2 / (Math.PI * params.timing) - 1 * Math.PI / 1) - params.xOffset;
            obj.rotation.x = params.rock * Math.sin(20 * event.timestamp / 2 / (Math.PI * params.timing));

            if (!mesh) return;

            for (var i = 0; i < mesh.skeleton.bones.length - 1; i++) {
                mesh.skeleton.bones[i].position.x = (points[i].position.x - 400) / params.scale;
                mesh.skeleton.bones[i].position.y = (360 - points[i].position.y) / params.scale;
                mesh.skeleton.bones[i].rotation.z = getAngle(rotPoints[i][0], rotPoints[i][1]);
            }

            renderer.render(scene, camera);

            // Dancing randomness and controls
            if (params.override) return;
            if (params.pause) {
                params.x += (0 - params.x) / 10;
                params.y += (0 - params.y) / 10;
                params.rock += (0 - params.rock) / 10;
            } else {
                params.x += (0.50 * Math.sin(20 * engine.timing.timestamp / (Math.PI * 17 * 1000)) + 1.0 - params.x) / 20;
                params.y += (0.50 * Math.sin(20 * engine.timing.timestamp / (Math.PI * 42 * 1000)) + 1.25 - params.y) / 20;
                params.rock += (0.10 * Math.sin(20 * engine.timing.timestamp / (Math.PI * 30 * 1000)) + 0.2 - params.rock) / 20;
            }
            if (gui) {
                for (i in gui.__controllers) gui.__controllers[i].updateDisplay();
            }

        });

        /**
         *
         *
         *
         * Menu Interaction
         *
         *
         *
         */

        $('.prompt').on('mouseenter', function() {
            if (isMobile) return;
            $(this).addClass('hover');
        });

        $('.prompt').on('mouseleave', function() {
            if (isMobile) return;
            $(this).removeClass('hover');
        });

        var hoverChange = function(a, b) {
            if (params.pause) return;

            drawCanvas(a, b);
        };

        $('.share-prompt').on('mouseenter', function() {
            if (isMobile) return;
            hoverChange(2, 9);
        });

        $('.adopt-prompt').on('mouseenter', function() {
            if (isMobile) return;
            hoverChange(4, 9);
        });

        $('.prompt').on('mouseleave', function() {
            if (isMobile) return;
            hoverChange(6, 9);
        });

        var dummy = $('<div />');

        var pauseMusic = function() {
            if (params.pause) return;

            TweenLite.set($(this).find('.button'), { boxShadow: '0px 0px 0px 0pt rgba(75, 52, 10, 0.3)' });
            TweenLite.to($(this).find('.button'), 0.5, { boxShadow: '0px 0px 0px 10pt rgba(75, 52, 10, 0)', ease: Power1.easeOut });

            $('.mute-prompt').off('click', pauseMusic);
            $(this).toggleClass('active');
            $(this).find('.button').html('&#xe003;');
            $(this).find('.label').html('Sound | off');

            params.pause = true;
            player.pause();

            control.pointA = { x: head.bodies[4].position.x + 1, y: head.bodies[4].position.y + 1 };
            control.bodyB = head.bodies[4];
            control.angleB = 0;
            control.pointB = { x: 0, y: 0 };

            controlNose.pointA = { x: head.bodies[5].position.x + 1, y: head.bodies[5].position.y + 1 };
            controlNose.bodyB = head.bodies[5];
            controlNose.angleB = 0;
            controlNose.pointB = { x: 0, y: 0 };

            var targetX = (46 - WIDTH / 2) / (HEIGHT / 0.75) * 800 + 400;
            var targetY = (0.7 * HEIGHT - 70) / HEIGHT * 600;

            var tl = new TimelineMax({
                onComplete: function() {
                    control.bodyB = null;
                    control.pointA = { x: 0, y: 0 };
                    control.pointB = { x: 0, y: 0 };

                    controlNose.bodyB = null;
                    controlNose.pointA = { x: 0, y: 0 };
                    controlNose.pointB = { x: 0, y: 0 };

                    $('.mute-prompt').on('click', pauseMusic);
                },
                onUpdate: function() {
                    controlNose.pointA.x = dummy[0]._gsTransform.rotationX;
                    controlNose.pointA.y = dummy[0]._gsTransform.rotationY;

                    control.pointA.x = dummy[0]._gsTransform.x;
                    control.pointA.y = dummy[0]._gsTransform.y;
                }
            });

            tl.add([
                TweenLite.set(dummy, { x: control.pointA.x + 1, y: control.pointA.y + 1 }),
                TweenLite.set(dummy, { rotationX: controlNose.pointA.x + 1, rotationY: controlNose.pointA.y + 1 }),

                TweenLite.to(dummy, 3, { x: targetX + 200, y: targetY - 180, ease: Power1.easeInOut, delay: 2.0 }),
                TweenLite.to(dummy, 3, { rotationX: targetX - 40, rotationY: targetY - 120, ease: Power1.easeInOut, delay: 2.0 }),
            ]);
            tl.add([
                TweenLite.to(dummy, 1, { x: '+=40', y: '-=40', ease: Power1.easeInOut }),
                TweenLite.to(dummy, 1, { rotationX: '+=40', rotationY: '-=120', ease: Power1.easeInOut }),
            ]);
            tl.add([
                TweenLite.to(dummy, 0.2, { x: targetX + 180, y: targetY - 180, ease: Power1.easeIn }),
                TweenLite.to(dummy, 0.2, { rotationX: targetX - 60, rotationY: targetY - 120, ease: Power1.easeIn }),
                TweenLite.to(dummy, 0.1, { rotationX: '+=0', delay: 0.2 }),
            ]);
            tl.add([
                TweenLite.to(dummy, 1, { x: 430, y: 150, ease: Power1.easeOut }),
                TweenLite.to(dummy, 1, { rotationX: 190, ease: Power1.easeOut }),
                TweenLite.to(dummy, 0.3, { rotationY: 70, ease: Power1.easeOut }),
                TweenLite.to(dummy, 0.7, { rotationY: 210, ease: Power1.easeInOut, delay: 0.3 }),
            ]);

            drawCanvas(7, 8);

            tl.addCallback(function() {
                drawCanvas(5, 8);
            }, 1.3);

            tl.addCallback(function() {
                drawCanvas(7, 8);
            }, 1.6);

            tl.addCallback(function() {
                drawCanvas(5, 8);
            }, 2.2);

            tl.addCallback(function() {
                drawCanvas(1, 8);
            }, 4.2);

            tl.addCallback(function() {
                drawCanvas(6, 9);

                params.pause = false;
                player.play();

                $('.mute-prompt').toggleClass('active');
                $('.mute-prompt .button').html('&#xe002;');
                $('.mute-prompt .label').html('Sound | on');

                TweenLite.set($('.mute-prompt .button'), { boxShadow: '0px 0px 0px 0pt rgba(75, 52, 10, 0.3)' });
                TweenLite.to($('.mute-prompt .button'), 0.5, { boxShadow: '0px 0px 0px 10pt rgba(75, 52, 10, 0)', ease: Power1.easeOut });
            }, 6.2);
        };

        $('.mute-prompt').on('click', pauseMusic);

        var shareThings = function() {
            $('.share-prompt').off('click', shareThings);

            $('.share-prompt').toggleClass('active');
            TweenLite.set($('.share-prompt .button'), { boxShadow: '0px 0px 0px 0pt rgba(75, 52, 10, 0.3)' });
            TweenLite.to($('.share-prompt .button'), 0.5, { boxShadow: '0px 0px 0px 10pt rgba(75, 52, 10, 0)', ease: Power1.easeOut });

            TweenLite.set($('.network'), { x: -42, rotation: -120, opacity: 0, display: 'block' });
            TweenMax.staggerTo($('.network'), 0.3, { x: 0, rotation: 0, opacity: 1, ease: Back.easeOut }, 0.05);

            clearShare = function() {
                $(document).off('touchstart click', clearShare);
                setTimeout(function() { $('.share-prompt').on('click', shareThings); }, 0);

                $('.share-prompt').toggleClass('active');
                TweenMax.staggerTo($('.network'), 0.15, { x: 10, opacity: 0, ease: Power1.easeOut }, 0.05);
            };
            setTimeout(function() { $(document).on('touchstart click', clearShare); }, 0);
        };
        $('.share-prompt').on('click', shareThings);


        /**
         *
         *
         *
         * Pablo Interaction
         *
         *
         *
         */

        var pixel = new Uint8Array(4);
        var framebuffer;

        var clearMouseConstraint = function() {
            $(document).off('mousemove', updateMouseConstraint);
            $(document).off('mouseup', clearMouseConstraint);
            $(document).off('touchmove', updateMouseConstraint);
            $(document).off('touchend', clearMouseConstraint);

            control.bodyB = null;
            control.pointA = { x: 0, y: 0 };
            control.pointB = { x: 0, y: 0 };

            drawCanvas(6, 9);
        };

        var updateMouseConstraint = function(e) {
            e = e.type == 'touchmove' ? e.originalEvent.touches[0] : e;

            control.pointA.x = (e.clientX - WIDTH / 2) / (HEIGHT / 0.75) * 800 + 400;
            control.pointA.y = e.clientY / HEIGHT * 600;
        };
        var onDocumentMouseDown = function(e) {
            if (params.pause) return;

            if (e.type == 'touchstart') e.preventDefault();

            e = e.type == 'touchstart' ? e.originalEvent.touches[0] : e;

            renderer.render(scene, camera, rtTexture, true);
            framebuffer = rtTexture.__webglFramebuffer;
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
            gl.viewport(e.clientX, HEIGHT - e.clientY, 1, 1);
            gl.readPixels(e.clientX, HEIGHT - e.clientY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            // console.log(pixel);

            if (!pixel[3]) return;

            drawCanvas(2, 8);

            control.pointA.x = (e.clientX - WIDTH / 2) / (HEIGHT / 0.75) * 800 + 400;
            control.pointA.y = e.clientY / HEIGHT * 600;

            if (e.clientY < HEIGHT / 2) {

                // Head
                control.bodyB = head.bodies[3];
            } else {

                // neck
                control.bodyB = neck.bodies[5];
            }
            control.angleB = 0;
            control.pointB = { x: control.pointA.x - control.bodyB.position.x, y: control.pointA.y - control.bodyB.position.y };

            $(document).on('mousemove', updateMouseConstraint);
            $(document).on('mouseup', clearMouseConstraint);
            $(document).on('touchmove', updateMouseConstraint);
            $(document).on('touchend', clearMouseConstraint);
        };

        $(renderer.domElement).on('mousedown', onDocumentMouseDown);
        $(renderer.domElement).on('touchstart', onDocumentMouseDown);


        $(window).on('resize', function() {
            WIDTH = window.innerWidth;
            HEIGHT = window.innerHeight;

            renderer.setSize(WIDTH, HEIGHT);
            camera.aspect = WIDTH / HEIGHT;
            camera.updateProjectionMatrix();

            rtTexture.setSize(WIDTH, HEIGHT);
        });

    });
        }
    }
}
</script>

<style lang='scss'>
</style>
