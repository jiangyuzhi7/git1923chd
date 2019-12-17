// 和推荐相关的接口处理
import  axios from  '../utils/axios'
// 获取推荐的banner数据
export const getListData=()=>{
  return new Promise((resolve,reject)=>{
    let url='/hehe/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1D5BD3F27D68C0&cp=5DF796C85CF02E1&min_behot_time=1576495283&_signature=t50rjQAA6nisP2VK9plTHredK5&i=1576490516'
    axios.get(url)
    .then((data)=>{
      resolve(data)
    })
    .catch((err)=>{
      reject(err)
    })  
  })
}