<template>
    <ul class="my-tab">
        <router-link
        tag='li'
        v-for='(item,index) in tab'
        :key='index'
        :to='item.path'
        active-class='sel'
        >{{item.name}}</router-link>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            tab:[{name:'推荐',path:'/recommend'},
            {name:'视频',path:'/shipin'},
            {name:'热点',path:'/hotspot'}]
        }
    }
}
</script>
<style lang="less" scoped>
@import '../style/index.less';
.my-tab{
    .w(375);
    display: flex;
    height: 37px;
    font-size: @fs-f;
    background: #f4f5f6;
    justify-content: space-around;
    li{
        height: 26px;
        line-height: 37px;
    }
    .sel{
        color: @red;
    }
}
</style>