import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";

const hotelServices = {
  getproducts: (params?: string) =>
    instance.get(`${endpoint.PRODUCTS}?${params}`),
};

export default hotelServices;
