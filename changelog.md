## 更新日志

### 0.0.3

*2017-03-23*

- 优化 ops[input]['shouldBeVerified']可以使用“自定义方法”，且其中的this指向vm
- 优化 ops[input].rules[规则名称]为非异步方法时，其中的this指向vm

### 0.0.2
*2017-03-10*

- 优化 修改resetMixin为resetValidator，功能不变
- 新增 mixin实例operator
- 新增 validator参数新增ops[input]['shouldBeVerified']

### 0.0.1
*2017-03-03*
ct-adc-mixins发布