
// export default  (url, data={}, method='GET') => {
//   return new Promise((resolve, reject) => {
//     // 1. new Promise初始化promise实例的状态为pending
//     wx.request({
//       url: config.host + url,
     
//       success: (res) => {
    
//         resolve(res.data); // resolve修改promise的状态为成功状态resolved
//       },
//       fail: (err) => {
//         // console.log('请求失败: ', err);
//         reject(err); // reject修改promise的状态为失败状态 rejected
//       }
//     })
//   })
  
// }

export const   resquest=(params) => {
  return new Promise((resolve, reject) => {
    // 1. new Promise初始化promise实例的状态为pending
    wx.request({
       ...params,
     
      success: (res) => {
    
        resolve(res.data); // resolve修改promise的状态为成功状态resolved
      },
      fail: (err) => {
        // console.log('请求失败: ', err);
        reject(err); // reject修改promise的状态为失败状态 rejected
      }
    })
  })
  
}