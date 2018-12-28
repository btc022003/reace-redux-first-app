import { get } from 'axios';

// 发送api请求 获取数据
export function getPosts() {
  return get('https://jsonplaceholder.typicode.com/posts')
}
