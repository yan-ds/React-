/* 
向外暴露一个history对象
*/

import  {createBrowserHistory,} from 'history'
//向外暴露不带#的history
export default createBrowserHistory()