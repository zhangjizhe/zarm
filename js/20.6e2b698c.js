(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{237:function(n,e,t){"use strict";t.r(e);var r=t(33),a=t.n(r),o=t(34),i=t.n(o),c=t(35),s=t.n(c),l=t(36),u=t.n(l),m=t(259),d=(t(345),function(n){function e(){var n,r,o,c;i()(this,e);for(var l=arguments.length,u=Array(l),m=0;m<l;m++)u[m]=arguments[m];return r=o=s()(this,(n=e.__proto__||a()(e)).call.apply(n,[this].concat(u))),o.document=function(){return{document:t(347),className:"notice-bar-page"}},c=r,s()(o,c)}return u()(e,n),e}(m.a));e.default=d},253:function(n,e,t){"use strict";var r=t(33),a=t.n(r),o=t(34),i=t.n(o),c=t(37),s=t.n(c),l=t(35),u=t.n(l),m=t(36),d=t.n(m),p=t(0),h=t.n(p),f=t(251),v=t.n(f),N=function(n){function e(){return i()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return d()(e,n),s()(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.className,r=n.titleRender,a=n.moreRender,o=n.children,i=v()(""+e,t);return h.a.createElement("div",{className:i},h.a.createElement("div",{className:e+"-header"},r&&h.a.createElement("div",{className:e+"-title"},r),a&&h.a.createElement("div",{className:e+"-more"},a)),h.a.createElement("div",{className:e+"-body"},o))}}]),e}(p.PureComponent);e.a=N,N.defaultProps={prefixCls:"za-panel"}},254:function(n,e,t){"use strict";var r=t(252),a=t.n(r),o=t(33),i=t.n(o),c=t(34),s=t.n(c),l=t(37),u=t.n(l),m=t(35),d=t.n(m),p=t(36),h=t.n(p),f=t(0),v=t.n(f),N=t(251),y=t.n(N),g=(t(260),function(n){function e(){return s()(this,e),d()(this,(e.__proto__||i()(e)).apply(this,arguments))}return h()(e,n),u()(e,[{key:"componentDidMount",value:function(){if("index-page"===this.props.className){var n=window.sessionStorage[this.props.className];n&&(this.container.scrollTop=n)}}},{key:"componentWillUnmount",value:function(){if("index-page"===this.props.className){var n=this.container.scrollTop;window.sessionStorage[this.props.className]=n}}},{key:"render",value:function(){var n=this,e=this.props,t=e.className,r=e.children,o=y()(a()({"app-container":!0},t,!!t));return v.a.createElement("div",{ref:function(e){n.container=e},className:o},v.a.createElement("a",{className:"github",href:"https://github.com/ZhonganTechENG/zarm"},v.a.createElement("svg",{"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16"},v.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),r)}}]),e}(f.Component));e.a=g},255:function(n,e,t){"use strict";var r=t(33),a=t.n(r),o=t(34),i=t.n(o),c=t(37),s=t.n(c),l=t(35),u=t.n(l),m=t(36),d=t.n(m),p=t(0),h=t.n(p),f=(t(261),function(n){function e(){return i()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return d()(e,n),s()(e,[{key:"render",value:function(){return h.a.createElement("footer",null,h.a.createElement("div",{className:"copyright"},h.a.createElement("div",{className:"copyright-cn"},"众安·体验设计中心"),h.a.createElement("div",{className:"copyright-en"},"Zhongan UX Densign")))}}]),e}(p.Component));e.a=f},256:function(n,e,t){"use strict";t(258),t(262)},257:function(n,e,t){"use strict";t(256),t(263)},259:function(n,e,t){"use strict";var r=t(264),a=t.n(r),o=t(266),i=t.n(o),c=t(267),s=t.n(c),l=t(33),u=t.n(l),m=t(34),d=t.n(m),p=t(37),h=t.n(p),f=t(35),v=t.n(f),N=t(36),y=t.n(N),g=t(0),E=t.n(g),_=t(38),w=t.n(_),k=t(268),B=t.n(k),C=(t(257),t(253)),b=t(27),D=t.n(b),x=t(269),M=(t(258),t(270),function(n){function e(n){d()(this,e);var t=v()(this,(e.__proto__||u()(e)).call(this,n));return t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t}return y()(e,n),h()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&w.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(36),t.e(34)]).then(t.bind(null,385)).then(function(n){return{args:["context","React","ReactDOM","zarm"],argv:[e,E.a,w.a,n]}}).then(function(t){var r=t.args,a=t.argv;n=n.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+e.containerId+"')");var o=Object(x.transform)(n,{presets:["es2015","react"]}).code;r.push(o),(new(Function.prototype.bind.apply(Function,[null].concat(D()(r))))).apply(void 0,D()(a)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return"/panel"===this.props.location.pathname?E.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}):E.a.createElement(C.a,{titleRender:E.a.createElement("span",null,this.title)},E.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}))}}]),e}(E.a.Component)),I=t(254),z=t(255),R=function(n){function e(n){d()(this,e);var t=v()(this,(e.__proto__||u()(e)).call(this,n));return t.nodeList=[],t.components=new s.a,t.renderer=new B.a.Renderer,t}return y()(e,n),h()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){w.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var r,o=a()(this.components);!(n=(r=o.next()).done);n=!0){var c=r.value,s=i()(c,2),l=s[0],u=s[1],m=document.getElementById(l);this.nodeList.push(m),m instanceof HTMLElement&&w.a.render(u,m)}}catch(n){e=!0,t=n}finally{try{!n&&o.return&&o.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=e.document,r=e.className;if("string"==typeof t){this.components.clear();var a=B()(t.replace(/:::\s?api\s?([^]+?):::/g,"").replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,r){var a=r.toString(36);return n.components.set(a,E.a.createElement(M,n.props,t)),"<div id="+a+"></div>"}),{renderer:this.renderer});return E.a.createElement(I.a,{className:r},E.a.createElement("main",{dangerouslySetInnerHTML:{__html:a}}),E.a.createElement(z.a,null))}return E.a.createElement("span",null)}}]),e}(E.a.Component);e.a=R},345:function(n,e,t){},347:function(n,e){n.exports="## 通告栏 NoticeBar\n\n:::demo 基本用法\n```jsx\nimport { NoticeBar, Icon } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <NoticeBar>普通</NoticeBar>\n        <NoticeBar theme=\"error\">错误色</NoticeBar>\n        <NoticeBar icon={<Icon type=\"wrong-round\" />}>自定义图标</NoticeBar>\n        <NoticeBar autoscroll>各位zarmer请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。</NoticeBar>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 特定场景\n```jsx\nimport { NoticeBar  } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <NoticeBar hasArrow onClick={() => alert('click this notice!')}>链接样式的</NoticeBar>\n        <NoticeBar hasClosable>可关闭的</NoticeBar>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-notice-bar | | 类名前缀 |\n| className | string | | | 追加类名 |\n| theme | string | 'warning' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |\n| icon | any | | | 设置图标 |\n| autoscroll | boolean | false | | 是否开启自动滚动轮播 |\n| hasClosable | boolean | false | | 是否显示关闭按钮 |\n| hasArrow | boolean | false | | 是否显示箭头 |\n| onClick | <code>() => void</code> | noop | | 点击后触发的回调函数 |\n\n:::"}}]);