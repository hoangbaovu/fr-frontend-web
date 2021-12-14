import request from "./request";

export async function login(data) {
  return request({
    url: `/auth/local`,
    method: 'post',
    data
  })
};