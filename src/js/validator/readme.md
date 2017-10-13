## 安装 

```
npm install ct-adc-mixins -D
```

## 使用

```
import mixins from 'ct-adc-mixins';
var Validator=mixins.Validator;
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
        shouldBeVerified: 'form.requireAge'
        form: 'form.age'
    }
}
```


### ops[表单控件key]

ops中的每一项对应一个表单控件的验证;该项的key通常以控件的key作为名字。

#### ops[表单控件key].rules

rules中的每一项对应一个该控件的规则。

##### ops[表单控件key].rules[规则名称]

该项有两个字段,分别为:

* rule

    定义规则的内容

    可以为正则表达式/普通过滤函数/返回Promise实例的函数。
    **当其为函数时，其中的this指向vm实例，即使用该mixin的Vue实例对象;**

* async

    标注该条验证规则是否为异步验证。

#### ops[表单控件key].form

该条控件验证规则对应于vue对象中的数据,支持'form.age'方式，即对应vue中的data.form.age进行验证;

#### ops[表单控件key].shouldBeVerified

该字段可以有多种类型:

* 当该字段为String类型时，它指向vm中的数据/计算属性/方法;支持链式key，如'form.requireAge'
* 当该字段为Function类型时，其中的this指向vm实例，即使用该mixin的Vue实例对象;
* 当该字段为Boolean类型时，如果该值为false，则不进行该表单控件的判断，直接设置为true。如果该值为true，则正常判断;

**注意**：该项不接受异步操作过滤，如进行一个请求判断后才决定是否验证。后续如有需求可以通过promise实现。

## 数据

### formTouched

表单控件是否已被touch；可以理解为是否已被操作；

例如：
1. input的change事件回调中设置该input的touch值为true；
2. 异步检查按钮的click事件回调中设置它要验证的input的touch值为true；

以上两种情况都说明这些input被操作过了。

### checkTransfer

为computed属性设置的验证结果中转，需要异步验证的控件的结果都需要在checkTransfer中进行中转并中转到validation中相应的属性。

## 计算属性

### validation

验证结果对象

```
{
    _pass:false,
    name:{
        _pass:false,
        isRequired:false,
        lt5:true
    },
    age:{
        _pass:true,
        isNumber:true
    }
}
```

#### validation._pass

整个表单是否成功

#### validation[input]._pass

单个表单元素的验证是否通过

#### validation[input][rule]

单个表单元素的某条规则是否验证通过


### formAllTouched 

是否所有的表单控件都被touch过。

## 方法

### validate

对一个input的所有规则进行验证；参数为input名称，如上面的name/age。

### validateAsync

异步验证一个input；参数为input名称，如上面的name/age。
该异步验证返回一个Promise对象，开发者需在promise的then回调中执行后台提交逻辑，以此保证在提交数据前所有的异步验证执行结束。

### touch

touch一个input；参数为input名称，如上面的name/age。

### touchAll

touch所有的表单控件;无参数。

### resetValidator

重置该mixin中的数据。


## Q & A

### touch标记的作用？

touch标记主要用于让开发者可以自行控制验证信息是否展示、验证是否被触发。
具体作用：

1. 手动验证表单；当一个input在formTouched中的值为false时，它的验证信息会被默认置为false,此时并没有真正验证此表单元素;

2. 开发者可以控制是否展示验证信息；开发者可以在表单验证信息展示前检查formTouched中该表单元素的touch标记，如果为false(即用户没有对此进行操作)则不展示验证信息。

### 如果进行异步验证的流程控制？

异步验证的实质就是promise链的管理，在新建一个validator时，对于异步验证传入一个返回promise对象的方法，在validator的validate方法中，
只是对promise链添加了then和catch进行结果获取并将其注入到validation，所以开发者在外部接收的还是promise对象，且此时的异步验证已经结束，
可以直接检测validation来获取最新的验证结果。










