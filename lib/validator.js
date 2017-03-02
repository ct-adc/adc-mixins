'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ctUtility = require('ct-utility');

var _ctUtility2 = _interopRequireDefault(_ctUtility);

var _a = require('./a.js');

var _a2 = _interopRequireDefault(_a);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_a2.default.a();
function getInputs(ops) {
    return Object.keys(ops);
}

function getFormTouched(ops) {
    var formTouched = {};
    var inputs = getInputs(ops);
    inputs.map(function (input) {
        formTouched[input] = false;
    });
    return formTouched;
}

function Mixin(ops) {
    //根据option生成一个对象
    var formTouched = getFormTouched(ops);
    var defaultData = {
        formTouched: formTouched,
        checkTransfer: {}
    };
    return {
        data: function data() {
            return JSON.parse(JSON.stringify(defaultData));
        },

        computed: {
            validation: function validation() {
                var that = this;
                var result = {};
                var inputs = getInputs(ops);
                inputs.map(function (input) {
                    if (that.formTouched[input]) {
                        result[input] = that.validate(input);
                    }
                });
                if (that.formAllTouched) {
                    result._pass = inputs.filter(function (input) {
                        var rules = Object.keys(result[input]);
                        var notAllOk = rules.filter(function (rule) {
                            return !result[input][rule];
                        }).length > 0;
                        return notAllOk;
                    }).length === 0;
                } else {
                    result._pass = false;
                }
                return result;
            },

            /**
             * 是否所有的表单都被touch
             */
            formAllTouched: function formAllTouched() {
                var inputs = getInputs(ops);
                var that = this;
                return inputs.filter(function (input) {
                    return !that.formTouched[input];
                }).length === 0;
            }
        },
        methods: {
            /**
             * 对一个input的所有规则进行验证
             */
            validate: function validate(input) {
                var _this = this;

                var result = {};
                var rules = ops[input].rules;
                var ruleKeys = Object.keys(rules);
                var data = _ctUtility2.default.base.getObjValByKey(this, ops[input].form);
                ruleKeys.map(function (ruleKey) {
                    var rule = rules[ruleKey].rule;
                    if (rules[ruleKey].async) {
                        result[ruleKey] = _this.checkTransfer[input];
                    } else {
                        if (_ctUtility2.default.base.isRegExp(rule)) {
                            result[ruleKey] = rule.test(data);
                        } else if (typeof rule === 'function') {
                            result[ruleKey] = rule(data);
                        }
                    }
                });
                return result;
            },

            /**
             * 进行异步验证
             */
            validateAsync: function validateAsync(input) {
                var _this2 = this;

                var data = _ctUtility2.default.base.getObjValByKey(this, ops[input].form);
                var rules = ops[input].rules;
                var ruleKeys = Object.keys(ops[input].rules);
                var firstRule = rules[ruleKeys[0]].rule;
                //需要保证只有一个异步验证且在rules规则的最后一项
                return firstRule(data).then(function (res) {
                    _this2.$set(_this2.checkTransfer, input, true);
                    return Promise.resolve(res);
                }).catch(function (err) {
                    _this2.$set(_this2.checkTransfer, input, false);
                    return Promise.reject(err);
                });
            },
            touch: function touch(input) {
                this.formTouched[input] = true;
            },
            touchAll: function touchAll() {
                var that = this;
                Object.keys(that.formTouched).map(function (item) {
                    that.formTouched[item] = true;
                });
            },
            resetMixin: function resetMixin() {
                _ctUtility2.default.base.extend(true, this.$data, defaultData);
            }
        }
    };
}

exports.default = Mixin;
