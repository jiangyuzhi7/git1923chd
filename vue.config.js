
module.exports={
  devServer:{
    proxy:{
       '/hehe':{
          target:'https://m.toutiao.com',
          changeOrigin:true, //允许改变请求源
          pathRewrite:{
            "^/hehe":''  //路径重新
          }
       },
       '/xixi':{
          target:'https://m.toutiao.com',
          changeOrigin:true, //允许改变请求源
          pathRewrite:{
            "^/xixi":''  //路径重新
          }
       }
       
    }
  }
 
}
// https://m.toutiao.com
// http://ustbhuangyi.com/music/api/getTopBanner?  path
//  locahost:8080/hehe/music/api/getTopBanner? 
//  http://ustbhuangyi.com/music/api