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
                            <div class="col-sm-4 text-danger form-control-static" v-if="formTouched.grade">
                                <span v-if="!validation.grade.nameNotEmpty">请先输入名字!</span>
                                <span v-else-if="!validation.grade.isPositive">请输入一个正数!</span>
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
    import Validator from '../../src/js/validator/validator.js';
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
            shouldBeVerified(){
                return this.form.name!=='';
            },
            form: 'form.age'
        },
        grade: {
            rules: {
                nameNotEmpty:{
                    rule:function(){
                        return this.form.name!=='';
                    }
                },
                isPositive:{
                    rule:function (data) {
                        return data > 0;
                    }
                },

                isRight:{
                    rule:function(data){
                        return this.from.other>0 && data>0;
                    }
                }

            },
            form: 'form.grade'
        },
        id:{
            rules:{
                isExist:{
                    rule:function(data){
                        return Promise.resolve($.ajax({
                            url:'/api/checkId',
                            type:'post',
                            data:{
                                id:data
                            }
                        })).then(res=>{
                            if(res.Status){
                                return Promise.resolve(res);
                            }else{
                                return Promise.reject(res.Message);
                            }
                        })
                    },
                    async:true
                }
            },
            form:'form.id'
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
        computed:{
            shouldVerifyAge(){
                return false;
            }
        },
        methods: {
            reset(){
                RD(data);
                this.resetValidator();
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
                //此时的promise可以不用处理结果，因为validator内部会帮你把结果写进validation里面
                this.validateAsync('id').then(()=>{
                    this.checking.id=false;
                })
            },
            submit(){
                //如果没有异步验证的情况，通过touchAll来触发所有表单元素的验证
                this.touchAll();

                //如果有异步验证的情况，加入异步验证如：
                //手动验证需要异步验证的表单
                //this.validateAsync('id').then((res)=>{
                //  this.touchAll(); //注意：请在此处触发信息显示，因为默认情况下异步验证的结果会被置为false
                //    if(validation._pass){
                //        //提交后端
                //        //注意：此时的validation中id的结果已经是做完验证的结果。
                //    }
                //})


                //如果有多个异步验证
                //Promise.all([this.validateAsync('id1'),this.validateAsync('id2'),this.validateAsync('id3')]).then(()=>{
                //    //所有的验证结束
                //      this.touchAll(); //注意：请在此处触发信息显示，因为默认情况下异步验证的结果会被置为false
                //    if(validation._pass){
                //        //提交后端
                //        //注意：此时的validation中id的结果已经是做完验证的结果。
                //    }
                //})

            }
        }
    };
</script>