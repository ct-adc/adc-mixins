/**
 * @author rubyisapm
 */
import utility from 'ct-utility';
var defaultData = {
    loading: false,
    response: {
        status: true,
        msg: ''
    },
    submitting: false
};
export default{
    data:JSON.parse(JSON.stringify(defaultData)),
    resetOperator(){
        utility.base.extend(true, this.$data, defaultData);
    }
}