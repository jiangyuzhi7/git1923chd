<template>
  <div class="recommend">
    <div class="kuai" v-for='(item,index) in list'
    :key='index'>
    
      <div class="bian">
        <h3>{{item.title}}</h3>
        <div class="tupian" v-if="item.image_url"><img :src="item.image_url" alt=""></div>
        <div class="tb" v-if='item.label'><span class="mingpai">{{item.label}}</span></div>
        <span class="aut">{{item.source}}</span>
        <div class="kb"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {getListData} from '../api/recommend'
// import  axios from 'axios'
export default {
  data(){
    return{
      list:[]
    }
  },
  methods:{
    // getListData(){
    //   let url = '/hehe/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A125BD0FD74692C&cp=5DF7E6C912FCDE1&min_behot_time=1576495295&_signature=t2itnwAA6q2syuNYZ3Gw6bdorY&i=1576495225'
    //   axios.get(url)
    //   .then((data)=>{
    //     console.log(data)
    //   })
    // }
  },
  created(){
    // this.getListData()
    getListData().then((res)=>{
      // console.log(res.data)
      this.list=res.data
      // console.log('1',this.list);
    })
  }

}
</script>
<style lang="less" scoped>
@import '../style/index.less';
.recommend{
  .w(375);
  .kuai{
    .w(355);    
    padding: 10px 10px;
    .bian{   
      border-bottom: 1px solid #999;   
      padding-bottom: 10px;    
      h3{
        padding: 0 10px 0 14px;
        font-size: @fs-d;
        font-weight: normal;
      }
      .tupian{
        .w(110);
        height: 70px;
        img{
          margin-left: 14px;
          width: 100%;
          height: 100%;
        }
      }
      .tb{
        float: left;
        .mingpai{
          border-radius: 4px;
          width: 48px;
          font-size: @fs-b;
          margin-right: 10px;
          color: @red;
          margin-left: 14px;
          border-color: rgba(248, 89, 89, 0.5);
          border: 1px solid;
        }
        
      }
      .aut{
        height: 50px;
        margin-left: 14px;
        margin-right: 10px;
        line-height: 70px;
        font-size: @fs-b;
        float: left;
        color: #999
      }
      .kb{
        clear: both;
      }
    }
  }
  
}
</style>
