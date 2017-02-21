## 安装 

```
npm install ct-adc-mixins -D
```

## 使用

```
import mixins from 'ct-adc-mixins';
var Validator=mixins.validator;
var mixin=new Validator(ops);
new Vue({
    mixins:[mixin]
})
```

## ops配置项

示例:
```
{
    name: {
        rules: {
            required:{
                rule:/.+/
            },
            lt5:{
                rule:/.{5,}/
            }
        },
        form: 'form.name'
    },
    age: {
        rules: {
            isNumber:{
                rule:/^\d+$/
            }
        },
        form: 'form.age'
    }
}
```


### ops[表单控件key]

ops中的每一项对应一个表单控件的验证;该项的key通常以控件的key作为名字。

#### ops[表单控件key].rules

rules中的每一项对应一个该控件的规则。

##### ops[表单控件key].rules[规则名称]
 
rule: 规则的内容；可以为正则表达式/普通过滤函数/返回Promise实例的函数。

async: 标注该条验证规则是否为异步验证。

#### ops[表单控件key].form

该条控件验证规则对应于vue对象中的数据,支持'form.age'方式，即对应vue中的data.form.age进行验证;

## 数据

### formTouched

表单控件是否已被touch；可以理解为是否已被操作；
例如：
1. input的change事件回调中设置该input的touch值为true；
2. 异步检查按钮的click事件回调中设置它要验证的input的touch值为true；

以上两种情况都说明这些input被操作过了。

### checking 

是否在异步验证中。

### checkTransfer

为computed属性设置的验证结果中转，需要异步验证的控件的结果都需要在checkTransfer中进行中转并中转到validation中相应的属性。

## 计算属性

### validation

验证结果对象。

```
{
    _pass:false,
    name:{
        isRequired:false,
        lt5:true
    },
    age:{
        isNumber:true
    }
}
```

### formAllTouched 

是否所有的表单控件都被touch过。

## 方法

### validate

对一个input的所有规则进行验证；参数为input名称，如上面的name/age。

### validateAsync

异步验证一个input；参数为input名称，如上面的name/age。

### touch

touch一个input；参数为input名称，如上面的name/age。

### touchAll

touch所有的表单控件;无参数。

### resetMixin

重置该mixin中的数据。







