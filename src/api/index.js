import request from "./request";

export const reqBanners = () => request({ url: '/api/banner', method: 'get' })