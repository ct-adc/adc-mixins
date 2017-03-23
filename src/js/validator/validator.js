import utility from 'ct-utility';
function getInputs(ops){
    return Object.keys(ops);
}

function getFormTouched(ops){
    var formTouched = {};
    var inputs=getInputs(ops);
    inputs.map(input=> {
        formTouched[input] = false;
    });
    return formTouched;
}

function Mixin(ops) {
    //根据option生成一个对象
    var formTouched = getFormTouched(ops);
    var defaultData={
        formTouched: formTouched,
        checkTransfer: {}
    };
    return {
        data(){
            return JSON.parse(JSON.stringify(defaultData));
        },
        computed: {
            validation(){
                var that = this;
                var result = {};
                var inputs=getInputs(ops);
                inputs.map(input=> {
                    var shouldBeVerified;
                    if(typeof ops[input]['shouldBeVerified']==='function'){
                        shouldBeVerified=ops[input]['shouldBeVerified'].call(that);
                    }else if(typeof ops[input]['shouldBeVerified']==='boolean'){
                        shouldBeVerified=ops[input]['shouldBeVerified'];
                    }if(typeof ops[input]['shouldBeVerified']==='string'){
                        shouldBeVerified=that[ops[input]['shouldBeVerified']];
                    }
                    if(typeof shouldBeVerified==='undefined'){
                        shouldBeVerified=true;
                    }
                    if(that.formTouched[input] && shouldBeVerified){
                        result[input]=that.validate(input);
                        var notAllOk=Object.keys(result[input]).filter(rule=>{
                            return !result[input][rule];
                        }).length>0;
                        result[input]._pass=!notAllOk;
                    }else if(!shouldBeVerified){
                        let rules=Object.keys(ops[input].rules);
                        result[input]={
                            _pass:true
                        };
                        rules.map(rule=>{
                            result[input][rule]=true;
                        });
                    }else{
                        let rules=Object.keys(ops[input].rules);
                        result[input]={
                            _pass:false
                        };
                        rules.map(rule=>{
                            result[input][rule]=false;
                        });
                    }
                });
                if(that.formAllTouched){
                    result._pass = inputs.filter((input)=> {
                        var rules=Object.keys(result[input]);
                        var notAllOk = rules.filter(rule=> {
                                return !result[input][rule];
                            }).length>0;
                        return notAllOk;
                    }).length === 0;
                }
                return result;
            },
            /**
             * 是否所有的表单都被touch
             */
                formAllTouched(){
                var inputs=getInputs(ops);
                var that=this;
                return inputs.filter(input=>{
                        return !that.formTouched[input];
                    }).length===0;
            }
        },
        methods: {
            /**
             * 对一个input的所有规则进行验证
             */
                validate(input){
                var result={};
                var rules = ops[input].rules;
                var ruleKeys = Object.keys(rules);
                var data = utility.base.getObjValByKey(this, ops[input].form);
                ruleKeys.map(ruleKey=>{
                    var rule=rules[ruleKey].rule;
                    if(rules[ruleKey].async){
                        result[ruleKey]=this.checkTransfer[input];
                    }else{
                        if (utility.base.isRegExp(rule)) {
                            result[ruleKey]= rule.test(data);
                        } else if (typeof rule === 'function') {
                            result[ruleKey]= rule.call(this,data);
                        }
                    }
                });
                return result;
            },
            /**
             * 进行异步验证
             */
                validateAsync(input){
                var data = utility.base.getObjValByKey(this, ops[input].form);
                var rules=ops[input].rules;
                var ruleKeys=Object.keys(ops[input].rules);
                var firstRule=rules[ruleKeys[0]].rule;
                //需要保证只有一个异步验证且在rules规则的最后一项
                return firstRule(data).then((res)=> {
                    this.$set(this.checkTransfer, input, true);
                    return Promise.resolve(res);
                }).catch((err)=>{
                    this.$set(this.checkTransfer,input,false);
                    return Promise.reject(err);
                })
            },
            touch(input){
                this.formTouched[input] = true;
            },
            touchAll(){
                var that = this;
                Object.keys(that.formTouched).map((item)=> {
                    that.formTouched[item] = true;
                })
            },
            resetValidator(){
                utility.base.extend(true,this.$data,defaultData);
            }
        }
    }
}

export default Mixin;