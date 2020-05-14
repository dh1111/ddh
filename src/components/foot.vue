<template>
    <div>
        <van-tabbar v-model="active">
            <router-link to="/" class="router">
                <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            </router-link>
            <router-link to="/Home" class="router">
                <van-tabbar-item icon="search">标签</van-tabbar-item>
            </router-link>
            <router-link to="/About" class="router">
                <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
            </router-link>
            <!-- <van-tabbar-item icon="setting-o">标签</van-tabbar-item> -->
        </van-tabbar>
    </div>
</template>
    
<script>

    import { Tabbar, TabbarItem } from 'vant';
    export default{
        components: {
        
        },
        data(){
            return{
               active: 0,
            }
        },
        created(){
        
        },
        mounted()  {
        
        },
        methods:{
            
        }       
    }
</script>
<style >
      .router{
          width: 80%;
      }
</style>