import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";

const hotelServices = {
  getproducts: (params?: string, isSearch?: boolean) =>
    instance.get(
      `${endpoint.PRODUCTS}${isSearch && endpoint.SEARCH}?${params}`,
    ),
};

export default hotelServices;
