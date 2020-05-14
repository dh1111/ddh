<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/About">About</router-link> -->
      <x-footer v-if="footer_show"></x-footer>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Footer from './components/foot'
export default {
    name: 'App',
    data(){
        return{
            footer_show:true,
            docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
            showHeight: document.documentElement.clientHeight,   //实时屏幕高度
        }
    },
    components: {
        'x-footer':Footer,
    },
    mounted(){
        window.onresize = ()=>{
            return(()=>{
                this.showHeight = document.body.clientHeight;
            })()
        }
    },
    watch:{
        showHeight() {
            if(this.docmHeight > this.showHeight){
                this.hidshow=false
            }else{
                this.hidshow=true
            }
        }
    },
    methods : {
        footer(bool){
          this.footer_show = bool;
        },
    }
}
</script>

<style lang="scss">

</style>


