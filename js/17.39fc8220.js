(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{128:function(n,e,t){var o=t(36),r=t(132),c=t(133),i=t(27),a=t(60),u=t(129),l={},s={};(e=n.exports=function(n,e,t,h,d){var f,p,v,b,C=d?function(){return n}:u(n),x=o(t,h,e?2:1),k=0;if("function"!=typeof C)throw TypeError(n+" is not iterable!");if(c(C)){for(f=a(n.length);f>k;k++)if((b=e?x(i(p=n[k])[0],p[1]):x(n[k]))===l||b===s)return b}else for(v=C.call(n);!(p=v.next()).done;)if((b=r(v,x,p.value,e))===l||b===s)return b}).BREAK=l,e.RETURN=s},225:function(n,e,t){var o=t(22);n.exports=function(n,e,t){for(var r in e)t&&n[r]?n[r]=e[r]:o(n,r,e[r]);return n}},226:function(n,e){n.exports=function(n,e,t,o){if(!(n instanceof e)||void 0!==o&&o in n)throw TypeError(t+": incorrect invocation!");return n}},227:function(n,e,t){var o=t(21);n.exports=function(n,e){if(!o(n)||n._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return n}},241:function(n,e,t){"use strict";var o=t(17),r=t(8),c=t(16),i=t(18),a=t(12)("species");n.exports=function(n){var e="function"==typeof r[n]?r[n]:o[n];i&&e&&!e[a]&&c.f(e,a,{configurable:!0,get:function(){return this}})}},242:function(n,e,t){var o=t(36),r=t(93),c=t(37),i=t(60),a=t(243);n.exports=function(n,e){var t=1==n,u=2==n,l=3==n,s=4==n,h=6==n,d=5==n||h,f=e||a;return function(e,a,p){for(var v,b,C=c(e),x=r(C),k=o(a,p,3),m=i(x.length),y=0,g=t?f(e,m):u?f(e,0):void 0;m>y;y++)if((d||y in x)&&(b=k(v=x[y],y,C),n))if(t)g[y]=b;else if(b)switch(n){case 3:return!0;case 5:return v;case 6:return y;case 2:g.push(v)}else if(s)return!1;return h?-1:l||s?s:g}}},243:function(n,e,t){var o=t(244);n.exports=function(n,e){return new(o(n))(e)}},244:function(n,e,t){var o=t(21),r=t(135),c=t(12)("species");n.exports=function(n){var e;return r(n)&&("function"!=typeof(e=n.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},245:function(n,e,t){var o=t(128);n.exports=function(n,e){var t=[];return o(n,!1,t.push,t,e),t}},246:function(n,e,t){"use strict";var o=t(16).f,r=t(56),c=t(225),i=t(36),a=t(226),u=t(128),l=t(88),s=t(134),h=t(241),d=t(18),f=t(92).fastKey,p=t(227),v=d?"_s":"size",b=function(n,e){var t,o=f(e);if("F"!==o)return n._i[o];for(t=n._f;t;t=t.n)if(t.k==e)return t};n.exports={getConstructor:function(n,e,t,l){var s=n(function(n,o){a(n,s,e,"_i"),n._t=e,n._i=r(null),n._f=void 0,n._l=void 0,n[v]=0,void 0!=o&&u(o,t,n[l],n)});return c(s.prototype,{clear:function(){for(var n=p(this,e),t=n._i,o=n._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete t[o.i];n._f=n._l=void 0,n[v]=0},delete:function(n){var t=p(this,e),o=b(t,n);if(o){var r=o.n,c=o.p;delete t._i[o.i],o.r=!0,c&&(c.n=r),r&&(r.p=c),t._f==o&&(t._f=r),t._l==o&&(t._l=c),t[v]--}return!!o},forEach:function(n){p(this,e);for(var t,o=i(n,arguments.length>1?arguments[1]:void 0,3);t=t?t.n:this._f;)for(o(t.v,t.k,this);t&&t.r;)t=t.p},has:function(n){return!!b(p(this,e),n)}}),d&&o(s.prototype,"size",{get:function(){return p(this,e)[v]}}),s},def:function(n,e,t){var o,r,c=b(n,e);return c?c.v=t:(n._l=c={i:r=f(e,!0),k:e,v:t,p:o=n._l,n:void 0,r:!1},n._f||(n._f=c),o&&(o.n=c),n[v]++,"F"!==r&&(n._i[r]=c)),n},getEntry:b,setStrong:function(n,e,t){l(n,e,function(n,t){this._t=p(n,e),this._k=t,this._l=void 0},function(){for(var n=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?s(0,"keys"==n?e.k:"values"==n?e.v:[e.k,e.v]):(this._t=void 0,s(1))},t?"entries":"values",!t,!0),h(e)}}},247:function(n,e,t){"use strict";var o=t(17),r=t(15),c=t(92),i=t(28),a=t(22),u=t(225),l=t(128),s=t(226),h=t(21),d=t(57),f=t(16).f,p=t(242)(0),v=t(18);n.exports=function(n,e,t,b,C,x){var k=o[n],m=k,y=C?"set":"add",g=m&&m.prototype,_={};return v&&"function"==typeof m&&(x||g.forEach&&!i(function(){(new m).entries().next()}))?(m=e(function(e,t){s(e,m,n,"_c"),e._c=new k,void 0!=t&&l(t,C,e[y],e)}),p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(n){var e="add"==n||"set"==n;n in g&&(!x||"clear"!=n)&&a(m.prototype,n,function(t,o){if(s(this,m,n),!e&&x&&!h(t))return"get"==n&&void 0;var r=this._c[n](0===t?0:t,o);return e?this:r})}),x||f(m.prototype,"size",{get:function(){return this._c.size}})):(m=b.getConstructor(e,n,C,y),u(m.prototype,t),c.NEED=!0),d(m,n),_[n]=m,r(r.G+r.W+r.F,_),x||b.setStrong(m,n,C),m}},248:function(n,e,t){var o=t(130),r=t(245);n.exports=function(n){return function(){if(o(this)!=n)throw TypeError(n+"#toJSON isn't generic");return r(this)}}},249:function(n,e,t){"use strict";var o=t(15);n.exports=function(n){o(o.S,n,{of:function(){for(var n=arguments.length,e=new Array(n);n--;)e[n]=arguments[n];return new this(e)}})}},250:function(n,e,t){"use strict";var o=t(15),r=t(131),c=t(36),i=t(128);n.exports=function(n){o(o.S,n,{from:function(n){var e,t,o,a,u=arguments[1];return r(this),(e=void 0!==u)&&r(u),void 0==n?new this:(t=[],e?(o=0,a=c(u,arguments[2],2),i(n,!1,function(n){t.push(a(n,o++))})):i(n,!1,t.push,t),new this(t))}})}},333:function(n,e,t){"use strict";t.r(e);var o=t(4),r=t.n(o),c=t(5),i=t.n(c),a=t(2),u=t.n(a),l=t(6),s=t.n(l),h=t(398),d=(t(470),function(n){function e(){var n,o,c,a;i()(this,e);for(var l=arguments.length,s=Array(l),h=0;h<l;h++)s[h]=arguments[h];return o=c=u()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(s))),c.document=function(){return{document:t(419),className:"checkbox-page"}},a=o,u()(c,a)}return s()(e,n),e}(h.a));e.default=d},398:function(n,e,t){"use strict";var o=t(391),r=t.n(o),c=t(392),i=t.n(c),a=t(393),u=t.n(a),l=t(4),s=t.n(l),h=t(5),d=t.n(h),f=t(7),p=t.n(f),v=t(2),b=t.n(v),C=t(6),x=t.n(C),k=t(0),m=t.n(k),y=t(55),g=t.n(y),_=t(394),E=t.n(_),D=(t(403),t(400)),w=t(19),N=t.n(w),G=t(395),R=(t(396),function(n){function e(n){d()(this,e);var t=b()(this,(e.__proto__||s()(e)).call(this,n));return t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t}return x()(e,n),p()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&g.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(6),t.e(7),t.e(71)]).then(t.bind(null,544)).then(function(n){return{args:["context","React","ReactDOM","zarm"],argv:[e,m.a,g.a,n]}}).then(function(t){var o=t.args,r=t.argv;n=n.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+e.containerId+"')");var c=Object(G.transform)(n,{presets:["es2015","react"]}).code;o.push(c),(new(Function.prototype.bind.apply(Function,[null].concat(N()(o))))).apply(void 0,N()(r)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return"/panel"===this.props.location.pathname?m.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}):m.a.createElement(D.a,{titleRender:m.a.createElement("span",null,this.title)},m.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}))}}]),e}(m.a.Component)),z=t(401),A=t(402),M=function(n){function e(n){d()(this,e);var t=b()(this,(e.__proto__||s()(e)).call(this,n));return t.nodeList=[],t.components=new u.a,t.renderer=new E.a.Renderer,t}return x()(e,n),p()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){g.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,c=r()(this.components);!(n=(o=c.next()).done);n=!0){var a=o.value,u=i()(a,2),l=u[0],s=u[1],h=document.getElementById(l);this.nodeList.push(h),h instanceof HTMLElement&&g.a.render(s,h)}}catch(n){e=!0,t=n}finally{try{!n&&c.return&&c.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=e.document,o=e.className;if("string"==typeof t){this.components.clear();var r=E()(t.replace(/:::\s?api\s?([^]+?):::/g,"").replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,o){var r=o.toString(36);return n.components.set(r,m.a.createElement(R,n.props,t)),"<div id="+r+"></div>"}),{renderer:this.renderer});return m.a.createElement(z.a,{className:o},m.a.createElement("main",{dangerouslySetInnerHTML:{__html:r}}),m.a.createElement(A.a,null))}return m.a.createElement("span",null)}}]),e}(m.a.Component);e.a=M},419:function(n,e){n.exports='## 复选框 Checkbox\n\n:::demo 基本用法\n```jsx\nimport { Cell, Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell><Checkbox>普通</Checkbox></Cell>\n        <Cell><Checkbox defaultChecked>默认选中</Checkbox></Cell>\n        <Cell><Checkbox disabled>禁用</Checkbox></Cell>\n        <Cell><Checkbox defaultChecked disabled>选中且禁用</Checkbox></Cell>\n        <Cell className="agreement-box">\n          <Checkbox id="agreement" />\n          <label htmlFor="agreement">阅读并同意<a href="/#" onClick={(e) => { e.preventDefault(); alert(\'agree it\'); }}>《XXX条款》</a>中的相关规定</label>\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 按钮样式\n```jsx\nimport { Cell, Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Checkbox.Group type="button">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          普通\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button" defaultValue={[\'0\', \'1\']}>\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          指定默认值\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2" disabled>选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          禁用指定项\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button" shape="radius">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          圆角\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button" shape="round">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          椭圆角\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 块级样式\n```jsx\nimport { Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="block-box">\n        <Checkbox.Group block type="button">\n          <Checkbox value="0">选项一</Checkbox>\n          <Checkbox value="1">选项二</Checkbox>\n          <Checkbox value="2">选项三</Checkbox>\n        </Checkbox.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 列表样式\n```jsx\nimport { Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Checkbox.Group type="cell">\n          <Checkbox value="0">选项一</Checkbox>\n          <Checkbox value="1">选项二</Checkbox>\n          <Checkbox value="2" disabled>选项三（禁止选择）</Checkbox>\n        </Checkbox.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 列表样式禁用状态\n```jsx\nimport { Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Checkbox.Group disabled type="cell">\n          <Checkbox value="0">选项一</Checkbox>\n          <Checkbox value="1">选项二</Checkbox>\n          <Checkbox value="2">选项三</Checkbox>\n        </Checkbox.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n#### Checkbox\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-checkbox | | 类名前缀 |\n| className | string | | | 追加类名 |\n| checked | boolean | | | 是否选中 |\n| shape | string | | `radius`, `round` | 形状 |\n| block | boolean | false | | 是否为块级元素 |\n| type | string | | `button`, `cell` | 显示类型 |\n| defaultChecked | boolean | | | 初始是否选中 |\n| value | string &#124; number | | | 值 |\n| disabled | boolean | false | | 是否禁用 |\n| onChange | <code>(checked: boolean) => void</code> | | <code>\\(checked: boolean\\)</code> | 值变化时触发的回调函数 |\n| id | string | | | 方便外部带有for属性的label标签控制当前checkbox |\n\n#### Checkbox.Group\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-checkbox | | 类名前缀 |\n| className | string | | | 追加类名 |\n| block | boolean | false | | 是否为块级元素 |\n| shape | string | | `radius`, `round` | 形状 |\n| value | Array&lt;number &#124; string&gt; | [ ] | | 选中值 |\n| type | string | | `button`, `cell` | 显示类型 |\n| defaultValue | Array&lt;number &#124; string&gt; | [ ] | | 初始选中值 |\n| disabled | boolean | false | | 是否禁用 |\n| onChange | <code>(value: Array&lt;number &#124; string&gt;) => void</code> | noop | \\(value: Array&lt;number &#124; string&gt;\\) | 值变化时触发的回调函数 |\n| compact | boolean | false | | group内的checkbox（type="button"）是否无缝相连 |\n\n:::'},470:function(n,e,t){}}]);