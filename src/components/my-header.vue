<template>
    <div class="my-header">
        今日头条
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
@import '../style/index.less';
.my-header{
    background: @red;
    color: #fff;
    .w(375);
    line-height: 44px;
    font-size: @fs-d;
    text-align: center;
}
</style>