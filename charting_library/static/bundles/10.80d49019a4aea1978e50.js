(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/KDZ":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("mrSG"),a=n("q1tI"),o=function(e){function t(t){var n=e.call(this,t)||this;return n._handleChange=function(){n.forceUpdate()},n.state={query:window.matchMedia(n.props.rule)},n}return Object(r.__extends)(t,e),t.prototype.componentDidMount=function(){this._subscribe(this.state.query)},t.prototype.componentDidUpdate=function(e,t){this.state.query!==t.query&&(this._unsubscribe(t.query),this._subscribe(this.state.query))},t.prototype.componentWillUnmount=function(){this._unsubscribe(this.state.query)},t.prototype.render=function(){return this.props.children(this.state.query.matches)},t.getDerivedStateFromProps=function(e,t){return e.rule!==t.query.media?{query:window.matchMedia(e.rule)}:null},t.prototype._subscribe=function(e){e.addListener(this._handleChange)},t.prototype._unsubscribe=function(e){e.removeListener(this._handleChange)},t}(a.PureComponent)},"02pg":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n("TSYQ"),o=n("XiJV");function i(e){return r.createElement("div",{className:a(o.separator,e.className)})}},ASyk:function(e,t,n){e.exports={"tablet-normal-breakpoint":"screen and (max-width: 768px)","small-height-breakpoint":"screen and (max-height: 360px)","tablet-small-breakpoint":"screen and (max-width: 419px)"}},ItnF:function(e,t,n){e.exports={dialog:"dialog-2QwUBM-N",wrapper:"wrapper-3ePvQMAQ",separator:"separator-1L40XQyb"}},XiJV:function(e,t,n){e.exports={separator:"separator-1TZB5HZ-"}},g89m:function(e,t,n){"use strict";var r=n("mrSG"),a=n("q1tI"),o=n.n(a),i=n("Eyy1"),l=n("TSYQ"),s=n.n(l),u=n("/3z9"),c=n("d700"),d=n("WXjp"),p=n("02pg"),m=n("uhCe"),h=n("/KDZ"),f=n("pafz"),b=n("ZjKI"),_=n("FQhm"),v=n("Iivm"),w=n("zztK"),g=n("px1m");function y(e){var t=e.title,n=e.subtitle,r=e.onClose,a=e.renderBefore,i=e.renderAfter;return o.a.createElement("div",{className:s()(g.container,n&&g.unsetAlign)},a,o.a.createElement("div",{"data-dragg-area":!0,className:g.title},o.a.createElement("div",{className:g.ellipsis},t),n&&o.a.createElement("div",{className:s()(g.ellipsis,g.subtitle)},n)),i,o.a.createElement(v.Icon,{className:g.close,icon:w,onClick:r,"data-name":"close","data-role":"button"}))}var C=n("ItnF");n.d(t,"a",(function(){return E}));var N={vertical:20},x={vertical:0},E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._controller=null,t._reference=null,t._renderChildren=function(e,n){return t._controller=e,t.props.render({requestResize:t._requestResize,centerAndFit:t._centerAndFit,isSmallWidth:n})},t._handleReference=function(e){return t._reference=e},t._handleClose=function(){t.props.onClose()},t._handleKeyDown=function(e){if(!e.defaultPrevented)switch(t.props.onKeyDown&&t.props.onKeyDown(e),Object(u.hashFromEvent)(e)){case 27:var n=document.activeElement,r=Object(i.ensureNotNull)(t._reference);if(null!==n){if(e.preventDefault(),S(n))return void t._handleClose();if(Object(c.b)(n))return void r.focus()
;if(r.contains(n))return void t._handleClose()}}},t._requestResize=function(){null!==t._controller&&t._controller.recalculateBounds()},t._centerAndFit=function(){null!==t._controller&&t._controller.centerAndFit()},t}return Object(r.__extends)(t,e),t.prototype.componentDidMount=function(){_.subscribe(b.CLOSE_POPUPS_AND_DIALOGS_COMMAND,this._handleClose,null)},t.prototype.componentWillUnmount=function(){_.unsubscribe(b.CLOSE_POPUPS_AND_DIALOGS_COMMAND,this._handleClose,null)},t.prototype.focus=function(){Object(i.ensureNotNull)(this._reference).focus()},t.prototype.render=function(){var e=this,t=this.props,n=t.className,r=t.isOpened,a=t.title,i=t.dataName,l=t.onClickOutside,u=t.additionalElementPos,c=t.additionalHeaderElement,b=t.backdrop,_=t.shouldForceFocus,v=void 0===_||_,w=t.showSeparator,g=t.subtitle,E=t.fullScreen,S=void 0!==E&&E,A="after"!==u?c:void 0,O="after"===u?c:void 0;return o.a.createElement(h.a,{rule:m.a.SmallHeight},(function(t){return o.a.createElement(h.a,{rule:m.a.TabletSmall},(function(u){return o.a.createElement(d.a,{className:s()(C.dialog,n),isOpened:r,reference:e._handleReference,onKeyDown:e._handleKeyDown,onClickOutside:l,fullscreen:u||S,guard:t?x:N,boundByScreen:u||S,shouldForceFocus:v,backdrop:b,name:e.props.dataName},o.a.createElement("div",{className:C.wrapper,"data-name":i,"data-dialog-name":a},o.a.createElement(y,{onClose:e._handleClose,renderAfter:O,renderBefore:A,subtitle:g,title:a}),w&&o.a.createElement(p.a,{className:C.separator}),o.a.createElement(f.a.Consumer,null,(function(t){return e._renderChildren(t,u||S)}))))}))}))},t}(o.a.PureComponent);function S(e){return"true"===e.getAttribute("data-haspopup")&&"true"!==e.getAttribute("data-expanded")}},px1m:function(e,t,n){e.exports={"small-height-breakpoint":"screen and (max-height: 360px)",container:"container-12F9cTKw",unsetAlign:"unsetAlign-39w7dDTj",title:"title-TQFObfxW",subtitle:"subtitle-EM1kLgFz",ellipsis:"ellipsis-1PT8QOxq",close:"close-3NTwKnT_"}},uhCe:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ASyk"),a={SmallHeight:r["small-height-breakpoint"],TabletSmall:r["tablet-small-breakpoint"],TabletNormal:r["tablet-normal-breakpoint"]}},zztK:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>'}}]);