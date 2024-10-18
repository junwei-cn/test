const BASE_URL = 'https://test.huizustore.com/consumer-zhifubao'; // 你的基础请求地址

export default function request(config) {
  const {
    url,
    method = 'GET',
    data = {},
    options = {}
  } = config
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/json',
        ...options.headers, // 可以传递自定义 header
      },
      timeout: options.timeout || 60000, // 可设置默认超时时间
      success: (response) => {
        if (response.statusCode === 200) {
          resolve(response.data); // 请求成功，返回数据
        } else {
          reject(`请求失败，状态码：${response.statusCode}`);
        }
      },
      fail: (error) => {
        reject(error); // 请求失败，返回错误
      },
    });
  });
}