import Vue from 'vue';
import update from './update.vue';
new Vue({
    el:'#app',
    components:{
        update:update
    },
    methods:{
        add(){
            this.$refs.update.reset();
            this.$refs.update.show();
        },
        edit(){
            this.$refs.update.reset();
            this.$refs.update.show();
        }
    }
});