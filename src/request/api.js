import { get, post, put, deleteAxios } from "./http";
const api = {
  getWinterGrabGoods: "/huitongyi/app/product/zone/winterGrabGoods",
  getWinterGrabGoodsClassify: "/huitongyi/app/product/zone/winterGrabGoodsClassify"
  // getWinterGrabGoods: "/hty/app/product/zone/winterGrabGoods",
  // getWinterGrabGoodsClassify: "/hty/app/product/zone/winterGrabGoodsClassify"
};

const getWinterGrabGoods = params => {
  return post(api.getWinterGrabGoods, params);
};

const getWinterGrabGoodsClassify = params => {
  return post(api.getWinterGrabGoodsClassify, params)
}

export default {
  getWinterGrabGoods,
  getWinterGrabGoodsClassify
};
