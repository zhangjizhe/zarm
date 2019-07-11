(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{682:function(n,t){n.exports='# Button 按钮\n\n\n\n## 基本用法\n```jsx\nimport { Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button>default</Button>\n        <Button theme="primary">primary</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 块级按钮\n```jsx\nimport { Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button block>default</Button>\n        <Button block disabled>default disabled</Button>\n        <Button block theme="primary">primary</Button>\n        <Button block disabled theme="primary">primary disabled</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 按钮主题\n```jsx\nimport { Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button>default</Button>\n        <Button theme="primary">primary</Button>\n        <Button theme="danger">danger</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 按钮尺寸\n```jsx\nimport { Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button size="lg">lg</Button>\n        <Button>md</Button>\n        <Button size="sm">sm</Button>\n        <Button size="xs">xs</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 按钮形状\n```jsx\nimport { Button, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button shape="rect" theme="primary">rect</Button>\n        <Button theme="primary">radius</Button>\n        <Button shape="round" theme="primary">round</Button>\n        <Button shape="circle" theme="primary">circle</Button>\n        <Button shape="circle" icon={<Icon type="right" />} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 图标按钮\n```jsx\nimport { Button, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button icon={<Icon type="right-round" theme="success" />}>正确</Button>\n        <Button icon={<Icon type="wrong-round" theme="danger" />}>错误</Button>\n        <Button loading>加载中</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 链接按钮\n```jsx\nimport { Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button href="https://zarm.design">default</Button>\n        <Button theme="primary" href="https://zarm.design">primary</Button>\n        <Button disabled theme="primary" href="https://zarm.design">disabled</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 幽灵按钮\n```jsx\nimport { Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button block ghost>default</Button>\n        <Button block ghost theme="primary">primary</Button>\n        <Button block ghost theme="danger">danger</Button>\n        <Button block ghost disabled>disabled</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | \'default\' | 设置主题，可选值为 `default`、`primary`、`danger` |\n| size | string | \'md\' | 设置大小，可选值为 `md`、`lg`、`sm`、`xs` |\n| shape | string | \'radius\' | 设置形状，可选值为 `rect`、`radius`、`round`、`circle` |\n| block | boolean | false | 是否块级元素 |\n| ghost | boolean | false | 是否幽灵按钮 |\n| disabled | boolean | false | 是否禁用 |\n| loading | boolean | false | 是否加载中状态 |\n| icon | ReactNode | - | 设置图标 |\n| onClick | MouseEventHandler&lt;HTMLAnchorElement&gt; \\| MouseEventHandler&lt;HTMLButtonElement&gt; | - | 点击后触发的回调函数 |\n| htmlType | string | \'button\' | 设置`button`原生的`type`值，可选值为 `button`、`submit`、`reset` |\n| href | string | - | 点击跳转的地址，指定此属性`button`的行为和`a`链接一致 |\n| target | string | - | 相当于 a 链接的 target 属性，href 存在时生效 |\n\n'}}]);