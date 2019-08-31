/* 包 含 n个 工 具 函 数 的 模 块
*/ /* 注 册 laoban--> /laobaninfo 
注 册 大 神 --> /dasheninfo 
登 陆 laoban --> /laobaninfo或 者/laoban
登 陆 大 神--> /dasheninfo或 者/dashen
*/
export function getRedirectPath(type, header) {
  let path = ''

  //根 据 type得 到 path
  path += type === 'laoban' ? '/laoban' : '/dashen'

  //如果没有头像添加info
  if (!header) {
    path += 'info'
  }

  return path
}