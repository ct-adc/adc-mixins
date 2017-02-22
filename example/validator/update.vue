<template>
    <div class="modal fade" ref="root">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">编辑</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-2 control-label">名字:</label>

                            <div class="col-sm-6">
                                <input type="input" class="form-control" v-model="form.name" @click="touch('name')">
                            </div>
                            <div class="col-sm-4 text-danger form-control-static">
                                <span v-if="formTouched.name && !validation.name.required">请输入名字!</span>
                                <span v-else-if="formTouched.name && !validation.name.lt5">长度必须大于5!</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">年龄:</label>

                            <div class="col-sm-6">
                                <input type="input" class="form-control" v-model="form.age" @click="touch('age')">
                            </div>
                            <div class="col-sm-4 text-danger form-control-static">
                                <span v-if="formTouched.age && !validation.age.isNumber">请输入一个数字!</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">得分:</label>

                            <div class="col-sm-6">
                                <input type="input" class="form-control" v-model="form.grade" @click="touch('grade')">
                            </div>
                            <div class="col-sm-4 text-danger form-control-static">
                                <span v-if="formTouched.grade && !validation.grade.isPositive">请输入一个正数!</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">人员编号:</label>

                            <div class="col-sm-4">
                                <input type="input" class="form-control" v-model="form.id">
                            </div>
                            <div class="col-sm-2">
                                <button type="button" class="btn btn-default" @click="test">
                                    {{checking.id ? '检测中' : '检测'}}
                                </button>
                            </div>
                            <div class="col-sm-4 text-danger form-control-static">
                                <span v-if="formTouched.id && !validation.id.isExist">编号不存在!</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <span v-if="!checking && formAllTouched && !this.validation._pass" class="text-danger">验证不通过</span>
                    <button type="button" class="btn btn-default" @click="submit">确定</button>
                    <button type="button" class="btn btn-primary" @click="hide">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script type="es6">
    import Vue from 'vue';
    import mixins from '../../index.js';
    var Validator=mixins.validator;
    var ops={
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
        },
        grade: {
            rules: {
                isPositive:{
                    rule:function (data) {
                        return data > 0;
                    }
                }
            },
            form: 'form.grade'
        },
        id: {
            rules: {
                isExist:{
                    rule:function(data){
                        return Promise.resolve($.ajax({
                            url: '/recommendRuleV2/isExistRuleCode',
                            type: 'post',
                            data: {
                                RuleCode: data
                            }
                        })).then((res)=> {
                            if (res.status && res.data) {
                                return Promise.resolve(true);
                            } else {
                                return Promise.reject(false);
                            }
                        })
                    },
                    async:true
                }
            },
            form: 'form.id'
        }
    };
    function RD(data){
        $.extend(data,{
            form: {
                name: '',
                age: '',
                grade: '',
                id: ''
            },
            checking:{
                id:false
            }
        });
    }
    var data={};
    var validator=new Validator(ops);
    RD(data);
    export default {
        mixins: [validator],
        data(){
            return data;
        },
        methods: {
            reset(){
                RD(data);
                this.resetMixin();
            },
            show(){
                $(this.$refs.root).modal('show');
            },
            hide(){
                $(this.$refs.root).modal('hide');
            },
            test(){
                this.touch('id');
                this.checking.id=true;
                this.validateAsync('id').then(()=>{
                    this.checking.id=false;
                })
            },
            submit(){
                //手动验证需要异步验证的表单
                this.validateAsync('id').then(()=>{
                    console.log(JSON.stringify(this.validation));
                    //touch所有的表单元素
                    this.touchAll();
                })

                //如果有多个异步验证
                //Promise.all([this.validateAsync('id1'),this.validateAsync('id2'),this.validateAsync('id3')]).then(()=>{
                //    //所有的验证结束
                //})

            }
        }
    };
</script>