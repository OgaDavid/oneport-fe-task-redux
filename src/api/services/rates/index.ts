// import { get } from "@/helpers/axios";
import { getSpecialRateUrl } from "@/api";
import axios from "axios";

const getSpecialRate = (data: object) => {
  return axios.get(
    getSpecialRateUrl +
      `?container_size=${data["container_size"]}&container_type=${data["container_type"]}`
  );
};

const rateServices = { getSpecialRate };

export default rateServices;
