<template>
  <div class="shipin">
    <div v-for='(item,index) in msg'
    :key='index' 
    >
      <div class="msg"  v-if='item.image_url'>
        <div class="hezi">
          <img :src="item.image_url" alt="">
          <h3>{{item.title}}</h3>
          <div class="des"><span>{{item.source}}</span><span class="pl">评论&nbsp;&nbsp;{{item.comment_count}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  axios from 'axios'
export default {
  data(){
    return{
      msg:[]
    }
  },
  methods:{
    getVideoMsg(){
      let url = '/xixi/list/?tag=video&ac=wap&count=20&format=json_raw&as=A1F52D1FB7F802F&cp=5DF7B8C0628F9E1&min_behot_time=1576500935&_signature=XAxLngAAAftHrgVZmBoiWVwMS4&i=1576500751'
      axios.get(url)
      .then((data)=>{
        console.log(data)
        this.msg=data.data;
      })
    }
  },
  created(){
    this.getVideoMsg()
    
  }

}
</script>
<style lang="less" scoped>
@import '../style/index.less';
.shipin{
  .w(375);
  .msg{
    .w(347);
    padding: 20px 13px 30px;   
    .hezi{
      position: relative;
      border-bottom: 1px solid #999;
      img{
        width: 100%;
      }
      h3{
        position:absolute;
        top: 6px;
        left: 4px;
        font-size: @fs-c;
        color: #fff;
        font-weight: normal;
      }
      .des{
        font-size: @fs-b;
        color: #999;
        margin-bottom: 10px;
        .pl{
          margin-left: 10px;
        }
      }
    }  
  }
}
</style>
