/* 
local数据储存的工具函数封装
*/

import store from 'store'
/* 
保存指定的key 和value的数据
*/
function set(key,value) {
  // localStorage.setItem(key,value instanceof Object ? JSON.stringify(value):value)

  store.set(key,value)
}

function get(key,defaultValue){
  if (defaultValue === undefined){
    throw new Error ('get() 必须指定默认值')
  }

  return store.get(key,defaultValue)

}


/*
删除指定key的数据,如果不传 删除所有 
 */
function remove(key){

  if(key){
    store.remove(key)

  }else{
    store.clearAll()
  }
}

export default  {
 set,
  get,
  remove,
  KEYS:{
    USER_KEY:'user_key',
    TOKEN_KEY:'token_key'
  }
}




