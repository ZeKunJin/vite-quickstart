import request from '/src/utils/request'

const api = {
  LOGIN: '/login'
}

export const login = data => {
  return request({
      url: api.LOGIN,
      method: 'post',
      data
  })
}