import request from "../utils/request";

//示例
export function testRequest(data) {
  return request({
    url: 'url',
    method: 'GET',
    data
  })
}

export function getUserInfo(data) {
  return request({
    url: '/alipay/bazaar/userIndex/userIndex',
    method: 'POST',
    data,
  })
}