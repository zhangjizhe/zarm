(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{692:function(n,e){n.exports="# Keyboard 虚拟键盘\n\n\n\n## Keyboard 平铺键盘\n```jsx\nimport { Cell, Select, Keyboard } from 'zarm';\n\nclass Demo extends React.Component {\n  state = {\n    type: 'number',\n  };\n\n  render() {\n    return (\n      <>\n        <Cell hasArrow title=\"键盘类型\">\n          <Select\n            value={this.state.type}\n            dataSource={[\n              { value: 'number', label: '数字键盘' },\n              { value: 'price', label: '金额键盘' },\n              { value: 'idcard', label: '身份证键盘' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                type: selected.map(item => item.value)[0],\n              });\n            }}\n          />\n        </Cell>\n        <Keyboard type={this.state.type} onKeyClick={(key) => console.log(key)} />\n      </>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## KeyboardPicker 键盘触发器\n```jsx\nimport { Cell, Button, KeyboardPicker, Input } from 'zarm';\n\nclass Demo extends React.Component {\n  state = {\n    visible: false,\n    value: '',\n  };\n\n  toggle() {\n    this.setState({ visible: !this.state.visible });\n  }\n\n  onKeyClick(key) {\n    console.log(key);\n    if (['close', 'ok'].indexOf(key) > -1) {\n      this.toggle();\n      return;\n    }\n\n    const value = this.state.value;\n    const newValue = (key === 'delete')\n      ? value.slice(0, value.length - 1)\n      : value + key;\n\n    if (newValue !== value) {\n      this.setState({ value: newValue });\n    }\n  }\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle()}>{visible ? '关闭' : '开启'}</Button>\n          }\n        >\n          拾取器触发方式\n        </Cell>\n\n        <KeyboardPicker\n          visible={visible}\n          onKeyClick={(key) => this.onKeyClick(key)}\n        />\n      </>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| type | string | 'number' | 键盘类型，可选值 `number`、`price`、`idcard` |\n| onKeyClick | (key?: string) => void | - | 点击按键时触发的回调函数 |\n\n### 仅 KeyboardPicker 支持的属性\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否展示 |\n"}}]);
//# sourceMappingURL=45.1239fcb6.js.map