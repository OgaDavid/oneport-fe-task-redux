import { get } from "@/helpers/axios";
import { getSpecialRateUrl } from "@/api";

const getSpecialRate = (data: object) => {
  return get(
    getSpecialRateUrl +
      `?container_size=${data["container_size"]}&container_type=${data["container_type"]}`
  );
};

const rateServices = { getSpecialRate };

export default rateServices;
