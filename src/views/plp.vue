<template>
    <div>
        <form action="/">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"
            />
        </form>
    </div>
</template>
           
<script>
    import { Toast } from 'vant';
    // Vue.use(Search);
    export default{
        components: {
        
        },
        data(){
            return{
                value:'',
            }
        },
        created(){
        
        },
        mounted()  {
        
        },
        methods:{
            onSearch(val) {

                Toast(val);

            },
            onCancel() {

                Toast('取消');

            },
        }       
    }
</script>
<style >
      
</style>